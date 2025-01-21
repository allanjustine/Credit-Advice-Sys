import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./ui/buttons/Button";
import Card from "./ui/cards/Card";
import CardFooter from "./ui/cards/CardFooter";
import CardHeader from "./ui/cards/CardHeader";
import Input from "./ui/inputs/Input";
import { useAuth } from "../context/useAuth";
import { CredentialType } from "../types/CredentialType";
import { CredentialSchema } from "../lib/CredentialSchema";
import CardBody from "./ui/cards/CardBody";
import { ContextType } from "../types/ContextType";
import { LoginDetails } from "../utils/constants";

export default function LoginComponent() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { userCredentials, login }: ContextType = useAuth()!;
  const [error, setError] = useState<Partial<CredentialType>>(LoginDetails);
  const [err, setErr] = useState<string>("");
  const [formInput, setFormInput] = useState<CredentialType>(LoginDetails);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = CredentialSchema.safeParse(formInput);

      if (!result.success) {
        const formErrors: Partial<CredentialType> = {};
        result.error.errors.map((error) => {
          const [errorPath] = error.path;
          formErrors[errorPath as keyof CredentialType] = error.message;
        });
        setError(formErrors);
        setErr("Error occured while logging in");
      } else {
        if (
          userCredentials?.username === formInput?.username &&
          userCredentials.password === formInput.password
        ) {
          login(userCredentials);
          setErr("");
          setError(LoginDetails);
        } else {
          setErr("Invalid credentials");
          setError(LoginDetails);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowPassword = (): void => {
    setIsShowPassword(!isShowPassword);
  };

  const handleInputChange =
    (title: string) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      const target = e.target;
      if (target !== null) {
        setFormInput((formInput) => ({
          ...formInput,
          [title]: target.value,
        }));
      } else {
        console.error("Target is null");
      }
    };

  const handleCloseAlert = (): void => {
    setErr("");
  };

  return (
    <>
      <Card customClass="sm:w-1/3 w-full p-10 rounded-md bg-black/90 shadow-lg dark:shadow-blue-800">
        {err && (
          <div className="p-3 border border-red-300 bg-red-500/30 w-full rounded-md text-red-200 flex justify-between">
            <span>{err}</span>
            <button type="button" onClick={handleCloseAlert}>
              <i className="far fa-xmark"></i>
            </button>
          </div>
        )}
        <CardHeader customClass="text-2xl text-center border-b border-gray-500 dark:border-gray-500 mb-3 text-gray-300 dark:text-gray-300 pb-2">
          Login
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardBody customClass="flex flex-col gap-4">
            <div>
              <label
                htmlFor="username"
                className="text-gray-300 dark:text-gray-300"
              >
                Username
              </label>
              <Input
                type="text"
                placeholder="Username"
                icon="user"
                onChange={handleInputChange("username")}
                error={error?.username}
              />
              {error?.username && (
                <small className="text-red-500">{error?.username}</small>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-gray-300 dark:text-gray-300"
              >
                Password
              </label>
              <Input
                type={isShowPassword ? "text" : "password"}
                placeholder="Password"
                icon="lock"
                onChange={handleInputChange("password")}
                error={error?.password}
              />
              {error?.password && (
                <small className="text-red-500">{error.password}</small>
              )}
            </div>
            <div>
              <button
                type="button"
                onClick={handleShowPassword}
                className="text-sm text-gray-300"
              >
                <input
                  type="checkbox"
                  checked={isShowPassword}
                  onChange={handleShowPassword}
                  name="remember"
                  id="remember"
                />{" "}
                Show password
              </button>
            </div>
          </CardBody>
          <CardFooter customClass="text-end border-t mt-2 border-gray-300 dark:border-gray-500">
            <Button
              type="submit"
              disabled={isLoading}
              customClass="hover:bg-blue-500 mt-2 bg-blue-600 w-full active:scale-95 text-white transition-all duration-300 ease-in-out"
            >
              {isLoading ? (
                <>
                  <i className="fa-sharp-duotone fa-solid fa-spinner-third"></i>{" "}
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
