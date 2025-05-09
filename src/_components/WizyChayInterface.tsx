import {useWizyChatContext} from "../_hooks/useWizyChatContext.ts";
import {MessageBox} from "./MessageBox.tsx";
import {WaitingMessage} from "./WaitingMessage.tsx";
import {ProductCard} from "./ProductCard.tsx";
import * as React from "react";
import {InputTextChat} from "./InputTextChat.tsx";

export const WizyChayInterface: React.FC = () => {
    const {message, product, isLoading, messagesEndRef, handleSendMessage} = useWizyChatContext()
    return (
        <>
            <div className="flex-1 p-3 overflow-y-auto bg-gray-100">
                {message.map((message) => (
                    <MessageBox key={message.id} message={message}/>
                ))}

                {product && <ProductCard product={product}/>}

                {isLoading && <WaitingMessage/>}
                <div ref={messagesEndRef}/>
            </div>
            <InputTextChat onSend={handleSendMessage}/>
        </>
    )
}