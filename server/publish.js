//publishing userList collection
Meteor.publish("user", function(){
return user.find();
});
Meteor.publish("ticket", function(){
return ticket.find();
});
Meteor.publish("log", function(){
return log.find();
});
