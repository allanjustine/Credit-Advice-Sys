"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function BaseComponent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathName = usePathname();
  const isPrint = pathName === "/print";

  const navigation = [
    {
      name: "Home",
      href: "/",
      current: pathName === "/",
    },
    {
      name: "Credit Advice",
      href: "/credit-advice",
      current: pathName === "/credit-advice",
    },
  ];
  return (
    <div>
      {isPrint ? (
        children
      ) : (
        <>
          <Navbar navigation={navigation} />
          {children}
          <Footer navigation={navigation} />
        </>
      )}
    </div>
  );
}
