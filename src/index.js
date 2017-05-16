import path from 'path'
import { createService } from 'weacast-core'

export default function init () {
  let app = this

  createService('probes', app, path.join(__dirname, 'models'), path.join(__dirname, 'services'))
}
