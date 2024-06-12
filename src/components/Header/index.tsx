"use client";

import { HeaderContainer } from './style'
import { Timer, Scroll } from 'phosphor-react'
import Link from 'next/link'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Link href="/" passHref legacyBehavior>
          <a title="timer">
            <Timer size={24} />
          </a>
        </Link>
        <Link href="/History" passHref legacyBehavior>
          <a title="Historico">
            <Scroll size={24} />
          </a>
        </Link>
      </nav>
    </HeaderContainer>
  )
}
