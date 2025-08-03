"use client";

import { useState } from 'react';
import { GameScreen } from '@/components/game-screen';
import { PersonalityTest } from '@/components/personality-test';
import type { personalityFairies } from '@/lib/game-data';

type Fairy = (typeof personalityFairies)[0];

export default function Home() {
  const [selectedFairy, setSelectedFairy] = useState<Fairy | null>(null);

  const handleTestComplete = (fairy: Fairy) => {
    setSelectedFairy(fairy);
  };

  const handleRestart = () => {
    setSelectedFairy(null);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary" style={{ textShadow: '3px 3px 0px hsl(var(--accent)), 6px 6px 0px hsl(var(--secondary))' }}>
            HadaXP
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            ¡Gana XP, evoluciona a tu hada y aprende!
          </p>
        </header>
        
        {selectedFairy ? (
          <GameScreen initialFairy={selectedFairy} onGameEnd={handleRestart} />
        ) : (
          <PersonalityTest onTestComplete={handleTestComplete} />
        )}

      </div>
    </div>
  );
}
