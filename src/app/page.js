import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Section from "@/components/section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section />
        <Main />
      </main>
      <Footer />
    </>
  );
}
