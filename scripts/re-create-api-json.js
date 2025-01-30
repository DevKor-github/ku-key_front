import childProcess from 'child_process'

import fsExtra from 'fs-extra'

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
const outputPath = 'scripts/__generated__/ku-key-api.json'

async function removeOperationId(filePath) {
  // 파일 읽기
  const response = await fetch(filePath)
  const data = await response.json()
  // paths 객체의 모든 엔드포인트와 메서드를 순회
  Object.values(data.paths).forEach(path => {
    Object.values(path).forEach(method => {
      // operationId 키가 있으면 제거
      if ('operationId' in method) {
        delete method.operationId
      }
    })
  })

  // 수정된 데이터를 파일에 쓰기
  await fsExtra.ensureDir('scripts/__generated__')
  await fsExtra.writeFile(outputPath, JSON.stringify(data, null, 2), 'utf8')
}

// 스크립트 실행
await removeOperationId('https://15.164.27.130.nip.io/api-json')
await execShellCommand(`yarn prettier --w "scripts/__generated__/ku-key-api.json"`)
