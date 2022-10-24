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

export const SellableCardTopPanel = Template.bind({});
SellableCardTopPanel.args = {
  type: 'sellable',
  panelExtension: 'top',
};

export const SellableCardBottomPanel = Template.bind({});
SellableCardBottomPanel.args = {
  type: 'sellable',
  panelExtension: 'bottom',
};

export const SummaryCard = Template.bind({});
SummaryCard.args = {
  type: 'summary',
  panelExtension: 'none',
};

export const SummaryCardTopPanel = Template.bind({});
SummaryCardTopPanel.args = {
  type: 'summary',
  panelExtension: 'top',
};

export const SummaryCardBottomPanel = Template.bind({});
SummaryCardBottomPanel.args = {
  type: 'summary',
  panelExtension: 'bottom',
};
