import React from 'react';

function PasswordHistory({ history }) {
  return (
    <div>
      <h2>Password History</h2>
      <ul>
        {history.map((password, index) => (
          <li key={index}>{password}</li>
        ))}
      </ul>
    </div>
  );
}

export default PasswordHistory;
