"use client";

import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { LayoutContainer } from './styles'; // Certifique-se de que o caminho está correto

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
}
