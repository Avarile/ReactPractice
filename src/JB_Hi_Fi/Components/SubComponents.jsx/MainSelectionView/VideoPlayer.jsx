import React from "react"
import videoUrl from "../../../Assets/videos/Jump.mp4"

export const Video = () => {
  const videoPlayer = () => {
    return new Promise((res, rej) => {
      const Video = new Video()
      Video = {
        preload: "auto",
        autoplay: "true",
        onerror: rej,
        onended: res,
        src: videoUrl,
      }
    })
  }

  return <>{videoPlayer}</>
}
