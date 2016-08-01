import './dashboard.html';
import './edit_view_form';
import './view_collection_panel';


Template.dashboard.onRendered(function () {
    Meteor.subscribe('views');
});

