"use client";

import useVapi from "@/hooks/use-vapi"; // Import VAPI hook from hooks directory
import Siri from "@/components/siri"; // Import Siri component
import Transcriber from "@/components/transcriber"; // Import Transcriber component

export default function Home() {
  const { conversation } = useVapi(); // Only using conversation from useVapi

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
    </main>
  );
}
