import { Inter } from "next/font/google";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import "./globals.css";
import AuthProvider from "@/store/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Image Finder",
  description: "By Abhishek Singh",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <AuthProvider>{children}</AuthProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
