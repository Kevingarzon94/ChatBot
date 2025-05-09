import * as React from "react";
import {useState} from "react";

interface InputTextChatProps {
    onSend: (text: string) => void;
}

export const InputTextChat: React.FC<InputTextChatProps> = ({onSend}) => {
    const [messageText, setMessageText] = useState<string>("")

    const handlerSendMessage = () => {
        if (messageText.trim()) {
            onSend(messageText)
            setMessageText("")
        }
    }
    return (
        <div className="p-3 bg-white border-t border-gray-300">
            <div className="flex">
                <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Write a message..."
                    onKeyUp={(e) => e.key === "Enter" && handlerSendMessage()}
                    className="flex-1 p-2 border border-gray-300 rounded-full mr-2 focus:outline-none"
                />
                <button
                    onClick={handlerSendMessage}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-6 h-6 -rotate-45"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M4.5 5L21.5 12L4.5 19L4.5 13L16 12L4.5 11L4.5 5Z"/>
                    </svg>

                </button>
            </div>
        </div>
    )
}