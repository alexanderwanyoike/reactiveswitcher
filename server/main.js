import { Meteor } from 'meteor/meteor';
import '../imports/api/views';
import { Settings } from '../imports/api/settings';

Meteor.startup(() => {
    renderDuration = Settings.findOne({key: 'global.renderDuration'});
    if (renderDuration) {
        console.log(`Current render duration:  ${renderDuration.value}ms`);
    } else {
        initialRenderDuration = Meteor.settings.initalRenderDuration;
        Settings.insert({key: 'global.renderDuration', value: initialRenderDuration});
        console.log(`Render duration not set, initial render duration of ${renderDuration}ms will be used.`)
    }
});
