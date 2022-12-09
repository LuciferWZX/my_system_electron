import { defineConfig } from 'umi';
import {proxy, routes} from './config';


export default defineConfig({
  npmClient: 'pnpm',
  plugins: [
    require.resolve('umi-plugin-electron-builder'),
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
  ],
  model:{},
  routes:routes,
  initialState: {},
  proxy:proxy,
  electronBuilder: {
    rendererTarget: 'web',
    buildType:'webpack',
    builderOptions: {
      appId: 'com.wzx.electron',
      productName: 'BigTool',
      publish: [
        {
          provider: 'generic',
          url: 'http://localhost/test',
        },
      ],
    },
    externals:['pouchdb','clone-buffer','uuid','node-fetch']
  },
});
