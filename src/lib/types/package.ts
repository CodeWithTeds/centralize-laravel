export interface PackageLink {
  label: string;
  url: string;
}

export interface PackageItem {
  id: string;
  title: string;
  titleUrl: string;
  meta?: string;
  video: string;
  videoAlt?: string;
  command?: string;
  description: string;
  links: PackageLink[];
}
