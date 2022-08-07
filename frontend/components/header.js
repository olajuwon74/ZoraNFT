/** @jsxImportSource @compiled/react */
import { useEffect } from "react";
import ConnectWalletSvg from "../images/connect-wallet.svg";
import useConnectWallet from "../utils/web3/connectWallet";
import { useAppContext } from "../context/state";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Header() {
  const { connected, setMetamaskPresent } = useAppContext();
  const {
    handleAccountChanged,
    handleChainChanged,
    eagerConnect,
    disConnectWallet,
    connectWallet,
  } = useConnectWallet();

  useEffect(() => {
    if (!window.ethereum) {
      setMetamaskPresent(false);
      return;
    }
    const localAccount = localStorage.getItem("myAddress");
    if (localAccount) {
      eagerConnect();
    }
    window.ethereum.on("connect", eagerConnect);
    window.ethereum.on("accountsChanged", handleAccountChanged);
    window.ethereum.on("chainChanged", handleChainChanged);
  }, [
    eagerConnect,
    handleAccountChanged,
    handleChainChanged,
    setMetamaskPresent,
  ]);
  return (
    <div css={{ width: "100%" }}>
      <ToastContainer />
      <div
        css={{
          width: "100%",
          backgroundColor: "#181350",
          display: "flex",
          padding: "33px 0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          css={{
            fontSize: "18px",
            color: "#3671CA",
            fontWeight: "bold",
            lineHeight: "22px",
            fontFamily: "Montserrat",
            margin: "0px",
          }}
        >
          NFT Transcript
        </p>
        {connected ? (
          <button
            onClick={disConnectWallet}
            css={{
              borderColor: "#3671CA",
              borderWidth: "2px",
              padding: "19px 0px",
              maxWidth: "238px",
              width: "100%",
              fontSize: "18px",
              color: "#F5F5F5",
              fontWeight: "bold",
              lineHeight: "22px",
              fontFamily: "Montserrat",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            <span> Disconnect Wallet</span>
          </button>
        ) : (
          <button
            onClick={connectWallet}
            css={{
              borderColor: "#3671CA",
              borderWidth: "2px",
              padding: "19px 0px",
              maxWidth: "238px",
              width: "100%",
              fontSize: "18px",
              color: "#F5F5F5",
              fontWeight: "bold",
              lineHeight: "22px",
              fontFamily: "Montserrat",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            <ConnectWalletSvg css={{ marginRight: "25px" }} />
            <span>Connect Wallet</span>
          </button>
        )}
      </div>
    </div>
  );
}
