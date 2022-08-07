/** @jsxImportSource @compiled/react */
import Head from "next/head";
import Image from "next/image";
import ConnectWalletSvg from "../images/connect-wallet.svg";

export default function Footer() {
  return (
    <div
      css={{
        width: "100%",
        backgroundColor: "#181350",
        display: "flex",
        padding: "0px 0px 47px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <p
        css={{
          fontSize: "18px",
          color: "#FFFFFF",
          fontWeight: "bold",
          lineHeight: "22px",
          fontFamily: "Montserrat",
          margin: "0px 0px 0px 0px",
          marginBottom: "10px",
        }}
      >
        Copyrights 2022
      </p>
      <p
        css={{
          fontSize: "16px",
          color: "#3671CA",
          fontWeight: "bold",
          lineHeight: "22px",
          margin: "0px 0px 0px 0px",
          fontFamily: "Montserrat",
        }}
      >
        NFT Transcript
      </p>
    </div>
  );
}
