import { useState, useEffect, useCallback } from "react";
import { useAppContext } from "../../context/state";
import { ethers, utils, Contract } from "ethers";
import { CONTRACT_ADDRESS, abi } from "./constants";
import { toast } from "react-toastify";

// const { setConnected, setAccount } = useAppContext();

export default function useNFT() {
  const { setTokenId } = useAppContext();
  const mintNFt = async (_matricNumber) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const ERC721Instance = new Contract(CONTRACT_ADDRESS, abi, signer);
      const token = await ERC721Instance.ResultNFT(
        "4.76",
        _matricNumber,
        "Stanford University"
      );
      const tokenResults = await token.wait();
      const tokenId = tokenResults.events[0].args.tokenId;
      setTokenId(tokenId.toString());
      if (tokenResults.status === 1) {
        return toast.success("NFT created successfully");
      } else {
        return toast.error("NFT creation failed");
      }
    } catch (err) {
      toast.error("Error creating NFT");
    }
  };

  return {
    mintNFt,
  };
}
