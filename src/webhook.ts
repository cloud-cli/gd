import { PublishEvent } from './github.js';

export default {
  published(event: PublishEvent) {
    if (event.package.package_type.toLowerCase() !== 'container') return;

    const dockerImage = event.package_version.package_url;
    const isFromMain = event.package_version.target_commitish === 'main'
    const subdomain = isFromMain ?
  },
};
