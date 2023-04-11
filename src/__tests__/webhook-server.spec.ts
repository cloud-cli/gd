import { request } from 'http';
import { createHmac } from 'crypto';
import { createServer, DeployCommand, ServerCommand } from '../index.js';
import { publishedMocks } from './webhook.published.js';

const secret = 'e319fa1afb38f7de67056e1a802e89ed311ef02b85a2';

describe('webhook server', () => {
  it('should receive an event and validate its signature with a secret', async () => {
    const port = Math.floor(1234 + 1000 * Math.random());
    const body = JSON.stringify(publishedMocks());
    const signature = 'sha1=' + createHmac('sha1', secret).update(body).digest('hex');

    let command: ServerCommand | null = null;
    const server = createServer({ secret, port });
    server.on('command', (c: ServerCommand) => command = c);

    const statusCode = await callServer(port, signature, body);
    server.close();

    expect(statusCode).toBe(202);
    expect(command).not.toBe(null);
    expect(command).toBeInstanceOf(DeployCommand);
  });

  it('should receive an event and reject invalid body signatures', async () => {
    const port = Math.floor(1234 + 1000 * Math.random());
    const body = JSON.stringify(publishedMocks());

    const server = createServer({ secret, port });
    const statusCode = await callServer(port, 'invalid', body);
    server.close();

    expect(statusCode).toBe(400);
  });
});

async function callServer(port, signature, body) {
  return new Promise(resolve => {
    const testRequest = request(`http://127.0.0.1:${port}`, {
      method: 'POST',
      headers: {
        'x-hub-signature': signature,
        'connection': 'close',
      },
    });

    testRequest.write(body);
    testRequest.on('response', (response) => {
      setTimeout(() => resolve(Number(response.statusCode)), 10);
    });
    testRequest.end();
  });
}

