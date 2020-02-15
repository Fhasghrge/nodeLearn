function route(handle, pathname) {
  console.log('About to route a request for ' + pathname)
  if(typeof handle[pathname] === 'function') {
    return handle[pathname]()
  }else {
    console.log('No request handlers found for ' + pathname)
    return '404 No Found'
  }
}

exports.route = route