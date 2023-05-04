module.exports = {


  friendlyName: 'View edit book',


  description: 'Display "Edit book" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/book/edit-book'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
