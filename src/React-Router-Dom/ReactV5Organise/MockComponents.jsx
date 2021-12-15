import React from "react"

export const AvarileDisplay = ({ ...props }) => {
  return (
    <>
      <p>This is Component {props.name}</p>
      <p>
        This the Props I received Props1: {props.name}, {props.props2}
      </p>
    </>
  )
}

import React from "react"

export const EmilyDisplay = ({ ...props }) => {
  return (
    <>
      <p>This is Component {props.name}</p>
      <p>This the Props I received Props1: {props.icon}</p>
    </>
  )
}

import React from "react"

export const AureliaDisplay = ({ ...props }) => {
  return (
    <>
      <p>This is Component {props.name}</p>
      <p>This the Props I received Props1: {props.icon}</p>
    </>
  )
}

import React from "react"

export const AnastasiaDisplay = ({ ...props }) => {
  return (
    <>
      <p>This is Component {props.name}</p>
      <p>This the Props I received Props1: {props.icon}</p>
    </>
  )
}

import React from "react"

export const FamilyDisplay = ({ ...props }) => {
  return (
    <>
      <p>This is Component {props.name}</p>
      <p>
        As a Family of 4, We have father: {props.familyMembers.father}, mother: {props.familyMembers.mother}, BigSis: {props.familyMembers.firstBorn}, littleSis: {props.familyMembers.secondBorn}
      </p>
    </>
  )
}
