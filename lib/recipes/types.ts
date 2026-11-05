import type { LucideIcon } from 'lucide-react';

// Recipe text marks bold words with **double asterisks**.
export type RecipeStep = {
  // Keep a step's ID when editing it so saved progress and the experiment
  // comparison follow the step. Give a new step a new ID.
  id: string;
  phase: string;
  time: string;
  icon: LucideIcon;
  title: string;
  body?: string;
  details?: string[];
  cue?: string;
};

export type Recipe = {
  steps: RecipeStep[];
  // The mother-starter refresh shown beside the bake, after the step it follows.
  motherRefresh: {
    afterStep: string;
    label: string;
    title: string;
    flow: string;
    instructions: string[];
  };
  // Weekly mother-starter care between bakes.
  maintenance: {
    kicker: string;
    title: string;
    steps: string[];
  };
};

export type RecipeVersion = 'baseline' | 'experiment';
