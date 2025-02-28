/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function EmailInput({ emailContent, setEmailContent }) {
  return (
    <div className="input-section">
      <label htmlFor="email-content">Paste Email Content</label>
      <textarea
        id="email-content"
        className="gradient-border"
        value={emailContent}
        onChange={(e) => setEmailContent(e.target.value)}
        placeholder="Paste the email you want to reply to here..."
        rows={8}
      />
    </div>
  );
}

export default EmailInput;