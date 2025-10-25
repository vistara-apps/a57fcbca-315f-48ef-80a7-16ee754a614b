'use client';

import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-accent text-white rounded-md transition-all duration-200 text-sm font-medium">
      <Wallet className="w-4 h-4" />
      Connect
    </button>
  );
}
