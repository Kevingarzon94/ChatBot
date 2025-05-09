import type {Message} from "../_types/Message.ts";
import {createContext, type RefObject} from "react";
import type {AdaptedResponse} from "../_types/AdaptedResponse.ts";
//interface to the context application
export interface WizyChatModel {
    message: Message[]
    isLoading: boolean
    product: AdaptedResponse['products']
    handleSendMessage: (text: string) => void
    messagesEndRef: RefObject<HTMLDivElement | null>;

}

export const WizyChatContext =
    createContext<WizyChatModel | null>(null);