import { Meteor } from 'meteor/meteor';
import { PostsCollection } from './posts.collection';


Meteor.publish('allPosts', function publishAllPosts() {
    return PostsCollection.find(); 
});
