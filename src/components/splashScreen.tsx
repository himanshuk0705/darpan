"use client";
import React, { useState, useEffect } from "react";

import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export function ProgressDemo() {
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(60), 500);
    const timer2 = setTimeout(() => setProgress(99), 1500);
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    };
  }, []);

  return <Progress value={progress} className="w-80 h-2" />;
}
export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col bg-black items-center justify-start p-24 gap-8">
      <Image src="/dl.png" width={300} height={300} alt="Darpan logo" />
      <span className="text-5xl font-thin">Darpan</span>
      <ProgressDemo />
    </main>
  );
}
