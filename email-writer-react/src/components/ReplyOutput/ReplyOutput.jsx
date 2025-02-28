/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Clipboard, Check } from "lucide-react";

function ReplyOutput({ generatedReply }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedReply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!generatedReply) return null;
  
  return (
    <div className="output-section">
      <h2>Generated Reply</h2>
      <div className="reply-output gradient-border">
        <pre>{generatedReply}</pre>
        <button 
          className="copy-button" 
          onClick={handleCopy} 
          aria-label="Copy to clipboard"
        >
          {copied ? <Check size={22} color="#34D399" /> : <Clipboard size={22} />}
          </button>
      </div>
    </div>
  );
}

export default ReplyOutput;