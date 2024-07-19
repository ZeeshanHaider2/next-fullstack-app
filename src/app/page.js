"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// redirect for server component
export default function Home() {
  const router = useRouter();
  const [first, setFirst] = useState("");
  console.log("client component");

  const handleNavigation = () => {
    router.push("/posts");
  };
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Homepage</h1>
      <Link href={"/profile"}>Link to Profile</Link>
      <Link href={"/posts/1"}>Link to Post # 1</Link>
      <Link href={"/profile/setting"}>Link to Profile settings</Link>
      <br />
      <button onClick={handleNavigation}>
        Link to Post using useRouter hooks
      </button>
    </main>
  );
}
