'use client';

import { Send, Mic } from 'lucide-react';
import { KeyboardEvent } from 'react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (text: string) => void;
  placeholder?: string;
}

export function PromptInput({ value, onChange, onSend, placeholder }: PromptInputProps) {
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend(value);
    }
  };

  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder || "Ask anything..."}
        className="w-full bg-surface border border-border rounded-lg px-4 py-3 pr-24 text-sm text-fg placeholder-muted focus:outline-none focus:border-primary resize-none transition-colors duration-200"
        rows={1}
        style={{ minHeight: '44px', maxHeight: '120px' }}
      />
      
      <div className="absolute right-2 bottom-2 flex items-center gap-2">
        <button className="w-8 h-8 rounded-md bg-surface hover:bg-primary/10 flex items-center justify-center transition-colors duration-200">
          <Mic className="w-4 h-4 text-muted" />
        </button>
        <button
          onClick={() => onSend(value)}
          disabled={!value.trim()}
          className="w-8 h-8 rounded-md bg-primary hover:bg-accent disabled:bg-surface disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-200"
        >
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
