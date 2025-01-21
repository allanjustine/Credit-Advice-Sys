import { useRouter } from "next/navigation";
import { ComponentType, useEffect } from "react";
import { useAuth } from "../context/useAuth";
import GLobalLoader from "../components/ui/loaders/Global";
import Unauthorized from "../utils/Unauthorized";
import { WrappedComponentProps } from "../types/WrappedComponentPropsType";
import { ContextType } from "../types/ContextType";

const WithAuth = <P extends WrappedComponentProps>(
  WrappedComponent: ComponentType<P>
) => {
  return (props: P) => {
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
