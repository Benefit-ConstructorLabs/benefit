import React from 'react';
import renderer from 'react-test-renderer';
import DonationForm from '../../src/components/DonationForm';

describe('DonationForm', () => {
  test('should render correctly', () => {
    const mockSetDonationAmount = jest.fn();
    const mockSubmitDonation = jest.fn();
    const mockTogglePaymentDetails = jest.fn();
    const mockSetDonorID = jest.fn();
    const tree = renderer
      .create(<DonationForm setDonationAmount={mockSetDonationAmount} submitDonation={mockSubmitDonation} togglePaymentDetails={mockTogglePaymentDetails} firstName="Ted" photo="photo/url" donationAmount="5" setDonorID={mockSetDonorID} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
