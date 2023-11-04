import React, { useState } from "react";

export const FormTextAreaCount = ({ newThought, onNewThoughtChange }) => {
  const [textAreaCount, setTextAreaCount] = useState(0);

  const reCalculate = (e) => {
    setTextAreaCount(e.target.value.length);
    onNewThoughtChange(e); // Call the original onChange handler to update newThought
  };

  return (
    <div>
      <textarea
        type="text"
        rows={3} // Use "rows" instead of "row"
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
