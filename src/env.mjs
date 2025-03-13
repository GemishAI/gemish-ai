import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),

    UPSTASH_REDIS_REST_URL: z.string().url(),
    UPSTASH_REDIS_REST_TOKEN: z.string(),

    UPSTASH_VECTOR_REST_URL: z.string().url(),
    UPSTASH_VECTOR_REST_TOKEN: z.string(),

    GOOGLE_GENERATIVE_AI_API_KEY: z.string(),

    BETTER_AUTH_APP_NAME: z.string().min(1),
    BETTER_AUTH_GITHUB_CLIENT_ID: z.string().min(1),
    BETTER_AUTH_GITHUB_CLIENT_SECRET: z.string().min(1),
    BETTER_AUTH_COOKIE_PREFIX: z.string().min(1),
    BETTER_AUTH_REDIS_PREFIX: z.string().min(1),

    AWS_ACCESS_KEY_ID: z.string().min(1),
    AWS_SECRET_ACCESS_KEY: z.string().min(1),
    AWS_ENDPOINT_URL: z.string().url(),
    AWS_REGION: z.string().min(1),
    AWS_S3_BUCKET_NAME: z.string().min(1),

    POLAR_ACCESS_TOKEN: z.string().min(1),
    POLAR_WEBHOOK_SECRET: z.string().min(1),
    POLAR_SERVER: z.enum(["production", "sandbox"]),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,

    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,

    UPSTASH_VECTOR_REST_URL: process.env.UPSTASH_VECTOR_REST_URL,
    UPSTASH_VECTOR_REST_TOKEN: process.env.UPSTASH_VECTOR_REST_TOKEN,

    GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY,

    BETTER_AUTH_APP_NAME: process.env.BETTER_AUTH_APP_NAME,
    BETTER_AUTH_GITHUB_CLIENT_ID: process.env.BETTER_AUTH_GITHUB_CLIENT_ID,
    BETTER_AUTH_GITHUB_CLIENT_SECRET:
      process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET,
    BETTER_AUTH_REDIS_PREFIX: process.env.BETTER_AUTH_REDIS_PREFIX,
    BETTER_AUTH_COOKIE_PREFIX: process.env.BETTER_AUTH_COOKIE_PREFIX,
    BETTER_AUTH_REDIS_PREFIX: process.env.BETTER_AUTH_REDIS_PREFIX,

    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_ENDPOINT_URL: process.env.AWS_ENDPOINT_URL,
    AWS_REGION: process.env.AWS_REGION,
    AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,

    POLAR_ACCESS_TOKEN: process.env.POLAR_ACCESS_TOKEN,
    POLAR_WEBHOOK_SECRET: process.env.POLAR_WEBHOOK_SECRET,
    POLAR_SERVER: process.env.POLAR_SERVER,
  },
});
