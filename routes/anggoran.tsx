import { Head } from "https://deno.land/x/fresh@1.1.4/runtime.ts";

export default function AnggoranPage() {
  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeu4l0Mubq1LktqSKXHuxRyqkMRI3K8LAmQENcKryRUO8QoOg/viewform?usp=sf_link";

  return (
    <>
      <Head>
        <title>Skripsi Anggoran</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="refresh" content={"1; " + "url=" + formURL} />
        <meta property="og:title" content="Survey Skripsi Anggoran" />
        <meta
          property="og:description"
          content="Survey Skripsi terkait Penggunaan ICT, Inovasi Produk dan Proses Produksi, serta Kinerja Perusahaan"
        />
        <meta property="og:image" content="https://skripsi.page/komak.jpg" />
      </Head>
      <body className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="flex flex-col animate-pulse">
          <p className="text-gray-500 font-semibold">redirecting to the form</p>
        </div>
      </body>
    </>
  );
}
