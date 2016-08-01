import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';
import './view_collection_panel.html';
import { Views } from '../api/views';
import './view'


Template.viewCollectionPanel.helpers({
   views() {
      return Views.find({});
   }
});


