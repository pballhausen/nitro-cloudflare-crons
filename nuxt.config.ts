export default defineNuxtConfig({
  modules: ['@nuxthub/core'],
  nitro: {
    preset: 'cloudflare-module',
    experimental: {
      tasks: true,
      openAPI: true,
    },
    scheduledTasks: {
      '* * * * *': ['test-task']
    },
  },
  hub: {
    database: false,
    blob: false,
    kv: false,
  },
  compatibilityDate: '2025-01-17'
});