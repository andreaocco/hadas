// This file evaluates the player's answer and provides feedback, awarding XP based on correctness.
'use server';

/**
 * @fileOverview Evaluates the player's answer and provides feedback.
 *
 * - evaluateAnswer - A function that evaluates the player's answer.
 * - EvaluateAnswerInput - The input type for the evaluateAnswer function.
 * - EvaluateAnswerOutput - The return type for the evaluateAnswer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EvaluateAnswerInputSchema = z.object({
  question: z.string().describe('The question asked to the player.'),
  playerAnswer: z.string().describe('The player\'s answer to the question.'),
  correctAnswer: z.string().describe('The correct answer to the question.'),
});
export type EvaluateAnswerInput = z.infer<typeof EvaluateAnswerInputSchema>;

const EvaluateAnswerOutputSchema = z.object({
  isCorrect: z.boolean().describe('Whether the player\'s answer is correct.'),
  feedback: z.string().describe('Feedback for the player based on their answer.'),
  xpAwarded: z.number().describe('The amount of XP awarded to the player.'),
});
export type EvaluateAnswerOutput = z.infer<typeof EvaluateAnswerOutputSchema>;

export async function evaluateAnswer(input: EvaluateAnswerInput): Promise<EvaluateAnswerOutput> {
  return evaluateAnswerFlow(input);
}

const evaluateAnswerPrompt = ai.definePrompt({
  name: 'evaluateAnswerPrompt',
  input: {schema: EvaluateAnswerInputSchema},
  output: {schema: EvaluateAnswerOutputSchema},
  prompt: `You are an expert evaluator of player answers to trivia questions.

  Given the question, the player's answer, and the correct answer, you will determine if the player's answer is correct.
  Consider that the player's answer may not be exactly the same as the correct answer, but may still be correct.
  Provide feedback to the player based on their answer, and award XP accordingly.

  Question: {{{question}}}
  Player's Answer: {{{playerAnswer}}}
  Correct Answer: {{{correctAnswer}}}

  Here's how you must determine the xpAwarded value:
  - If the answer is correct, award 100 XP.
  - If the answer is incorrect, award 0 XP.

  Output the result as a JSON object.
  Ensure isCorrect is a boolean.
  Ensure xpAwarded is a number.
  `,
});

const evaluateAnswerFlow = ai.defineFlow(
  {
    name: 'evaluateAnswerFlow',
    inputSchema: EvaluateAnswerInputSchema,
    outputSchema: EvaluateAnswerOutputSchema,
  },
  async input => {
    const {output} = await evaluateAnswerPrompt(input);
    return output!;
  }
);
