"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import EventsList from "@/lib/eventsLists"; // Assuming you have all events in this list
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ScrollTrigger } from "gsap/all";

export default function Events() {
  const section = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const heroBanner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      heroBanner.current,
      { clipPath: "polygon(49% 19%, 69% 47%, 51% 80%, 33% 47%)" },
      {
        clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
        duration: 1,
        scrollTrigger: {
          trigger: heroBanner.current,
          start: "top center",
          end: "bottom center",
          scrub: false,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    const eventsList = Array.from(eventsRef.current!.childNodes);

    eventsList.forEach((element: any, index) => {
      const direction = index % 2 === 0 ? "-10%" : "10%";
      gsap.fromTo(
        element,
        { x: direction, opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 80%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section ref={section} id="events" className="min-h-screen py-16">
        {/* Hero Banner */}
        <div ref={heroBanner} className="relative h-screen text-white">
          <h1 className="absolute lg:text-9xl md:text-6xl text-3xl lg:font-extralight font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            Events
          </h1>
          <img
            className="absolute top-0 left-0 h-screen w-full object-cover"
            src="/events/event-banner.jpg"
            alt="Events Banner"
          />
        </div>

        {/* Events List */}
        <div ref={eventsRef} className="py-12 max-w-6xl mx-auto container">
          {[...EventsList.yr2023, ...EventsList.yr2022].map((evn, index) => (
            <div
              key={index}
              className={`flex md:flex-row flex-col-reverse items-center  md:items-center gap-8 md:justify-end sm:py-36 py-8
           md:my-4 my-12  md:h-52 
           ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div
                className={`w-full ${
                  index % 2 !== 0 ? "md:text-end" : "text-start"
                }  `}
              >
                <div
                  className={`font-semibold flex gap-4 text-3xl items-center
             ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <h1>{evn.name}</h1>
                  {/* <Link href={evn.album} target="_blank">
                    <ExternalLink className="w-full h-full" />
                  </Link> */}
                </div>
                <h3 className="text-slate-300">{evn.description}</h3>
              </div>
              <div className="max-w-[384px] w-full">
                <img
                  src={evn.thumbnail}
                  alt={evn.name}
                  className="aspect-video object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
