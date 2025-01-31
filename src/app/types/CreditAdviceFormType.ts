import { z } from "zod";
import {
  CreditAdviceSchema,
} from "../lib/schema/CreditAdviceSchema";

export type CreditAdviceFormType = z.infer<typeof CreditAdviceSchema>;
