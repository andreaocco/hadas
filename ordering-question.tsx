"use client";

import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, type DropResult } from 'react-beautiful-dnd';
import { Button } from '@/components/ui/button';
import { GripVertical, Loader2 } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[] | Record<string, string>;
  correctAnswer: string | string[];
  type: 'multiple-choice' | 'ordering' | 'drag-and-drop' | 'matching';
}

interface OrderingQuestionProps {
  question: Question;
  onSubmit: (answer: string) => void;
  isPending: boolean;
  feedbackProvided: boolean;
}

// Helper to shuffle array
const shuffle = (array: any[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

export function OrderingQuestion({ question, onSubmit, isPending, feedbackProvided }: OrderingQuestionProps) {
  const [items, setItems] = useState<string[]>([]);
  
  useEffect(() => {
    // Shuffle the options only once when the component mounts
    if (Array.isArray(question.options)) {
      setItems(shuffle([...question.options]));
    }
  }, [question.options]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination || feedbackProvided) {
      return;
    }
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
  };

  const handleSubmit = () => {
    onSubmit(items.join(', '));
  };
  
  return (
    <div className="space-y-4">
       <p className="text-sm text-muted-foreground text-center">Arrastra y suelta las opciones para ordenarlas correctamente.</p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" isDropDisabled={feedbackProvided} isCombineEnabled={false}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
              {items.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index} isDragDisabled={feedbackProvided}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`flex items-center p-4 rounded-lg border-2 border-foreground bg-card transition-shadow ${
                        snapshot.isDragging ? 'shadow-lg' : ''
                      } ${feedbackProvided ? 'opacity-50' : ''}`}
                    >
                      <GripVertical className="mr-4 text-muted-foreground" />
                      <span>{item}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {!feedbackProvided && (
        <Button
          onClick={handleSubmit}
          disabled={isPending || feedbackProvided}
          className="w-full mt-4 border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--foreground))] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
        >
          {isPending ? <Loader2 className="animate-spin" /> : 'Revisar Respuesta'}
        </Button>
      )}
    </div>
  );
}
