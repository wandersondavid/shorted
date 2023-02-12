import { ShortLink } from "@/core/link/types";
import { DefaultError, NotFoundError } from "@/helpers/errors";

import { shortener_link } from "@prisma/client";

import { dataBase } from "../prisma";

const createShortLinkInDB = async (
  data: ShortLink
): Promise<shortener_link | undefined> => {
  try {
    const result = await dataBase.shortener_link.create({
      data: {
        idshortener_link: data.idshortener_link,
        code: data.code,
        original_link: data.originalLink,
        short_link: data.shortLink,
      },
    });

    return result ?? undefined;
  } catch (error) {
    throw new DefaultError({
      name: "ShotenerLink",
      code: 418,
      message: "Error ao gerar link",
    });
  }
};

type code = {
  original_link: string;
};

const getShortLinkByCodeInDB = async (
  code: string
): Promise<code | undefined> => {
  try {
    const result = await dataBase.shortener_link.findUnique({
      where: {
        code: code,
      },
    });

    let countingUsage = result?.counting_usage ?? 1;

    countingUsage++;

    await dataBase.shortener_link.update({
      where: {
        code,
      },
      data: {
        counting_usage: countingUsage,
      },
    });

    if (!result)
      throw new NotFoundError("Url não encotrada");

    return result ?? undefined;
  } catch (error) {
    throw new NotFoundError("Url não encotrada");
  }
};

const countingUsageShortLinkByCodeInDB = async (
  code: string
): Promise<unknown> => {
  try {
    const result = await dataBase.shortener_link.findUnique({
      where: {
        code,
      },
    });

    if (!result)
      throw new NotFoundError("Url não encotrada");

    return result?.counting_usage ?? undefined;
  } catch (error) {
    throw new NotFoundError("Url não encotrada");
  }
};

export {
  createShortLinkInDB,
  getShortLinkByCodeInDB,
  countingUsageShortLinkByCodeInDB,
};
