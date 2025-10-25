'use client';

import { useTheme } from '../components/ThemeProvider';
import { Sparkles } from 'lucide-react';

export default function ThemePreview() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'coinbase', name: 'Coinbase', desc: 'Dark navy with blue accents' },
    { id: 'celo', name: 'Celo', desc: 'Black with yellow accents' },
    { id: 'solana', name: 'Solana', desc: 'Purple with magenta accents' },
    { id: 'base', name: 'Base', desc: 'Blue with white accents' },
  ] as const;

  return (
    <div className="min-h-screen bg-bg p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-fg mb-2">Theme Preview</h1>
          <p className="text-muted">Test different blockchain themes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id as any)}
              className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
                theme === t.id
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-surface hover:border-primary/50'
              }`}
            >
              <h3 className="text-lg font-semibold text-fg mb-1">{t.name}</h3>
              <p className="text-sm text-muted">{t.desc}</p>
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-surface rounded-lg p-6 border border-border">
            <h2 className="text-xl font-semibold text-fg mb-4">Color Tokens</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <div className="w-full h-16 bg-bg rounded-md mb-2"></div>
                <p className="text-sm text-muted">Background</p>
              </div>
              <div>
                <div className="w-full h-16 bg-surface rounded-md mb-2"></div>
                <p className="text-sm text-muted">Surface</p>
              </div>
              <div>
                <div className="w-full h-16 bg-primary rounded-md mb-2"></div>
                <p className="text-sm text-muted">Primary</p>
              </div>
              <div>
                <div className="w-full h-16 bg-accent rounded-md mb-2"></div>
                <p className="text-sm text-muted">Accent</p>
              </div>
              <div>
                <div className="w-full h-16 border-2 border-border rounded-md mb-2"></div>
                <p className="text-sm text-muted">Border</p>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-lg p-6 border border-border">
            <h2 className="text-xl font-semibold text-fg mb-4">Components</h2>
            <div className="space-y-4">
              <button className="w-full px-4 py-3 bg-primary hover:bg-accent text-white rounded-md transition-colors duration-200 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Primary Button
              </button>
              <button className="w-full px-4 py-3 bg-surface hover:bg-primary/10 text-fg border border-border rounded-md transition-colors duration-200">
                Secondary Button
              </button>
              <div className="p-4 bg-bg rounded-md border border-border">
                <p className="text-fg">Card with border</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
