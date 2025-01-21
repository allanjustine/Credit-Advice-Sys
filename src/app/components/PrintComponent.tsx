import Image from "next/image";
import { CreditAdviceFormType } from "../types/CreditAdviceFormType";
import FormattedNumber from "../utils/FormattedNumber";
import FormattedDate from "../utils/FormattedDate";
import NotInputtedComponent from "./NotInputtedComponent";
import TermsAndConditionComponent from "./TermsAndConditionComponent";

export default function PrintComponent({
  data,
}: {
  data: CreditAdviceFormType;
}) {
  return (
    <div className="p-2 text-xs">
      <div className="grid grid-cols-2">
        <div className="flex gap-3 border-b">
          <div className="flex flex-col justify-end">
            <h1 className="text-lg text-red-400">CREDIT ADVICE</h1>
          </div>
          <div className="flex flex-col">
            <p>LEASING FEE: {FormattedNumber(data.leasingFee)}</p>
            <p>PROCESSING FEE: {FormattedNumber(data.processingFee)}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            src="/assets/dsm.png"
            alt="DSM Image"
            width={190}
            height={0}
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <p>CA REFERENCE: {data.caReference}</p>
          <p>LOAN REFERENCE: {data.loanReference}</p>
        </div>
        <div className="text-end">
          <p className="text-[10px]">
            32F GT Tower Int'l., Ayala Avenue cor. H.V Dela Costa St.,
          </p>
          <p className="text-[10px]">Salcedo Village, 1226 Makati City</p>
          <p className="text-[10px]">
            Customer Service Hotline: (632) 757-8500
          </p>
          <p className="text-[10px]">Fax: (632) 815-4148 / (632) 815-4157</p>
        </div>
      </div>
      <div className="mt-5 border border-black relative">
        <div className="grid grid-cols-2 border-b border-black">
          <div className="p-1">
            <span className="font-bold">BORROWER:</span>{" "}
            <span>{data.borrower}</span>
          </div>
          <div className="p-1">
            <span className="font-bold">APPROVAL DATE:</span>{" "}
            <span>{FormattedDate()}</span>
          </div>
        </div>
        <div className="border-b border-black p-1">
          <div>
            <span className="font-bold">SPOUSE / CO-MAKER:</span>{" "}
            <span>{data.spouseCoMaker}</span>
          </div>
        </div>
        <div className="border-b border-black p-1">
          <div>
            <span className="font-bold">Address:</span>{" "}
            <span>{data.address}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 border-b border-black">
          <div className="border-r border-black p-1">
            <span className="font-bold">DEALER:</span>{" "}
            <span>{data.dealer}</span>
          </div>
          <div className="border-r border-black p-1">
            <span className="font-bold">UNIT:</span> <span>{data.unit}</span>
          </div>
          <div className="p-1">
            <span className="font-bold">YEAR MODEL:</span>{" "}
            <span>{data.yearModel}</span>
          </div>
        </div>
        <div className="grid grid-cols-4 border-b border-black">
          <div className="border-r border-black p-1">
            <span className="font-bold">NET SELLING PRICE:</span><br />
            <span>{FormattedNumber(data.netSellingPrice)}</span>
          </div>
          <div className="border-r border-black p-1">
            <span className="font-bold">DOWN PAYMENT:</span> <br />
            <span>
              {FormattedNumber(data.downPayment)}{" "}
              <span className="ml-5">{`${(
                (data.downPayment / data.netSellingPrice) *
                100
              ).toFixed(2)}%`}</span>
            </span>
          </div>
          <div className="border-r border-black p-1">
            <span className="font-bold">AMOUNT FINANCED:</span><br />
            <span>
              {FormattedNumber(data.amountFinanced)}{" "}
              <span className="ml-5">
                {" "}
                {`${(
                  (data.amountFinanced / data.netSellingPrice) *
                  100
                ).toFixed(2)}%`}
              </span>
            </span>
          </div>
          <div className="p-1">
            <span className="font-bold">TERM (months) / DI:</span><br />
            <span>{data.termMonthsDi}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 border-b border-black">
          <div className="border-r border-black p-1">
            <span className="font-bold">INSTALLMENT TIMING:</span>{" "}
            <span>{data.installmentTiming}</span>
          </div>
          <div className="border-r border-black p-1">
            <span className="font-bold">MONTHLY PAYMENT:</span>{" "}
            <span>{FormattedNumber(data.monthlyPayment)}</span>
          </div>
          <div className="p-1">
            <span className="font-bold">PRODUCT:</span>{" "}
            <span>{data.product}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-black">
          <div className="p-1 border-r border-black">
            <span className="font-bold">LOAN OFFICER / SALES EXECUTIVE:</span>{" "}
            <span>{data.loanOfficerOrSalesExecutive}</span>
          </div>
          <div className="p-1">
            <span className="font-bold">MARKETING PROFESSIONAL:</span>{" "}
            <span>{data.marketingProfessional}</span>
          </div>
        </div>
        <NotInputtedComponent />
        <TermsAndConditionComponent
          first={data.first}
          second={data.second}
          third={data.third}
        />
      </div>
    </div>
  );
}
