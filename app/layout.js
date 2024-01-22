import { Inter } from "next/font/google";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import "./globals.css";
import AuthProvider from "@/store/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Image Finder",
  description: "By Abhishek Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <AuthProvider>{children}</AuthProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
