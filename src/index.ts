import { webhookServer } from './webhook-server';
import webhooks from './webhooks';

export * from './commands';
export { webhooks, webhookServer };

export default {
  withSecret(secret: string) {
    return {
      listen(port: number) {
        return webhookServer(secret, port);
      }
    }
  }
}