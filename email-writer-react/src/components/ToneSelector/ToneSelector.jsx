/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function ToneSelector({ tone, setTone }) {
  return (
    <div className="tone-selector">
      <label htmlFor="tone">Select Tone</label>
      <select
        id="tone"
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        className="gradient-border"
      >
        <option value="Professional">Professional</option>
        <option value="Friendly">Friendly</option>
        <option value="Formal">Formal</option>
        <option value="Casual">Casual</option>
        <option value="Enthusiastic">Enthusiastic</option>
      </select>
    </div>
  );
}

export default ToneSelector;