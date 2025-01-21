"use client";

import { ChangeEvent, useState } from "react";
import OptionYearFormat from "../utils/OptionYearFormat";
import Button from "./ui/buttons/Button";
import Card from "./ui/cards/Card";
import CardBody from "./ui/cards/CardBody";
import CardFooter from "./ui/cards/CardFooter";
import CardHeader from "./ui/cards/CardHeader";
import Input from "./ui/inputs/Input";
import Select from "./ui/select/Select";
import { CreditAdviceFormType } from "../types/CreditAdviceFormType";
import { CreditAdviceInput } from "../utils/constants";
import { CreditAdviceSchema } from "../lib/CreditAdviceSchema";
import { Credentials } from "../lib/Credentials";
import Teaxtarea from "./ui/textarea/Textarea";

export default function CreditAdviceComponent() {
  const [formInput, setFormInput] =
    useState<CreditAdviceFormType>(CreditAdviceInput);
  const [error, setError] =
    useState<Partial<CreditAdviceFormType>>(CreditAdviceInput);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isResetLoading, setIsResetLoading] = useState<boolean>(false);
  const { token } = Credentials;

  const handleInputChange =
    (title: keyof CreditAdviceFormType) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      const target = e.target;

      if (target) {
        const value =
          title === "leasingFee" ||
          title === "processingFee" ||
          title === "netSellingPrice" ||
          title === "downPayment" ||
          title === "amountFinanced" ||
          title === "termMonthsDi" ||
          title === "monthlyPayment"
            ? parseFloat(target.value)
            : target.value.toUpperCase();

        setFormInput((formInput: CreditAdviceFormType) => ({
          ...formInput,
          [title]: value,
        }));
      } else {
        console.error("Target is null");
      }
    };

  const handleResetInput = (): void => {
    setIsResetLoading(true);
    try {
      setFormInput(CreditAdviceInput);
      setError(CreditAdviceInput);
    } catch (error) {
      console.error(error);
    } finally {
      setIsResetLoading(false);
    }
  };

  const handlePrint = (): void => {
    setIsLoading(true);
    try {
      const result = CreditAdviceSchema.safeParse(formInput);

      if (!result.success) {
        const formErrors: Partial<CreditAdviceFormType | any> = {};
        result.error.errors.map((error) => {
          const errorPath = error.path;
          formErrors[errorPath[0] as keyof CreditAdviceFormType] =
            error.message;
        });
        setError(formErrors);
      } else {
        setError(CreditAdviceInput);
        localStorage.setItem("printing", JSON.stringify(formInput));
        localStorage.setItem("printToken", token);
        window.open("/print", "_blank");
        setFormInput(CreditAdviceInput);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card customClass="isolate px-6 py-10 sm:py-22 lg:px-8 w-full rounded-md shadow-md shadow-gray-500 dark:shadow-gray-600">
      <CardHeader customClass="text-balance font-semibold tracking-tight text-gray-900 dark:text-white">
        <div className="flex justify-between">
          <div className="relative w-fit group text-4xl">
            <div className="absolute right-0 border-t-4 group-hover:w-full w-0 transition-all duration-300 ease-in-out border-blue-500"></div>
            Credit Advice
            <div className="absolute border-t-4 group-hover:w-full w-0 transition-all duration-300 ease-in-out border-blue-500"></div>
          </div>
          <div>
            <Button
              onClick={handleResetInput}
              disabled={isResetLoading}
              customClass="bg-yellow-500 hover:bg-yellow-600 font-bold text-white active:scale-95 transition-all duration-300 ease-in-out"
            >
              {isResetLoading ? (
                <>
                  <i className="fa-sharp-duotone fa-solid fa-spinner-third"></i>{" "}
                  RESETTING...
                </>
              ) : (
                <>
                  <i className="far fa-arrows-rotate-reverse"></i> RESET
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody customClass="mt-10">
        <div className="space-y-10">
          <div className="space-y-2 group">
            <div className="relative w-fit">
              <h2 className="text-lg font-bold">FEES & REFERENCES</h2>
              <span className="absolute w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-blue-500"></span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="leasingFee">Leasing Fee</label>
                </small>
                <Input
                  type="number"
                  icon="hand-holding-dollar"
                  placeholder="Leasing Fee"
                  onChange={handleInputChange("leasingFee")}
                  value={formInput.leasingFee}
                  error={error.leasingFee}
                />
                <small className="text-red-500">
                  {error.leasingFee === 0 ? "" : error.leasingFee}
                </small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="processingFee">Processing Fee</label>
                </small>
                <Input
                  type="number"
                  icon="money-bill-transfer"
                  placeholder="Processing Fee"
                  onChange={handleInputChange("processingFee")}
                  value={formInput.processingFee}
                  error={error.processingFee}
                />
                <small className="text-red-500">
                  {error.processingFee === 0 ? "" : error.processingFee}
                </small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="caReference">CA Reference</label>
                </small>
                <Input
                  type="text"
                  icon="user-group"
                  placeholder="CA Reference"
                  onChange={handleInputChange("caReference")}
                  value={formInput.caReference}
                  error={error.caReference}
                />
                <small className="text-red-500">{error.caReference}</small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="loanReference">Loan Reference</label>
                </small>
                <Input
                  type="text"
                  icon="hands-holding-dollar"
                  placeholder="Loan Reference"
                  onChange={handleInputChange("loanReference")}
                  value={formInput.loanReference}
                  error={error.loanReference}
                />
                <small className="text-red-500">{error.loanReference}</small>
              </div>
            </div>
          </div>
          <div className="space-y-2 group">
            <div className="relative w-fit">
              <h2 className="text-lg font-bold">DETAILS</h2>
              <span className="absolute w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-blue-500"></span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="borrower">Borrower</label>
                </small>
                <Input
                  type="text"
                  icon="user"
                  placeholder="Borrower"
                  onChange={handleInputChange("borrower")}
                  value={formInput.borrower}
                  error={error.borrower}
                />
                <small className="text-red-500">{error.borrower}</small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="spouseCoMaker">Spouse / CO-Maker</label>
                </small>
                <Input
                  type="text"
                  icon="user"
                  placeholder="Spouse / CO-Maker"
                  onChange={handleInputChange("spouseCoMaker")}
                  value={formInput.spouseCoMaker}
                  error={error.spouseCoMaker}
                />
                <small className="text-red-500">{error.spouseCoMaker}</small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="address">Address</label>
                </small>
                <Input
                  type="text"
                  icon="location-dot"
                  placeholder="Address"
                  onChange={handleInputChange("address")}
                  value={formInput.address}
                  error={error.address}
                />
                <small className="text-red-500">{error.address}</small>
              </div>
              {/* <Select
                icon="handshake"
                onChange={handleInputChange("dealer")}
                value={formInput.dealer}
              >
                <option value="" hidden>
                  Select Dealer
                </option>
                <option value="" disabled>
                  Select Dealer
                </option>
                <option value="SUZUKI AUTO BOHOL (DES STRONG MOTORS INC.)">
                  SUZUKI AUTO BOHOL (DES STRONG MOTORS INC.)
                </option>
              </Select> */}
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="dealer">Dealer</label>
                </small>
                <Input
                  type="text"
                  icon="handshake"
                  placeholder="Dealer"
                  onChange={handleInputChange("dealer")}
                  value={formInput.dealer}
                  error={error.dealer}
                />
                <small className="text-red-500">{error.dealer}</small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="unit">Unit</label>
                </small>
                <Input
                  type="text"
                  icon="box"
                  placeholder="Unit"
                  onChange={handleInputChange("unit")}
                  value={formInput.unit}
                  error={error.unit}
                />
                <small className="text-red-500">{error.unit}</small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="yearModel">Year Model</label>
                </small>
                <Select
                  icon="calendar"
                  onChange={handleInputChange("yearModel")}
                  value={formInput.yearModel}
                  error={error.yearModel}
                >
                  <option value="" hidden>
                    Select Year Model
                  </option>
                  <option value="" disabled>
                    Select Year Model
                  </option>
                  <OptionYearFormat />
                </Select>
                <small className="text-red-500">{error.yearModel}</small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="netSellingPrice">Net Selling Price</label>
                </small>
                <Input
                  type="number"
                  icon="money-bill-trend-up"
                  placeholder="Net Selling Price"
                  onChange={handleInputChange("netSellingPrice")}
                  value={formInput.netSellingPrice}
                  error={error.netSellingPrice}
                />
                <small className="text-red-500">
                  {error.netSellingPrice === 0 ? "" : error.netSellingPrice}
                </small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="downPayment">Down Payment</label>
                </small>
                <Input
                  type="number"
                  icon="hand-holding-hand"
                  placeholder="Down Payment"
                  onChange={handleInputChange("downPayment")}
                  value={formInput.downPayment}
                  error={error.downPayment}
                />
                <small className="text-red-500">
                  {error.downPayment === 0 ? "" : error.downPayment}
                </small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="amountFinanced">Amount Financed</label>
                </small>
                <Input
                  type="number"
                  icon="dollar"
                  placeholder="Amount Financed"
                  onChange={handleInputChange("amountFinanced")}
                  value={formInput.amountFinanced}
                  error={error.amountFinanced}
                />
                <small className="text-red-500">
                  {error.amountFinanced === 0 ? "" : error.amountFinanced}
                </small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="termMothsDi">Term (months) / DI</label>
                </small>
                <Input
                  type="number"
                  icon="calendar-clock"
                  placeholder="Term (months) / DI"
                  onChange={handleInputChange("termMonthsDi")}
                  value={formInput.termMonthsDi}
                  error={error.termMonthsDi}
                />
                <small className="text-red-500">
                  {error.termMonthsDi === 0 ? "" : error.termMonthsDi}
                </small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="installmentTiming">Installment Timing</label>
                </small>
                <Input
                  type="text"
                  icon="sack-dollar"
                  placeholder="Installment Timing"
                  onChange={handleInputChange("installmentTiming")}
                  value={formInput.installmentTiming}
                  error={error.installmentTiming}
                />
                <small className="text-red-500">
                  {error.installmentTiming}
                </small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="monthlyPayment">Monthly Payment</label>
                </small>
                <Input
                  type="number"
                  icon="calendar-days"
                  placeholder="Monthly Payment"
                  onChange={handleInputChange("monthlyPayment")}
                  value={formInput.monthlyPayment}
                  error={error.monthlyPayment}
                />
                <small className="text-red-500">
                  {error.monthlyPayment === 0 ? "" : error.monthlyPayment}
                </small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="product">Product</label>
                </small>
                <Input
                  type="text"
                  icon="boxes-stacked"
                  placeholder="Product"
                  onChange={handleInputChange("product")}
                  value={formInput.product}
                  error={error.product}
                />
                <small className="text-red-500">{error.product}</small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="loanOfficerOrSalesExecutive">
                    Loan Officer / Sales Executive
                  </label>
                </small>
                <Input
                  type="text"
                  icon="user-secret"
                  placeholder="Loan Officer / Sales Executive"
                  onChange={handleInputChange("loanOfficerOrSalesExecutive")}
                  value={formInput.loanOfficerOrSalesExecutive}
                  error={error.loanOfficerOrSalesExecutive}
                />
                <small className="text-red-500">
                  {error.loanOfficerOrSalesExecutive}
                </small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="marketingProfessional">
                    Marketing Professional
                  </label>
                </small>
                <Input
                  type="text"
                  icon="user-tie"
                  placeholder="Marketing Professional"
                  onChange={handleInputChange("marketingProfessional")}
                  value={formInput.marketingProfessional}
                  error={error.marketingProfessional}
                />
                <small className="text-red-500">
                  {error.marketingProfessional}
                </small>
              </div>
            </div>
          </div>
          <div className="space-y-2 group">
            <div className="relative w-fit">
              <h2 className="text-lg font-bold">FOR TERMS & CONDITIONS</h2>
              <span className="absolute w-0 transition-all duration-300 ease-in-out group-hover:w-full border-t-2 border-blue-500"></span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="first">{"1. )"}</label>
                </small>
                <Teaxtarea
                  type="text"
                  icon="1"
                  placeholder="1. )"
                  name="first"
                  onChange={handleInputChange("first")}
                  value={formInput.first}
                  error={error.first}
                />
                <small className="text-red-500">{error.first}</small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="second">{"2. )"}</label>
                </small>
                <Teaxtarea
                  type="text"
                  icon="2"
                  placeholder="2. )"
                  name="second"
                  onChange={handleInputChange("second")}
                  value={formInput.second}
                  error={error.second}
                />
                <small className="text-red-500">{error.second}</small>
              </div>
              <div>
                <small className="text-gray-500 dark:text-gray-300">
                  <label htmlFor="third">{"3. )"}</label>
                </small>
                <Teaxtarea
                  type="text"
                  icon="3"
                  placeholder="3. )"
                  name="third"
                  onChange={handleInputChange("third")}
                  value={formInput.third}
                  error={error.third}
                />
                <small className="text-red-500">{error.third}</small>
              </div>
            </div>
          </div>
        </div>
      </CardBody>

      <CardFooter customClass="flex justify-end space-x-2 mt-5">
        <Button
          type="button"
          disabled={isLoading}
          onClick={handlePrint}
          customClass="bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition-all duration-300 ease-in-out"
        >
          {isLoading ? (
            <>
              <i className="fa-sharp-duotone fa-solid fa-spinner-third animate-spin"></i>{" "}
              Printing...
            </>
          ) : (
            <>
              <i className="far fa-print"></i> Print now
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
