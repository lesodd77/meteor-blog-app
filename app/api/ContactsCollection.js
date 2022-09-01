// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';

export const ContactsCollection = new Mongo.Collection('contacts');


const ContactsSchema = new SimpleSchema({
    name: {
      type: String,
      },
      subject: {
        type: String,
        },
       email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
      },
      image: {
          type: String,
          optional: true,
      },
      archived: {
      type: Boolean,
      defaultValue: false,
      },
    

   createdAt: {
       type: Date,
   },
  });

ContactsCollection.attachSchema(ContactsSchema);
