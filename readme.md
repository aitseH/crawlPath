# usage

```bash
yarn add crawl-path

```

```js

import {crawlPath} from 'crawl-path'

let files = new Map

await crawlPath(path.join(__dirname, 'foo'), {
  onDir: async (_files, _path, depth) => {
    files.set(_path, _files)
  },
  onFile: async(file) => {
    console.log(file)
  }
})

```