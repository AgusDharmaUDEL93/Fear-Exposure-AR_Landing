import { Provider } from "@/components/ui/provider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AR For Exposure Therapy: iOS Implementation for Phobia Treatment",
  description:
    "Setting up patients for exposure therapy is time intensive and dangerous through in-vivo exposure methods. Current alternatives require expensive, delicate hardware that require high degree of tech literacy for both medical professionals and patients. By utilizing Augmented Reality, technology has made exposure therapy quick, simple and most importantly safe for patients, anywhere, anytime. ",
  icons: "/favicon.ico",
  keywords: [
    "FEAR,", "Fear Exposure Therapy", "Fear exposure therapy", "fear exposure therapy", 
    "Intense Fear", "intense fear",
    "Phobia", "phobia", 

    "fear of dog", "fear of snake", "fear of crocodile", "fear of spider", "fear of gecko", "fear of cockroach", "fear of cat", "fear of rat",
    "fir of dog", "fir of snake", "fir of crocodile", "fir of spider", "fir of gecko", "fir of cockroach", "fir of cat", "fir of rat",


    "Therapy for phobia", "therapy for phobia", 
    "phobia therapy", "Phobia therapy", 
    "exposure therapy alternative", "virtual reality alternative", 
    "Virtual Reality Therapy", "virtual reality therapy", "virtual reality exposure therapy", 
    "VR exposure therapy", "vr exposure therapy", "exposure therapy vr", "",

    "AR for Exposure Therapy", "ar for exposure therapy", "exposure therapy ar", "exposure therapy AR", 
    "Systematic Desensitization", "systematic desensitization", "",

    "terapi fobia", "fobia terapi", "fir terapi", "firterapi", "terapifobia", 
    "vir terapi", "terapi vir", "terapi eksposur", "eksposur terapi",
  ]
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
