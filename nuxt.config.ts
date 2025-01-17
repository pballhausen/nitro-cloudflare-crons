export default defineNuxtConfig({
  nitro: {
    srcDir: "server",
    experimental: {
      tasks: true
    },
    scheduledTasks: {
      '* * * * *': ['my-task']
    },
    preset: 'cloudflare-module'
  }
});
