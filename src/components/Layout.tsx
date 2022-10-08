import React from "react";
import NavBar from "./NavBar";
import SEO from "./SEO";

interface LayoutProps {
  pageTitle: string;
  description?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle, description }) => {
  return (
    <div className="relative w-full px-6 md:px-10 pt-10 md:pt-0">
      <SEO description={description} pageTitle={pageTitle} />
      <NavBar />
      <main className="max-w-4xl m-auto">{children}</main>
      <footer className="h-20"></footer>
    </div>
  );
};

export default Layout;
