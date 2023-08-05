"use client"
import { SideBar } from "@/components"
import { signOut } from "next-auth/react"

type LearnLayoutProps = { children: React.ReactNode }
export default function LearnLayout({ children }: LearnLayoutProps) {
  const callbackUrl = "/login"
  return (
    <div className=" flex flex-row p-20 c-xl:p-5 space-18">
      <div className="pr-1 border-r-2 border-blue-100">
        <SideBar signOut={signOut} callbackUrl={callbackUrl} />
      </div>
      <div className="flex-grow pl-5">{children}</div>
    </div>
  )
}
