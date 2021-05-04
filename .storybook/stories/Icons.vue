<template>
    <div style="display: flex; flex-wrap: wrap;" :style="{'color': color}">
        <div style="margin: 20px;" v-for="componentName in componentNames" :key="componentName">
            <component :is="componentName"></component>
        </div>
    </div>
</template>

<script>
import components from './components';

export default {
    components: components,

    props: ['color'],

    computed: {
        componentNames() {
            return Object.keys(components);
        }
    }
}
</script>
