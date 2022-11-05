declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      BASE_URL_FRONT: string;
    }
  }
}

export {};
