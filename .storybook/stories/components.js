const files = require.context('../../vue/icons', false, /\.vue$/);
const modules = {};
files.keys().forEach((key) => {
    const componentConfig = files(key);
    const componentName = key
                .split('/')
                .pop()
                .replace(/\.\w+$/, '');

    modules[componentName] = componentConfig.default || componentConfig;
});
export default modules;
