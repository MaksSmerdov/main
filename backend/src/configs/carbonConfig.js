import * as Carbon from '../models/carbonModels.js';

export const carbonConfig = [
  {
    name: 'vr1',
    url: 'http://169.254.0.156:3002/api/vr1-data',
    apiRoute: '/vr1',
    model: Carbon.PechVr1,
  },
  {
    name: 'vr2',
    url: 'http://169.254.0.156:3002/api/vr2-data',
    apiRoute: '/vr2',
    model: Carbon.PechVr2,
  },
  {
    name: 'notis1',
    url: 'http://169.254.0.156:3002/api/notis1-data',
    apiRoute: '/notis1',
    model: Carbon.NotisVr1,
  },
  {
    name: 'notis2',
    url: 'http://169.254.0.156:3002/api/notis2-data',
    apiRoute: '/notis2',
    model: Carbon.NotisVr2,
  },
  {
    name: 'sushilka1',
    url: 'http://169.254.0.156:3002/api/sushilka1-data',
    apiRoute: '/sushilka1',
    model: Carbon.Sushilka1,
  },
  {
    name: 'sushilka2',
    url: 'http://169.254.0.156:3002/api/sushilka2-data',
    apiRoute: '/sushilka2',
    model: Carbon.Sushilka2,
  },
  {
    name: 'reactorK296',
    url: 'http://169.254.0.156:3002/api/reactorK296-data',
    apiRoute: '/reactorK296',
    model: Carbon.SmolReactor,
  },
  {
    name: 'mill1',
    url: 'http://169.254.0.156:3002/api/mill1-data',
    apiRoute: '/mill1',
    model: Carbon.Melniza1,
  },
  {
    name: 'mill2',
    url: 'http://169.254.0.156:3002/api/mill2-data',
    apiRoute: '/mill2',
    model: Carbon.Melniza2,
  },
  {
    name: 'mill10b',
    url: 'http://169.254.0.156:3002/api/mill10b-data',
    apiRoute: '/mill10b',
    model: Carbon.Melniza10b,
  },
  {
    name: 'mpa2',
    url: 'http://169.254.0.156:3002/api/mpa2-data',
    apiRoute: '/mpa2',
    model: Carbon.PechMpa2,
  },
  {
    name: 'mpa3',
    url: 'http://169.254.0.156:3002/api/mpa3-data',
    apiRoute: '/mpa3',
    model: Carbon.PechMpa3,
  },
  {
    name: 'energyResources',
    url: 'http://169.254.0.156:3002/api/uzliUchetaCarbon',
    apiRoute: '/uzliUchetaCarbon',
    model: Carbon.EnergyResources,
  },
];