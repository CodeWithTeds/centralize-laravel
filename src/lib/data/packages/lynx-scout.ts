import type { PackageItem } from '$lib/types';
import lynxVideo from '@/assets/videos/lynx.webm';

const pkg: PackageItem = {
  id: 'lynx-scout',
  title: 'ryanlester/lynx-scout',
  titleUrl: 'https://github.com/rylacdang/lynx-scout',
  meta: 'Owned by Ryan Lester Lacdang',
  video: lynxVideo,
  videoAlt: 'lynx-scout animation',
  command: 'composer require ryanlester/lynx-scout --dev',
  description:
    'Zero-mutation performance intelligence that passively profiles queries, routes and queues — detecting N+1 loops, slow queries and bottlenecks to deliver prioritized, evidence-backed recommendations for Laravel 12 & 13.',
  links: [
    { label: 'packagist.org', url: 'https://packagist.org/packages/ryanlester/lynx-scout' },
    { label: 'github.com', url: 'https://github.com/rylacdang/lynx-scout' }
  ],
  order: 3
};

export default pkg;
