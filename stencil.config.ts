import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'rapyd-pay-portal',
  taskQueue: 'async',
  plugins: [nodePolyfills()],
  outputTargets: [
    react({
      componentCorePackage: 'rapyd-pay-portal',
      proxiesFile: '../global-one-fe/global-one/src/generated-components/rapyd-pay-portal-react/src/components.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),

    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
