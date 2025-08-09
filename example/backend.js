import 'dotenv/config'
import i18next from 'i18next'
import VaultriceBackend from 'i18next-vaultrice-backend'

i18next
  .use(VaultriceBackend)
  .init({
    debug: true,
    fallbackLng: 'en',
    backend: {
      credentials: {
        projectId: process.env.VAULTRICE_PROJECT_ID,
        apiKey: process.env.VAULTRICE_API_KEY,
        apiSecret: process.env.VAULTRICE_API_SECRET
      }
    },
    saveMissing: true
  }, (err, t) => {
    if (err) return console.error(err)

    console.log(t('welcome'))
    console.log(t('from', 'vaultrice'))
  })
