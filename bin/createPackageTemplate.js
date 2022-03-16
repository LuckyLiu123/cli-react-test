import fs from 'fs'
import ejs from 'ejs'
import path from 'path'
import prettier from 'prettier'
import { fileURLToPath } from 'url'

export default (config) => {
    const __dirname = fileURLToPath(import.meta.url)
    const packageTemplate = fs.readFileSync(path.resolve(__dirname, '../template/package.ejs') );

    const code = ejs.render(packageTemplate.toString(), {
        packageName: config.packageName,
    })
   
    return prettier.format(code, { parser: 'json' });
}