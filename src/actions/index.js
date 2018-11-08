export function setDonationAmount(amount) {
  const donation = amount ? parseInt(amount, 10) : undefined;
  return {
    type: 'SET_DONATION_AMOUNT',
    donationAmount: donation,
  };
}

export function createDonorAccount() {}
