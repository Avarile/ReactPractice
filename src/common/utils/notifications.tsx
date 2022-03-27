import React from "react"
import { notification, message, Modal } from "antd"
import { HomeOutlined } from "@ant-design/icons"
import { INFO, WARNING, SUCCESS, EXCEPTION_INFO, DATA_MODIFY_WARNING, TIMEOUT_INFO } from "../constants"

type MessageNoticeType = {
  [WARNING]: "warning"
  [SUCCESS]: "success"
}

export const messageNotice = (type: keyof MessageNoticeType = WARNING, content = "") => {
  message[type](content)
}

/**
 * Message Component
 * @param message
 * @param description
 * @param type
 */
export const openNotificationWithIcon = (message = "", description = "", type = INFO) => {
  Reflect.get(notification, type)({ message, description, duration: 6, icon: <HomeOutlined type="smile" style={{ color: "#108ee9" }} /> })
}
// function () () ; this is a curried function

// success Notification / Message
export const successByNotice = (content: string) => {
  openNotificationWithIcon(SUCCESS, content)
}

export const successByMessage = (content: string) => {
  messageNotice(SUCCESS, content)
}

// warning Notification / Message
export const warningByNotice = (content: string) => {
  openNotificationWithIcon(WARNING, content)
}

export const warningByMessage = (content: string) => {
  messageNotice(WARNING, content)
}

// timeout Notification / Message
export const timeoutByNotice = () => {
  openNotificationWithIcon(WARNING, TIMEOUT_INFO)
}

export const timeoutMessage = () => {
  messageNotice(WARNING, TIMEOUT_INFO)
}

// exception Notification / Message
export const exceptionByNotice = () => {
  openNotificationWithIcon(WARNING, EXCEPTION_INFO)
}

export const exceptionMessage = () => {
  messageNotice(WARNING, EXCEPTION_INFO)
}

// data modified notification
export const dataModifyWarningByModal = () => {
  Modal.warning({
    content: DATA_MODIFY_WARNING,
    okText: "Acknowleged",
  })
}
