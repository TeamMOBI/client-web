import type { Metadata } from "next";
import localFont from "next/font/local";
import { themeClass } from "@/styles/theme.css";
import { NavigationTop } from "@/components";
import ReactQueryProvider from "./_provider/ReactQueryProvider";

export const metadata: Metadata = {
  title: "MOBI",
  description: "서울 시내 핫플레이스 혼잡도 안내 서비스",
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${themeClass} ${pretendard}`}>
        <ReactQueryProvider>
          <NavigationTop />
          {children}
          {modal}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
