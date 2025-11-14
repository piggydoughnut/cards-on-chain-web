'use client';

import { useState, useEffect } from 'react';
import { Card, getRandomCard } from './lib/cards';
import { cn } from '@/lib/utils';

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* Header Frame */}
      <header className="p-4 bg-background w-full flex items-left md:items-center flex-col justify-start md:justify-center">
        <h1 className="text-xl font-bold md:text-2xl font-mono tracking-widest text-accent">
          &gt; CARDS ON CHAIN
        </h1>
        <TeminalLine text="A card game on Polkadot blockchain" />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center p-3 md:flex-1 md:p-2 gap-6">
        {/* Card */}
        <CardImage />
        <div className="text-xl md:text-2xl font-mono tracking-wider text-accent">
          coming soon...<span className="terminal-cursor ml-1">_</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 p-4 bg-background items-center justify-center text-sm text-muted-foreground">
        <p className="text-center">v1.0.0 | Build 2025 | Open Source Edition | Made with ❤️ by <a href="https://cardsonchain.com" className="text-accent hover:underline">CardsonChain </a></p>
      </footer>
    </div>
  );
}


const TeminalLine = ({ text }: { text: string }) => {
  return <div className="text-muted-foreground text-l md:text-sm">{text}</div>
}


const CardImage = ({ }: {}) => {

  const [card, setCard] = useState<Card | null>(null);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const newCard = getRandomCard();
    setCard(newCard);
    setImageLoading(true);
  }, []);

  useEffect(() => {
    if (card) {
      setImageLoading(true);
      const img = new Image();
      img.src = card.image || "/placeholder.svg";
      img.onload = () => {
        setImageLoading(false);
      };
      img.onerror = () => {
        setImageLoading(false);
      };
    }
  }, [card]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageLoadStart = () => {
    setImageLoading(true);
  };

  if (!card) {
    return null;
  }

  return (
    <div className="w-full max-w-sm md:max-w-md h-[300px] md:h-[500px] flex items-center justify-center">
      {imageLoading ? (
        <div className="flex flex-col items-center justify-center bg-background font-mono w-full h-full">
          <div className="text-accent text-xs mb-2">[LOADING]</div>
          <TeminalLine text="Decoding card data..." />
          <div className="mt-2 w-32 h-1 bg-primary/20 rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full animate-loading-bar"></div>
          </div>
        </div>
      ) : (
        <img
          src={card.image || "/placeholder.svg"}
          alt={card.name}
          className="max-w-full max-h-full w-auto h-auto object-contain"
          onLoad={handleImageLoad}
          onLoadStart={handleImageLoadStart}
        />
      )}
    </div>
  )
}