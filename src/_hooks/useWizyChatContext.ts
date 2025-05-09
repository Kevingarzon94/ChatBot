import {WizyChatContext, type WizyChatModel} from "../_context/WizyChat.model.ts";
import {useContext} from "react";

export const useWizyChatContext = (): WizyChatModel => {
    const context = useContext(WizyChatContext)
    if (!context) {
        throw new Error("useWizyChatContext must be used within a WizyChatProvider")
    }
    return context
}