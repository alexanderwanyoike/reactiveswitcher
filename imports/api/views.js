import {Mongo} from 'meteor/mongo';
import { check } from 'meteor/check';
export const Views = new Mongo.Collection('views');

if (Meteor.isServer) {
// Meteor Methods for the view collection
    Meteor.methods({
        'views.insert' ({name, locationUrl, renderDuration}) {
            check(name, String);
            check(locationUrl, String);
            check(renderDuration, Number);

            Views.insert({
                name: name,
                locationUrl: locationUrl,
                renderDuration: renderDuration
            });
        },
        'views.update' ({viewId, newName, newLocationUrl, newRenderDuration}) {
            check(viewId, String);
            check(newName, String);
            check(newLocationUrl, String);
            check(newRenderDuration, Number);

            Views.update(viewId, {
                $set: {
                    name: newName,
                    locationUrl: newLocationUrl,
                    renderDuration: newRenderDuration
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