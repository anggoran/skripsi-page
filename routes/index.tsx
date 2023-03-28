import { Head } from "$fresh/runtime.ts";
import Avatar from "../components/Avatar.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import SurveyButton from "../islands/SurveyButton.tsx";
import Body from "../components/Body.tsx";
import Title from "../components/Title.tsx";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Skripsi Anggoran</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Apa Benar Kita Sudah Pakai Big Data?"
        />
        <meta
          property="og:description"
          content="Jembatan yang tak kunjung dibangun di perusahaan kita"
        />
        <meta property="og:image" content="https://skripsi.page/avatar.svg" />
      </Head>
      <Body>
        <main className="mx-auto max-w-prose px-4">
          <Title />
          <Avatar />
          <div class="space-y-4 py-4">
            <p className="text-justify">
              Istilah big data mungkin sudah tidak asing di telinga kita. Big
              data merupakan serangkaian data yang beredar dalam jumlah besar
              (Volume), berkembang pesat (Velocity), serta hadir dalam berbagai
              format (Variety). Menurut Amazon Web Services atau AWS, big data
              setidaknya dikelola melalui empat proses; yakni pengumpulan data
              (membuat aliran data), penyimpanan data (menyimpan raw data),
              pemrosesan dan analisis data (menganalisis data yang telah
              diproses), serta visualisasi dan penggunaan data (mengubah data
              menjadi actionable insights melalui self-service analytics).
            </p>
            <p className="text-justify">
              Sebelum masuk ke manfaat dari big data, ada baiknya lebih dulu
              membahas tentang self-service analytics. Ini adalah kondisi di
              mana siapa saja dapat mengakses dan memahami data tanpa bantuan
              tim engineering, melalui SaaS seperti Mixpanel. Hal ini dapat
              membuat perusahaan menjadi lebih reaktif dalam mengambil keputusan
              berbasis data, tanpa perlu tunggu menunggu.
            </p>
            <p className="text-justify">
              Lantas sekarang apa faedah dari normalisasi penggunaan big data di
              dalam perusahaan? Menurut McKinsey, seiring bertambahnya
              pengalaman manusia, maka semakin rentan mereka terkena bias yang
              mempercepat penyimpulan masalah. Tidak menutup kemungkinan bahwa
              semangat mengusulkan beribu solusi muncul, sedangkan segelintir
              masalah masih menjadi tanda tanya. Dengan ini, big data dapat
              hadir sebagai fakta yang dapat membantu perusahaan dalam menjawab
              masalah bisnis.
            </p>
            <p className="text-justify">
              Pertanyaan klimaks, <b>Apa Benar Kita Sudah Pakai Big Data?</b>{" "}
              Menurut buku "Creating a Data-Driven Organization" karya Carl
              Anderson, penggunaan data bukan hanya sekadar melaporkan apa yang
              terjadi, tetapi juga berinovasi berdasarkan apa yang terjadi. Hal
              ini pun dapat dijadikan oleh perusahaan sebagai mindset
              berkepanjangan, bahwasanya data berperan penting di dalam inovasi
              produk atau proses produksi.
            </p>
            <p className="text-justify">
              Berbicara tentang penggunaan big data, sebaiknya tidak
              disalah-kaprahkan bahwa pengambilan keputusan sepenuhnya harus
              didasari oleh data. Menurut Farrell di dalam Harvard Business
              Publishing, intuisi justru dapat memudahkan pengambilan keputusan
              berbasis data. Interpretasi terhadap apa yang tidak terjadi di
              lapangan pada akhirnya berada di tangan kita dan rekan satu tim.
              Namun, setidaknya kita tidak asal-asalan bergerak tanpa diiringi
              oleh data.
            </p>
            <p className="text-justify">
              Sekian artikel ini saya buat, terima kasih telah membaca. Apabila
              menyukai artikel ini, Anda dapat klik tombol di bawah untuk ikut
              serta dalam <b>survey skripsi saya</b>.
            </p>
          </div>
          <SurveyButton />
        </main>
      </Body>
    </>
  );
}
