Template.useraccountsLogout.events({
  'click .useraccountsLogout': function (event) {
    event.preventDefault()
    Meteor.logout()
  }
})
  
