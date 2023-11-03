import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Header />
      <Content />
    </main>
  );
}
