import { ShortLink } from "@/core/link/types";
import { DefaultError } from "@/helpers/errors";

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

export { createShortLinkInDB };
