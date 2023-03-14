import "./App.css";
import Main from "./components/Main";

// Web3ModalV2
import { Web3Modal } from "@web3modal/react";
import { web3ModalConfig } from "./components/headers/Web3ModalHeaderv2";
function App() {
  return (
    <>
      <Main />
      <Web3Modal config={web3ModalConfig} />
    </>
  );
}

export default App;
