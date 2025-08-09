import { defineConfig } from 'vitest/config'

export default defineConfig(({ mode }) => {
  return {
    test: {
      // Default include patterns can be empty,
      // will be overridden in CLI or scripts by --include
      include: ['test/**/*.test.ts']
    }
  }
})
