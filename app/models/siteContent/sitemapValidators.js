const { checkSchema } = require('express-validator/check')
const { getValidator, getStringValidator, getBooleanValidator, getIntValidator, setIsOptional } = require('../../helpers/validatorHelpers')

const schema = {
  path: getStringValidator('URL'),
  title: getStringValidator('Nimi'),
  isCustom: getBooleanValidator('Komponenttitieto'),
  parentId: setIsOptional(getStringValidator('Parent')),
  sitePageId: setIsOptional(getIntValidator('Sisältötunniste')),
  weight: getIntValidator('Paino')
}

const validateCreate = () =>
  getValidator([
    checkSchema(schema)
  ])

const validateUpdate = () =>
  getValidator([
    checkSchema(schema),
    checkSchema({
      sitemapId: {
        in: ['params'],
        isInt: true,
        toInt: true
      }
    })

  ])

module.exports = {
  validateCreate,
  validateUpdate
}