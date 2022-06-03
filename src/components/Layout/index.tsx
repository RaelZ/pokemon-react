import React from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ height: '100vh' }}>
      <Navbar />
      <Content>
        <Sidebar />
        <div>{children}</div>
      </Content>
    </div>
  );
};

