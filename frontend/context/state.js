// import
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [metamaskPresent, setMetamaskPresent] = useState(true);
  const [tokenId, setTokenId] = useState();
  const [loading, setLoading] = useState(false);
  const [ipfsCid, setIpfsCid] = useState();

  let sharedState = {
    connected,
    setConnected,
    account,
    setAccount,
    network,
    setNetwork,
    metamaskPresent,
    setMetamaskPresent,
    tokenId,
    setTokenId,
    loading,
    setLoading,
    ipfsCid,
    setIpfsCid,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
