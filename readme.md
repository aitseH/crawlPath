#usage

```bash
yarn add crawl-path

```

```js

let files = new Map<string, string|string[]>()

await crawlPath(path.join(__dirname, 'foo'), {
  onDir: async (_files, _path, depth) => {
    files.set(_path, _files)
  },
  onFile: async(file) => {
    console.log(file)
  }
})

```