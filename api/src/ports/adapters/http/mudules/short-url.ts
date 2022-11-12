import { createShortLinkInDB, getShortLinkByCodeInDB, countingUsageShortLinkByCodeInDB } from "../../db/modules/short-url";

export type Link = {
  originalLink: string;
};

const shortenerLink = async ({ originalLink }: Link) => {
  return await createShortLinkInDB(originalLink);
};

const findShortLinkByCodeInDB = async (code: any) => {
  return await getShortLinkByCodeInDB(code);
};


const findCountingUsageShortLinkByCodeInDB = async (code: any) => {
  return await countingUsageShortLinkByCodeInDB(code);
};




export { shortenerLink, findShortLinkByCodeInDB, findCountingUsageShortLinkByCodeInDB };
