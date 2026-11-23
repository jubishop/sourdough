import { CookingPot, RectangleHorizontal, type LucideIcon } from 'lucide-react';

import { baseline as dutchOvenBaseline } from './dutch-oven/baseline';
import { experiment as dutchOvenExperiment } from './dutch-oven/experiment';
import { baseline as loafPanBaseline } from './loaf-pan/baseline';
import { experiment as loafPanExperiment } from './loaf-pan/experiment';
import type { Recipe, RecipeMethod, RecipeVersion } from './types';

// Each baking path holds its own baseline and experiment, listed in switch order.
export const methods: { id: RecipeMethod; label: string; icon: LucideIcon; recipes: Record<RecipeVersion, Recipe> }[] = [
  { id: 'dutch-oven', label: 'Dutch oven', icon: CookingPot, recipes: { baseline: dutchOvenBaseline, experiment: dutchOvenExperiment } },
  { id: 'loaf-pan', label: 'Loaf pan', icon: RectangleHorizontal, recipes: { baseline: loafPanBaseline, experiment: loafPanExperiment } },
];
