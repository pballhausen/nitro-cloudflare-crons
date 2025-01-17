export default defineNuxtConfig({
  modules: ['@nuxthub/core'],
  nitro: {
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
    database: true,
    blob: true,
    kv: true,
  },
  compatibilityDate: '2025-01-17'
});