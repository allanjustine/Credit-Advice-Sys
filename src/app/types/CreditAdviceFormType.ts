import { z } from "zod";
import {
  CreditAdviceSchema,
} from "../lib/CreditAdviceSchema";

export type CreditAdviceFormType = z.infer<typeof CreditAdviceSchema>;
