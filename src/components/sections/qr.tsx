"use client"
import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'

export default function JoinQR() {
  
    const join = useRef(null);

  useEffect(() => {
    let t2 = gsap.timeline({
      
      scrollTrigger: {
        trigger: join.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 5,
        
      },
    });

    t2.fromTo(join.current, { x: "100%",opacity:0,ease:"Power0.easeNone" }, { x: "0%",opacity:1});

  }, []); 
    
  return (
    <section ref={join} id='join-club' className='min-h-screen container mx-auto flex flex-col gap-7 items-center justify-center '>
        
    </section>
  )
}
