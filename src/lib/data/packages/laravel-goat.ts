import type { PackageItem } from '$lib/types';
import goatVideo from '@/assets/videos/goat.webm';

const pkg: PackageItem = {
  id: 'laravel-goat',
  title: 'meehh/laravel-goat',
  titleUrl: 'https://github.com/CodeWithTeds/meehh',
  meta: 'MIT · Owned by Prof Alex / TE-AD',
  video: goatVideo,
  videoAlt: 'laravel-goat goat animation',
  command: 'composer require meehh/laravel-goat --dev',
  description:
    'Terminal-first feature generator that turns a single migration or ERD into a complete slice — model, migration, requests, resource, thin controller, service, repository, policy and tests. 100% local, no AI or SaaS.',
  links: [
    { label: 'packagist.org', url: 'https://packagist.org/packages/meehh/laravel-goat' },
    { label: 'github.com', url: 'https://github.com/CodeWithTeds/meehh' }
  ],
  order: 1
};

export default pkg;
