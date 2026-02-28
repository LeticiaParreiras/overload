import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'overload',

  projectId: '4h51vdn7',
  dataset: 'overload-data',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
