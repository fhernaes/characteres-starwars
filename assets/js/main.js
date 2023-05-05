import { renderCard } from './card.js';
import { identifyNumbers, generateNumbers } from './numbers.js';
import {popular, secondary, significant, popularRow, secondaryRow, significantRow} from './dom.js';

const [min1, max1] = identifyNumbers(popular);
const [min2, max2] = identifyNumbers(secondary);
const [min3, max3] = identifyNumbers(significant);

const generators = [
  generateNumbers(min1, max1),
  generateNumbers(min2, max2),
  generateNumbers(min3, max3 - 1)
];

popular.addEventListener('mouseover', () => renderCard(generators[0], 'Red', popularRow));
secondary.addEventListener('mouseover', () => renderCard(generators[1], 'Green',secondaryRow));
significant.addEventListener('mouseover', () => renderCard(generators[2], 'Blue',significantRow));

