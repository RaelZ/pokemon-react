import React from 'react'
import Content from './Content'
import Navbar from './Navbar'
import SidebarOpen from './SidebarOpen'
import Sidebar from './Sidebar'
import { Children } from '../../types/Children'

const Layout: React.FC<Children> = ({ children }) => {
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

export default Layout
