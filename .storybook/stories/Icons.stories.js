import IconsComponent from './Icons';

export default {
    title: 'Icons',
    component: IconsComponent,
    argTypes: {
        color: { control: 'color' }
    },
    arg: {
        color: '#141414'
    }
};

const Template = (args, { argTypes }) => ({
    components: { IconsComponent },
    props: Object.keys(argTypes),
    template: '<IconsComponent v-bind="$props" />',
});

export const Icons = Template.bind({});
