import React, { createContext, FC, useState } from 'react'
import { Children } from '../types/Children'
import { Sidebar, SidebarContextType } from '../types/Sidebar'

export const SidebarContext = createContext<SidebarContextType>({
  menuOpen: false,
  changeSidebar: Function,
})

const SidebarProvider: FC<Children> = ({ children }) => {
  const [menuOpen, setSidebar] = useState<Sidebar>(false)

  const changeSidebar = () => setSidebar(!menuOpen)

  return (
    <SidebarContext.Provider value={{ menuOpen, changeSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
