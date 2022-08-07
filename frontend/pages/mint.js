/** @jsxImportSource @compiled/react */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Form from "../components/form";
import { useAppContext } from "../context/state";
import { Circles } from "react-loader-spinner";
import { Web3Storage } from "web3.storage";

export default function Mint() {
  const { loading, ipfsCid, setIpfsCid } = useAppContext();
  const ref = React.createRef();

  async function storeFiles(files) {
    const client = makeStorageClient();
    console.log(2);
    const cid = await client.put(files);
    console.log(3);
    setIpfsCid(cid);
    return cid;
  }

  const uploadFile = async (e) => {
    if (e.target.files.length > 0) {
      toast.success("File uploaded to website");
      toast.success("uploading to ipfs in progress");
      try {
        const cid = await storeFiles(e.target.files);
        console.log(cid);
        toast.success("uploading to ipfs successful");
      } catch {
        toast.error("uploading to ipfs failed");
      }
    }
  };

  function makeStorageClient() {
    console.log(1);
    return new Web3Storage({
      token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM0RkE5MjdCRDIzMjg4YzZkQmJlZDViODYxMDk5RTgxODJBMEQ0NGQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTMyMjMzNDI0NjEsIm5hbWUiOiJhZGViYXlvIn0.OLidIiQnaV2jdj-0FDS2kBisY00bIT2qX5giUQ9dN-E`,
    });
  }

  return (
    <div
      css={{
        width: "100%",
        backgroundColor: "#181350",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
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
        <Form />
        <div
          css={{
            width: "100%",
            display: "flex",
            flexDirection: "flex-col",
            alignItems: "center",
          }}
        >
          <button
            css={{
              marginTop: "20px",
              borderColor: "#3671CA",
              borderWidth: "0px",
              padding: "19px 0px",
              maxWidth: "238px",
              width: "100%",
              fontSize: "18px",
              color: "#3671CA",
              fontWeight: "600",
              lineHeight: "22px",
              fontFamily: "Montserrat",
              backgroundColor: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            <input
              onChange={(e) => {
                uploadFile(e);
              }}
              type="file"
              css={{
                width: "100%",
                height: "100%",
                opacity: "0",
                position: "absolute",
              }}
            />
            <p>Upload Transcript on Ipfs</p>
          </button>
          <div
            css={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {ipfsCid && <p> Ipfs CID for transcript: {ipfsCid}</p>}
          </div>
        </div>
      </div>
      {loading && (
        <div
          css={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: "0.5",
            position: "absolute",
            top: "0",
            display: loading ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Circles color="#917EFF" height={80} width={80} />
        </div>
      )}
    </div>
  );
}
