import { Head } from "https://deno.land/x/fresh@1.1.4/runtime.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Body from "../components/Body.tsx";

export default function AnggoranPage() {
  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeu4l0Mubq1LktqSKXHuxRyqkMRI3K8LAmQENcKryRUO8QoOg/viewform?usp=sf_link";

  return (
    <>
      <Head>
        <title>Skripsi Anggoran</title>
        {/* <meta name="description" content="(Ceritanya Judul)" /> */}
        {/* <meta http-equiv="refresh" content={"2; " + formURL} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="flex flex-col animate-pulse">
          <p className="font-semibold">redirecting to the form</p>
        </div>
      </body>
    </>
  );
}
