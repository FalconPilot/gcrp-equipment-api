const commonParams = {
  use_env_variable: 'DATABASE_URL',
  dialect: 'postgres'
}

module.exports = {
  test: commonParams,
  development: commonParams,
  staging: commonParams,
  production: commonParams
}
