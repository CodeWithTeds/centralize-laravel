import type { PackageItem } from '$lib/types';
import goatVideo from '@/assets/videos/goat.webm';

const pkg: PackageItem = {
  id: 'laravel-goat',
  title: 'meehh/laravel-goat',
  titleUrl: 'https://github.com/CodeWithTeds/meehh',
  meta: 'MIT · Owned by Prof Alex / TE-AD',
  video: goatVideo,
  videoAlt: 'laravel-goat goat animation',
  command: 'composer require meehh/laravel-goat',
  description:
    'is a Laravel feature generator that transforms your schema into complete boilerplate including migrations, models, controllers, and API routes.',
  links: [
    { label: 'packagist.org', url: 'https://packagist.org/packages/meehh/laravel-goat' },
    { label: 'github.com/CodeWithTeds/meehh', url: 'https://github.com/CodeWithTeds/meehh' }
  ],
  order: 1
};

export default pkg;
