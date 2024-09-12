import React from "react";
import { Copyright, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <div
      className={`bg-black text-gray-400 p-4 flex items-center justify-around`}
    >
      <div className="flex gap-4">
        <Copyright /> Guru Gobind Singh Indraprastha University
      </div>
      <div className="flex flex-col">
        <span> Developed by </span>
        <span> Himanshu Kumar USAR-26 </span>
        <span className="flex gap-4 ">
          <Link href="https://github.com/himanshuk0705" target="_blank">
            <GithubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/himanshu-kumar-739440258" target="_blank">
            <LinkedinIcon />
          </Link>
        </span>
      </div>
    </div>
  );
}
