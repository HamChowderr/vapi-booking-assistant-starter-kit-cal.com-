"use client";

import useVapi from "../hooks/use-vapi"; // Import VAPI hook
import Siri from "../components/siri"; // Import Siri component
import Transcriber from "../components/transcriber"; // Import Transcriber component
import Button from "../components/ui/button"; // Import Button component

export default function Home() {
  const {
    volumeLevel,
    isSessionActive,
    conversation,
    toggleCall,
    sendMessage,
    say,
    toggleMute,
    isMuted,
  } = useVapi();

  return (
    <main className="flex flex-col items-center justify-center h-screen p-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Vapi Blocks</h1>
        <p className="text-lg">Siri-like assistant and transcription features below:</p>
      </div>

      {/* Render Siri Component */}
      <div className="mb-8">
        <Siri theme="ios9" />
      </div>

      {/* Render Transcriber Component */}
      <div className="mb-8">
        <Transcriber conversation={conversation} />
      </div>

      {/* Button to Toggle Vapi Session */}
      <div className="mt-4">
        <Button onClick={toggleCall}>
          {isSessionActive ? "End Call with Siri" : "Start Call with Siri"}
        </Button>

        {/* Button to Toggle Mute/Unmute */}
        <Button onClick={toggleMute} className="ml-4">
          {isMuted ? "Unmute" : "Mute"}
        </Button>
      </div>

      {/* Display volume level */}
      <div className="mt-4">
        <p>Volume Level: {volumeLevel}</p>
      </div>
    </main>
  );
}
