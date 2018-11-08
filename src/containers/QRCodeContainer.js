import { connect } from 'react-redux';
import QRcode from '../components/QRcode';
import { getQRCode } from '../actions';

const mapStateToProps = state => (
  { QRCodeUrl: state.QRCodeUrl }
);

const mapDispatchToProps = {
    getQRCode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QRcode);