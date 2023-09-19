import { ReactElement } from "react"


export const Card = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex flex-col w-full h-full bg-white rounded-lg shadow-light">
      {children}
    </div>
  )
}