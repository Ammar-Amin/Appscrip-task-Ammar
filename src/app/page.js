import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-4xl text-center underline">Hello world</h1>
      </main>
    </>
  );
}
