import React from "react"

export const Index = () => {}

const CombatText = () => {
  return (
    <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
      <Form.Control as="textarea" placeholder="Leave a comment here" />
    </FloatingLabel>
  )
}
