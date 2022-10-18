import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ContactsCollection } from '../collections/ContactsCollection';

Meteor.methods({
    'contacts.insert'({ name, email,  subject, image }) {
            check(name, String);
            check(email, String);
            check(image, String);
            check(subject, String);
            if (!name) {
              throw new Meteor.Error('Name is required.');
          }
        if (!email) {
            throw new Meteor.Error('Wallet ID is required.');
        }
        return ContactsCollection.insert({
          name,
          email,
           image,
         subject,
           createdAt: new Date(),
        });
      },
    'contacts.archive'({ contactId }) {
      check(contactId, String);

        ContactsCollection.update({ _id: contactId }, { $set: { archived: true } });
    },
     'contacts.remove'({ contactId }) {
      check(contactId, String);

        ContactsCollection.remove(contactId);
    },
  });
