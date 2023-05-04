module.exports = {


  friendlyName: 'View all',


  description: 'Display "All" page.',

  // inputs: {

  //   name: {
  //     type: 'string',
  //     required: true
  //   },

  //   age: {
  //     type: 'number',
  //     required: true
  //   },

  //   address: {
  //     type: 'string',
  //     required: true
  //   }
  // },

  exits: {

    success: {
      viewTemplatePath: 'pages/user/all'
    }

  },


  fn: async function () {
    let users = await BioData.find();
    console.log('user', users);
    return { users };
  },

  addUser: async function (inputs) {
    await BioData.create({
      name: inputs.name,
      age: inputs.age,
      address: inputs.address,
    });
    // All done.
    return;
  }

};
