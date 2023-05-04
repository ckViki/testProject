module.exports = {


  friendlyName: 'Add user',


  description: '',


  inputs: {

    name: {
      type: 'string',
      required: true
    },

    age: {
      type: 'number',
      required: true
    },

    address1: {
      type: 'string',
      required: true
    },
    address2: {
      type: 'string'
    },
    emailAddress: {
      type: 'string',
      required: true
    },
    countryCode: {
      type: 'number',
      required: true
    },
    phNumber: {
      type: 'number',
      required: true
    },
    city: {
      type: 'string',
      required: true
    },
    zipCode: {
      type: 'string',
      required: false
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    await BioData.create({
      name: inputs.name,
      age: inputs.age,
      address1: inputs.address1,
      address2: inputs.address2 || '',
      emailAddress: inputs.emailAddress,
      phNumber: inputs.phNumber,
      countryCode: inputs.countryCode,
      city: inputs.city,
      zipCode: inputs.zipCode
    });
    // All done.
    return;

  }


};
