module.exports = function postmdBemjson({ scope }) {
    const blockName = name => `${scope}-${name}`;

    return tree => {
        tree.match({ tag: 'a' }, node => {
            node.block = blockName('link');
            return node;
        });

        tree.match({ tag: 'table' }, node => {
            node.block = blockName('table');
            return node;
        });

        tree.match({ tag: 'tr' }, node => {
            node.block = blockName('table');
            node.elem = 'row';
            return node;
        });

        tree.match({ tag: 'td' }, node => {
            node.block = blockName('table');
            node.elem = 'col';
            return node;
        });

        tree.match({ tag: 'th' }, node => {
            node.block = blockName('table');
            node.elem = 'head-col';
            return node;
        });

        tree.match({ tag: 'thead' }, node => {
            node.block = blockName('table');
            node.elem = 'head';
            return node;
        });

        tree.match({ tag: 'tbody' }, node => {
            node.block = blockName('table');
            node.elem = 'body';
            return node;
        });

        tree.match({ tag: 'code' }, node => {
            node.block = blockName('code');
            return node;
        });

        tree.match({ tag: 'code', attrs: false }, node => {
            node.mods = { inline: true };
            return node;
        });

        tree.match({ tag: 'code', attrs: { class: true } }, node => {
            node.mods = { lang: node.attrs.class.replace('lang-', '') };
            return node;
        });

        tree.match({ tag: 'pre' }, node => {
            node.block = blockName('source');
            return node;
        });

        tree.match({ tag: 'p' }, node => {
            node.block = blockName('paragraph');
            return node;
        });

        tree.match({ tag: 'ul' }, node => {
            node.block = blockName('list');
            return node;
        });

        tree.match({ tag: 'ol' }, node => {
            node.block = blockName('list');
            node.mods = { ordered: true };
            return node;
        });

        tree.match({ tag: 'li' }, node => {
            node.block = blockName('list');
            node.elem = 'item';
            return node;
        });

        tree.match({ tag: 'hr' }, node => {
            node.block = blockName('devider');
            return node;
        });

        tree.match({ tag: /h[1-6]/ }, node => {
            node.block = blockName('heading');
            node.mods = { lvl: node.tag.replace('h', '') };
            return node;
        });

        return tree;
    };
};
