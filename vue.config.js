'use strict'

const pages = {}
const titles = {
  'moduleA': '项目A',
  'moduleB': '项目B',
}

const glob = require('glob')
glob.sync('./src/modules/**/main.js').forEach(path => {
    console.log(path);
    const pageName = path.split('./src/modules/')[1].split('/main.js')[0]
    pages[pageName] = {
        entry: path,
        filename: pageName + '.html',
        // If doesn't exist, fallback to 'public/index.html'
        template: pageName + '.html',
        title: titles[pageName],
        chunks: ['chunk-vendors', 'chunk-common', pageName],
    }
})

const isDev = (process.env.NODE_ENV === "development")

module.exports = {
    pages,
    productionSourceMap: isDev,
    runtimeCompiler: true,
}