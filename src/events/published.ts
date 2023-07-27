import { DeployCommand } from '../commands/deploy.js';

export interface PublishEvent {
  action: 'published';
  package: {
    id: number;
    name: string;
    ecosystem: 'CONTAINER';
    package_type: string;
    owner: {
      login: string;
    };
    package_version: {
      version: string;
      target_commitish: string;
      target_oid: string;
      package_url: string;
    };
  };
}

const invalidDomainChars = /[^a-z0-9]/g;
const toSubDomain = (details: PublishEvent['package']['package_version']) =>
  [
    details.target_commitish.toLowerCase().replace(invalidDomainChars, ''),
    details.target_oid
  ]
  .filter(Boolean).join('').slice(0, 8);

export async function published(event: PublishEvent) {
  if (event.package?.package_type.toLowerCase() !== 'container') {
    return null;
  }

  const { package: pkg } = event;
  const v = pkg.package_version;

  const image = v.package_url;
  const isFromTrunk = ['main', 'master'].includes(v.target_commitish);
  const isNotALayer = !image.endsWith(':');
  const isValidFromTrunk = isFromTrunk && image.endsWith(':latest');
  const isValidFromBranch = !isFromTrunk && image.includes(v.target_oid);
  const validEvent = isNotALayer && (isValidFromTrunk || isValidFromBranch);

  if (!validEvent) {
    return null;
  }

  const version = isFromTrunk ? 'latest' : toSubDomain(pkg.package_version);

  return new DeployCommand({ version, image: image })
}
