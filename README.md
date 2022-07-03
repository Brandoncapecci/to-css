# Convert CSS in Deno 

A utility intended to be used with the [Deno](https://deno.land/) runtime.

Convert plain javascript objects to CSS to be inlined in HTML or JSX style tags.

The `toCss` expects camelcased keys and will convert them to valid CSS hyphen-case.

## Usage

```ts
import { toCss } from "https://deno.land/x/to_css/mod.ts";
const componentStyles = {
    backgroundColor: 'red',
    height: '20px',
}
toCss(componentStyles);
// => 'background-color: red; height: 20px;'
```
