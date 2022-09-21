// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const PostsCollection = new Mongo.Collection('posts');

const PostsSchema = new SimpleSchema({
  postImage: {
    type: String,
  },
  authorImage: {
    type: String,
  },
  author: {
    type: String,
     
  },
  
  title: {
    type: String,
  },
  date: {
    type: String,
  },

  category: {
    type: String,
  },

  textarea: {
    type: String,
    
  },

  archived: {
    type: Boolean,
    defaultValue: false,
  },
  createdAt: {
    type: Date,
  },
});

PostsCollection.attachSchema(PostsSchema);
