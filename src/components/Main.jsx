import { Web3ModalHeaderv2 } from "../components/headers/Web3ModalHeaderv2";
import Web3ModalProfilev2 from "../components/profiles/Web3ModalProfilev2";
import EmoftiesAbi from "../../abi/emofties/contracts/EmoftiesProtocol.sol/EmoftiesProtocol.json";

export default function Main() {
  return (
    <div>
      <Web3ModalHeaderv2 />
      <Web3ModalProfilev2
        address={"0x2dBa017c6A9c9e6302d973E93Eba7491A8D389f8"}
        contratAbi={EmoftiesAbi.abi}
      />
    </div>
  );
}
