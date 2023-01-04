import { IncomingMessage } from "http";
import { createHmac } from "crypto";

export interface PublishEvent {
  action: "published";
  package: {
    name: string;
    ecosystem: "CONTAINER";
    package_type: string;
  };
  owner: {
    login: string;
  };
  package_version: {
    version: string;
    target_commitish: string;
    target_oid: string;
    package_url: string;
  };
}

export default {
  isRequestSignatureValid(
    request: IncomingMessage,
    secret: string,
    body: string
  ) {
    const requestSignature = request.headers["x-hub-signature"];
    const payloadSignature =
      "sha1=" + createHmac("sha1", secret).update(String(body)).digest("hex");

    return payloadSignature === requestSignature;
  },
};
