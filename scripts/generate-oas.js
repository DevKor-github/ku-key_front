import childProcess from 'child_process'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

import fsExtra from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const ROOT_PATH = path.join(__dirname, '../')
const OUTPUT_PATH = path.join(ROOT_PATH, './packages/api')
const TEMPLATE_PATH = path.join(ROOT_PATH, './scripts/oas-templates')

async function cleanDirectory(targetPath) {
  const exists = await fsExtra.pathExists(targetPath)

  if (exists) {
    await fsExtra.emptyDir(targetPath)
    await fsExtra.remove(targetPath)
  }
}

/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */
function execShellCommand(cmd) {
  return new Promise((resolve, reject) => {
    childProcess.exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error)
        reject(error)
        return
      }
      console.log(stdout)
      resolve(stdout || stderr)
    })
  })
}

const oasGenerateScript = service => {
  const oasScriptPath = 'scripts/__generated__/ku-key-api.json'
  return [
    'openapi-generator-cli',
    'generate',
    ['-g', 'typescript-axios'],
    ['-i', `${oasScriptPath}`],
    ['-o', path.join(OUTPUT_PATH, `${service}`)],
    ['-c', path.join(ROOT_PATH, 'openapitools.json')],
    ['-t', path.join(TEMPLATE_PATH)],
  ]
    .flat()
    .join(' ')
}

function runPrettier() {
  return execShellCommand(`yarn prettier --w "${OUTPUT_PATH}/**/*.{js,jsx,ts,tsx}"`)
}

async function generateAPI(serviceName) {
  await execShellCommand(oasGenerateScript(serviceName))
}

;(async () => {
  console.log('Clean Directory')
  const serviceNames = ['ku-key']
  await Promise.all(serviceNames.map(serviceName => cleanDirectory(path.join(OUTPUT_PATH, serviceName))))

  console.log('Start Generate')
  await Promise.all(serviceNames.map(generateAPI))

  console.log('Run Prettier')
  await runPrettier()
})()
