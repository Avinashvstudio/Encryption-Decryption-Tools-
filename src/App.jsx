import CaesarCipher from "./components/CaesarCipher";
import VigenereCipher from "./components/VengereCipher";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayfairCipher from "./components/PlayFairCipher";
import RSAAlgorithm from "./components/RSACipher";
import TranspositionCipher from "./components/TranspositionCipher";
import Hero from "./components/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/caesar-cipher",
    element: <CaesarCipher /> ,
  },
  {
    path: "/vigenere-cipher",
    element: <VigenereCipher /> ,
  },
  {
    path: "/play-fair-cipher",
    element: <PlayfairCipher /> ,
  },
  {
    path: "/rsa-cipher",
    element: <RSAAlgorithm /> ,
  },
  {
    path: "/transposition-cipher",
    element: <TranspositionCipher /> ,
  },
]);

function App() {
  return (
    <>
      <Topbar />
      <div>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
