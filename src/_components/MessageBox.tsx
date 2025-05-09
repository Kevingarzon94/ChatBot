import type {Message} from "../_types/Message";

interface MessageProps {
    message: Message;
}

export const MessageBox: React.FC<MessageProps> = ({message}) => {
    const isUser = message.sender === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
            <div
                className={`max-w-[70%] p-3 rounded-lg ${
                    isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                }`}
            >
                <p>{message.text}</p>
                <span
                    className={`text-xs ${isUser ? "text-amber-50" : "text-black"} block mt-1`}>{message.timestamp}</span>
            </div>
        </div>
    );
}