import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Loaderlogic from "@/components/loaderlogic";
import Leniswrapper from "@/components/leniswrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darpan Photography Club",
  
  icons: [{ rel: 'icon', url: '/dl.png  ' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-full overflow-x-hidden`}>
        <Loaderlogic>
          <Leniswrapper>{children}</Leniswrapper>
        </Loaderlogic>
      </body>
    </html>
  );
}
