import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../context/useAuth";
import GLobalLoader from "../components/ui/loaders/Global";
import { ContextType } from "../types/ContextType";

const WithoutAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const { isAuthenticated, loading }: ContextType = useAuth()!;
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated) {
        router.push("/");
      }
    }, [isAuthenticated, loading, router]);

    if (loading || isAuthenticated) return <GLobalLoader />;

    return <WrappedComponent {...props} />;
  };
};

export default WithoutAuth;
