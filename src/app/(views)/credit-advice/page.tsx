"use client";

import CreditAdviceComponent from "@/app/components/CreditAdviceComponent";
import WithAuth from "@/app/lib/hoc/WithAuth";

const CreditAdvice = () => {
  return (
    <div className="flex justify-center items-center sm:p-24 pt-24 px-3">
      <CreditAdviceComponent />
    </div>
  );
};

export default WithAuth(CreditAdvice);
