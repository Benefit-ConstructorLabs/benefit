import { connect } from 'react-redux';
import QRcode from '../components/QRCode';
import { getQRCode, setRecipientIdForQrCode } from '../actions';

export const mapStateToProps = state => (
  {
    qrCodeUrl: state.qrCodeUrl,
    recipientIdForQrCode: state.recipient.recipientIdForQrCode,
  }
);

const mapDispatchToProps = {
  getQRCode,
  setRecipientIdForQrCode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QRcode);
