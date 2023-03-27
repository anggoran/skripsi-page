import { Head } from "$fresh/runtime.ts";
import Avatar from "../components/avatar.tsx";
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
        {/* <meta name="description" content="(Ceritanya Judul)" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <main className="mx-auto max-w-prose">
          <Title />
          <Avatar />
          <div class="space-y-4 py-4">
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              odio urna. Fusce at lacus gravida, volutpat sapien vitae, molestie
              nibh. Praesent vitae neque sed neque rutrum tincidunt at ac metus.
              Nam volutpat nunc sit amet lacinia semper. Suspendisse faucibus,
              leo sit amet posuere sollicitudin, enim urna hendrerit nunc, non
              rhoncus massa nibh eget sapien.
            </p>
            <p className="text-justify">
              Nullam imperdiet fringilla dui at efficitur. Fusce molestie elit
              nec ultricies sagittis. Duis scelerisque, magna eu vestibulum
              vehicula, augue quam consequat ante, vitae blandit eros massa in
              tortor. Aliquam erat volutpat. Praesent tincidunt dolor nec sapien
              efficitur, a lacinia odio eleifend. Donec quis magna ultrices,
              efficitur quam vel, rhoncus massa.
            </p>
            <p className="text-justify">
              Vivamus vel sagittis velit. Morbi luctus libero eget felis
              sagittis tincidunt. Sed id tortor ipsum. Nulla facilisi. Nam
              feugiat odio vel vestibulum eleifend. Aliquam ullamcorper risus a
              erat convallis suscipit. Maecenas vel urna eget sapien ultrices
              sodales sed nec nibh.
            </p>
            <p className="text-justify">
              In hac habitasse platea dictumst. Vestibulum eget arcu non mauris
              ullamcorper convallis. Proin sed aliquam elit. Sed elementum ac
              enim a luctus. Nullam ac ante at ex congue scelerisque. Fusce ac
              lectus nunc. Suspendisse viverra dignissim purus in laoreet.
            </p>
            <p className="text-justify">
              Etiam maximus turpis eget enim ultrices, id tristique quam congue.
              Maecenas sed mauris ut leo fringilla dignissim. Aenean hendrerit
              quam ut neque tristique, id bibendum quam congue. Nulla convallis
              risus et risus cursus malesuada. Vestibulum eget mi euismod,
              tristique velit nec, dapibus tortor. Nam laoreet malesuada arcu ac
              pretium.
            </p>
          </div>
          <SurveyButton />
        </main>
      </Body>
    </>
  );
}
