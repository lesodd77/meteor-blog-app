import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '../collections/ContactsCollection';


Meteor.publish('allContacts', function publishAllContacts() {
    return ContactsCollection.find(); // live query
});
