import { DeployCommand } from './commands';
import { PublishEvent } from './github';
import getPort from 'get-port';

const invalidSubDomainChars = /[^a-z0-9]/g;
const toSubDomain = (details: PublishEvent['package']['package_version']) =>
  (
    details.target_commitish.toLowerCase().replace(invalidSubDomainChars, '') ||
    details.target_oid
  ).slice(0, 8);

export default {
  async published(event: PublishEvent) {
    if (event.package.package_type.toLowerCase() !== 'container') return null;

    const { package: pkg } = event;
    const dockerImage = pkg.package_version.package_url;
    const isFromMain = ['main', 'master'].includes(pkg.package_version.target_commitish);
    const subdomain = !isFromMain ? toSubDomain(pkg.package_version) : 'main';

    return new DeployCommand({ subdomain, dockerImage, port: await getPort() })
  },
};
