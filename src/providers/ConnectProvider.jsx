import React from 'react';
import { useChainId, useConnect } from 'wagmi';

export function ConnectProvider() {
  const chainId = useChainId();
  const { connectors, connect } = useConnect();

  return (
    <div className="buttons">
      {connectors.map((connector) => (
        <ConnectorButton
          key={connector.id} // Changed from connector.uid to connector.id based on assumption. Adjust according to actual API.
          connector={connector}
          onClick={() => connect({ connector, chainId })}
        />
      ))}
    </div>
  );
}

function ConnectorButton({ connector, onClick }) {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <button
      className="button"
      disabled={!ready}
      onClick={onClick}
      type="button"
    >
      {connector.name}
    </button>
  );
}
