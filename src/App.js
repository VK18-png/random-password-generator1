import React, { useState, useEffect } from 'react';
import PasswordOptions from './PasswordOptions';
import GeneratedPassword from './GeneratedPassword';
import PasswordHistory from './PasswordHistory';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('passwordHistory')) || [];
    setHistory(storedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem('passwordHistory', JSON.stringify(history));
  }, [history]);

  const generatePassword = (length, includeNumbers, includeAlphabets, includeSpecialChars) => {
    const numbers = '0123456789';
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let characters = '';

    if (includeNumbers) characters += numbers;
    if (includeAlphabets) characters += alphabets;
    if (includeSpecialChars) characters += specialChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(newPassword);
    const newHistory = [newPassword, ...history].slice(0, 5);
    setHistory(newHistory);
  };

  return (
    <div className="App">
      <h1>Random Password Generator</h1>
      <PasswordOptions onGenerate={generatePassword} />
      <GeneratedPassword password={password} />
      <PasswordHistory history={history} />
    </div>
  );
}

export default App;
