import { ServerOptions, createServer } from './webhook-server.js';
import { init, events } from '@cloud-cli/cli';

export { DeployCommand } from './commands.js';
export { webhooks } from './webhooks.js';
export { createServer } from './webhook-server.js';
export type { ServerCommand } from './commands.js'
export type { PublishEvent } from './events/published.js';

const defaults = {
  port: 8899,
  host: '',
  secret: '',
}

export default {
  [init](options: Partial<ServerOptions>) {
    options = { ...defaults, ...options };
    const server = createServer(options as ServerOptions);
    server.on('command', (c) => events.emit('gd:command', c));
    return server;
  }
};