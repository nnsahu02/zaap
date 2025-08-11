import { useState } from "react";
import MessageContainer from "../messages/MessageContainer";
import { Friends } from "../pages/Friends";

export default function ChatView() {
    const [activeView, setActiveView] = useState("friends");

    return (
        <div className="flex h-[calc(100vh-2rem)] w-full sm:gap-4">
            {/* Friends List */}
            <div
                className={`
                ${activeView === "friends" ? "block" : "hidden"}
                sm:w-[20%] w-full
                border-r border-gray-300
                pr-4
                mt-3
                `
                }
            >
                <Friends onSelectFriend={() => setActiveView("messages")} />
            </div>

            {/* Message Container */}
            <div
                className={`
          ${activeView === "messages" ? "block" : "hidden"}
          mt-4
          sm:block
          sm:w-[80%] w-full
        `}
            >
                <MessageContainer onBack={() => setActiveView("friends")} />
            </div>
        </div>
    );
}