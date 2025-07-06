'use client'

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

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ]

  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton href="/sign-in" variant="gradient">Login</NavbarButton>
        </NavBody>

        <MobileNav visible>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navItems.map((item, idx) => (
              <a key={idx} href={item.link} className="text-lg text-black dark:text-white">
                {item.name}
              </a>
            ))}
            <NavbarButton href="/sign-up" variant="gradient">Register</NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Rest of your landing page sections below */}
      <section className="h-screen bg-white dark:bg-neutral-900 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Your Proposal Generator</h1>
      </section>
    </>
  )
}
