import Cards from '../components/Cards';

export default {
  title: 'Components/Cards',
  component: Cards,
  argTypes: {
    handleButtonClick: { action: 'handleButtonClick' },
    handleMapClick: { action: 'handleMapClick' },
  },
};

const Template = (args) => <Cards {...args} />;

export const SellableCard = Template.bind({});
SellableCard.args = {
  type: 'sellable',
  panelExtension: 'none',
};

export const SummaryCard = Template.bind({});
SummaryCard.args = {
  type: 'summary',
  panelExtension: 'none',
};
