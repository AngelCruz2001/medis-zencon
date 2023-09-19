'use client'
import { NextUIProvider } from '@nextui-org/react'

export const LayoutClient = ({ children }) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
