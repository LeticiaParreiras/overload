import {defineCliConfig} from 'sanity/cli'
import 'dotenv/config';

export default defineCliConfig({
  api: {
    projectId:  process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: 'overload-data'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
