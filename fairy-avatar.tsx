"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { fairies, personalityFairies } from '@/lib/game-data';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

type FairyFromPersonality = (typeof personalityFairies)[0];

type FairyAvatarProps = ComponentProps<typeof Card> & {
  xp: number;
  initialFairy?: FairyFromPersonality;
};

export function FairyAvatar({ xp, initialFairy, className, ...props }: FairyAvatarProps) {
  const currentFairyLevel = fairies
    .slice()
    .reverse()
    .find((f) => xp >= f.xpThreshold) || fairies[0];

  const fairyName = initialFairy ? `${initialFairy.name} (Nivel ${currentFairyLevel.level})` : currentFairyLevel.name;
  const fairyImage = initialFairy ? initialFairy.imageUrl : currentFairyLevel.imageUrl;
  const fairyImageHint = initialFairy ? initialFairy.dataAiHint : currentFairyLevel.dataAiHint;

  return (
    <Card className={cn("text-center border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))]", className)} {...props}>
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold">{fairyName}</CardTitle>
        <CardDescription>Tu Hada</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex justify-center items-center">
        <div className="bg-secondary p-2 rounded-lg border-2 border-foreground">
          <Image
            src={fairyImage}
            alt={fairyName}
            width={100}
            height={100}
            className="rounded-md"
            style={{ imageRendering: 'pixelated' }}
            data-ai-hint={fairyImageHint}
            priority
          />
        </div>
      </CardContent>
    </Card>
  );
}
