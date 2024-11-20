'use client';
import { PropsWithChildren } from 'react';
import { ReactQueryProvider } from '@/providers';

export default function Provider({ children }: PropsWithChildren) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
