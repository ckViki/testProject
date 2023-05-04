
module.exports = {


  friendlyName: 'View demo',


  description: 'Display "Demo" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/demo'
    }

  },

  fn: async function () {
    // Respond with view.
    let users = await BioData.find();
    console.log('user', users);
    return { users };
  },

  // editUser: async function (data) {
  //   const userId = data; // get the user ID from the URL parameter
  //   console.log('id',userId);
  //   const user = await BioData.findOne({ id: userId }); // find the user by ID
  //   console.log(userId);
  //   if (!user) {
  //     return user.status(404).send('User not found');
  //   }

  //   return (('edit-userdata'), { user }); // render the editUser view with the user object
  // }
};
