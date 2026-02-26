'use client'

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import Image from "next/image"
import { useRef } from "react"
import { StickyHeader } from "./StickyHeader"

interface HeaderProps {
  avatar: string
  name: string
  jobTitle: string
  location: string
}

export function Header (props: HeaderProps) {
  const { avatar, name, jobTitle, location } = props

  const ref = useRef<HTMLElement | null>(null)

  const entry = useIntersectionObserver(ref, {})

  return (
    <>
      <StickyHeader 
        visible={!entry?.isIntersecting} 
        avatar={avatar}
        name={name}
        jobTitle={jobTitle}
      />
      <header 
        className="flex items-center gap-4 mb-6" 
        ref={ref}
        aria-hidden={!entry?.isIntersecting}
      >
        <Image 
          src={avatar}
          alt="Profile Picture"
          width={80}
          height={80}
          priority
          className="rounded-full"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-md font-semibold">{name}</h1>
          <div className="flex flex-col gap-1">
            <strong className="text-xs text-card-foreground font-normal">{jobTitle}</strong>
            <div className="flex items-center gap-1">
              <span className="text-xs">{location}</span>
              <Image src="/brFlag.svg" alt="Brazil Flag" width={16} height={16} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}