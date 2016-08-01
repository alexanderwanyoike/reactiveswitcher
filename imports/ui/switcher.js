import './switcher.html';
import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Views} from '../api/views';
import { Settings } from '../api/settings';

Template.switcher.helpers({
    'views'() {
        return Views.find({});
    }
});

Template.switcher.onCreated(function () {

});

Template.switcher.onRendered(function () {
    $('body').addClass('full-screen');
    let currentCount = 0;
    renderDuration = Settings.findOne({key : 'global.renderDuration'});
    Meteor.setInterval(function () {
        maximumCount = Views.find({}).count();
        currentCount = (currentCount + 1) % maximumCount;
        afterFadeCallback =  function () {
            $('#view-'+currentCount).fadeIn(1000, 'linear');
        };

        $('.switcherView').fadeOut(1000,'linear', afterFadeCallback);
    }, renderDuration.value);
});

Template.switcher.onDestroyed(function () {
    $('body').removeClass('full-screen');
});