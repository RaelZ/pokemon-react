import React from 'react'
import Content from './Content'
import Navbar from './Navbar'
import SidebarOpen from './SidebarOpen'
import Sidebar from './Sidebar'
import { Children } from '../../types/Children'
import useSidebar from '../../hooks/useSidebar'
import { StyledMain } from './styled'

const Layout: React.FC<Children> = ({ children }) => {
  const { menuOpen } = useSidebar()

  return (
    <div style={{ height: 'calc(100vh - 4.375em)' }}>
      <Navbar />
      <Content>
        <SidebarOpen />
        <Sidebar />
        <StyledMain open={menuOpen}>{children}</StyledMain>
      </Content>
    </div>
  )
}

export default Layout
