import { useState } from "react";
import { Global } from "../../components/pages/Global";
import Profile from "../../components/sidebar/Profile";
import ChatView from "../../components/sidebar/Chatview";

export default function Home() {
	const [activeTab, setActiveTab] = useState("friends");

	const renderContent = () => {
		switch (activeTab) {
			case "friends":
				// return <Friends />;
				return <ChatView/>
			case "global":
				return <Global />;
			case "profile":
				return <Profile />;
			default:
				return null;
		}
	};

	return (
		<div className="flex flex-col h-[calc(100vh-0px)] w-full">
			{/* Main Content */}
			<div className="flex-1 overflow-hidden flex flex-col sm:flex-row">
				{renderContent()}
			</div>

			{/* Bottom Navigation */}
			{/* <div className="sm:hidden flex justify-around bg-gray-800 text-white p-2 border-t border-gray-700">
				<button
					className={`flex-1 p-2 ${activeTab === "friends" ? "bg-gray-700" : ""}`}
					onClick={() => setActiveTab("friends")}
				>
					Friends
				</button>
				<button
					className={`flex-1 p-2 ${activeTab === "global" ? "bg-gray-700" : ""}`}
					onClick={() => setActiveTab("global")}
				>
					Global
				</button>
				<button
					className={`flex-1 p-2 ${activeTab === "profile" ? "bg-gray-700" : ""}`}
					onClick={() => setActiveTab("profile")}
				>
					Profile
				</button>
			</div> */}
			<div className="flex justify-around bg-gray-800 text-white p-2 border-t border-gray-700 bg-opacity-0 mt-3">
				<button
					className={`flex-1 p-2 ${activeTab === "friends" ? "bg-gray-700" : ""}`}
					onClick={() => setActiveTab("friends")}
				>
					Friends
				</button>
				<button
					className={`flex-1 p-2 ${activeTab === "global" ? "bg-gray-700" : ""}`}
					onClick={() => setActiveTab("global")}
				>
					Global
				</button>
				<button
					className={`flex-1 p-2 ${activeTab === "profile" ? "bg-gray-700" : ""}`}
					onClick={() => setActiveTab("profile")}
				>
					Profile
				</button>
			</div>
		</div>
	);
}