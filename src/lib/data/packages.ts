import type { PackageItem } from '$lib/types';
import goatVideo from '@/assets/videos/goat.webm';
import fastestVideo from '@/assets/videos/fastest.webm';

export const packages: PackageItem[] = [
  {
    id: 'laravel-goat',
    title: 'meehh/laravel-goat',
    titleUrl: 'https://github.com/CodeWithTeds/meehh',
    meta: 'MIT · Owned by Prof Alex / TE-AD',
    video: goatVideo,
    videoAlt: 'laravel-goat goat animation',
    command: 'composer require meehh/laravel-goat',
    description: 'is a Laravel feature generator that transforms your schema into complete boilerplate including migrations, models, controllers, and API routes.',
    links: [
      { label: 'packagist.org', url: 'https://packagist.org/packages/meehh/laravel-goat' },
      { label: 'github.com/CodeWithTeds/meehh', url: 'https://github.com/CodeWithTeds/meehh' }
    ]
  },
  {
    id: 'emergency-response-routing',
    title: 'Emergency Response Routing',
    titleUrl: 'https://github.com/CodeWithTeds/Shortest-Path-Optimization',
    video: fastestVideo,
    videoAlt: 'Emergency Response Routing animation',
    description: "Building a first-of-its-kind offline 3D navigation system for emergency response—designed to work where there's no internet. It combines detailed 3D maps with smart routing, giving responders reliable guidance when every second counts.",
    links: [
      { label: 'github.com/CodeWithTeds/Shortest-Path-Optimization', url: 'https://github.com/CodeWithTeds/Shortest-Path-Optimization' }
    ]
  }
];
