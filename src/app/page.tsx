import Image from "next/image";
import { ClientComponent } from "./client";

export default function Home() {
  return (
    <div className="">
      <ClientComponent />
      <div id="my-element" />
      <a href="/test">Test a tag server</a>
    </div>
  );
}
