import React, { useState } from 'react';

function PasswordOptions({ onGenerate }) {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeAlphabets, setIncludeAlphabets] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const handleGenerate = () => {
    onGenerate(length, includeNumbers, includeAlphabets, includeSpecialChars);
  };

  return (
    <div>
      <label>
        Length:
        <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} />
      </label>
      <label>
        Include Numbers:
        <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
      </label>
      <label>
        Include Alphabets:
        <input type="checkbox" checked={includeAlphabets} onChange={(e) => setIncludeAlphabets(e.target.checked)} />
      </label>
      <label>
        Include Special Characters:
        <input type="checkbox" checked={includeSpecialChars} onChange={(e) => setIncludeSpecialChars(e.target.checked)} />
      </label>
      <button onClick={handleGenerate}>Generate Password</button>
    </div>
  );
}

export default PasswordOptions;
