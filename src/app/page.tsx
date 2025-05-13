'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/new");
  }, [router]);

  return null; // Optionally, you can add a loading spinner or message here
}
