/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Script src="https://tally.so/widgets/embed.js" type="text/javascript" />
      <Head>
        <title>HackWA | In person high school hackathon in Seattle, WA</title>
        <meta
          name="description"
          content="HackWA is an in person high school hackathon in Seattle, WA on June 26th, 2022"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          textAlign: "center",
          zIndex: "9999",
        }}
      >
        <h1
          className="text-[#49FF7C] text-8xl font-bold"
          style={{
            paddingTop: "1rem",
            textShadow: `-1px -1px 0 #000,
     0   -10px 0 #000,
     10px -10px 0 #000,
     10px  0   0 #000,
     10px  10px 0 #000,
     0    10px 0 #000,
    -10px  10px 0 #000,
    -10px  0   0 #000;`,
          }}
        >
          hackwa.
        </h1>
        <h3
          className="text-white text-6xl font-bold"
          style={{
            paddingTop: "1rem",
            textShadow: `-1px -1px 0 #000,
              0   -4px 0 #3A9153,
              4px -4px 0 #3A9153,
              4px  0   0 #3A9153,
              4px  4px 0 #3A9153,
              0    4px 0 #3A9153,
              -4px  4px 0 #3A9153,
              -4px  0   0 #3A9153;`,
          }}
        >
          in person hackathon in Seattle
        </h3>
        <br />

        <button
          data-tally-open="wQKol8"
          data-tally-layout="modal"
          data-tally-width="800"
          data-tally-emoji-text="🌲"
          data-tally-emoji-animation="wave"
          data-tally-auto-close="2000"
          style={{
            backgroundColor: "#49FF7C",
            border: "5px black solid",
            borderRadius: "10%",
            fontWeight: "bold",
            color: "black",
            padding: "0.25rem 0.5rem",
            fontSize: "2rem",
          }}
        >
          Sign up
        </button>
      </div>
      <img
        className="absolute h-[80vh]"
        src="/seattle-transparent-skyline.png"
        style={{
          bottom: 0,
          zIndex: "-1",
        }}
      />
      <div className="bg-white w-fit font-bold p-2 text-[#3A9153] text-4xl bottom-0 right-0 absolute">
        <p>⏱ June 19th </p>
        <p>📍 Seattle, WA</p>
      </div>
    </div>
  );
}
