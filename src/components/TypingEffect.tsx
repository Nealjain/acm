import { useState, useEffect } from "react"; 

 interface TypingEffectProps { 
   texts: string[]; 
   speed?: number;      // typing speed 
   deleteSpeed?: number; // backspace speed 
   pause?: number;       // pause after typing 
   className?: string; 
 } 

 export default function TypingEffect({ 
   texts, 
   speed = 100, 
   deleteSpeed = 50, 
   pause = 1000, 
   className = "", 
 }: TypingEffectProps) { 
   const [displayText, setDisplayText] = useState(""); 
   const [textIndex, setTextIndex] = useState(0); 
   const [charIndex, setCharIndex] = useState(0); 
   const [isDeleting, setIsDeleting] = useState(false); 
   const [showCursor, setShowCursor] = useState(true); 

   useEffect(() => { 
     let timeout: NodeJS.Timeout; 

     if (!isDeleting && charIndex < texts[textIndex].length) { 
       timeout = setTimeout(() => { 
         setDisplayText((prev) => prev + texts[textIndex][charIndex]); 
         setCharIndex((prev) => prev + 1); 
       }, speed); 
     } else if (isDeleting && charIndex > 0) { 
       timeout = setTimeout(() => { 
         setDisplayText((prev) => prev.slice(0, -1)); 
         setCharIndex((prev) => prev - 1); 
       }, deleteSpeed); 
     } else if (!isDeleting && charIndex === texts[textIndex].length) { 
       timeout = setTimeout(() => setIsDeleting(true), pause); 
     } else if (isDeleting && charIndex === 0) { 
       setIsDeleting(false); 
       setTextIndex((prev) => { 
         let next = Math.floor(Math.random() * texts.length); 
         while (next === prev && texts.length > 1) { 
           next = Math.floor(Math.random() * texts.length); 
         } 
         return next; 
       }); 
     } 

     return () => clearTimeout(timeout); 
   }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, pause]); 

   useEffect(() => { 
     const cursorInterval = setInterval(() => { 
       setShowCursor((prev) => !prev); 
     }, 500); 
     return () => clearInterval(cursorInterval); 
   }, []); 

   return ( 
     <span className={className}> 
       {displayText} 
       <span className={`inline-block ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span> 
     </span> 
   ); 
 }