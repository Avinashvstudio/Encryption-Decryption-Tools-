// src/components/TranspositionCipher.js
import { useState } from "react";
import C from "js-ktc";

const TranspositionCipher = () => {
  const [encryptionPlaintext, setEncryptionPlaintext] = useState("");
  const [encryptionKey, setEncryptionKey] = useState(0);
  const [encryptionResult, setEncryptionResult] = useState("");

  const [decryptionCiphertext, setDecryptionCiphertext] = useState("");
  const [decryptionKey, setDecryptionKey] = useState(0);
  const [decryptionResult, setDecryptionResult] = useState("");

  const encrypt = () => {
    const ktc = new C(encryptionKey);
    const result = ktc.encrypt(encryptionPlaintext);
    setEncryptionResult(result);
    setEncryptionResult(result);
  };

  const decrypt = () => {
    const ktc = new C(encryptionKey);
    const result = ktc.decrypt(decryptionCiphertext);
    setDecryptionResult(result);
  };

  return (
    <div className="container mx-auto mt-8 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-3xl font-bold mb-4">
        Transposition Cipher Encryption/Decryption
      </h1>

      {/* Encryption Section */}
      <div className="mb-8">
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter text..."
          value={encryptionPlaintext}
          onChange={(e) => setEncryptionPlaintext(e.target.value)}
        ></textarea>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter key value..."
          value={encryptionKey}
          onChange={(e) => setEncryptionKey(e.target.value)}
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
            {encryptionResult}
          </p>
        </div>
      </div>

      <hr className="my-8" />

      {/* Decryption Section */}
      <div className="mt-10">
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter ciphertext..."
          value={decryptionCiphertext}
          onChange={(e) => setDecryptionCiphertext(e.target.value)}
        ></textarea>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter key value..."
          value={decryptionKey}
          onChange={(e) => setDecryptionKey(e.target.value)}
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
            {decryptionResult}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TranspositionCipher;
