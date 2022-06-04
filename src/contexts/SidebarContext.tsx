import React, { createContext, FC, useState } from 'react'
import { Sidebar, SidebarContextType, SidebarProps } from '../types/Sidebar'

export const SidebarContext = createContext<SidebarContextType>({
  menuOpen: false,
  changeSidebar: Function,
})

const SidebarProvider: FC<SidebarProps> = ({ children }) => {
  const [menuOpen, setSidebar] = useState<Sidebar>(false)

  const changeSidebar = () => setSidebar(!menuOpen)

  return (
    <SidebarContext.Provider value={{ menuOpen, changeSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
