import { createServer as httpServer, IncomingMessage, ServerResponse } from 'http';
import { createHmac } from 'crypto';
import { webhooks } from './webhooks.js';

export interface ServerOptions {
  secret: string;
  port: number;
  host?: string;
}

export function createServer({ secret, host, port }: ServerOptions) {
  const server = httpServer(async (request: IncomingMessage, response: ServerResponse) => {
    const body = await checkBodyAndSignature(request, secret);

    if (!body) {
      response.writeHead(400);
      response.end();
      return;
    }

    response.writeHead(202);
    response.end();

    if (body.action in webhooks) {
      const command = await webhooks[body.action](body);
      server.emit('command', command);
    }
  });

  server.listen(port, host);

  return server;
}

async function checkBodyAndSignature(request: IncomingMessage, secret: string) {
  try {
    const body = await readBody(request);

    if (isRequestSignatureValid(request, secret, body)) {
      return JSON.parse(String(body));
    }
  } catch { }

  return null;
}

async function readBody(request: IncomingMessage) {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks = [];
    request.on('data', (chunk) => chunks.push(chunk));
    request.on('end', () => resolve(Buffer.concat(chunks)));
    request.on('error', reject);
    request.on('close', reject);
  });
}

function isRequestSignatureValid(request: IncomingMessage, secret: string, body: Buffer) {
  const requestSignature = request.headers['x-hub-signature'];
  const payloadSignature = 'sha1=' + createHmac('sha1', secret).update((body)).digest('hex');

  return payloadSignature === requestSignature;
}
