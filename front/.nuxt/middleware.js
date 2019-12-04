const middleware = {}

middleware['isLoggedIn'] = require('..\\middleware\\isLoggedIn.js');
middleware['isLoggedIn'] = middleware['isLoggedIn'].default || middleware['isLoggedIn']

middleware['isNotLoggedIn'] = require('..\\middleware\\isNotLoggedIn.js');
middleware['isNotLoggedIn'] = middleware['isNotLoggedIn'].default || middleware['isNotLoggedIn']

export default middleware
