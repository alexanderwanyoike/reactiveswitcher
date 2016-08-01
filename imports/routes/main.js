import '../ui/dashboard';
import '../ui/switcher';
import {Meteor} from 'meteor/meteor';

Router.route('/', function () {
    Meteor.subscribe('views');
    this.render('switcher');

});

Router.route('/Dashboard', function () {
    this.render('dashboard');
});
