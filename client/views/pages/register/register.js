Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var uname = $('[name=uname]').val();
        var password = $('[name=pwd]').val();
        Accounts.createUser({
            username: uname,
            password: password
        });
        Router.go('dashboard');
    }
});
