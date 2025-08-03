"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { personalityQuestions, personalityFairies } from '@/lib/game-data';
import Image from 'next/image';

type Fairy = {
  name: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
};

type PersonalityTestProps = {
  onTestComplete: (fairy: Fairy) => void;
};

export function PersonalityTest({ onTestComplete }: PersonalityTestProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [resultFairy, setResultFairy] = useState<Fairy | null>(null);

  const handleAnswer = (fairyName: string) => {
    const newAnswers = {
      ...answers,
      [fairyName]: (answers[fairyName] || 0) + 1,
    };
    setAnswers(newAnswers);

    if (currentQuestionIndex < personalityQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      showResult(newAnswers);
    }
  };

  const showResult = (finalAnswers: Record<string, number>) => {
    const finalFairyName = Object.keys(finalAnswers).reduce((a, b) => finalAnswers[a] > finalAnswers[b] ? a : b, personalityFairies[0].name);
    const finalFairy = personalityFairies.find(f => f.name === finalFairyName) || personalityFairies[0];
    setResultFairy(finalFairy);
  };

  const currentQuestion = personalityQuestions[currentQuestionIndex];

  if (resultFairy) {
    return (
      <Card className="w-full max-w-2xl mx-auto border-2 border-foreground shadow-[8px_8px_0px_hsl(var(--accent))]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">¡Tu hada interior es {resultFairy.name}!</CardTitle>
          <CardDescription className="text-lg px-6">{resultFairy.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
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
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            onClick={() => onTestComplete(resultFairy)}
            className="border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--foreground))] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all text-lg px-8 py-6"
          >
            ¡Comenzar a jugar!
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto border-2 border-foreground shadow-[8px_8px_0px_hsl(var(--accent))]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Descubre tu Hada Interior</CardTitle>
        <CardDescription className="text-center text-base">
          Pregunta {currentQuestionIndex + 1} de {personalityQuestions.length}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-xl mb-6">{currentQuestion.question}</p>
        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.answers.map((answer) => (
            <Button
              key={answer.text}
              onClick={() => handleAnswer(answer.fairy)}
              className="border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--foreground))] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all h-auto whitespace-normal p-4 text-base"
              variant="outline"
            >
              {answer.text}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
