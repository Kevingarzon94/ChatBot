import type {ReactNode} from "react";
import {useWizyChat} from "../_hooks/useWizyChat.ts";
import {WizyChatContext} from "./WizyChat.model.ts";

export const WizyChatProvider: React.FC<{
    children: ReactNode
}> = ({children}) => {
    const WizyBotChat = useWizyChat()

    return (
        <WizyChatContext.Provider value={WizyBotChat}>
            {children}
        </WizyChatContext.Provider>
    )
}