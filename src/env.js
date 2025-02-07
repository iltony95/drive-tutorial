import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    SINGLESTORE_USER: z.string(),
    SINGLESTORE_PASS: z.string(),
    SINGLESTORE_DB_NAME: z.string(),
    SINGLESTORE_HOST: z.string(),
    SINGLESTORE_PORT: z.string(),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    SINGLESTORE_USER: process.env.SINGLESTORE_USER,
    SINGLESTORE_PASS: process.env.SINGLESTORE_PASS,
    SINGLESTORE_DB_NAME: process.env.SINGLESTORE_DB_NAME,
    SINGLESTORE_HOST: process.env.SINGLESTORE_HOST,
    SINGLESTORE_PORT: process.env.SINGLESTORE_PORT,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
