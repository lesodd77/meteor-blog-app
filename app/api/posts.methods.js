
// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'
import { PostsCollection } from './posts.collection';

Meteor.methods({


  'posts.insert'({ title, postImage, textarea, date, category, author, authorIamge }) {
    check(title, String);
    check(postImage, String);
    check(authorIamge, String);
    check(author, String);
    check(textarea, String);
    check(category, String);
    check(date, String);

    if (!postImage) {
      throw new Meteor.Error('Photo is required.');
    }
    if (!title) {
      throw new Meteor.Error('Title is required.');
    }
   
    if (!date) {
      throw new Meteor.Error('Date is required.');
    }
    if (!category) {
      throw new Meteor.Error('Category is required.');
    }
    if (!author) {
      throw new Meteor.Error('Author is required.');
    }
    if (!textarea) {
      throw new Meteor.Error('Content is required.');
    }
   
   
   
    return PostsCollection.insert({
        title,
         postImage,
         date,
         textarea,
         author,
         authorIamge, 
          category,
      createdAt: new Date(),
    });
  },
  'posts.archive'({ postId }) {
    check(postId, String);

    PostsCollection.update({ _id: postId }, { $set: { archived: true } });
  },
  'posts.remove'({ postId }) {
    check(postId, String);

    PostsCollection.remove(postId);
  },
  'posts.update'({ postId }) {
    check(postId, String);

    PostsCollection.update(postId);
  },
  postsSearch(query) {
    return searchPosts({ query });
  },
  postsPopular() {
    return popularPosts();
  },
  posts() {
    return PostsCollection.find({}, { sort: { title: 1 } }).fetch();
  },
  postSave(post) {
    return PostsCollection.save(post);
  },
  postRemove(post) {
    return PostsCollection.remove({ id: post.id });
  }
});

































