import React from "react"
import "./DotTyping.css"
import Container from "react-bootstrap/Container"

export const DotDotDot = () => {
  return (
    <Container>
      <div class="col-3">
        <div class="snippet" data-title=".dot-typing">
          <div class="stage">
            <div class="dot-typing"></div>
          </div>
        </div>
      </div>
    </Container>
  )
}
