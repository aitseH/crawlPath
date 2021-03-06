import * as fs from 'fs-extra-promise'

interface crawOption {
  onDir: (files: string | string[], _path: string, depth: number) => Promise<void>;
  onFile: (file: string) => Promise<void>;
}

export async function crawlPath(_path, options: crawOption, depth = 0) {
  if (await isDir(_path)) {
    depth += 1
    const files = await fs.readdirAsync(_path)
    await options.onDir(files, _path, depth)

    if (files) {
      for (let fileName of files) {
        const file = `${_path}/${fileName}`

        if (await isDir(file)) {
          await crawlPath(file, options, depth)
        } else if (await isFile(file)) {
          await options.onFile(file)
        }
      }
    }
  } else if (await isFile(_path)) {
    await options.onFile(_path)
  }
}

export async function isDir(path) {
  return (await fs.lstatAsync(path)).isDirectory()
}

export async function isFile(path) {
  return (await fs.lstatAsync(path)).isFile()
}
