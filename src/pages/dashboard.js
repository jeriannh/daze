import React from "react"
import { Link } from "gatsby"
import Video from "../components/video"
import logo from "../graphics/daze-logo.svg"
import edit from "../graphics/edit.svg"

export default function Dashboard() {
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
          to="/sentiment_analysis.py"
        >
          Progress
        </Link>
        
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 1</div>
            <Link to="/plan" state={{ day: "1" }}>
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg"
              to="/reflection"
              state={{ day: "1" }}
            >
              Journal
            </Link>
          </div>
          <Video
            videoSrcURL={"https://www.youtube.com/embed/CMMaEFiY-nE"}
            videoTitle={"21 Minute Cardio Burn N' Tone Workout"}
          ></Video>
          <Video
            videoSrcURL={"https://www.youtube.com/embed/CMMaEFiY-nE"}
            videoTitle={"21 Minute Cardio Burn N' Tone Workout"}
          ></Video>
          <Video
            videoSrcURL={"https://www.youtube.com/embed/CMMaEFiY-nE"}
            videoTitle={"21 Minute Cardio Burn N' Tone Workout"}
          ></Video>
        </div>
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 2</div>
            <Link to="/plan" state={{ day: "2" }}>
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg"
              to="/reflection"
              state={{ day: "2" }}
            >
              Journal
            </Link>
          </div>
          <Video
            videoSrcURL={"https://www.youtube.com/embed/CMMaEFiY-nE"}
            videoTitle={"21 Minute Cardio Burn N' Tone Workout"}
          ></Video>
                    {/* put videos here */}
        </div>
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 3</div>
            <Link onClick={localStorage.setItem("day", "3")} to="/plan">
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg"
              onClick={localStorage.setItem("day", "3")}
              to="/reflection"
            >
              Journal
            </Link>
          </div>
        </div>
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 4</div>
            <Link onClick={localStorage.setItem("day", "4")} to="/plan">
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg"
              onClick={localStorage.setItem("day", "4")}
              to="/reflection"
            >
              Journal
            </Link>
          </div>
          {/* put here */}
        </div>
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 5</div>
            <Link onClick={localStorage.setItem("day", "5")} to="/plan">
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg"
              onClick={localStorage.setItem("day", "5")}
              to="/reflection"
            >
              Journal
            </Link>
          </div>
          <Video
            videoSrcURL={"https://www.youtube.com/embed/CMMaEFiY-nE"}
            videoTitle={"21 Minute Cardio Burn N' Tone Workout"}
          ></Video>
          <Video
            videoSrcURL={"https://www.youtube.com/embed/CMMaEFiY-nE"}
            videoTitle={"21 Minute Cardio Burn N' Tone Workout"}
          ></Video>
          <Video
            videoSrcURL={"https://www.youtube.com/embed/CMMaEFiY-nE"}
            videoTitle={"21 Minute Cardio Burn N' Tone Workout"}
          ></Video>
        </div>
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 6</div>
            <Link onClick={localStorage.setItem("day", "6")} to="/plan">
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg"
              onClick={localStorage.setItem("day", "6")}
              to="/reflection"
            >
              Journal
            </Link>
          </div>
          {/* ahhhh */}
        </div>
        <div className="w-full bg-grey rounded-lg p-8 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-6">
            <div className="text-2xl font-pn-bold">Day 7</div>
            <Link onClick={localStorage.setItem("day", "7")} to="/plan">
              <img className="h-8" src={edit} alt="Edit" />
            </Link>
            <Link
              className="rounded-full bg-blue text-white px-5 py-2 hover:shadow-lg"
              onClick={localStorage.setItem("day", "7")}
              to="/reflection"
            >
              Journal
            </Link>
          </div>
          {/* ahhhh */}
        </div>
      </div>
    </div>
  )
}
