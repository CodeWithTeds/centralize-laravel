import type { PackageItem } from '$lib/types';
import fastestVideo from '@/assets/videos/fastest.webm';

const pkg: PackageItem = {
  id: 'emergency-response-routing',
  title: 'Emergency Response Routing',
  titleUrl: 'https://github.com/CodeWithTeds/Shortest-Path-Optimization',
  meta: 'MIT · Owned by Prof Alex / TE-AD',
  video: fastestVideo,
  videoAlt: 'Emergency Response Routing animation',
  description:
    "Building a first-of-its-kind offline 3D navigation system for emergency response—designed to work where there's no internet. It combines detailed 3D maps with smart routing, giving responders reliable guidance when every second counts.",
  links: [
    {
      label: 'github.com',
      url: 'https://github.com/CodeWithTeds/Shortest-Path-Optimization'
    }
  ],
  order: 2
};

export default pkg;
