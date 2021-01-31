import React, { useEffect } from "react"
import { Link } from "gatsby"
import Video from "../components/video"
import logo from "../graphics/daze-logo.svg"
import edit from "../graphics/edit.svg"

export default function Dashboard() {
  let videoList1 = JSON.parse(localStorage.getItem("day1"))
  let videoList2 = JSON.parse(localStorage.getItem("day2"))

  return (
    <div className="w-full px-24 py-6 flex flex-col">
      <img className="mx-auto w-20" src={logo} alt="Daze" />
      <div className="flex flex-row items-center justify-between mb-10">
        <div className="flex flex-row items-center gap-4">
          <div className="text-3xl text-blue font-pn-bold">Your 7 days to</div>
          <Link
            className="rounded-full bg-orange text-white font-pn-bold text-2xl px-5 py-2 hover:shadow-lg"
            to="/goals"
          >
            {JSON.parse(localStorage.getItem("goal"))}
          </Link>
        </div>
        <Link
          className="rounded-full bg-green text-white font-pn-bold text-2xl px-5 py-2 hover:shadow-lg"
          to="/progress"
        >
          Progress
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 1</div>
            <Link to="/plan" state={{ selectedDay: "1" }}>
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg font-pn-bold"
              to="/reflection"
              state={{ selectedDay: "1" }}
            >
              Journal
            </Link>
          </div>

          {videoList1.length !== 0
            ? videoList1.map((value, index) => {
                return index !== 0 && <Video videoSrcURL={value} />
              })
            : "Click on the edit icon to add videos"}
        </div>
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 2</div>
            <Link to="/plan" state={{ selectedDay: "2" }}>
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg font-pn-bold"
              to="/reflection"
              state={{ selectedDay: "2" }}
            >
              Journal
            </Link>
          </div>
          {videoList2.length !== 0
            ? videoList2.map((value, index) => {
                return index !== 0 && <Video videoSrcURL={value} />
              })
            : "Click on the edit icon to add videos"}
        </div>
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 3</div>
            <Link to="/plan" state={{ selectedDay: "3" }}>
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg font-pn-bold"
              to="/reflection"
              state={{ selectedDay: "3" }}
            >
              Journal
            </Link>
          </div>
          <p>Click on the edit icon to add videos</p>
        </div>
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8 font-pn-bold">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 4</div>
            <Link to="/plan" state={{ selectedDay: "4" }}>
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg font-pn-bold"
              to="/reflection"
              state={{ selectedDay: "4" }}
            >
              Journal
            </Link>
          </div>
          <p>Click on the edit icon to add videos</p>
        </div>
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 5</div>
            <Link to="/plan" state={{ selectedDay: "5" }}>
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg font-pn-bold"
              to="/reflection"
              state={{ selectedDay: "5" }}
            >
              Journal
            </Link>
          </div>
          <p>Click on the edit icon to add videos</p>
        </div>
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 6</div>
            <Link to="/plan" state={{ selectedDay: "6" }}>
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg font-pn-bold"
              to="/reflection"
              state={{ selectedDay: "6" }}
            >
              Journal
            </Link>
          </div>
          <p>Click on the edit icon to add videos</p>
        </div>
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 7</div>
            <Link to="/plan" state={{ selectedDay: "7" }}>
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg font-pn-bold"
              to="/reflection"
              state={{ selectedDay: "7" }}
            >
              Journal
            </Link>
          </div>
          <p>Click on the edit icon to add videos</p>
        </div>
      </div>
    </div>
  )
}
