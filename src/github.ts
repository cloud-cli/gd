export interface PublishEvent {
  action: "published";
  package: {
    id: number;
    name: string;
    ecosystem: "CONTAINER";
    package_type: string;
    owner: {
      login: string;
    };
    package_version: {
      version: string;
      target_commitish: string;
      target_oid: string;
      package_url: string;
    };
  };
}

