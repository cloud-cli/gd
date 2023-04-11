import type { ServerCommand } from './interface.js';

export class DeployCommand implements ServerCommand {
  readonly type = 'deploy';

  image: string;
  version: string;

  constructor(props: Partial<DeployCommand>) { if (props) Object.assign(this, props); }
}
