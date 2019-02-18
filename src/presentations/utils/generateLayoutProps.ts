import { config } from 'config';

export interface ILayoutProps {
  env: string;
  gaCode: string;
  title: string;
  description: string;
  author: string;
  baseUrl: string;
  url: string;
  path: string;
  route: string;
  name: string;
  keywords: string;
  image: string;
  facebookPageUrl: string;
  twitterCardType: string;
  twitterAccount: string;
  pageType: string;
  children: string;
  state: any; // tslint:disable-line:no-any
  scripts: string[];
  stylesheets: string[];
}

export function generateLayoutProps(): ILayoutProps {
  return {
    env: process.env.NODE_ENV || 'development',
    gaCode: config.gaCode,
    author: 'clap',
    name: 'clap',
    baseUrl: config.url,
    url: config.url,
    facebookPageUrl: config.facebookPageUrl,
    twitterCardType: config.twitterCardType,
    twitterAccount: config.twitterAccount,
    pageType: 'cafe',
    path: '',
    route: '',
    // content meta
    title: '',
    description: '',
    keywords: '',
    image: '',
    children: '',
    state: {},
    scripts: [],
    stylesheets: [],
  };
}
