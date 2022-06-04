import React from 'react'
import Content from './Content'
import Navbar from './Navbar'
import SidebarOpen from './SidebarOpen'
import Sidebar from './Sidebar'

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div style={{ height: 'calc(100vh - 4.375em)' }}>
      <Navbar />
      <Content>
        <SidebarOpen />
        <Sidebar />
        <div>{children}</div>
      </Content>
    </div>
  )
}
