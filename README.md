[![npm](https://img.shields.io/npm/v/fetch-link-util.svg)](https://www.npmjs.com/package/fetch-link-util)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![minified size](https://badgen.net/bundlephobia/min/fetch-link-util)](https://bundlephobia.com/result?p=fetch-link-util)
[![downloads](http://img.shields.io/npm/dm/fetch-link-util.svg?style=flat-square)](https://npmjs.org/package/fetch-link-util)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/fetch-link-util.svg?style=flat-square)](https://github.com/arlac77/fetch-link-util/issues)
[![Build Action Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Farlac77%2Ffetch-link-util%2Fbadge&style=flat)](https://actions-badge.atrox.dev/arlac77/fetch-link-util/goto)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/fetch-link-util/badge.svg)](https://snyk.io/test/github/arlac77/fetch-link-util)
[![Coverage Status](https://coveralls.io/repos/arlac77/fetch-link-util/badge.svg)](https://coveralls.io/github/arlac77/fetch-link-util)

# fetch-link-util

helper to extract fetch link header values (paging)

# Example

```js
import { getHeaderLink } from "fetch-link-util";

async listAllBranches() {
  let next = "https://api.github.com/repos/arlac77/fetch-link-util/branches";

  do {
    const response = await fetch(next);
    const json = await response.json();

    console.log(json.map(branch => branch.name));
    next = getLink(response.headers);
  } while (next);
}
```

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [getHeaderLink](#getheaderlink)
    -   [Parameters](#parameters)

## getHeaderLink

Decodes link header and delivers one href entry.

### Parameters

-   `headers` **[Headers](https://developer.mozilla.org/docs/Web/HTML/Element/header)** as given by fetch response
-   `rel` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** of link to retrieve (optional, default `"next"`)

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** href for given rel or undefined

# install

With [npm](http://npmjs.org) do:

```shell
npm install fetch-link-util
```

# license

BSD-2-Clause
