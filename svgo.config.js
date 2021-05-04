module.exports = {
    js2svg: {
        indent: 2,
        pretty: true,
    },
    plugins: [
        'removeXMLNS',
        'sortAttrs',
        {
            name: 'convertColors',
            params: {
                currentColor: true
            }
        }
    ]
}
