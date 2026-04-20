import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // Simple WebSocket handler
  if (req.headers.get('upgrade') !== 'websocket') {
    return new Response('Expected websocket', { status: 400 });
  }
  
  const { socket: wsSocket, response } = Object.values(new WebSocketPair())[0] as WebSocketPair;
  
  wsSocket.accept();
  wsSocket.send('Connected!');
  
  return response;
}
