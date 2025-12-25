import { ReactNode } from "react"

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-store-background text-store-foreground">{children}</div>
  )
}

export default RootLayout
