import { join } from 'path'
import {addAlias} from 'module-alias'

addAlias('@', join(__dirname, '..'))
