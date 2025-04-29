import * as Utvh from '../models/utvhModels.js';

export const utvhConfig = [
  {
    name: 'kotel1',
    url: 'http://169.254.0.166:3002/api/kotel1-data',
    apiRoute: '/kotel1',
    model: Utvh.Kotel1,
  },
  {
    name: 'kotel2',
    url: 'http://169.254.0.166:3002/api/kotel2-data',
    apiRoute: '/kotel2',
    model: Utvh.Kotel2,
  },
  {
    name: 'kotel3',
    url: 'http://169.254.0.166:3002/api/kotel3-data',
    apiRoute: '/kotel3',
    model: Utvh.Kotel3,
  },
  {
    name: 'hvo1',
    url: 'http://169.254.0.166:3002/api/hvo1-data',
    apiRoute: '/hvo1',
    model: Utvh.Hvo1,
  },
  {
    name: 'hvo2',
    url: 'http://169.254.0.166:3002/api/hvo2-data',
    apiRoute: '/hvo2',
    model: Utvh.Hvo2,
  },
];