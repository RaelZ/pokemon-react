import { ReactNode } from "react"

export type SidebarContextType = {
  menuOpen: boolean
  changeSidebar: () => void
}
export type SidebarProps = {
  children: ReactNode
}
export type Sidebar = boolean