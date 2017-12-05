const md2Html = require('marked');
const posthtml = require('posthtml');

md2Html.setOptions({ gfm: true, tables: true });

module.exports = function postMd(md, { parser=md2Html, transform }) {
    const html = parser(md);
    const format = transform.format === 'json' ? 'tree' : 'html';
    return posthtml([].concat(transform.plugins)).process(html, { sync: true })[format];
};
