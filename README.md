# Centralized Laravel

A dedicated ecosystem and discovery platform for curated Laravel packages, developer tooling, and specialized utilities.

## About the Project

Centralized Laravel was created to solve a common challenge in the Laravel and PHP open-source community: high-impact developer packages, schema generators, and specialized algorithms are often scattered across personal repositories or buried deep inside Packagist search results.

This platform serves as a centralized, community-driven hub that aggregates, showcases, and documents packages built for modern Laravel workflows. Rather than sifting through plain, text-heavy directory listings, developers get:

- Instant Installation: Copy ready-to-run Composer commands directly into your terminal without digging through setup documentation.
- Verified Source Links: Direct, verified links to official Packagist releases, GitHub source repositories, and licenses.
- Developer-Friendly Contributions: An open catalog with a standardized data contract (`PackageItem`), allowing developers to submit and showcase their own packages.

The application is engineered with Svelte 5 runes and Tailwind CSS for instant load times, responsive split-column layout, and a glowing retro Laravel particle logo.

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CodeWithTeds/centralize-laravel.git
   cd centralize-laravel
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

## Contributing a Package

If you have built a Laravel package and want to add it to the directory:

1. Review the package contract in `src/lib/types/package.ts`.
2. Add your package's preview media (`.webm`) to `src/assets/videos/`.
3. Create a new file in `src/lib/data/packages/<your-package-name>.ts`:

   ```ts
   import type { PackageItem } from '$lib/types';
   import previewVideo from '@/assets/videos/<your-video>.webm';

   const pkg: PackageItem = {
     id: 'your-package-id',
     title: 'vendor/package-name',
     titleUrl: 'https://github.com/vendor/package-name',
     meta: 'MIT',
     video: previewVideo,
     command: 'composer require vendor/package-name',
     description: 'A brief description of what your package does.',
     links: [
       { label: 'packagist.org', url: 'https://packagist.org/packages/vendor/package-name' },
       { label: 'github.com', url: 'https://github.com/vendor/package-name' }
     ]
   };

   export default pkg;
   ```

4. Submit a Pull Request. Your package will be automatically detected and displayed with zero merge conflicts!

## Contributors

[![Contributors](https://contrib.rocks/image?repo=CodeWithTeds/centralize-laravel)](https://github.com/CodeWithTeds/centralize-laravel/graphs/contributors)

## License

This project is open-source software licensed under the [MIT License](https://opensource.org/license/mit).
