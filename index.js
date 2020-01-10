var postcss = require('postcss');

module.exports = postcss.plugin('camelcaser', function camelcaser(options) {
    return function (css) {
        options = options || {};
        var forceCaseStyle = options.forceCaseStyle || 'lowerCamelCase';
        console.log('forceCaseStyle', forceCaseStyle, options);

        css.walkRules(function (rule) {
            var output = rule.selector.replace(/(-|_){1,}\w/g,
            function (match) {
                return match[match.length - 1].toUpperCase();
            });
            console.log('output 1', output);
            switch (forceCaseStyle) {
            case 'off':
                break;
            case 'UpperCamelCase':
                output = output.replace(/(\W)[a-z]/g, function (match) {
                    return match.toUpperCase();
                });
                break;
            case 'lowerCamelCase':
            default:
                output = output.replace(/(\W)[A-Z]/g, function (match) {
                    return match.toLowerCase();
                });
                break;
            }
            console.log('output 2', output);
            rule.selector = output;
        });
    };
});
