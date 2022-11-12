import { createShortLinkInDB } from "../../db/modules/short-url";

export type Link = {
  originalLink: string;
};

const shortenerLink = async ({ originalLink }: Link) => {
  return await createShortLinkInDB(originalLink);
};

export { shortenerLink };
