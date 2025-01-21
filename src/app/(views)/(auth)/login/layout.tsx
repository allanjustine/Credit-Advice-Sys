import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Credit advice login page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
