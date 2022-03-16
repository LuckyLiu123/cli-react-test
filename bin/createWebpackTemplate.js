import fs from 'fs'
import ejs from 'ejs'
import path from 'path'
import prettier from 'prettier'
import { fileURLToPath } from 'url'

export default (config) => {
    const __dirname = fileURLToPath(import.meta.url)
    const webpackTemplate = fs.readFileSync(path.resolve(__dirname, '../template/webpack.ejs'));

    const code = ejs.render(webpackTemplate.toString(), {
        port: config.port
    })
    
    return prettier.format(code, { parser: 'babel' });
}