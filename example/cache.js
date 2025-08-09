import 'dotenv/config'
import i18next from 'i18next'
import ChainedBackend from 'i18next-chained-backend'
import VaultriceBackend from 'i18next-vaultrice-backend'
import FSBackend from 'i18next-fs-backend'

i18next
  .use(ChainedBackend)
  .init({
    debug: true,
    fallbackLng: 'en',
    backend: {
      backends: [
        VaultriceBackend,
        FSBackend
      ],
      backendOptions: [
        {
          credentials: {
            projectId: process.env.VAULTRICE_PROJECT_ID,
            apiKey: process.env.VAULTRICE_API_KEY,
            apiSecret: process.env.VAULTRICE_API_SECRET
          }
        },
        {
          loadPath: './locales/{{lng}}/{{ns}}.json',
          addPath: './locales/{{lng}}/{{ns}}.json'
        }
      ]
    }
  }, (err, t) => {
    if (err) return console.error(err)

    console.log(t('welcome'))
    console.log(t('from'))
  })
