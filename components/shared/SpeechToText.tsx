"use client";
import 'regenerator-runtime/runtime'

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = () => {
    const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <section className="w-screen h-screen flex items-center justify-center flex-col space-y-4">
      <div className="main-content w-[20vw] h-[20vh] border rounded-md p-2 m-2">
        {transcript}
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-1 bg-black text-white rounded-md hover:bg-black/80">
          copy
        </button>
        <button
          className="px-4 py-1 bg-black text-white rounded-md hover:bg-black/80"
          onClick={() => SpeechRecognition.startListening({ continuous: true, language: "en-IN" })}
        >
          start
        </button>
        <button
          className="px-4 py-1 bg-black text-white rounded-md hover:bg-black/80"
          onClick={SpeechRecognition.stopListening}
        >
          stop
        </button>
      </div>
    </section>
  );
}

export default SpeechToText