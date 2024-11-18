import { NavigationLeft } from "@/components";
import { container } from "./mypage.css";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className={container}>
      <NavigationLeft />
      {children}
      {modal}
    </main>
  );
}
