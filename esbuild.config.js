const esbuild = require('esbuild');
const pluginVue = require('esbuild-plugin-vue-next');
const path = require('path');

(async () => {
  const result = await esbuild.build({
    entryPoints: ["application.ts"],
    bundle: true,
    minify: true,
    metafile: true,
    outdir: path.join(process.cwd(), "app/assets/builds"),
    absWorkingDir: path.join(process.cwd(), "app/javascript"),
    plugins: [pluginVue()],
    loader: {
      ".svg": "file"
    },
    publicPath: '/assets/',
  });

  const text = await esbuild.analyzeMetafile(result.metafile);
  console.log(text);
})();
