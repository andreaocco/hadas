"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { personalityFairies, resultFairies } from '@/lib/game-data';

type InitialFairy = (typeof personalityFairies)[0];
type ResultFairy = (typeof resultFairies)['Hada Iluminada'];

type GameResultProps = {
  initialFairy: InitialFairy;
  resultFairy: ResultFairy;
  onRestart: () => void;
};

export function GameResult({ initialFairy, resultFairy, onRestart }: GameResultProps) {

  return (
    <Card className="w-full max-w-2xl mx-auto border-2 border-foreground shadow-[8px_8px_0px_hsl(var(--accent))]">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">¡Has completado el reto!</CardTitle>
        <CardDescription className="text-lg px-6">
          Pasaste de ser un Hada {initialFairy.name} a...
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6">
        <div className="bg-secondary p-4 rounded-lg border-2 border-foreground">
          <Image
            src={resultFairy.imageUrl}
            alt={resultFairy.name}
            width={150}
            height={150}
            className="rounded-md"
            style={{ imageRendering: 'pixelated' }}
            data-ai-hint={resultFairy.dataAiHint}
          />
        </div>
        <div className="text-center">
            <h2 className="text-2xl font-bold">{resultFairy.name}</h2>
            <p className="mt-2 text-muted-foreground whitespace-pre-line">{resultFairy.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={onRestart}
          className="border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--foreground))] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all text-lg px-8 py-6"
        >
          THE END
        </Button>
      </CardFooter>
    </Card>
  );
}
