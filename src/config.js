// set ApiOrigin equal to the development or production URL
// NODE_ENV resolves to 'production', 'development', or 'test'
// environment variables need to be accessed using process.env
let ApiOrigin

if (process.env.NODE_ENV !== 'production') {
  ApiOrigin = 'http://localhost:3000'
} else {
  ApiOrigin = 'no production yet'
}

module.exports = {ApiOrigin}
