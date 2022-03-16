import fs from 'fs'
import ejs from 'ejs'
import path from 'path'
import prettier from 'prettier'
import { fileURLToPath } from 'url'

export default () => {
    const __dirname = fileURLToPath(import.meta.url)
    const indexTemplate = fs.readFileSync(path.resolve(__dirname, '../template/html.ejs'));

    const code = ejs.render(indexTemplate.toString(), {
        
    })

    return prettier.format(code, { parser: 'html' }) ;
}