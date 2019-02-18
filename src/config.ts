// tslint:disable:no-http-string
export const config: {
  url: string;
  gaCode: string;
  githubUrl: string;
  facebookPageUrl: string;
  twitterCardType: string;
  twitterAccount: string;
  instagramAccount: string;
} = {
  url: process.env.NODE_ENV === 'production' ? 'https://clap.com' : 'http://example.com:3030',
  gaCode: process.env.GOOGLE_ANALYTICS_CODE,
  githubUrl: 'https://github.com/khirayama/clap',
  facebookPageUrl: 'https://www.facebook.com/clap/',
  twitterCardType: 'summary',
  twitterAccount: '@clap',
  instagramAccount: 'clap',
};
