// hooks/useEmpireWebSocket.ts
'use client';

import { useEffect, useState, useCallback } from 'react';
import useWebSocket from 'react-use-websocket';

const WS_URL = `wss://public-api.birdeye.so/socket/solana?x-api-key=${process.env.NEXT_PUBLIC_BIRDEYE_API_KEY}`;

export function useEmpireWebSocket(watchlist: string[] = []) {
  const [prices, setPrices] = useState<Record<string, any>>({});
  const [newPairs, setNewPairs] = useState<any[]>([]);
  const [newListings, setNewListings] = useState<any[]>([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: useCallback(() => {
      console.log('👑 Empire WS Connected');

      // Price updates
      sendMessage(JSON.stringify({ type: "SUBSCRIBE_PRICE", data: { address: "So11111111111111111111111111111111111111112" } })); // SOL example

      // New pairs for sniping
      sendMessage(JSON.stringify({ type: "SUBSCRIBE_NEW_PAIR", min_liquidity: 1000 }));

      // New token listings
      sendMessage(JSON.stringify({ type: "SUBSCRIBE_TOKEN_NEW_LISTING" }));
    }, [sendMessage]),

    onMessage: (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "PRICE_DATA") setPrices(prev => ({ ...prev, [data.data.address]: data.data }));
      if (data.type === "NEW_PAIR") setNewPairs(prev => [data.data, ...prev].slice(0, 10));
      if (data.type === "TOKEN_NEW_LISTING_DATA") setNewListings(prev => [data.data, ...prev].slice(0, 5));
    },
    shouldReconnect: () => true,
  });

  return { prices, newPairs, newListings, readyState };
}
