import GLobalLoader from "../components/ui/loaders/Global";
import { useAuth } from "../context/useAuth";
import { ContextType } from "../types/ContextType";

const PublicAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const { loading }: ContextType = useAuth()!;

    if (loading) return <GLobalLoader />;

    return <WrappedComponent {...props} />;
  };
};

export default PublicAuth;
