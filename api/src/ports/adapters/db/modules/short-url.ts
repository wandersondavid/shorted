import { ShortLink } from "@/core/link/types";

import { v4 as uuidv4 } from "uuid";

import { database as db } from '../db'

const createShortLinkInDB = async (originalLink: string) => {

  const code = geraStringAleatoria(7);
  const urlBase = process.env["BASE_URL_FRONT"];
  const shortLink = `${urlBase}/link/${code}`;

  const payload: ShortLink = {
    idshortener_link: uuidv4(),
    code,
    shortLink,
    originalLink,
  };

  const result = await db.createShortLinkInDB(payload)


  return {
    shortLink: result?.short_link ?? undefined
  }
};


const getShortLinkByCodeInDB = async (code: string) => {


  const result = await db.getShortLinkByCodeInDB(code)


  return {
    shortLink: result?.original_link ?? undefined
  }
};

const countingUsageShortLinkByCodeInDB = async ( code: string) => {

  const result = await db.countingUsageShortLinkByCodeInDB(code)

  return {
    countingUsage: result ?? undefined
  }
}

export { createShortLinkInDB, getShortLinkByCodeInDB, countingUsageShortLinkByCodeInDB };


const geraStringAleatoria = (tamanho: number) => {
    var stringAleatoria = "";
    var caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < tamanho; i++) {
      stringAleatoria += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }
    return stringAleatoria;
  };