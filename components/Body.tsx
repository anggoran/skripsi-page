import { JSX } from "preact/jsx-runtime";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export default function Body(props: JSX.HTMLAttributes) {
  return (
    <body className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <Header />
      {props.children}
      <Footer />
    </body>
  );
}
