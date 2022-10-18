import { Meteor } from 'meteor/meteor';
import { PostsCollection } from '../collections/posts.collection';


Meteor.publish('allPosts', function publishAllPosts() {
    return PostsCollection.find(); 
});
