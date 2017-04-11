import {crawlPath} from '../src/crawlPath'
import * as path from 'path'

describe('test', () => {
  it('run succsss', async () => {

      let files = new Map<string, string|string[]>()

      await crawlPath(path.join(__dirname, 'foo'), {
        onDir: async (_files, _path, depth) => {
          files.set(_path, _files)
        },
        onFile: async(file) => {
          console.log(file)
        }
      })

      expect(files.size).toEqual(3)
    
  })
})