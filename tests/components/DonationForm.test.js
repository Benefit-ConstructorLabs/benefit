import React from 'react';
import renderer from 'react-test-renderer';
import DonationForm from '../../src/components/DonationForm';

describe('DonationForm', () => {
  test('should render correctly', () => {
    const mockSetDonationAmount = jest.fn();
    const mockSubmitDonation = jest.fn();
    const tree = renderer
      .create(<DonationForm setDonationAmount={mockSetDonationAmount} submitDonation={mockSubmitDonation} donationAMount="5" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
