Meteor.subscribe("log");
// log=new Mongo.Collection('log');
if (Meteor.isClient) {
    Template.logmanager.helpers({
        log: function() {
            return log.find();
        }
    });
}
