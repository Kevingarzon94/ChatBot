import {translations} from "../_constants/translations.ts";
//Contains the header at the top of the chat
export const ChatHeader: React.FC = () => (
    <div className="text-white p-3 bg-gradient-to-r from-blue-800 to-blue-500">
        <div className="flex items-start space-x-3">
            <div className="w-9 h-9 mt-2">
                <svg
                    className="w-full h-full text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </div>
            <div>
                <h3 className="text-lg font-semibold">{translations.headerText}</h3>
                <p className="text-sm">{translations.botName}</p>
            </div>
        </div>
        <p className="text-sm mt-2"><span className='text-green-400'>•</span> {translations.headerText2}</p>
    </div>
)