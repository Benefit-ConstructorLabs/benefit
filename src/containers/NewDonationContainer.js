import { connect } from 'react-redux';
import NewDonation from '../components/NewDonation';
import { setRecipientFromDB } from '../actions';

const mapStateToProps = state => ({
  donationAmount: state.donation.donationAmount,
  togglePaymentDetails: state.view.togglePaymentDetails,
});

const mapDispatchToProps = {
  setRecipientFromDB,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewDonation);
