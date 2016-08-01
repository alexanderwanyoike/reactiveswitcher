import './view.html';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session'

Template.view.events({
    'click .viewItem' (event) {
        Session.set('selectedView', this);
    }
});
