# `to_css`
Convert plain javascript objects to CSS for inline styling.

[![tag](https://img.shields.io/github/tag/brandoncapecci/to-css.svg)](https://github.com/brandoncapecci/to-css)
[![license](https://img.shields.io/github/license/brandoncapecci/to-css.svg)](https://github.com/brandoncapecci/to-css)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/csv/mod.ts)

# Description 

This utility intended to be used with the [Deno](https://deno.land/) runtime.

The `toCss` allows plain objects to be inlined in HTML or JSX style tags as strings. The function expects camelcased keys and will convert them to valid CSS hyphen-case.

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
