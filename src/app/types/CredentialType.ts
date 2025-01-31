import { z } from "zod";
import { CredentialSchema } from "../lib/schema/CredentialSchema";

export type CredentialType = z.infer<typeof CredentialSchema>;
