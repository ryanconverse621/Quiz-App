module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/styles/**/*.{css,min.css}");
    eleventyConfig.addPassthroughCopy("./src/img/**/*.{png,jpg,jpeg}");
    eleventyConfig.addPassthroughCopy("./src/scripts/**/*.js");
    eleventyConfig.addWatchTarget("./src/styles/**/*.{css,min.css}");
    eleventyConfig.addWatchTarget("./src/img/**/*.{png,jpg,jpeg}");
    eleventyConfig.addWatchTarget("./src/scripts/**/*.js");
    eleventyConfig.addWatchTarget("./src/_includes/components/**/*.js");


    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html', 'liquid'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}