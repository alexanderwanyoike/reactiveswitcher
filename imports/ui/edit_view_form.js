import './edit_view_form.html';
import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {Session}  from 'meteor/session';
import {ReactiveDict} from 'meteor/reactive-dict';

Template.editViewForm.onCreated(function () {
    this.errorDictionary = new ReactiveDict();
    this.errorDictionary.setDefault({
        error: false,
        errorMessage: ''
    });
});

Template.editViewForm.events({
    'submit .new-view' (event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name.value;
        const locationUrl = target.locationUrl.value;
        const instance = Template.instance();
        selectedView = Session.get('selectedView');
        if (selectedView) {
            Meteor.call('views.update', {
                viewId: selectedView._id,
                newName: name,
                newLocationUrl: locationUrl
            }, (err, res) => {
                if (err) {
                    instance.errorDictionary.set('error', true);
                    instance.errorDictionary.set('errorMessage', "Invalid Input");
                }
                target.name.value = '';
                target.locationUrl.value = '';
                target.renderDuration.value = '';
                Session.set('selectedView', null);
            });
        } else {
            Meteor.call('views.insert', {
                name: name,
                locationUrl: locationUrl
            }, (err, res) => {
                if (err) {
                    instance.errorDictionary.set('error', true);
                    instance.errorDictionary.set('errorMessage', "Invalid Input");
                }
                target.name.value = '';
                target.locationUrl.value = '';
            });
        }

    },
    'click #deleteView' (event) {
        event.preventDefault();
        selectedView = Session.get('selectedView');
        if (selectedView) {
            Meteor.call('views.delete', selectedView._id);
        }
        Session.set('selectedView', null);
    }
});

Template.editViewForm.helpers({
    selectedView: function () {
        return Session.get('selectedView');
    },
    error: function () {
        const instance = Template.instance();
        return instance.errorDictionary.get('error');
    },
    errorMessage: function () {
        const instance = Template.instance();
        return instance.errorDictionary.get('errorMessage');
    }
});