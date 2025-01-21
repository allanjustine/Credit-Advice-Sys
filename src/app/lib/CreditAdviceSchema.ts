import { z } from "zod";

export const CreditAdviceSchema = z.object({
  leasingFee: z.number().min(1, "Leasing fee must be at least 1"),
  processingFee: z.number().min(1, "Processing fee must be at least 1"),
  caReference: z.string().min(1, "CA Reference is required"),
  loanReference: z.string().min(1, "Loan Reference is required"),
  borrower: z.string().min(1, "Borrower is required"),
  spouseCoMaker: z.string().min(1, "Spouse Co Maker is required"),
  address: z.string().min(1, "Address is required"),
  dealer: z.string().min(1, "Dealer is required"),
  unit: z.string().min(1, "Unit is required"),
  yearModel: z.string().min(1, "Year Model is required"),
  netSellingPrice: z.number().min(1, "Net Selling Price must be at least 1"),
  downPayment: z.number().min(1, "Down Payment must be at least 1"),
  amountFinanced: z.number().min(1, "Amount Financed must be at least 1"),
  termMonths: z.number().min(1, "Term Months must be at least 1"),
  di: z.number().min(1, "DI must be at least 1"),
  installmentTiming: z.string().min(1, "Installment Timing is required"),
  monthlyPayment: z.number().min(1, "Monthly Payment must be at least 1"),
  product: z.string().min(1, "Product is required"),
  loanOfficerOrSalesExecutive: z
    .string()
    .min(1, "Loan Officer or Sales Executive is required"),
  marketingProfessional: z
    .string()
    .min(1, "Marketing Professional is required"),
  first: z.string().min(1, "First Term and Conditions is required"),
  second: z.string().min(1, "Second Term and Conditions is required"),
  third: z.string().min(1, "Third Term and Conditions is required"),
});
