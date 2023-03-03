import type { ServerCommand } from './interface.js';

export class DeployCommand implements ServerCommand {
  readonly type = 'deploy';

  dockerImage: string;
  subdomain: string;
  port: number;

  constructor(props: Partial<DeployCommand>) { if (props) Object.assign(this, props); }
}
