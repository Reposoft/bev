# bev
Backbone.js's event mechanism as mixin

This is a tiny lib for a tiny code improvement.

Instead of
```javascript:
var _ = require('underscore');
var Backbone = require('backbone');
_.extend(myObjectOrPrototype, Backbone.Events);
```
do
```javascript:
require('bev').mixin(myObjectOrPrototype);
```

There are benefits to scoping down your modules this way.
Backbone's event mechanism is arguably its strongest point.
Prefer `listenTo` over `on` and you'll need event capable objects.
