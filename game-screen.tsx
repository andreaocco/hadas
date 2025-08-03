"use client";

import { useState, useTransition, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { evaluateAnswer, type EvaluateAnswerOutput } from '@/ai/flows/evaluate-answer';
import { FairyAvatar } from './fairy-avatar';
import { XpDisplay } from './xp-display';
import { questions, personalityFairies, resultFairies } from '@/lib/game-data';
import { ArrowRight, Loader2 } from 'lucide-react';
import { GameResult } from './game-result';

type Feedback = {
  text: string;
  type: 'correct' | 'incorrect' | '';
};

type Fairy = (typeof personalityFairies)[0];
type ResultFairy = (typeof resultFairies)['Hada Iluminada'];

type GameScreenProps = {
  initialFairy: Fairy;
  onGameEnd: () => void;
};

export function GameScreen({ initialFairy, onGameEnd }: GameScreenProps) {
  const [userXp, setUserXp] = useState(0);
  const [opponentXp, setOpponentXp] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState<Feedback>({ text: '', type: '' });
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false);
  const [finalResult, setFinalResult] = useState<ResultFairy | null>(null);


  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSubmit = (answer: string) => {
    startTransition(async () => {
      try {
        const result: EvaluateAnswerOutput = await evaluateAnswer({
          question: currentQuestion.question,
          playerAnswer: answer,
          correctAnswer: Array.isArray(currentQuestion.correctAnswer) ? currentQuestion.correctAnswer.join(', ') : currentQuestion.correctAnswer,
        });

        setFeedback({
          text: result.feedback,
          type: result.isCorrect ? 'correct' : 'incorrect',
        });
        if (result.isCorrect) {
          setUserXp((prev) => prev + result.xpAwarded);
          setCorrectAnswers((prev) => prev + 1);
        } else {
          setOpponentXp((prev) => prev + 100);
        }

      } catch (error) {
        console.error(error);
        toast({
          title: 'Error de Evaluación',
          description: 'No se pudo evaluar la respuesta. Inténtalo de nuevo.',
          variant: 'destructive',
        });
      }
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      // End of quiz, calculate result
      const percentage = (correctAnswers / questions.length) * 100;
      let resultKey: keyof typeof resultFairies;
      if (percentage <= 40) {
        resultKey = 'Hada Desconectada';
      } else if (percentage <= 80) {
        resultKey = 'Hada Embolatada';
      } else {
        resultKey = 'Hada Iluminada';
      }
      setFinalResult(resultFairies[resultKey]);
    } else {
      setFeedback({ text: '', type: '' });
      setSelectedAnswer('');
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };
  
  const feedbackColorClass = feedback.type === 'correct' ? 'text-green-600' : 'text-red-600';
  const feedbackBorderClass = feedback.type === 'correct' ? 'border-green-500' : 'border-red-500';
  
  if (finalResult) {
    return <GameResult initialFairy={initialFairy} resultFairy={finalResult} onRestart={onGameEnd} />;
  }

  const renderQuestion = () => {
    if (!isClient) {
      return <div className="flex justify-center"><Loader2 className="animate-spin h-8 w-8" /></div>;
    }

    switch (currentQuestion.type) {
      case 'multiple-choice':
        return (
          <div className="grid grid-cols-1 gap-4">
            {(currentQuestion.options as string[]).map((option) => (
              <Button
                key={option}
                onClick={() => {
                  setSelectedAnswer(option);
                  handleAnswerSubmit(option);
                }}
                disabled={isPending || !!feedback.text}
                className="border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--foreground))] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all h-auto whitespace-normal p-4 text-base"
                variant={selectedAnswer === option ? 'secondary' : 'outline'}
              >
                {isPending && selectedAnswer === option ? <Loader2 className="animate-spin" /> : option}
              </Button>
            ))}
          </div>
        );
      default:
         return (
          <div className="p-4 rounded-lg border-2 border-foreground bg-card text-center">
            <h3 className="font-bold text-lg">Próximamente</h3>
            <p className="mt-2">Este tipo de pregunta interactiva estará disponible pronto. ¡Presiona "Siguiente Pregunta" para continuar!</p>
          </div>
        );
    }
  }
  
  const showNextButton = !!feedback.text

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FairyAvatar xp={userXp} initialFairy={initialFairy} className="md:col-span-1" />
        <div className="md:col-span-2">
          <XpDisplay userXp={userXp} opponentXp={opponentXp} />
        </div>
      </div>

      <Card className="border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Pregunta {currentQuestionIndex + 1}</CardTitle>
          <CardDescription className="text-lg">{currentQuestion.question}</CardDescription>
        </CardHeader>
        <CardContent>
          {!feedback.text ? (
            renderQuestion()
          ) : (
            <div className={`p-4 rounded-lg border-2 ${feedbackBorderClass} bg-card`}>
              <h3 className={`font-bold text-lg ${feedbackColorClass}`}>
                {feedback.type === 'correct' ? '¡Correcto!' : 'Inténtalo de nuevo'}
              </h3>
              <p className="mt-2">{feedback.text}</p>
            </div>
          )}
        </CardContent>
        {showNextButton && (
          <CardFooter>
            <Button
              onClick={handleNextQuestion}
              className="ml-auto border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--foreground))] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
