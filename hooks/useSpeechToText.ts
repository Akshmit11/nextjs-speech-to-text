'use client';

import React, { useEffect, useRef, useState } from 'react'

const useSpeechToText = (options: any) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  // useEffect(() => {
  //   if(!("webkitSpeechRecognition" in window)) {
  //       console.error("Web Speech API is not supported");
  //       return;
  //   }

  //   // recognitionRef.current = new window.webkitSpeechRecognition();
  //   // const recognition = recognitionRef.current;
  //   // recognition.intermResults = options.intermResults || true;
  //   // recognition.lang = options.lang || "en-US";
  //   // recognition.continuous = options.continuous || false;

  //   // if("webkitSpeechGrammerList" in window) {
  //   //     const grammer = "#JSGF V1.0; grammer punctuation; public <punc> = . | ? | ! | ; | : ;";
  //   //     const speechGrammerList = new window.webkitSpeechGrammerList();
  //   //     speechGrammerList.addFromString(grammer, 1);
  //   //     recognition.grammers = speechGrammerList;
  //   // }

  //   // recognition.onresult = (event) => {
  //   //     let text = "";
  //   //     for (let i = 0; i < event.results.length; i++) { 
            
  //   //     }
  //   // }

  // }, [])
  
}

export default useSpeechToText