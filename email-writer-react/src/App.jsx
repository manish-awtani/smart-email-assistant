/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import useTheme from "./hooks/useTheme";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import EmailInput from "./components/EmailInput/EmailInput";
import ReplyOutput from "./components/ReplyOutput/ReplyOutput";
import ToneSelector from "./components/ToneSelector/ToneSelector";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { isDarkMode, toggleTheme } = useTheme();

  const handleGenerateReply = async () => {
    if (!emailContent.trim()) {
      alert("Please paste an email to generate a reply");
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(
        "http://localhost:8080/api/email/generate", { emailContent, tone }
      );
      setGeneratedReply(typeof response.data === "string" ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError("Failed to generate email reply. Please try again.")
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <header>
        <h1>Email Reply Generator</h1>
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </header>

      <main>
        <EmailInput emailContent={emailContent} setEmailContent={setEmailContent} />

        <div className="controls">
          <ToneSelector tone={tone} setTone={setTone} />
          <button 
            className="generate-btn" 
            onClick={handleGenerateReply} 
            disabled={loading}
          >
            {/* {loading ? 'Generating...' : 'Generate Reply'} */}
            {loading ? <CircularProgress size={24} color="white"/>  : 'Generate Reply'}
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}
        <ReplyOutput generatedReply={generatedReply} />
      </main>
    </div>
  );
}

export default App;
