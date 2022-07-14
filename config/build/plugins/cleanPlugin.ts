import { Plugin } from 'esbuild';
import { rm } from 'fs/promises';

export const CleanPlugin: Plugin = {
  name: 'CleanPlugin',
  setup(build) {
    build.onStart(async () => {
      const outdir = build.initialOptions.outdir;

      if (outdir) {
        await rm(outdir, { recursive: true });
      }
    });
  },
};
