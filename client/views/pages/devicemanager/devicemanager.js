Meteor.subscribe("user");
Template.devicemanager.events({
  "click #activate":function(){
    Meteor.call('activeuser', this.account_id);
  }
});
  Template.devicemanager.helpers({
        devicedetails: function() {
            return user.find({active:true});
        },
        deactivate: function() {
            return user.find({active:false});
        }
    });
