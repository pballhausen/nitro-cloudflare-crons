export default defineNuxtConfig({
  modules: ['@nuxthub/core'],
  hub: {
    // NuxtHub options
  },
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
