import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Print",
  description: "Credit advice print page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
