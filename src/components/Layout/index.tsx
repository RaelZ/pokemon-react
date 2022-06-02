import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

