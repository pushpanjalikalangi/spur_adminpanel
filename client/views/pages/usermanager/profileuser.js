//To subscribe publising userList collection
Meteor.subscribe("user");

Template.profileuser.helpers({
  //To dispaly specific user details
  data: function() {
    return user.find({
      'account_id': Router.current().params.account_id
    });
    console.log(data);
  }
});


// Template.profileuser.helpers({
//   //To dispaly specific user orders
//   dataorders: function() {
//     var value = user.find({
//       account_id: Router.current().params.account_id
//     });
//   }
// });
