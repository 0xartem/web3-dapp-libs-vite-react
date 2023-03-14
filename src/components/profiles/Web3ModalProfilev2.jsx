import { useContract } from "@web3modal/react";

export default function Web3ModalProfilev2({ address, contratAbi }) {
  const { contract, isReady } = useContract({
    address,
    contratAbi,
  });
  return (
    <section>
      <h1>useContract</h1>

      <p>
        This example uses
        <a
          href={`https://etherscan.io/address/${address}#code`}
          target="_blank"
          rel="noopener noreferer"
        >
          {contract?.name} Contract
        </a>
        on Ethereum
      </p>

      <ul>
        <li>
          Contract Address: <span>{contract?.address}</span>
        </li>
      </ul>
    </section>
  );
}
