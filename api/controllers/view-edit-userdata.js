module.exports = {


  friendlyName: 'View edit userdata',


  description: 'Display "Edit userdata" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/edit-userdata'
    }

  },


  fn: async function () {
    let userId = this.req.params.id;
    const editUser = await BioData.findOne({ id: userId });
    console.log(editUser);
    return {editUser};
  },
};
