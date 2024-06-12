"use client";

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/global';
import { DefaultTheme } from '@/styles/theme/default';
import { CyclesContextProvider } from '@/context/CyclesContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={DefaultTheme}>
          <GlobalStyle />
          <CyclesContextProvider>
            {children}
          </CyclesContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
