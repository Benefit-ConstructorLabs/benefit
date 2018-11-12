import React from 'react';
import Tab from './Tab';

import '../../styles/components/tabs.scss';

class Recipient extends React.Component {
  constructor(props) {
    super(props);

    const { children } = this.props;

    this.state = {
      activeTab: children[0].props.label,
    };
  }

  onClickTabItem = tab => (this.setState(({ activeTab: tab })));

  render() {
    const { onClickTabItem, props: { children }, state: { activeTab } } = this;
    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            console.log(child.props);
            return child;
          })}
        </div>
      </div>
    );
  }
}

export default Recipient;
