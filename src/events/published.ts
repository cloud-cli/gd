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
  (
    details.target_commitish.toLowerCase().replace(invalidDomainChars, '') ||
    details.target_oid
  ).slice(0, 8);

export async function published(event: PublishEvent) {
  if (event.package.package_type.toLowerCase() !== 'container') return null;

  const { package: pkg } = event;
  const image = pkg.package_version.package_url;
  const isFromMain = ['main', 'master'].includes(pkg.package_version.target_commitish);
  const version = !isFromMain ? toSubDomain(pkg.package_version) : 'latest';

  return new DeployCommand({ version, image: image })
}