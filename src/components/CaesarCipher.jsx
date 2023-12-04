// src/components/CaesarCipher.js
import { useState } from "react";

const CaesarCipher = () => {
  const [encryptionText, setEncryptionText] = useState("");
  const [decryptionText, setDecryptionText] = useState("");
  const [shift, setShift] = useState(0);
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const encrypt = () => {
    let result = "";

    for (let i = 0; i < encryptionText.length; i++) {
      let charCode = encryptionText.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        result += encryptionText.charAt(i);
      }
    }

    setEncryptedText(result);
  };

  const decrypt = () => {
    let result = "";

    for (let i = 0; i < decryptionText.length; i++) {
      let charCode = decryptionText.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
      } else {
        result += decryptionText.charAt(i);
      }
    }

    setDecryptedText(result);
  };

  return (
    <div className="container mx-auto mt-8 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-3xl font-bold mb-4">Caesar Cipher Encryption/Decryption</h1>

      {/* Encryption Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Encryption</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter text..."
          value={encryptionText}
          onChange={(e) => setEncryptionText(e.target.value)}
        ></textarea>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter shift value..."
          value={shift}
          onChange={(e) => setShift(parseInt(e.target.value, 10))}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          onClick={encrypt}
        >
          Encrypt
        </button>
        <div className="mt-4">
          <strong>Encrypted Text:</strong>
          <p className="border border-gray-300 p-2 rounded mt-2 break-all">
            {encryptedText}
          </p>
        </div>
      </div>

      {/* Decryption Section */}
      <hr className="my-8" />
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-2">Decryption</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter text..."
          value={decryptionText}
          onChange={(e) => setDecryptionText(e.target.value)}
        ></textarea>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter shift value..."
          value={shift}
          onChange={(e) => setShift(parseInt(e.target.value, 10))}
        />
        <button
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700"
          onClick={decrypt}
        >
          Decrypt
        </button>
        <div className="mt-4">
          <strong>Decrypted Text:</strong>
          <p className="border border-gray-300 p-2 rounded mt-2 break-all">
            {decryptedText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaesarCipher;
