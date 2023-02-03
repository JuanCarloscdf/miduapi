const middleware = (req, res, next) => {
  console.log('pasasndo por el middleware')
  next()
}

module.exports = middleware
