import { webhooks, DeployCommand } from '../index.js';
import { publishedMocks } from './webhook.published.js';

describe('webhook', () => {
  it('should ignore a webhook event if the package is not a container', async () => {
    const webhookEvent = publishedMocks();
    webhookEvent.package.package_type = 'npm';
    const command = await webhooks.published(webhookEvent);

    expect(command).toBe(null);
  });

  it('should process a webhook event when a container is published', async () => {
    const webhookEvent = publishedMocks();
    const command = await webhooks.published(webhookEvent);

    expect(command).toEqual(
      new DeployCommand({
        image: 'ghcr.io/cloud-cli/dummy:8778a1b61e227c85276c1f8e3b20c84b27c543b7',
        version: 'latest',
      }),
    );
  });

  it('should process a webhook event coming from a branch', async () => {
    const webhookEvent = publishedMocks();
    webhookEvent.package.package_version.target_commitish = 'Branch+Name-*invalidchars';
    const command = await webhooks.published(webhookEvent);

    expect(command).toEqual(
      new DeployCommand({
        image: 'ghcr.io/cloud-cli/dummy:8778a1b61e227c85276c1f8e3b20c84b27c543b7',
        version: 'branchna',
      }),
    );
  });

  it('should process a webhook event using a hash as subdomain', async () => {
    const webhookEvent = publishedMocks();
    webhookEvent.package.package_version.target_commitish = '$%^&---';
    const command = await webhooks.published(webhookEvent);

    expect(command).toEqual(
      new DeployCommand({
        image: 'ghcr.io/cloud-cli/dummy:8778a1b61e227c85276c1f8e3b20c84b27c543b7',
        version: '8778a1b6',
      }),
    );
  });
});
