Entity
======

An `Entity` represents a node that can be uniquely identified in a
OpenScene graph. An `Entity` is very similar to a `Node` as defined by
WhatWG in the DOM specification<sup>[1][1]</sup>. An entity **must**
have a class. A class for an `Entity` is very similar to how a
`Element` as defined by WhatWG in the DOM specification<sup>[2][2]</sup> has a
`tagName` property<sup>[3][3]</sup>. The `tagName` property represents a
fully qualified name for the element as it appears on the DOM. The same
can be said about an `Entity`.

[1]: https://dom.spec.whatwg.org/#node
[2]: https://dom.spec.whatwg.org/#interface-element
[3]: https://dom.spec.whatwg.org/#dom-element-tagname
