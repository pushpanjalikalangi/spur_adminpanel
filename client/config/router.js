Router.configure({
  layoutTemplate: 'mainLayout',
  notFoundTemplate: 'notFound'

});

//
// Dashboards routes
//
Router.route('/login', function() {
  this.render('login');
  this.layout('blankLayout');
});
Router.route('/register', function() {
  this.render('register');
  this.layout('blankLayout');
});
Router.route('/', function() {
  this.render('login');
  this.layout('blankLayout');
});
Router.route('/dashboard', function() {
  this.render('dashboard');
});
Router.route('/payments', function() {
  this.render('paymentreports');
});
Router.route('/logmanager', function() {
  this.render('logmanager');
});
Router.route('/ticketmanager', function() {
  this.render('ticketmanager');
});
Router.route('/devicemanager', function() {
  this.render('devicemanager');
});
Router.route('/orders', function() {
  this.render('order');
});
Router.route('/users', function() {
  this.render('users');
});
Router.route('/profileuser/:account_id', {
name: 'profileuser',
template: 'profileuser',
});
Router.route('/pushnotifications', function() {
  this.render('pushnotifications');
});
