import fixture from './package-published.fixture';
import { webhook } from '../src/index';

describe('webhook', () => {
  it('should receive a webhook event when a container is publised', async () => {
    const webhookEvent = fixture();
    const output = webhook.published(webhookEvent);

    expect(output).toEqual({});
  })
})