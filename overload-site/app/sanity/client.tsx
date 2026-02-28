import { createClient } from "next-sanity";
import 'dotenv/config';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: "overload-data",
  apiVersion: "2026-02-28",
  useCdn: false,
});