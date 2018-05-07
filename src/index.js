const __DEV__ = process.env.NODE_ENV === 'development'

if (__DEV__) {
  require('./dev.js')
}
