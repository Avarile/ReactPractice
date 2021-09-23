// in this page, shows the opening of the game, and the classic BIGGGGGAAA "Press Anykey" Button.

import React, { useState } from "react"

export default function LandingPage() {
  return (
    <>
      <div className="landingpage-title">
        <h2>Slaughter Group Involved</h2>
        <a href="/groupSelection">
          {" "}
          <p>Press HERE to start the game</p>{" "}
        </a>
      </div>
    </>
  )
}
