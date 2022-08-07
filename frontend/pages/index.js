/** @jsxImportSource @compiled/react */
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Hero from "../components/hero";
import HowItWorks from "../components/how-it-works";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div
      css={{
        width: "100%",
        backgroundColor: "#181350",
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
        <Hero />
        <HowItWorks />
        <Footer />
      </div>
    </div>
  );
}
