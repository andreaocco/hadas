"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { FairyIcon, AiIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

type XpDisplayProps = ComponentProps<typeof Card> & {
  userXp: number;
  opponentXp: number;
};

const MAX_XP_DISPLAY = 1000;

export function XpDisplay({ userXp, opponentXp, className, ...props }: XpDisplayProps) {
  const userProgress = (userXp % MAX_XP_DISPLAY) / 10;
  const opponentProgress = (opponentXp % MAX_XP_DISPLAY) / 10;

  return (
    <Card className={cn("border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Progreso de XP</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span className="flex items-center gap-2">
              <FairyIcon className="h-6 w-6 text-pink-400" />
              <span>Tú</span>
            </span>
            <span>{userXp} XP</span>
          </div>
          <Progress value={userProgress} className="h-4 border-2 border-foreground" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span className="flex items-center gap-2">
              <AiIcon className="h-6 w-6 text-purple-400" />
              <span>Rival IA</span>
            </span>
            <span>{opponentXp} XP</span>
          </div>
          <Progress value={opponentProgress} className="h-4 border-2 border-foreground" indicatorClassName="bg-purple-400" />
        </div>
      </CardContent>
    </Card>
  );
}
