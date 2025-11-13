'use client';

import { useState, useEffect } from 'react';
import { Card, getRandomCard } from './lib/cards';

export default function Home() {
  const [card, setCard] = useState<Card | null>(null);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const newCard = getRandomCard();
    setCard(newCard);
    setImageLoading(true);
  }, []);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageLoadStart = () => {
    setImageLoading(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header Frame */}
      <header className="p-4 bg-background">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-mono tracking-widest text-primary">
            &gt;CARDSONCHAIN.EXE
          </h1>
          <p className="text-xs text-muted-foreground mt-2">v1.0.0 | Build 2025 | Open Source Edition</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Terminal Output */}
        <div className="text-center mb-12 max-w-4xl w-full">
          <div className="bg-card border-2 border-accent/30 p-6 inline-block font-mono text-left w-full h-[450px]">
            <div className="flex flex-col md:flex-row gap-6 h-full">
              {/* Left side - Terminal text */}
              <div className="flex-1">
                <div className="text-accent text-sm mb-3">$ ./cardsonchain.exe --init</div>
                <div className="space-y-2 mb-4">
                  <div className="text-primary text-sm ">[SYSTEM_STATUS] Initializing...</div>
                  <div className="text-muted-foreground text-sm">Loading cards... ✓</div>
                  <div className="text-muted-foreground text-sm">Initializing game engine... ✓</div>
                  <div className="text-muted-foreground text-sm">A tactical card game on the blockchain like no other</div>
                </div>
                <div className="border-t border-accent/20 pt-3 mt-4">
                  <div className="text-primary text-sm mb-2">[STATUS_UPDATE] Launch sequence initiated...</div>
                  <div className="text-2xl md:text-2xl font-mono tracking-wider text-accent">
                    COMING SOON<span className="terminal-cursor ml-1">_</span>
                  </div>
                </div>
              </div>

              {/* Right side - Card */}
              {card ? (
                <div className="shrink-0 w-1/3 min-w-[200px] h-full">
                  <div className="border-2 border-primary/30 bg-background flex items-center justify-center overflow-hidden relative h-full">
                    {imageLoading && (
                      <div className="absolute inset-[2px] flex flex-col items-center justify-center bg-background font-mono z-10 border-2 border-primary/30">
                        <div className="text-accent text-xs mb-2">[LOADING]</div>
                        <div className="text-muted-foreground text-xs">Decoding card data...</div>
                        <div className="mt-2 w-32 h-1 bg-primary/20 rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full animate-loading-bar"></div>
                        </div>
                      </div>
                    )}
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.name}
                      className={`w-full h-auto object-contain transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                      onLoad={handleImageLoad}
                      onLoadStart={handleImageLoadStart}
                    />
                  </div>
                </div>
              ) : (
                <div className="shrink-0 w-1/3 min-w-[200px] h-full">
                  <div className="border-2 border-primary/30 bg-background flex items-center justify-center overflow-hidden relative h-full">
                    <div className="text-muted-foreground text-xs font-mono">[CARD_SLOT]</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-background text-center text-xs text-muted-foreground">
        <p>&gt; System Ready | Press [ENTER] to continue...</p>
      </footer>
    </div>
  );
}
