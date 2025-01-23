"use client";

import PrintComponent from "@/app/components/PrintComponent";
import CanPrint from "@/app/lib/hoc/CanPrint";
import { CreditAdviceFormType } from "@/app/types/CreditAdviceFormType";
import { CreditAdviceInput } from "@/app/utils/constants";
import { useEffect, useState } from "react";

const Print = () => {
  const [data, setData] = useState<CreditAdviceFormType>(CreditAdviceInput);
  useEffect(() => {
    const printData = localStorage.getItem("printing");
    const dataParsed = printData ? JSON.parse(printData) : [];
    setData(dataParsed);
  }, []);
  return (
    <>
      <PrintComponent data={data} />
    </>
  );
};
export default CanPrint(Print);
