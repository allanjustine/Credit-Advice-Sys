import { useRouter } from "next/navigation";
import { ComponentType, useEffect } from "react";
import { useAuth } from "../context/useAuth";
import GLobalLoader from "../components/ui/loaders/Global";
import { WrappedComponentProps } from "../types/WrappedComponentPropsType";
import { ContextType } from "../types/ContextType";

const WithoutAuth = <P extends WrappedComponentProps>(
  WrappedComponent: ComponentType<P>
) => {
  return (props: P) => {
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
