module.exports = {


  friendlyName: 'View list',


  description: 'Display "List" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/book/list'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
