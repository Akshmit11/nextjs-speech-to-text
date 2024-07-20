"use client";

import useSpeechRecognitionHook from "@/hooks/useSpeechRecognitionHook";
import React, { useState } from "react";

const SpeechToText2 = () => {
  const [textContent, setTextContent] = useState("");

  const {
    hasRecognitionSupport,
    isListening,
    startListening,
    stopListening,
    text,
  } = useSpeechRecognitionHook(setTextContent);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-4">
      {hasRecognitionSupport ? (
        <>
          <textarea
            name=""
            id=""
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
            className="w-[20vw] h-[20vh] border rounded-md p-2"
            placeholder="Speech to Text"
          ></textarea>
          <button
            className="px-4 py-1 bg-black text-white rounded-md hover:bg-black/80"
            onClick={startListening}
          >
            Speak
          </button>

          {isListening && (
            <>
              <button
                className="px-4 py-1 bg-black text-white rounded-md hover:bg-black/80"
                onClick={stopListening}
              >
                Stop
              </button>
              <h1>Listening...</h1>
            </>
          )}
        </>
      ) : (
        <h1>Not Supported</h1>
      )}
    </div>
  );
};

export default SpeechToText2;
