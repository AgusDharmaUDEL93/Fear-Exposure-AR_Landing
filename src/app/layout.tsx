import { Provider } from "@/components/ui/provider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AR For Exposure Therapy: iOS Implementation for Phobia Treatment",
  description:
    "Setting up patients for exposure therapy is time intensive and dangerous through in-vivo exposure methods. Current alternatives require expensive, delicate hardware that require high degree of tech literacy for both medical professionals and patients. By utilizing Augmented Reality, technology has made exposure therapy quick, simple and most importantly safe for patients, anywhere, anytime. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
