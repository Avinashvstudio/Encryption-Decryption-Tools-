// src/components/VigenereCipher.js
import { useState } from 'react';

const VigenereCipher = () => {
  const [encryptText, setEncryptText] = useState('');
  const [encryptKey, setEncryptKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  
  const [decryptText, setDecryptText] = useState('');
  const [decryptKey, setDecryptKey] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const vigenereEncrypt = () => {
    let result = '';
    const keyLength = encryptKey.length;

    for (let i = 0; i < encryptText.length; i++) {
      const charCode = encryptText.charCodeAt(i);
      const keyCharCode = encryptKey.charCodeAt(i % keyLength);

      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 + keyCharCode - 65) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 + keyCharCode - 97) % 26) + 97);
      } else {
        result += encryptText.charAt(i);
      }
    }

    setEncryptedText(result);
  };

  const vigenereDecrypt = () => {
    let result = '';
    const keyLength = decryptKey.length;

    for (let i = 0; i < decryptText.length; i++) {
      const charCode = decryptText.charCodeAt(i);
      const keyCharCode = decryptKey.charCodeAt(i % keyLength);

      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 - (keyCharCode - 65) + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 - (keyCharCode - 97) + 26) % 26) + 97);
      } else {
        result += decryptText.charAt(i);
      }
    }

    setDecryptedText(result);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Vigenère Cipher Encryption/Decryption</h1>

      {/* Encryption Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Encryption</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter text..."
          value={encryptText}
          onChange={(e) => setEncryptText(e.target.value)}
        ></textarea>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter key..."
          value={encryptKey}
          onChange={(e) => setEncryptKey(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          onClick={vigenereEncrypt}
        >
          Encrypt
        </button>
        <div className="mt-4">
          <strong>Encrypted Text:</strong>
          <p className="border border-gray-300 p-2 rounded mt-2">{encryptedText}</p>
        </div>
      </div>

      {/* Decryption Section */}
      <div>
        <h2 className="text-xl font-bold mb-2">Decryption</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter text..."
          value={decryptText}
          onChange={(e) => setDecryptText(e.target.value)}
        ></textarea>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter key..."
          value={decryptKey}
          onChange={(e) => setDecryptKey(e.target.value)}
        />
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
          onClick={vigenereDecrypt}
        >
          Decrypt
        </button>
        <div className="mt-4">
          <strong>Decrypted Text:</strong>
          <p className="border border-gray-300 p-2 rounded mt-2">{decryptedText}</p>
        </div>
      </div>
    </div>
  );
};

export default VigenereCipher;
