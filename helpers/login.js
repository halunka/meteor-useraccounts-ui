var loginMessage = new ReactiveVar()

Template.useraccountsLogin.helpers({
  message: loginMessage.get.bind(loginMessage)
})

Template.useraccountsLogin.events({
  'submit': function (e) {
    var data = getFormData(
      getForm(e.currentTarget)
    )
    e.preventDefault()
    Meteor.loginWithPassword(
      data.username,
      data.password,
      function (err, data) {
        if(err) {
          loginMessage.set({
            type: 'error',
            text: err.reason
          })
          return
        }
        loginMessage.set({
          type: 'success',
          text: 'You are logged in'
        })
      }
    )
  }
})

