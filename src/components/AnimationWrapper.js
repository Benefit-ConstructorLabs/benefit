import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import '../../styles/components/animation-wrapper.scss';

const AnimationWrapper = Component => (
  (props) => {
    const { match } = props;
    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div>
          <Component {...props} />
        </div>
      </CSSTransitionGroup>
    );
  }
);

AnimationWrapper.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default AnimationWrapper;
