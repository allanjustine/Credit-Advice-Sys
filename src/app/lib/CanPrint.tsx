import { ComponentType, useEffect, useState } from "react";
import { WrappedComponentProps } from "../types/WrappedComponentPropsType";
import { useRouter } from "next/navigation";
import { Credentials } from "./Credentials";
import GLobalLoader from "../components/ui/loaders/Global";
import { ContextType } from "../types/ContextType";
import { useAuth } from "../context/useAuth";
import Unauthorized from "../utils/Unauthorized";

const CanPrint = <P extends WrappedComponentProps>(
  WrappedComponent: ComponentType<P>
) => {
  return (props: P) => {
    const router = useRouter();
    const { token } = Credentials;
    const { isAuthenticated, loading, isLogout }: ContextType = useAuth()!;
    const [printingData, setIsPrintingData] = useState<[]>([]);
    const [printToken, setIsPrintToken] = useState<string>("");
    const [isValidToken, setIsValidToken] = useState<boolean>(false);

    useEffect(() => {
      const isReadyToPrint = localStorage?.getItem("printing");
      const printTokenLocal = localStorage?.getItem("printToken");
      const isValidToken = token === printToken;

      setIsPrintingData(isReadyToPrint ? JSON.parse(isReadyToPrint) : []);
      setIsPrintToken(printTokenLocal ? printTokenLocal : "");
      setIsValidToken(isValidToken);
      if (isAuthenticated) {
        setTimeout(() => {
          window.print();
        }, 1000);
      }
    }, [isAuthenticated]);

    useEffect(() => {
      if (!isAuthenticated && !loading) {
        router.push("/login");
      } else if (!printingData && !isValidToken) {
        router.push("/");
      }
    }, [isAuthenticated, loading, router, printingData, isValidToken]);

    if (loading) return <GLobalLoader />;

    if (!isAuthenticated || (!printingData && !isValidToken)) {
      if (isLogout) {
        return <GLobalLoader />;
      }
      return <Unauthorized />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default CanPrint;
