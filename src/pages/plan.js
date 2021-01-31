import React from "react"
import { Link } from "gatsby"
import Video from "../components/video"
import logo from "../graphics/daze-logo.svg"

export default function Plan() {
  const goal = JSON.parse(localStorage.getItem("goal"))
  console.log({ goal })

  return (
    <div className="w-full px-24 py-6 flex flex-col">
      <img className="mx-auto w-20" src={logo} alt="Daze" />
      <div className="text-4xl font-pn-bold text-blue mb-12">
        Day {JSON.parse(localStorage.getItem("day"))}
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-8">
          {goal === "Stress relief" && (
            <>
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
            </>
          )}
          {goal === "Confidence boost" && (
            <>
              <Video
                videoSrcURL={"https://www.youtube.com/embed/Ai8KfyJ69Bc"}
                videoTitle={"20 Minute Lean Arms Cardio Pilates Workout"}
              ></Video>
            </>
          )}
          {goal === "Energy" && (
            <>
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
            </>
          )}
        </div>
        <div>Empowered women empower women.</div>
      </div>
    </div>
  )
  // }
}
