import Chips from '../components/Chips';

export default {
  title: 'Components/Chips',
  component: Chips,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <Chips {...args} />;

export const BlueDefault = Template.bind({});
BlueDefault.args = {
  label: 'Label',
  color: 'blue',
  type: 'default',
  iconPosition: 'right',
};

export const BlueSubtle = Template.bind({});
BlueSubtle.args = {
  label: 'Label',
  color: 'blue',
  type: 'subtle',
  iconPosition: 'right',
};
