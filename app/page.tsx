'use client';

import { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Plus, Zap, Users, TrendingUp, Mic } from 'lucide-react';
import { AIPersonaCard } from './components/AIPersonaCard';
import { ChatMessage } from './components/ChatMessage';
import { PromptInput } from './components/PromptInput';
import { Header } from './components/Header';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface AIPersona {
  id: string;
  name: string;
  description: string;
  avatar: string;
  category: string;
  isPublic: boolean;
  usageCount: number;
}

const FEATURED_PERSONAS: AIPersona[] = [
  {
    id: '1',
    name: 'Base Lore Expert',
    description: 'Deep knowledge of Base ecosystem, history, and culture',
    avatar: '🔵',
    category: 'Knowledge',
    isPublic: true,
    usageCount: 1247,
  },
  {
    id: '2',
    name: 'DeFi Strategist',
    description: 'Expert in yield farming, liquidity provision, and DeFi protocols',
    avatar: '💎',
    category: 'Finance',
    isPublic: true,
    usageCount: 892,
  },
  {
    id: '3',
    name: 'NFT Creator',
    description: 'Helps generate creative concepts and metadata for NFT collections',
    avatar: '🎨',
    category: 'Creative',
    isPublic: true,
    usageCount: 654,
  },
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Welcome to Farcaster AI Hub! I'm here to help you explore AI personas, create collaborative prompts, and mint your AI creations onchain. What would you like to do today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<AIPersona | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: selectedPersona 
          ? `As the ${selectedPersona.name}, I can help you with that. ${selectedPersona.description}. Let me provide some insights...`
          : "That's a great question! I can help you explore AI personas, collaborate on prompts, or mint your creations as NFTs. Would you like to try one of our featured personas?",
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handlePersonaSelect = (persona: AIPersona) => {
    setSelectedPersona(persona);
    const message: Message = {
      id: Date.now().toString(),
      text: `Switched to ${persona.name}. ${persona.description}`,
      sender: 'ai',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="flex flex-col h-screen bg-bg">
      <Header />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Featured Personas Section */}
        <div className="border-b border-border bg-surface/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-fg flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Featured AI Personas
              </h2>
              <button className="text-xs text-primary hover:text-accent transition-colors duration-200">
                View All
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {FEATURED_PERSONAS.map((persona) => (
                <AIPersonaCard
                  key={persona.id}
                  persona={persona}
                  isSelected={selectedPersona?.id === persona.id}
                  onSelect={() => handlePersonaSelect(persona)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && (
              <div className="flex items-start gap-3 chat-bubble">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 bg-surface rounded-lg rounded-tl-none px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full pulse-dot"></span>
                    <span className="w-2 h-2 bg-primary rounded-full pulse-dot" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-primary rounded-full pulse-dot" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-border bg-surface/80 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto px-6 py-4">
            <PromptInput
              value={inputValue}
              onChange={setInputValue}
              onSend={handleSendMessage}
              placeholder={
                selectedPersona
                  ? `Ask ${selectedPersona.name}...`
                  : "Ask anything or select a persona..."
              }
            />
            
            {/* Quick Actions */}
            <div className="flex items-center gap-2 mt-3">
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-surface hover:bg-primary/10 text-muted hover:text-primary rounded-md transition-all duration-200">
                <Plus className="w-3.5 h-3.5" />
                New Prompt
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-surface hover:bg-primary/10 text-muted hover:text-primary rounded-md transition-all duration-200">
                <Users className="w-3.5 h-3.5" />
                Collaborate
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-surface hover:bg-primary/10 text-muted hover:text-primary rounded-md transition-all duration-200">
                <Zap className="w-3.5 h-3.5" />
                Mint NFT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
