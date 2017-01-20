Meteor.methods({
  'activeuser': function(id) {
    user.update({
      account_id: id
    }, {
      $set: {
        active: true
      }
    })
  },
  'addcomment': function(account_id,user_assigned,comment,status) {
    var date = new Date();
    ticket.update({account_id:account_id},
      {
       $push: {
         comments: {
            comment:comment,
            timestamp:moment(date).format("MMM Do YYYY, h:mm a"),
            status:status
         }
       }
    })
  },
  'adduser': function(account_id,user_assigned,comment,status) {
    ticket.update({account_id:account_id},
      {
       $push: {
         user_assigned:user_assigned
       }
    })
  },
  'updatestatus':function(account_id,status){
    ticket.update({
      account_id:account_id
    },
    { $set:
      {
        remarks:status
      }
    });
  }
});
