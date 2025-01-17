export default defineNuxtConfig({
  modules: ['@nuxthub/core'],
  nitro: {
    srcDir: "server",
    experimental: {
      tasks: true,
      openAPI: true,
    },
    scheduledTasks: {
      '* * * * *': ['my-task']
    },
    preset: 'cloudflare-module'
  },
  hub: {
    database: false,
    blob: false,
    kv: false,
  }
});
