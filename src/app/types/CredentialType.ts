import { z } from "zod";
import { CredentialSchema } from "../lib/CredentialSchema";

export type CredentialType = z.infer<typeof CredentialSchema>;
