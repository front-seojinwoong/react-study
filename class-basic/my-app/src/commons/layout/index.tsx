"use client";

import { usePathname } from "next/navigation";
import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";

const HIDDEN_HEADERS = [
  "/section12/12-03-library-star",
  "/section12/12-03-library-icon",
];

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const pathname = usePathname();

  const isHiddenHeader = HIDDEN_HEADERS.includes(pathname);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ height: "500px", display: "flex" }}>
        <div style={{ width: "30%", backgroundColor: "orange" }}>사이드바</div>
        <div style={{ width: "70%" }}>{children}</div>
      </div>
      <LayoutFooter />
    </>
  );
};

export default Layout;
