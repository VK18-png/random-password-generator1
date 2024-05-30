import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function GeneratedPassword({ password }) {
  return (
    <div>
      <h2>Generated Password</h2>
      <input type="text" value={password} readOnly />
      <CopyToClipboard text={password}>
        <button>Copy to Clipboard</button>
      </CopyToClipboard>
    </div>
  );
}

export default GeneratedPassword;
