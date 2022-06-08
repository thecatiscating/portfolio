const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mars: resolve(__dirname, 'mars/mars.html'),
        
        eth: resolve(__dirname, 'eth/eth.html'),
        
        sun: resolve(__dirname, 'sun/sun.html')
        
      }
    }
  }
})