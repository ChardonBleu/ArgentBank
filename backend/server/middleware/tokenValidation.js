const jwt = require('jsonwebtoken')

module.exports.validateToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    
    if (!authHeader) {
      throw new Error('Authorization header missing')
    }

    // Méthode split avec vérification
    const parts = authHeader.split(' ')
    
    if (parts.length !== 2) {
      throw new Error('Invalid authorization format. Must be: <scheme> <token>')
    }
    
    const [scheme, token] = parts
    
    if (scheme !== 'Bearer') {
      throw new Error('Authorization scheme must be Bearer')
    }
    
    if (!token) {
      throw new Error('Token missing')
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY || 'default-secret-key')
    req.user = decodedToken
    
    return next()
  } catch (error) {
    console.error('Error in tokenValidation.js', error.message)
    return res.status(401).json({
      status: 401,
      message: error.message
    })
  }
}
