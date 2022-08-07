/** @jsxImportSource @compiled/react */
import { useEffect } from "react";
import { CONTRACT_ADDRESS } from "../utils/web3/constants";
import Link from "next/link";
import Header from "../components/header";
import { useRouter } from "next/router";
import { useAppContext } from "../context/state";

export default function Token() {
  const { tokenId } = useAppContext();
  const router = useRouter();
  let openseaUrl =
    "https://testnets.opensea.io/assets/mumbai/" +
    CONTRACT_ADDRESS +
    "/" +
    tokenId;

  useEffect(() => {
    if (!tokenId) {
      router.push("/mint");
    }
  }, [tokenId]);
  return (
    <div
      css={{
        width: "100%",
        backgroundColor: "#181350",
        minHeight: "100vh",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          width: "100%",
          maxWidth: "1512px",
          padding: "0px 36px",
          "@media (max-width: 991px)": {
            padding: "0px 30px",
          },
        }}
      >
        <Header />
        <div
          css={{
            maxWidth: "800px",
            width: "100%",
            display: "flex",
            margin: "0 auto",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            css={{
              fontSize: "29px",
              color: "#FFFFFF",
              fontWeight: "700",
              lineHeight: "36px",
              fontFamily: "Montserrat",
              margin: "0",
            }}
          >
            Congratulations!!
          </p>
          <p
            css={{
              fontSize: "24px",
              color: "#FFFFFF",
              fontWeight: "700",
              lineHeight: "29px",
              fontFamily: "Montserrat",
              margin: "0",
            }}
          >
            You have successfully generated your NFT.
          </p>
          <button
            css={{
              borderColor: "#3671CA",
              borderWidth: "0px",
              backgroundColor: "#3671CA",
              padding: "21px 21px",
              width: "100%",
              fontSize: "18px",
              color: "#F5F5F5",
              fontWeight: "bold",
              lineHeight: "22px",
              fontFamily: "Montserrat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "80px",
              borderRadius: "5px",
            }}
          >
            <Link href={openseaUrl} target="_blank" rel="noreferrer">
              View on opensea
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
