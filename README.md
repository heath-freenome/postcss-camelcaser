# PostCSS Camelcaser [![Build Status][ci-img]][ci]

[PostCSS] plugin which camelcases all your selectors..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/GMchris/postcss-camelcaser.svg
[ci]:      https://travis-ci.org/GMchris/postcss-camelcaser

Camelcaser transforms all your selectors to camel case, 

```css
.camel-case-me {
    /* Some stuff */
}
```

```css
.camelCaseMe {
  /* Same stuff */
}
```

## Usage

```js
postcss([ require('postcss-camelcaser') ])
```

See [PostCSS] docs for examples for your environment.
