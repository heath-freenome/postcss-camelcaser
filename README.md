# PostCSS Camelcaser [![Build Status][ci-img]][ci]

[PostCSS] plugin which camelcases all your selectors..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/GMchris/postcss-camelcaser.svg
[ci]:      https://travis-ci.org/GMchris/postcss-camelcaser

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-camelcaser') ])
```

See [PostCSS] docs for examples for your environment.
