import { MessageOfTheDay } from "./message-of-the-day"
import { Messages } from "./messages"

export interface News {
    motds: Array<MessageOfTheDay>,
    messages: Array<Messages> | any
}