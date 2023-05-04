parasails.registerPage('all', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    syncing: false,
    formData: {},
    formErrors: {},
    formRules: {
      name: {
        required: true
      },
      age: {
        required: true
      },
      address1: {
        required: true
      },
      address2: {
        required: false
      },
      emailAddress: {
        required: true
      },
      countryCode: {
        required: true
      },
      phNumber: {
        required: true
      },
      city: {
        required: true
      },
      zipCode: {
        required: true
      }
    },
    cloudError: '',
    modal: '',
    userId: '',
    editUser: '',
    userToDelete: ''
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {
    //…
  },


  virtualPagesRegExp: /^\/users\/?([^\/]+)?\/?/,
  afterNavigate: async function (virtualPageSlug) {
    // `virtualPageSlug` is determined by the regular expression above, which
    // corresponds with `:unused?` in the server-side route for this page.
    switch (virtualPageSlug) {
      // case 'hello':
      //   this.modal = 'deleteUser';
      //   break;
      default:
        this.modal = '';
    }
  },
  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    submittedForm: async function () {
      this.syncing = true;
      $('#addUserModal').modal('hide');
    },

    openAddUserModal: async function () {
      this.modal = 'addUser';
    },

    openEditUserModal: async function (user) {
      if (user) {
        this.editUser = user;
        $('#editUserModal').modal('show');
        // this.modal = 'editUser';
      }
    },

    editUserConfirm: async function () {
      let editFormData =  {
        name: document.getElementById('name').value,
        emailAddress: document.getElementById('emailAddress').value,
        countryCode: document.getElementById('countryCode').value,
        phNumber: document.getElementById('phNumber').value,
        age: document.getElementById('age').value,
        address1: document.getElementById('address1').value,
        address2: document.getElementById('address2').value,
        city: document.getElementById('city').value,
        zipCode: document.getElementById('zipCode').value
      };
      $.ajax({
        url: `/BioData/${this.editUser.id}`,
        type: 'PATCH',
        data: editFormData,
        success: function (response) {
          console.log(response);
        },
        error: function (xhr, status, error) {
          console.error(error);
        }
      });
      $('#editUserModal').modal('hide');
      // this.modal = '';
    },

    openDeleteUserModal: async function (user) {
      if (user) {
        this.userToDelete = user;
        $('#deleteUserModal').modal('show');
        // this.modal = 'deleteUser';
      }
    },

    // href="/user/delete/deleteUser.id"
    deleteUserConfirm: async function () {
      $.ajax({
        url: `/BioData/${this.userToDelete.id}`,
        type: 'DELETE',
        success: function (response) {
          console.log(response);
        },
        error: function (xhr, status, error) {
          console.error(error);
        }
      });
      this.userToDelete = '';
      $('#deleteUserModal').modal('hide');
    },

    closeModal: async function () {
      this.modal = '';
    },
  }
});
