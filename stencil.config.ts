import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'rapyd-pay-portal',
  taskQueue: 'async',
  outputTargets: [
    react({
      componentCorePackage: 'rapyd-pay-portal',
      proxiesFile: '../../generated/rapyd-pay-portal-react/src/components.ts',
      includeDefineCustomElements: true,
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
