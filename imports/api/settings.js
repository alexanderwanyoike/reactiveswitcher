import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';
export const Settings = new Mongo.Collection('settings');


if (Meteor.isServer) {
    Meteor.methods({
        'settings.setRenderDuration' (duration) {
            if (duration) {
                check(duration, Number);
                Settings.update({key: 'global.renderDuration'}, {$set: {value: duration}});
            }
        }
    });

    Meteor.publish('settings', function () {
        return Settings.find({});
    });
}
