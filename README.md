# @utf8pro/roundrobin

Simple round robin library.

## Installation
```bash
bun add @utf8pro/roundrobin
```

## Example

```typescript
import {roundrobin} from "@utf8pro/roundrobin"

const rr = roundrobin(["a", "b", "c"])

for (let i = 0; i < 10; i++) {
  console.log(rr.next())
}

// Output:
// a
// b
// c
// a
// b
// c
// a
// b
// c
// a
```
