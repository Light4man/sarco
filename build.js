import { PythonShell } from 'python-shell'

PythonShell.run('arweave_build.py', null, function (err) {
  if (err) throw err
  console.log('finished')
})
