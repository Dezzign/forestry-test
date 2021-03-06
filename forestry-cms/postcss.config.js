module.exports = {
    plugins: [
        require("autoprefixer")({
            overrideBrowserslist: ["> 0.5% in US", "Safari > 9"]
        }),
        require('postcss-combine-media-query'),

        // ------------------------------------------
        //  The New plug-in would go here
        // ------------------------------------------

        // require('postcss-merge-rules'),
        // require('postcss-merge-rules2'),
        // require('postcss-combine-duplicated-selectors')({
        //     removeDuplicatedValues: true
        // }),
        // require('postcss-discard-duplicates')
    ]
};