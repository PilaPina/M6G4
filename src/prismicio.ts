import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
export const routes: prismic.ClientConfig["routes"] = [
  { type: "homepage", path: "/" },
  { type: "blogpost", path: "/articles/:uid" },
  { type: "about", path: "/about" },
];

export function createClient(config: prismic.ClientConfig = {}) {
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    routes,
    ...config,
  });

  // App Router preview wiring
  enableAutoPreviews({ client });

  return client;
}