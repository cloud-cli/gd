import { events, init } from '@cloud-cli/cli';
import gd, { DeployCommand } from '../index';

describe('initializer', () => {
  it('starts a server with the given options', () => {
    const options = { secret: '123' };
    const server = gd[init](options);
    const event = jest.fn();
    const command = new DeployCommand({ version: 'main', image: 'test:latest' })

    expect(server).toBeDefined();
    events.on('gd:command', event);

    server.emit('command', command);
    server.close();

    expect(event).toHaveBeenCalledWith(command);
  });
});