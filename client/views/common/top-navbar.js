// Template.topNavbar.rendered = function(){
// };
Meteor.subscribe('user');
Template.topNavbar.events({
  'click .logout': function(event) {
      event.preventDefault();
      Meteor.logout();
      Router.go('login');
    },
    // Toggle left navigation
    'click #navbar-minimalize': function(event){

        event.preventDefault();

        // Toggle special class
        $("body").toggleClass("mini-navbar");

        // Enable smoothly hide/show menu
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
                }, 200);
        } else if ($('body').hasClass('fixed-sidebar')) {
            $('#side-menu').hide();
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
                }, 200);
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
        }
    },

    // Toggle right sidebar
    'click .right-sidebar-toggle': function(){
        $('#right-sidebar').toggleClass('sidebar-open');
    }
});
Template.topNavbar.helpers({
  fun: function() {
    // val = notifications.find({active:true}).count();
    val1 = user.find({
    active:false
    }).count();
    sum =  val1;
    if(sum==0)
    sum="0"
    return sum;
  },
  fun1: function() {
    val= notifications.find({active:true}).count();
    if(val==0)
    val="0";
    return val;

  },
  fun2: function() {
  val= user.find({
      active:false
    }).count();
    if(val==0)
    val="0";
    return val;
  }
})
