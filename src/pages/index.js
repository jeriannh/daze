import React from "react"
import { Link } from "gatsby"
import logo from "../graphics/daze-logo.svg"

export default function Home() {
  return (
    <div className="h-screen flex items-center">
      <div className="w-full flex flex-col items-center gap-12">
        <img className="w-96" src={logo} alt="Daze" />
        <div className="text-3xl text-blue font-pn-bold">
          Turn your daze into 7 days of inward and outward transformation
        </div>
        <Link
          className="rounded-full bg-orange text-white font-pn-bold text-2xl px-8 py-4 mt-28 hover:shadow-lg"
          to="/goal"
        >
          Start planning your week
        </Link>
      </div>
    </div>
  )
}
