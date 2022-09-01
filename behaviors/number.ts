export const greaterOrEqual = (min: number) => (prop: number) => prop >= min;
export const greater = (min: number) => (prop: number) => prop > min;
export const lowerOrEqual = (max: number) => (prop: number) => prop <= max;
export const lower = (max: number) => (prop: number) => prop < max;
