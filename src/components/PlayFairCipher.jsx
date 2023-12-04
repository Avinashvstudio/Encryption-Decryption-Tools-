import { useState } from "react";
import { encipher,decipher } from "crypto-classic-playfair";

const PlayfairCipher = () => {
  const [encryptText, setEncryptText] = useState("");
  const [encryptKey, setEncryptKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  
  const [decryptText, setDecryptText] = useState("");
  const [decryptKey, setDecryptKey] = useState("");
  const [decryptedText, setDecryptedText] = useState("");


  const playfairEncrypt = () => {

    const result = encipher(encryptText, encryptKey);
    setEncryptedText(result);
  };
  
  const playfairDecrypt = () => {
    const result = decipher(decryptText, decryptKey);
    setDecryptedText(result);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">
        Playfair Cipher Encryption/Decryption
      </h1>

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
          onClick={playfairEncrypt}
        >
          Encrypt
        </button>
        <div className="mt-4">
          <strong>Encrypted Text:</strong>
          <p className="border border-gray-300 p-2 rounded mt-2">
            {encryptedText}
          </p>
        </div>
      </div>

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
          onClick={playfairDecrypt}
        >
          Decrypt
        </button>
        <div className="mt-4">
          <strong>Decrypted Text:</strong>
          <p className="border border-gray-300 p-2 rounded mt-2">
            {decryptedText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayfairCipher;
