/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HackWA | In person high school hackathon in Seattle, WA</title>
        <meta
          name="description"
          content="HackWA is an in person high school hackathon in Seattle, WA on June 26th, 2022"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-[80vh] bg-seattle-skyline">
        <h1
          className="text-[#2D8F4E] text-center text-6xl font-bold pt-[10%]"
          style={{
            textShadow: "-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;",
          }}
        >
          HackWA
        </h1>
        <h6
          className="text-[#2D8F4E] text-center text-3xl font-bold pt-[2%]"
          style={{
            textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;",
          }}
        >
          In person high school hackathon in Seattle, WA.
        </h6>
      </div>
      <div className="h-[25vh] bg-[#2D8F4E]">
        <div className="flex flex-row flex-wrap">
          <div className="w-full md:w-1/3">hi</div>
          <div className="w-full md:w-1/3">hi2</div>
          <div className="w-full md:w-1/3">hi3</div>
        </div>
      </div>
    </div>
  );
}
