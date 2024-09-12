import { gsap } from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const navref1 = useRef<HTMLDivElement>(null);
  const navref2 = useRef<HTMLDivElement>(null);
  const mobileMenu = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  const [showMenu, setShowMenu] = useState(false);
  const [menuButtonPosition, setMenuButtonPosition] = useState({ x: 0, y: 0 });

  const pathname = usePathname();
  const router = useRouter();

  const setPosition = () => {
    if (menuButton.current) {
      const rect = menuButton.current?.getBoundingClientRect();
      const xPercentage = (rect.x / window.innerWidth) * 100;
      const yPercentage = (rect.y / window.innerHeight) * 100;
      setMenuButtonPosition({ x: xPercentage + 5, y: yPercentage + 5 });
    }
  };

  useLayoutEffect(() => {
   
    const noAnimationRoutes = ["/gallery", "/merch"];

    if (!noAnimationRoutes.includes(pathname)) {
      if (navref2.current) {
        const children_: any = navref2.current?.children;
        gsap.fromTo(
          children_,
          { y: -100 },
          {
            y: 0,
            delay: 0.5,
            duration: 1,
            stagger: { amount: 0.2, ease: "SlowMo" },
          }
        );
      }
      if (navref1.current) {
        gsap.fromTo(
          navref1.current,
          { x: "-50%" },
          {
            x: "0%",
            duration: 0.5,
            delay: 0.4,
            ease: "SlowMo",
            onComplete: () => {
              setPosition();
            },
          }
        );
      }
    } else {
      
      setPosition();
    }
  }, [pathname]);

  const animateMenu = (show: boolean) => {
    if (show) {
      setShowMenu(!showMenu);
      gsap.fromTo(
        mobileMenu.current,
        {
          clipPath: `circle(0% at ${Math.floor(menuButtonPosition.x)}% ${Math.floor(menuButtonPosition.y)}%)`,
        },
        {
          clipPath: `circle(130% at ${Math.floor(menuButtonPosition.x)}% ${Math.floor(menuButtonPosition.y)}%)`,
          duration: 0.5,
          ease: "SlowMo",
        }
      );
    } else {
      gsap.to(mobileMenu.current, {
        clipPath: `circle(0% at ${Math.floor(menuButtonPosition.x)}% ${Math.floor(menuButtonPosition.y)}%)`,
        duration: 0.5,
        ease: "SlowMo",
        onComplete: () => {
          setShowMenu(!showMenu);
        },
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: section,
        ease: "Power2.easeInOut",
      });
    }
  };

  const handleNavClick = async (href: string, sectionId?: string) => {
    
    const noAnimationRoutes = ["/gallery", "/merch"];

    if (pathname !== "/" && sectionId) {
     
      await router.push("/");
      setTimeout(() => scrollToSection(sectionId), 100);
    } else if (pathname === "/" && sectionId) {
      
      scrollToSection(sectionId);
    } else {
     
      if (noAnimationRoutes.includes(href)) {
        await router.push(href);
      } else {
        await router.push(href);
        
      }
    }

   
    if (showMenu) {
      setShowMenu(false);
      if (!noAnimationRoutes.includes(href)) {
        animateMenu(false);
      }
    }
  };

  return (
    <nav
      ref={navref1}
      className="w-full flex items-center justify-around fixed z-20 py-1 bg-slate-950 backdrop-blur-sm bg-opacity-40"
    >
      <Link href="/">
        <img
          src="/dl.png"
          className="w-24 h-24 object-scale-down"
          alt="Darpan logo"
        />
      </Link>

      <div
        ref={navref2}
        className="md:flex items-center justify-around gap-6 h-full hidden"
      >
        <NavItem onClick={() => handleNavClick("/", "about")}>About</NavItem>
        <NavItem onClick={() => handleNavClick("/", "events")}>Events</NavItem>
        <NavItem onClick={() => handleNavClick("/", "leads")}>Leads</NavItem>
        <NavItem onClick={() => handleNavClick("/gallery")}>Gallery</NavItem>
        <NavItem onClick={() => handleNavClick("/merch")}>Merch</NavItem>
      </div>

      <Link href="/">
        <img
          src="/ipu.png"
          className="w-24 h-24 object-scale-down"
          alt="jec logo"
        />
      </Link>

      <button
        ref={menuButton}
        className="md:hidden z-30"
        onClick={() => {
          animateMenu(!showMenu);
        }}
      >
        {!showMenu ? (
          <MenuIcon className="w-10 h-10" />
        ) : (
          <XIcon className="w-10 h-10" />
        )}
      </button>

      <div
        ref={mobileMenu}
        className="absolute w-full top-0 left-0 flex"
      >
        {showMenu && (
          <div className="bg-slate-700 h-screen flex flex-col items-center justify-center font-semibold w-full text-black">
            <div className="flex flex-col items-center justify-center gap-12">
              <NavItem onClick={() => handleNavClick("/", "about")}>About</NavItem>
              <NavItem onClick={() => handleNavClick("/", "events")}>Events</NavItem>
              <NavItem onClick={() => handleNavClick("/", "leads")}>Leads</NavItem>
              <NavItem onClick={() => handleNavClick("/gallery")}>Gallery</NavItem>
              <NavItem onClick={() => handleNavClick("/merch")}>Merch</NavItem>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavItem({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:text-xl text-3xl text-slate-200 cursor-pointer px-2 py-1 rounded-xl hover:bg-gray-700 transition-all"
    >
      {children}
    </button>
  );
}
