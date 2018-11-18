import donor from '../../src/reducers/donor';

describe('donor reducer', () => {
  const initialState = {
    id: null,
    donorID: 1,
    newDonorId: 1,
    firstName: '',
    lastName: '',
    tel: '',
    email: '',
    password: '',
    cardNo: '',
    cardExp: '',
    cardCCV: '',
    donations: [],
  };
  test.skip('executes SET_DONOR_FROM_DB action', () => {
    const action = {
      type: 'SET_DONOR_FROM_DB',
      id: 4,
      firstName: 'Bob',
      lastName: 'Robson',
      tel: '09654823789',
      username: 'robbo',
      photo: 'photo/url',
    };
    const expectedState = {
      id: 4,
      donorID: 1,
      newDonorId: 1,
      firstName: 'Bob',
      lastName: 'Robson',
      tel: '09654823789',
      username: 'robbo',
      photo: 'photo/url',
      email: '',
      password: '',
      cardNo: '',
      cardExp: '',
      cardCCV: '',
      donations: [],
    };
    const outputState = donor(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test.skip('executes SET_DONOR_DONATIONS_FROM_DB', () => {
    const action = {
      type: 'SET_DONOR_DONATIONS_FROM_DB',
      donations: [20, 2, 10],
    };
    const expectedState = {
      id: null,
      donorID: 1,
      newDonorId: 1,
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
      password: '',
      cardNo: '',
      cardExp: '',
      cardCCV: '',
      donations: [20, 2, 10],
    };
    const outputState = donor(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test.skip('executes SET_NEW_DONOR_ID', () => {
    const action = {
      type: 'SET_NEW_DONOR_ID',
      newDonorId: 5,
    };
    const expectedState = {
      id: null,
      donorID: 1,
      newDonorId: 5,
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
      password: '',
      cardNo: '',
      cardExp: '',
      cardCCV: '',
      donations: [],
    };
    const outputState = donor(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test.skip('executes SET_DONOR_ID', () => {
    const action = {
      type: 'SET_DONOR_ID',
      donorID: 4,
    };
    const expectedState = {
      id: null,
      donorID: 1,
      newDonorId: 1,
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
      password: '',
      cardNo: '',
      cardExp: '',
      cardCCV: '',
      donations: [],
    };
    const outputState = donor(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test.skip('returns state with UNRECOGNISED action', () => {
    const action = {
      type: 'UNRECOGNISED',
      donorID: 4,
    };
    const expectedState = {
      id: null,
      donorID: 1,
      newDonorId: 1,
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
      password: '',
      cardNo: '',
      cardExp: '',
      cardCCV: '',
      donations: [],
    };
    const outputState = donor(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
