/** @jsxImportSource @compiled/react */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../images/hero-image.png";
import HeroImage2 from "../images/hero-image2.png";

export default function Hero() {
  return (
    <div
      css={{
        width: "100%",
        backgroundColor: "#181350",
        display: "flex",
        padding: "33px 0px 64px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        css={{
          maxWidth: "446px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "20px",
          "@media (max-width: 991px)": {
            maxWidth: "100%",
          },
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
          }}
        >
          Get your transcript from anywhere
          <span> seamlessly</span>
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
          <Link href="/mint">Generate Transcript</Link>
        </button>
      </div>
      <div
        css={{
          maxWidth: "685px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          "@media (max-width: 991px)": {
            display: "none",
          },
        }}
      >
        <div
          css={{
            position: "relative",
            maxWidth: "466px",
            width: "100%",
            height: "236px",
          }}
        >
          <Image src={HeroImage} alt="image" layout="intrinsic"></Image>
        </div>
        <div
          css={{
            position: "relative",
            maxWidth: "466px",
            width: "100%",
            height: "236px",
            justifySelf: "flex-end",
            alignSelf: "flex-end",
            marginTop: "-74px",
            zIndex: "1",
          }}
        >
          <Image src={HeroImage2} alt="image" layout="intrinsic"></Image>
        </div>
      </div>
    </div>
  );
}
