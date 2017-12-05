const PostMD = require('.');
const bemjson = require('./plugins/postmd-bemjson');

const md = `
# button

Используется для создания различных типов кнопок.

## Обзор блока

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#buttontype">type</a> | <code>'link'</code>, <code>'submit'</code> | <code>BEMJSON</code> | Тип кнопки.|
| <a href="#buttontoggle">togglable</a> | <code>'check'</code>, <code>'radio'</code> | <code>BEMJSON</code> | Тип переключателя.|
| <a href="#buttondisabled">disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href="#buttonfocused">focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href="#buttonpressed">pressed</a> | <code>true</code> | – | Действие «нажатие на кнопку». |
| <a href="#hovered">hovered</a> | <code>true</code> | – | Наведение курсором. |
| <a href='#buttonthemes'>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href="#buttonsize">size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер кнопки. Используется для кнопок с <a href="#buttonthemes">модификатором theme в значении islands</a>.|
| <a href="#buttonview">view</a> | <code>'action'</code>, <code>'pseudo'</code>, <code>'plain'</code> | <code>BEMJSON</code> | Тип визуального выделения кнопки.|

#### Модификатор \`type\`

Допустимые значения: \`'link'\`, \`'submit'\`.

Способ использования: \`BEMJSON\`.

<a name="link-button"></a>

##### Кнопка-ссылка (модификатор \`type\` в значении \`link\`)

Используется для создания кнопки, обеспечивающей переход по адресу, указанному в поле <a href="#buttonurl">url</a>.

\`\`\`js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', type : 'link' },
    url : 'https://bem.info/',
    text : 'Попробуй БЭМ'
}
\`\`\`
`;

const json = PostMD(md, {
    transform: {
        format: 'json',
        plugins: bemjson({ scope: 'md' })
    }
});

console.log(JSON.stringify(json));
