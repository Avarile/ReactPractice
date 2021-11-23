import React, { useState } from "react"

export default function GoodsInfo(data) {
  const { tag: newTags } = data
  // console.log(newTags)

  const RenewTags = newTags.map(
    (tag, index) =>
      (tag = {
        ...tag,
        id: index,
      })
  )

  const [toggleBtn1, setToggleBtn1] = useState(true)

  console.log(RenewTags)

  return (
    <div>
      {RenewTags.map((tag) => {
        if (tag.buttonName === "Btn1" && toggleBtn1) {
          return <button>{tag.buttonName}</button>
        }
        if (tag.buttonName === "Btn2") {
          return (
            <button
              onClick={() => {
                setToggleBtn1(!toggleBtn1)
              }}>
              {tag.buttonName}
            </button>
          )
        } else return <p>Infomation is not enough!</p>
      })}
    </div>
  )
}
