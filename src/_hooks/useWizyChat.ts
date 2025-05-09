import {useEffect, useRef, useState} from "react";
import type {Message} from "../_types/Message.ts";
import {messageText} from "../_constants/messageText.ts";
import {randomMessage} from "../utils/RandomMessage.ts";
import {FormatDate} from "../utils/FormatDate.ts";
import {translations} from "../_constants/translations.ts";
import type {AdaptedResponse} from "../_types/AdaptedResponse.ts";
import {WizyBotService} from "../_services/WizyBot.service.ts";

export const useWizyChat = () => {
    const [message, setMessage] = useState<Message[]>([{
        id: 1,
        text: translations.welcomeMessage,
        sender: "bot",
        timestamp: FormatDate(),
    }]);
    const [product, setProduct] = useState<AdaptedResponse['products']>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const messagesEndRef = useRef<HTMLDivElement>(null);
    //Reference for auto-scrolling when messages exceed the height of the chat container
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }, [message, product]);
    //This function handles setting the message texts and validates if the product recommendation message is being sent.
    const handleSendMessage = (text: string) => {
        setIsLoading(true)
        const newMessage: Message = {
            id: message.length + 1,
            text,
            sender: "user",
            timestamp: FormatDate(),
        };

        setMessage([...message, newMessage]);
        setIsLoading(true)
        botResponse(text)

    };
    const botResponse = (text: string) => {
        setProduct([])
        setTimeout(() => {
            setIsLoading(false)
            if (text.toLowerCase().includes(translations.activationMessage)) {
                WizyBotService.products().then((data) => {
                    setProduct(data.products
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 3)
                    );

                })

            } else {
                const botResponse: Message = {
                    id: message.length + 2,
                    text: randomMessage(messageText),
                    sender: "bot",
                    timestamp: FormatDate(),
                };
                setMessage((prev) => [...prev, botResponse]);
            }
        }, 3000);
    }
    return {
        message,
        product,
        isLoading,
        handleSendMessage,
        messagesEndRef,
    }
}