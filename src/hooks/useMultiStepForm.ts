'use client';

import { useState, useCallback } from 'react';

export interface UseMultiStepFormOptions<T> {
  initialData: T;
  totalSteps: number;
  onStepChange?: (step: number) => void;
}

export interface UseMultiStepFormReturn<T> {
  currentStep: number;
  data: T;
  isFirstStep: boolean;
  isLastStep: boolean;
  progress: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (step: number) => void;
  updateData: (newData: Partial<T>) => void;
  reset: () => void;
}

export function useMultiStepForm<T>({
  initialData,
  totalSteps,
  onStepChange,
}: UseMultiStepFormOptions<T>): UseMultiStepFormReturn<T> {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<T>(initialData);

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;
  const progress = (currentStep / totalSteps) * 100;

  const goToNextStep = useCallback(() => {
    if (!isLastStep) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      onStepChange?.(nextStep);
    }
  }, [currentStep, isLastStep, onStepChange]);

  const goToPreviousStep = useCallback(() => {
    if (!isFirstStep) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      onStepChange?.(prevStep);
    }
  }, [currentStep, isFirstStep, onStepChange]);

  const goToStep = useCallback(
    (step: number) => {
      if (step >= 1 && step <= totalSteps) {
        setCurrentStep(step);
        onStepChange?.(step);
      }
    },
    [totalSteps, onStepChange]
  );

  const updateData = useCallback((newData: Partial<T>) => {
    setData((prev) => ({ ...prev, ...newData }));
  }, []);

  const reset = useCallback(() => {
    setCurrentStep(1);
    setData(initialData);
    onStepChange?.(1);
  }, [initialData, onStepChange]);

  return {
    currentStep,
    data,
    isFirstStep,
    isLastStep,
    progress,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    updateData,
    reset,
  };
}
