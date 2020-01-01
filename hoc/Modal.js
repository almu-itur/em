import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CONTAINER_STYLE } from '../constants';

function withModal(ModalComponent) {
  class WithModal extends PureComponent {
    render() {
      const {
        closeModal,
        ...childrenProps
      } = this.props;

      return (
        <>
          <div className={CONTAINER_STYLE.MODAL}>
            <ModalComponent {...childrenProps} />
          </div>
        </>
      );
    }
  }

  WithModal.propTypes = {
    overlay: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
  };

  WithModal.defaultProps = {
    overlay: false,
  };
  return WithModal;
}

export default withModal;
