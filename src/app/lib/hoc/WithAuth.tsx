import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../../context/useAuth";
import GLobalLoader from "../../components/ui/loaders/Global";
import Unauthorized from "../../utils/Unauthorized";
import { ContextType } from "../../types/ContextType";

const WithAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const { isAuthenticated, loading, isLogout }: ContextType = useAuth()!;
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) {
        router.push("/login");
      }
    }, [isAuthenticated, loading, router]);

    if (loading) return <GLobalLoader />;

    if (!isAuthenticated) {
      if (isLogout) {
        return <GLobalLoader />;
      }
      return <Unauthorized />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAuth;
