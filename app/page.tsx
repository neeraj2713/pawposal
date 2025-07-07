'use client'

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { FeaturesSectionDemo } from "@/components/ui/feature-section"
import { FlipWords } from "@/components/ui/flip-words"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { Vortex } from "@/components/ui/vortex"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar"
import { useState } from "react"
import Footer from "@/components/ui/footer"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  const products = [
    {
      title: "Product 1",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1698124073681-5e78ba5786b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.unsplash.com/random/800x600?1",
    },
    {
      title: "Product 2",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1634245482527-60ac666a8c9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Product 3",
      link: "#",
      thumbnail: "https://plus.unsplash.com/premium_photo-1661779134041-9d618ec4c812?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Product 4",
      link: "#",
      thumbnail: "https://plus.unsplash.com/premium_photo-1661540731450-873a3fa72326?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Product 5",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Product 6",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Product 7",
      link: "#",
      thumbnail: "https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?q=80&w=3004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Product 8",
      link: "#",
      thumbnail: "https://plus.unsplash.com/premium_photo-1668383777295-8343df447607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Product 9",
      link: "#",
      thumbnail: "https://plus.unsplash.com/premium_photo-1721605863749-72a6e2433d71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Product 10",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1683836809739-c10a7be81028?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Alice",
      designation: "Product Designer",
      image: "/testimonials/alice.jpg",
    },
    {
      id: 2,
      name: "Bob",
      designation: "Full Stack Developer",
      image: "/testimonials/bob.jpg",
    },
    {
      id: 3,
      name: "Carol",
      designation: "CEO, Example Inc.",
      image: "/testimonials/carol.jpg",
    },
  ];


  const words = [
    'better',
    'beautiful',
    'impactful'
  ]


  return (
    <>
      {/* Navbar */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton href="/sign-in" variant="gradient">
            Login
          </NavbarButton>
        </NavBody>

        <MobileNav visible>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-lg text-black dark:text-white"
              >
                {item.name}
              </a>
            ))}
            <NavbarButton href="/sign-up" variant="gradient">
              Register
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Hero Section */}
      <HeroParallax products={products} />

      {/* CTA Section with BackgroundBeamsWithCollision */}
      <section className="relative w-full overflow-hidden bg-neutral-950">
        <BackgroundBeamsWithCollision className="z-0">
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              <span className="inline">Generate</span>
              <span className="inline">
                <FlipWords words={words} className="text-red-500" />
              </span>
              <span className="inline">proposals</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-400">
              Effortlessly craft stunning proposals tailored to your clients —
              powered by AI.
            </p>
            <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition duration-200">
              Get Started Free
            </button>
          </div>
        </BackgroundBeamsWithCollision>
      </section>

      {/* Feature Section */}
      <FeaturesSectionDemo/>

      {/* Team Section */}
      <section className="my-20">
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          >
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
              What People Are Saying
            </h2>
            <p className="text-white text-sm md:text-xl max-w-xl mt-4 text-center">
              Hear from our amazing users who’ve made their workflow magical.
            </p>
            <div className="flex items-center justify-center gap-6 mt-10">
              <AnimatedTooltip items={testimonials} />
            </div>
          </Vortex>
        </div>
      </section>

      {/* Footer */}
      <Footer/>

    </>
  );
}
