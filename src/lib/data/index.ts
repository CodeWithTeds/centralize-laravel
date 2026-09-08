import type { PackageItem } from '$lib/types';

// Automatically import all package files from ./packages/*.ts
const modules = import.meta.glob<{ default: PackageItem }>('./packages/*.ts', { eager: true });

export const packages: PackageItem[] = Object.values(modules)
  .map((mod) => mod.default)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
