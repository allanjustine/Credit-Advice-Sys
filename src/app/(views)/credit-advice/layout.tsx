import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main Page",
  description: "Credit advice main page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
