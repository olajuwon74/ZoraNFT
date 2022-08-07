/** @jsxImportSource @compiled/react */
import Head from "next/head";
import Image from "next/image";
import ConnectWalletSvg from "../images/connect-wallet.svg";
import EnterDetails from "../images/enter-details.svg";
import GenerateSvg from "../images/generate.svg";
import UploadSvg from "../images/upload.svg";

export default function HowItWorks() {
  const listOfHowItWorks = [
    {
      title: "Connect your wallet",
      description:
        "Users are expected to connect their wallets to access the portal",
      svg: ConnectWalletSvg,
    },
    {
      title: "Enter Details",
      description:
        "Specific details in relation to the school as required to be inputed correctly. This is to ensure security and authenticity",
      svg: EnterDetails,
    },
    {
      title: "Generate Transcript",
      description:
        "Users can then process to generate their transcript nft with details of their academic performance.",
      svg: GenerateSvg,
    },
    {
      title: "Upload to IPFS",
      description:
        "Upon generating transcripts users can then upload the nft transcripts to ipfs to be used on the fly",
      svg: UploadSvg,
    },
  ];
  return (
    <div
      css={{
        width: "100%",
        backgroundColor: "#181350",
        display: "flex",
        padding: "0px 0px 115px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p
        css={{
          fontSize: "24px",
          color: "#FFFFFF",
          fontWeight: "700",
          lineHeight: "29px",
          fontFamily: "Montserrat",
          margin: "0",
          marginBottom: "40px",
        }}
      >
        How it Works
      </p>

      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          "@media (max-width: 991px)": {
            flexDirection: "column",
          },
        }}
      >
        {listOfHowItWorks.map((item, index) => {
          return (
            <div
              key={item.title}
              css={{
                width: "100%",
                maxWidth: "22%",
                padding: "60px 20px 48px",
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                borderRadius: "10px",
                "@media (max-width: 991px)": {
                  maxWidth: "100%",
                },
              }}
            >
              <div
                css={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  marginBottom: "50px",
                }}
              >
                <p
                  css={{
                    fontSize: "20px",
                    color: "#FFFFFF",
                    fontWeight: "500",
                    lineHeight: "24px",
                    fontFamily: "Montserrat",
                    margin: "0",
                    marginRight: "18px",
                  }}
                >
                  {item.title}
                </p>
                <item.svg />
              </div>
              <p
                css={{
                  fontSize: "16px",
                  color: "#C4C4C4",
                  fontWeight: "400",
                  lineHeight: "20px",
                  fontFamily: "Montserrat",
                  margin: "0",
                  marginRight: "18px",
                }}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
