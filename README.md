# PostMD

### Usage

> npm i -S postmd

``` js
const PostMD = require('postmd');
const bemjson = require('postmd/plugins/postmd-bemjson');

const json = PostMD('I am using __markdown__.', {
    transform: {
        format: 'json', // Default: html
        plugins: bemjson({ scope: 'md' })
    }
});

console.log(JSON.stringify(json));

// [{"tag":"p","content":["I am using ",{"tag":"strong","content":["markdown"]},"."],"block":"md-paragraph"},"\n"]
```

`PostMD(md, options) ⇒ Object.<{String | PostHTMLTree>`

### PostMD Options

- `parser`<Function> - custom mardown parser
- `transform`<Object>
    - `format`<String> - result kind: `'html'|'json'`
    - `plugins`<Function|Array> - transform plugins


### License MIT
