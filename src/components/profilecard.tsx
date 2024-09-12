"use client"
import React, { useState, useRef } from "react";
import messages from "@/lib/messageByLeads";
import { Flip } from "gsap/all";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Instagram, Linkedin, MessagesSquare } from "lucide-react";
import { gsap } from "gsap";

export function ProfileCard({
  name,
  description,
  imagePath,

}: {
  name: string;
  description: string;
  imagePath: string;
 
}) {
  const [showMessage, setShowMessage] = useState(false);

  const flipref = useRef(null);
  const [disableBtn, setDisableBtn] = useState(false);
  const handleclick = () => {
    const state = Flip.getState(flipref.current);
    setShowMessage(!showMessage);
    // @ts-ignore
    Flip.to(state, {
      rotateY: -90,
      ease: "power0.easeNone",
      duration: 0.5,
      onStart: () => {
        setDisableBtn(true);
      },
      onComplete: () => {
        setDisableBtn(false);
      },
    });
  };
  return (
    <Card
      ref={flipref}
      className="min-w-80 min-h-[500px] snap-center bg-cyan-900 border-gray-500 bg-opacity-40 "
    >
      <CardHeader>
       
        
      </CardHeader>
      {!showMessage ? (
        <CardContent className=" rounded-xl overflow-hidden m-4 w-64 h-80">
          <img
            className="w-full h-full object-cover"
            src={imagePath}
            alt={name}
          />
        </CardContent>
      ) : (
        <CardContent className=" rounded-xl overflow-hidden m-4 w-64 h-80 text-slate-300">
          {/* @ts-ignore */}
          {messages[name]}
        </CardContent>
      )}
      <div className="ml-16">
      <CardTitle className="text-white text-xl">{name}</CardTitle>
      <CardDescription className="text-slate-400 text-sm">
          {description}
        </CardDescription>
      </div>
       
      
    </Card>
  );
}
