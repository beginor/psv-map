import { Map, NavigationControl } from 'mapbox-gl';

import token from './token.js';

const map = new Map({
  container: 'app',
  accessToken: token,
  style: 'mapbox://styles/beginor/ckjf6mvge0hhk19p75nt647p5',
  hash: true,
  zoom: 10
});
map.addControl(new NavigationControl(), 'top-right');

Object.assign(window, { mapview: map });
