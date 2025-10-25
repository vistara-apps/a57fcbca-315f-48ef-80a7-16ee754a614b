'use client';

import { Sparkles, User, Copy, Share2, Zap } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAI = message.sender === 'ai';

  return (
    <div className={`flex items-start gap-3 chat-bubble ${isAI ? '' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isAI ? 'bg-primary/20' : 'bg-surface'
      }`}>
        {isAI ? (
          <Sparkles className="w-4 h-4 text-primary" />
        ) : (
          <User className="w-4 h-4 text-muted" />
        )}
      </div>
      
      <div className="flex-1 max-w-2xl">
        <div className={`rounded-lg px-4 py-3 ${
          isAI 
            ? 'bg-surface rounded-tl-none' 
            : 'bg-primary/10 rounded-tr-none'
        }`}>
          <p className="text-sm text-fg leading-relaxed">{message.text}</p>
        </div>
        
        {isAI && (
          <div className="flex items-center gap-2 mt-2 ml-1">
            <button className="flex items-center gap-1 px-2 py-1 text-xs text-muted hover:text-primary transition-colors duration-200">
              <Copy className="w-3 h-3" />
              Copy
            </button>
            <button className="flex items-center gap-1 px-2 py-1 text-xs text-muted hover:text-primary transition-colors duration-200">
              <Share2 className="w-3 h-3" />
              Share
            </button>
            <button className="flex items-center gap-1 px-2 py-1 text-xs text-muted hover:text-primary transition-colors duration-200">
              <Zap className="w-3 h-3" />
              Mint NFT
            </button>
          </div>
        )}
        
        <span className="text-xs text-muted mt-1 block ml-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}
