import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../graphics/daze-logo.svg"
import { FacebookShareButton, FacebookIcon } from "react-share"
import { TwitterShareButton, TwitterIcon } from "react-share"

export default function Progress() {
  return (
    <div class="w-full px-24 py-6 flex flex-col gap-4">
      <Link to="/dashboard">
        <img className="mx-auto w-20" src={logo} alt="Daze" />
      </Link>
      <div className="flex flex-row items-center justify-between mb-10">
        <div className="text-4xl font-pn-bold text-green mt-5 text-center mb-0 mt-10">
          Progress
        </div>
      </div>
      <div className="mt-3 mb-1 text-1xl text-blue text-left">
        Here at Daze, we believe in celebrating our success and acknowledging
        our emotions. Sometimes life is difficult and it’s easy to get carried
        away with our thoughts. Through the reflections you inputted throughout
        the week, our Natural Language Processing Sentiment Analysis analyzes
        how you’re feeling. This way you can not only track the highs in life
        but also the lows as well.
      </div>
      <div className=" italic mb-6 text-1xl font-pn-bold text-blue text-left">
        {" "}
        Feelings are much like waves, we can't stop them from coming but we can
        choose which one to surf.
      </div>
      <div className=" italic text-1xl font-pn-bold text-blue text-left">
        Share how you're doing:
      </div>
      <div className="flex flex-row gap-2">
        <FacebookShareButton
          url={"http://www.facebook.com"}
          quote={"Take a look at how I'm doing through Daze"}
          hashtag="#ChangeYourDaze"
        >
          <FacebookIcon size={36} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
          url={"http://www.twitter.com"}
          quote={"Take a look at how I'm doing through Daze"}
          hashtag="#ChangeYourDaze"
        >
          <TwitterIcon size={36} round={true} />
        </TwitterShareButton>
      </div>
      <div class="bg-pink h-16 rounded-full">
        <div className="flex flex-row items-center justify-between hover:shadow-lg">
          <div className="text-1xl place-items-center m-5 ml-10 text-white font-pn-bold">
            January 3 - 9
          </div>
          <div className="text-1xl place-items-center m-5 mr-10 text-white font-pn-bold">
            Things will get better
          </div>
        </div>
      </div>
      <div class="bg-green h-16 rounded-full">
        <div className="flex flex-row items-center justify-between hover:shadow-lg">
          <div className="text-1xl place-items-center m-5 ml-10 text-white font-pn-bold">
            January 10 - 16
          </div>
          <div className="text-1xl place-items-center m-5 mr-10 text-white font-pn-bold">
            We are glad you had a good week!
          </div>
        </div>
      </div>
      <div class="bg-blueGrey h-16 rounded-full">
        <div className="flex flex-row items-center justify-between hover:shadow-lg">
          <div className="text-1xl place-items-center m-5 ml-10 text-white font-pn-bold">
            January 17-23
          </div>
          <div className="text-1xl place-items-center m-5 mr-10 text-white font-pn-bold">
            It's okay to not be okay.
          </div>
        </div>
      </div>
      <div class="bg-orange h-16 rounded-full">
        <div className="flex flex-row items-center justify-between hover:shadow-lg">
          <div className="text-1xl place-items-center m-5 ml-10 text-white font-pn-bold">
            January 24-30
          </div>
          <div className="text-1xl place-items-center m-5 mr-10 text-white font-pn-bold">
            The sun is shining!
          </div>
        </div>
      </div>
    </div>
  )
}
