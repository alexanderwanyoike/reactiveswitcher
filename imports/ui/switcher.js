import './switcher.html';
import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Views} from '../api/views';

Template.switcher.helpers({
    'views'() {
        return Views.find({})
    }
});

Template.switcher.onCreated(function () {
});

Template.switcher.onRendered(function () {
    $('body').addClass('full-screen');
});
Template.switcher.onDestroyed(function () {
    $('body').removeClass('full-screen');
});