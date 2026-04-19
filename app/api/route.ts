import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://public-api.birdeye.so/defi/price?address=So11111111111111111111111111111111111111112",
    {
      headers: {
        "x-api-key": process.env.BIRDEYE_API_KEY!,
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}