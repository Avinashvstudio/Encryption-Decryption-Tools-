// src/components/RSAAlgorithm.js
import { useState } from "react";

const RSAAlgorithm = () => {
  const [plaintext, setPlaintext] = useState("");
  const [publicKey, setPublicKey] = useState({ n: 0, e: 0 });
  const [privateKey, setPrivateKey] = useState({ n: 0, d: 0 });
  const [ciphertext, setCiphertext] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const generateKeys = () => {
    const p = 61;
    const q = 53;

    const n = p * q;
    const phi = (p - 1) * (q - 1);

    let e = 17;
    while (gcd(e, phi) !== 1) {
      e++;
    }

    const d = modInverse(e, phi);

    setPublicKey({ n, e });
    setPrivateKey({ n, d });
  };

  const encrypt = () => {
    const { n, e } = publicKey;
    const encryptedText = plaintext
      .split("")
      .map((char) => modPow(BigInt(char.charCodeAt(0)), BigInt(e), BigInt(n)))
      .join(" ");
    setCiphertext(encryptedText);
  };

  const decrypt = () => {
    const { n, d } = privateKey;
    const decryptedText = ciphertext
      .split(" ")
      .map((char) =>
        String.fromCharCode(Number(modPow(BigInt(char), BigInt(d), BigInt(n))))
      )
      .join("");
    setDecryptedText(decryptedText);
  };

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const modInverse = (a, m) => {
    for (let i = 1; i < m; i++) {
      if ((a * i) % m === 1) {
        return i;
      }
    }
    return 1;
  };

  const modPow = (base, exp, mod) => {
    let result = BigInt(1);
    base = base % mod;
    while (exp > 0) {
      if (exp % 2n === 1n) {
        result = (result * base) % mod;
      }
      exp = exp >> 1n;
      base = (base * base) % mod;
    }
    return result;
  };

  return (
    <div className="container mx-auto mt-8 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-3xl font-bold mb-4">
        RSA Algorithm Encryption/Decryption
      </h1>

      <div className="mb-8">
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          onClick={generateKeys}
        >
          Generate Keys
        </button>
        <div className="mt-4">
          <strong>Public Key:</strong>
          <p className="border border-gray-300 p-2 rounded mt-2 break-all">
            {`n: ${publicKey.n}, e: ${publicKey.e}`}
          </p>
          <strong>Private Key:</strong>
          <p className="border border-gray-300 p-2 rounded mt-2 break-all">
            {`n: ${privateKey.n}, d: ${privateKey.d}`}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter plaintext..."
          value={plaintext}
          onChange={(e) => setPlaintext(e.target.value)}
        ></textarea>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          onClick={encrypt}
        >
          Encrypt
        </button>
        <div className="mt-4">
          <strong>Ciphertext:</strong>
          <p className="border border-gray-300 p-2 rounded mt-2 break-all">
            {ciphertext}
          </p>
        </div>
      </div>

      <hr className="my-8" />

      <div className="mt-10">
      <strong>Ciphertext:</strong>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter ciphertext..."
          value={ciphertext}
          onChange={(e) => setCiphertext(e.target.value)}
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

export default RSAAlgorithm;
