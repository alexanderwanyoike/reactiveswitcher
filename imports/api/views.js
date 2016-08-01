import {Mongo} from 'meteor/mongo';
import { check } from 'meteor/check';
export const Views = new Mongo.Collection('views');

if (Meteor.isServer) {
// Meteor Methods for the view collection
    Meteor.methods({
        'views.insert' ({name, locationUrl}) {
            check(name, String);
            check(locationUrl, String);
            Views.insert({
                name: name,
                locationUrl: locationUrl,
            });
        },
        'views.update' ({viewId, newName, newLocationUrl}) {
            check(viewId, String);
            check(newName, String);
            check(newLocationUrl, String);

            Views.update(viewId, {
                $set: {
                    name: newName,
                    locationUrl: newLocationUrl,
                }
            });
        },
        'views.delete' (viewId) {
            check(viewId, String);
            Views.remove({_id: viewId});
        }
    });

    Meteor.publish('views', function () {
        return Views.find({});
    });
}