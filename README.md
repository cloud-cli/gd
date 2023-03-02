# GD

Receive updates from GitHub webhooks

## Usage

First create a unique random string to use as secret. For example:

```bash
head -c 5000 /dev/urandom | sha512sum
```

Now paste this key into a file in your system. Let's use `/home/key.txt`.

Next, we create our http server to receive the webhooks:

```ts
import { createServer } '@cloud-cli/gd';
import { readFileSync } from 'fs';

const secret = readFileSync('/home/key.txt', 'utf-8');
const port = 1234;
const host = '127.0.0.1';

const server = createServer({ secret, host, port });
server.on('command', command => {
  console.log(command);
});
```

In GitHub, go to Webhook settings and point to your server using these settings:

```
Payload URL:
[ https://your-server.example.com/ ]

Content-Type:
[ application/json ]

Secret
[ secret string ]

Which events would you like to trigger this webhook?

[ * ] Let me select individual events.

...
[ x ] Branch or tag deletion
[ x ] Packages -- GitHub Packages published or updated in a repository.

```
