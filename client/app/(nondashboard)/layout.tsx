import Navbar from '@/components/Navbar';
import { NAVBAR_HEIGHT } from '@/lib/constants';
import React from 'react';
import '../globals.css';
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className={`h-full flex w-full flex-col pt-[${NAVBAR_HEIGHT}px]`}>
        {children}
      </main>
    </div>
  );
};

export default layout;
