//To subscribe publising ordersList collection
Template.login.events({
  //Login form submission
  "submit form": function(e, t) {
    // e.preventDefault();
    var username = t.find("#username").value;
    var password = t.find("#password").value;
    // Accounts.createUser({
    //         email: email,
    //         password: password
    //     });
    Meteor.loginWithPassword(username, password, function(error) {
      if (error){
        console.log(error);
        alert("invalid username or password!! Please enter valid credaintials.");

      }
      else {
        //Checking for user validity
        if (Meteor.user()) {
          Router.go('/dashboard', function() {
            this.render('dashboard');
          });

        }
      }
    });
    //To rest Fields in form
    t.find("form").reset();
    return false;
  }
});
