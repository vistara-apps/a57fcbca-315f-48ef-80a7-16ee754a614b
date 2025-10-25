'use client';

import { Sparkles, Menu, Bell } from 'lucide-react';
import { ConnectWallet } from './ConnectWallet';

export function Header() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-fg">Farcaster AI Hub</h1>
              <p className="text-xs text-muted">Socialized AI on Base</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-md bg-surface hover:bg-primary/10 flex items-center justify-center transition-colors duration-200">
              <Bell className="w-4 h-4 text-muted" />
            </button>
            <ConnectWallet />
          </div>
        </div>
      </div>
    </header>
  );
}
