Meteor.subscribe("user");
if (Meteor.isClient) {
    Template.dashboard.helpers({
        pending: function() {
            return user.find({
                active: false
            }).count();
        },
        count: function() {
            return user.find({
                active: true
            }).count();
        },
    });
};
