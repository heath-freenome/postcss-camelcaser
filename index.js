var postcss = require('postcss');

module.exports = postcss.plugin('camelcaser', function camelcaser(options) {
    return function (css) {
        options = options || {};

        css.walkRules(function (rule) {
            rule.selector = rule.selector.replace(/(-|_){1,}\w/g,
            function (match) {
                return match[match.length - 1].toUpperCase();
            }).replace(/(\W)[A-Z]/g, function (match) {
                return match.toLowerCase();
            });
        });
    };
});
