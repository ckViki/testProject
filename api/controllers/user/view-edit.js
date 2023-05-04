module.exports = {


  friendlyName: 'View edit',


  description: 'Display "Edit" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/user/edit'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
