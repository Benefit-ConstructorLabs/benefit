import { connect } from 'react-redux';
import QRcode from '../components/QRCode';
import { getQRCode } from '../actions';

const mapStateToProps = state => (
  { qrCodeUrl: state.qrCodeUrl }
);

const mapDispatchToProps = {
  getQRCode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QRcode);
