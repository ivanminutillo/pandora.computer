'use client'
import { QueryClientProvider } from 'react-query';
import queryClient from '@/app/queryClient';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (

  <QueryClientProvider client={queryClient}>
    {children}
</QueryClientProvider>
  )
}

