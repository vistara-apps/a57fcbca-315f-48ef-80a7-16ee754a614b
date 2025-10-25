'use client';

import { TrendingUp } from 'lucide-react';

interface AIPersona {
  id: string;
  name: string;
  description: string;
  avatar: string;
  category: string;
  isPublic: boolean;
  usageCount: number;
}

interface AIPersonaCardProps {
  persona: AIPersona;
  isSelected: boolean;
  onSelect: () => void;
}

export function AIPersonaCard({ persona, isSelected, onSelect }: AIPersonaCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`flex-shrink-0 w-48 p-3 rounded-lg border transition-all duration-200 ${
        isSelected
          ? 'bg-primary/10 border-primary'
          : 'bg-surface border-border hover:border-primary/50'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="text-2xl">{persona.avatar}</div>
        <div className="flex-1 text-left">
          <h3 className="text-sm font-semibold text-fg mb-1">{persona.name}</h3>
          <p className="text-xs text-muted line-clamp-2 mb-2">{persona.description}</p>
          <div className="flex items-center gap-1 text-xs text-muted">
            <TrendingUp className="w-3 h-3" />
            <span>{persona.usageCount.toLocaleString()} uses</span>
          </div>
        </div>
      </div>
    </button>
  );
}
