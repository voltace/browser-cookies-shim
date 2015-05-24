# browser-cookies-shim
**This is a shim for the tiny cookies library [browser-cookies](https://www.github.com/voltace/browser-cookies)**

This shim allows browser-cookies to run on node, though it won't actually set/get/erase any cookies at all. It's mainly useful in case javascipt client code needs to be executed on node without raising any errors (see [voltace/browser-cookies#3](https://github.com/voltace/browser-cookies/pull/3) for the rationale).

### Installation
Using NPM  
```javascript
npm install browser-cookies-shim
npm install browser-cookies
```

### Usage
Require `browser-cookies-shim` instead of `browser-cookies` in your application code:
```javascript
var cookies = require('browser-cookies-shim');

cookies.set('name', 'Lisa'); // May call any of the browser-cookies functions
```

Now add the following to the package.json in your project:
```javascript
{
  "browser": {
    "browser-cookies-shim": "browser-cookies"
  }
}
```

This setup will ensure browsers will load `browser-cookies` while node will load `browser-cookies-shim`.
