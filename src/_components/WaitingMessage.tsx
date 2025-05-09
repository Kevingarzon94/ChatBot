import * as React from "react";

export const WaitingMessage: React.FC = () => (
    <div className="flex justify-start mb-4">
        <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center shadow-sm">
            <div className="flex space-x-1">
                <span className="block w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{animationDelay: '0ms'}}></span>
                <span className="block w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{animationDelay: '150ms'}}></span>
                <span className="block w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{animationDelay: '300ms'}}></span>
            </div>
        </div>
    </div>
)