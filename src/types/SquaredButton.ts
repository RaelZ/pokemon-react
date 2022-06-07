import { ReactNode } from 'react'

export type TSquaredButton = {
  children: ReactNode
  onClick?: () => void
  open: boolean
}
