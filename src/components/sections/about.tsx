"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function About() {
  const section2 = useRef(null);
  const about = useRef(null);

  useEffect(() => {
    let t2 = gsap.timeline({
      
      scrollTrigger: {
        trigger: about.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        
      },
    });

    t2.fromTo(about.current, { x: "100%",ease:"Power0.easeNone" }, { x: "0%"});

    t2.fromTo(
      // @ts-ignore
      about.current?.children,
      { opacity: 0 },
      { opacity: 1 ,stagger:0.1,}
    );
  }, []);
  return (
    <>
      <section
        id="about"
        className=" min-h-screen relative container md:p-12 p-4 w-full
          flex items-center overflow-hidden"
        ref={section2}
      >
        <div className=" w-full bg-center bg-cover">
          <article
            ref={about}
            className=" bg-white
        rounded-2xl prose lg:prose-xl dark:prose-invert prose-p:text-black prose-blockquote:text-black   prose-headings:text-black p-8 min-w-full prose-sm"
          >
            <h1>Darpan </h1>
            <p className="font-bold text-3xl">

            The Photography & Film Making Society
            </p>
            <p>
            Darpan, the photography and filmmaking club of our college, is a creative platform for students passionate about capturing moments and storytelling through visual arts. The club encourages members to explore photography, videography, editing, and direction, while providing opportunities to participate in events, workshops, and collaborative projects.
            </p>
            
            <p>
            
Darpan provides a platform for students to explore photography and filmmaking through hands-on projects, workshops, and events. Members engage in capturing campus life, creating short films, and participating in creative challenges. The club helps students refine their technical skills, encourages artistic expression, and offers opportunities to showcase their work through exhibitions and competitions, fostering a collaborative and creative environment.
            </p>
           
            

            <blockquote>
            "Capturing moments, crafting stories – where creativity meets the lens."
            </blockquote>
          </article>
        </div>
      </section>
    </>
  );
}
