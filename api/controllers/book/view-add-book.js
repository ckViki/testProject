module.exports = {


  friendlyName: 'View add book',


  description: 'Display "Add book" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/book/add-book'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
