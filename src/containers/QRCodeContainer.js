import { connect } from 'react-redux';
import QRcode from '../components/QRcode';
import { getQRCode, setRecipientIdForQrCode } from '../actions';

const mapStateToProps = state => {
  return { 
    qrCodeUrl: state.qrCodeUrl,
    recipientIdForQrCode: state.recipient.recipientIdForQrCode
  }
};

const mapDispatchToProps = {
    getQRCode,
    setRecipientIdForQrCode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QRcode);