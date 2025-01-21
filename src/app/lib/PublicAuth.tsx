import { ComponentType } from "react";
import GLobalLoader from "../components/ui/loaders/Global";
import { useAuth } from "../context/useAuth";
import { ContextType } from "../types/ContextType";
import { WrappedComponentProps } from "../types/WrappedComponentPropsType";

const PublicAuth = <P extends WrappedComponentProps>(
  WrappedComponent: ComponentType<P>
) => {
  return (props: P) => {
    const { loading }: ContextType = useAuth()!;

    if (loading) return <GLobalLoader />;

    return <WrappedComponent {...props} />;
  };
};

export default PublicAuth;
