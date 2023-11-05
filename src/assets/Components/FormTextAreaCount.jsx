import React, { useState } from "react";

export const FormTextAreaCount = ({ newThought, onNewThoughtChange }) => {
  const [textAreaCount, setTextAreaCount] = useState(0);

  const reCalculate = (e) => {
    setTextAreaCount(e.target.value.length);
    onNewThoughtChange(e); 
  };

  return (
    <div>
      <textarea
        type="text"
        rows={3}
        value={newThought}
        onChange={reCalculate}
        maxLength={140}
      />

      <p className="textareaWordCount">
        {textAreaCount}/140
      </p>
    </div>
  );
};
