Meteor.subscribe("ticket");
// Template.ticketmanager.rendered = function() {
//   $('.datatable').dataTable();
//   }
Template.ticketmanager.rendered = function() {
    Session.set("searchvalue", false);

};
Template.ticketmanager.helpers({
    //To get  userList Based on Search result
    ticket: function() {
        val = Session.get('searchvalue');
        var regex = new RegExp(Session.get('searchvalue'), 'i');
        if (!val) {
            return ticket.find();
        }
        return ticket.find({
            $or: [{
                'created_by': {
                    $regex: regex
                }
            }, {
                'account_id': {
                    $regex: regex
                }
            }]
        });
    }
});
Template.ticketmanager.events({
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

Template.ticketmanager.events({
    "click .add": function(event) {
        event.preventDefault();
        $('#add').modal('show');
        val = this.account_id;
        Session.set("val", val)
    }
});
Template.ticketmanager.events({
    "click .view": function(event) {
        event.preventDefault();
        $('#view').modal('show');
        val = this.account_id;
        user_assigned = this.user_assigned;
        status = this.remarks;
        Session.set("val", val)
        Session.set("user_assigned", user_assigned)
        Session.set("status", status)
    }
});
Template.mymodel.events({
    'click #addcomment': function(event) {
        account_id = Session.get("val");
        // console.log(account_id);
        // var user_assigned = $('[name=user_assigned]').val();
        var user_assigned = Meteor.user().username
        var comment = $('[name=comment]').val();
        var status = $('[name=state]').val();
        if (status == "complete") {
            Meteor.call("updatestatus", account_id, status);
        }
        Meteor.call("addcomment", account_id, user_assigned, comment, status);
        Meteor.call("adduser", account_id, user_assigned, comment, status);
        $('#add').modal('hide');
    }
})
Template.viewcomments.helpers({
    viewcomments: function() {
        account_id = Session.get("val");
        // status = Session.get("status");
        // user_assigned = Session.get("user_assigned");
        return ticket.find({
            account_id: account_id
        });
    }
});
Template.registerHelper('equal', (a1, a2) => {
    if (a1 === a2)
        return true;
     else
        return false;

});
Template.registerHelper('check', (c1) => {
  c12 = c1.length;
  // console.log(c12);
    if (c12 === 0)
    {
      // console.log(true);
        return true;
      }
     else
        return false;

});
Template.registerHelper('authenticate', (b0, b1, b2) => {
      l = b1.length -1
      b12 = b1[l]
        b2 = Meteor.user().username;
        // console.log(b2);
        // console.log(b12);
        if (b12 == b2)
         {
            return true;
        } else {
                return false;
        }
    });
