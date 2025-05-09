import {WizyChayInterface} from "./_components/WizyChayInterface.tsx";
import {ChatHeader} from "./_components/ChatHeader.tsx";
import {WizyChatProvider} from "./_context/WizyChatProvider.tsx";


export const WizyBot: React.FC = () => {
    return (
        <div className="max-w-xl mx-auto h-screen flex flex-col border border-gray-300 rounded-lg">
            <WizyChatProvider>
                <ChatHeader/>
                <WizyChayInterface/>
            </WizyChatProvider>
        </div>
    );
}