//To subscribe publising userList collection
Meteor.subscribe("user");
Template.users.rendered = function() {
  Session.set("searchvalue", false);

};
Template.users.helpers({
  //To get  userList Based on Search result
  fun: function() {
    val = Session.get('searchvalue');
    var regex = new RegExp(Session.get('searchvalue'), 'i');
    if (!val) {
      return user.find();
    }
    return user.find({
      $or: [{
        'device_details.master_id': {
          $regex: regex
        }
      },{
        'user_details.name': {
          $regex: regex
        }
      },{
        'account_id': {
          $regex: regex
        }
      }]
    });
  }
});
Template.users.events({
  // keypress(enter) event for search
  'keypress input.search': function(evt, t) {
    if (evt.which == 13) {
      var searchvalue = t.find(".search").value;
      Session.set("searchvalue", searchvalue);
    }
  },
  // click event for Search
  "click .btn": function(e, t) {
    e.preventDefault();
    var searchvalue = t.find(".search").value;
    Session.set("searchvalue", searchvalue);
  }
});
