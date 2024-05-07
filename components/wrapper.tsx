"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { WagmiProvider } from 'wagmi' 
import { config } from '../config' 
import { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

const ReactQueryProvider = ({ children, ...props }: { children: React.ReactNode, props: any }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
        <NextThemesProvider  {...props}>
          {children}
        </NextThemesProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default ReactQueryProvider;