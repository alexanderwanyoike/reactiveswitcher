import './dashboard.html';
import './edit_view_form';
import './view_collection_panel';
import { Session } from 'meteor/session';
import { Settings } from '../api/settings';

Template.dashboard.onRendered(function () {
    Meteor.subscribe('views');
    Meteor.subscribe('settings');
});

Template.dashboard.helpers({
    'renderDuration' () {
        return Settings.findOne({key: 'global.renderDuration'});
    }
});

Template.dashboard.events({
   'click #newView' (event) {
       event.preventDefault();
       Session.set('selectedView', null);
   }, 
    'submit .renderDurationForm' (event) {
        event.preventDefault();
        renderDuration = event.target.renderDuration.value;
        Meteor.call('settings.setRenderDuration', renderDuration);
    }
});

