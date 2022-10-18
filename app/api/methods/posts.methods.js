
// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'
import { PostsCollection } from '../collections/posts.collection';

Meteor.methods({


  'posts.insert'({ title, url, description, date, category, author, imgae }) {
    check(title, String);
    check(url, String);
    check(imgae, String);
    check(author, String);
    check(description, String);
    check(category, String);
    check(date, String);

    if (!url) {
      throw new Meteor.Error('Photo is required.');
    }

    if (!image) {
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
    if (!description) {
      throw new Meteor.Error('Content is required.');
    }
   
   
   
    return PostsCollection.insert({
        title,
         url,
         date,
         description,
         author,
         imgae, 
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

































