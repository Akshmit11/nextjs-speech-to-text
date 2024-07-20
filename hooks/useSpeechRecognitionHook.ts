'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

let recognition: any = null;
if("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
}

const useSpeechRecognitionHook = (setTextContent: Dispatch<SetStateAction<string>>) => {
    const [text, setText] = useState("");
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if(!recognition) return;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            console.log("onresult event: ", event);
            setTextContent(event.results[0][0].transcript)
            recognition.stop();
            setIsListening(false);
        }

    }, []);

    const startListening = () => {
        setTextContent("");
        setIsListening(true);
        recognition.start();
    }
    
    const stopListening = () => {
        setIsListening(false);
        recognition.stop();
    }

    return {
        text,
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport: !!recognition,
    }
    
}

export default useSpeechRecognitionHook