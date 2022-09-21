// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { ErrorAlert } from '../components/alerts/ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from '../components/alerts/SuccessAlert';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Cloudinary } from 'meteor/socialize:cloudinary';


Cloudinary.config({
  cloud_name:'cloud_name',
  api_key: 'api_key',
});




function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const PostForm = () => {
  const [title, setTitle] = useState(''); 
  const [postImage, setPostImage] = useState('');
  const [authorImage, setAuthorImage] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [textarea, setTextarea] =  useState('');
  const [success, setSuccess] = useState('');
  // eslint-disable-next-line no-shadow


  onChange = (e) => {
    const uploads = Cloudinary.uploadFiles(e.currentTarget.files);
    uploads.forEach(async (response) => {
      const photoData = await response;
      new Photo(photoData).save();
    });

  const showError = ({ message }) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, 5000);
  };

  // eslint-disable-next-line no-shadow
  const showSuccess = ({ message }) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess('');
    }, 5000);
  };

  const savePost = () => {
    Meteor.call(
      'posts.insert',
      { title, authorImage, textarea, author, postImage, date, category },
      errorResponse => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setTitle('');
          setPostImage('');
          setAuthorImage('');
          setDate('');
          setAuthor('');
          setTextarea('');
          
          showSuccess({ message: 'Post saved.' });
        }
      }
    );
  };


  useEffect(() => {
    AOS.init(
      {
        delay: 200,
        duration: 1200,
        once: false,
        // @ts-ignore
      },
      []
    );
  });

  return (
<>
      <section
        id="contact"
        className="pt-10 pb-36 px-8 bg-slate-100 dark:bg-slate-900 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mt-20 text-gray-50 dark:text-gray-50"
            data-aos="fade-left"
          >
            Post Form
          </h2>

        </div>
        <div className="progressBar">
  <div className="progress">
    <div className="progress-bar" role="progressbar" aria-valuenow="{{progress}}" aria-valuemin="0" aria-valuemax="100" style="width: {{progress}}%;">
      <span className="sr-only">{{progress}}% Complete</span>
    </div>
  </div>
</div>

        <div className="relative max-w-4xl mx-auto shadow-sm shadow-cyan-900/50">
          <div className="relative z-20 bg-slate-600 dark:bg-slate-900 rounded-lg p-8">
            <form action="" data-aos="fade-up">
              {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
           
           <label htmlFor="title" className="block text-sm font-medium text-gray-100">
                Post Title
              </label>
                        <input
                          type="text"
                          id="title"
                          value={title}
                          onChange={e => setTitle(e.target.value)}
                          placeholder="Post Title"
                          className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                        />
               </div>
               <div>
           
           <label htmlFor="author" className="block text-sm font-medium text-gray-100">
                Author
              </label>
                        <input
                          type="text"
                          id="author"
                          value={author}
                          onChange={e => setAuthor(e.target.value)}
                          placeholder="Post Author"
                          className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                        />
               </div>

               <div>
           
           <label htmlFor="category" className="block text-sm font-medium text-gray-100">
                Category
              </label>
                        <input
                          type="text"
                          id="category"
                          value={category}
                          onChange={e => setCategory(e.target.value)}
                          placeholder="Post Category"
                          className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                        />
               </div>
               <div>  
           <label htmlFor="image1Url" className="block text-sm font-medium text-gray-100">
                Author Photo
              </label>
                        <input
                          type="file"
                          id="authorImage"
                          value={authorImage}
                          accept="image/*" 
                          multiple onChange={this.onChange}
                          onChange={e => setAuthorImage(e.target.value)}
                          placeholder="Author Image"
                          className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                        />
               </div>
<div>
           
   <label htmlFor="textarea" className="block text-sm font-medium text-gray-100">
   Post Image
      </label>
                <input
                  type="file"
                  id="postImage"
                  value={postImage}
                  accept="image/*" 
                  multiple onChange={this.onChange}
                  onChange={e => setPostImage(e.target.value)}
                  placeholder="Post Image"
                  className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                />
                </div>
                <div>
           
   <label htmlFor="date" className="block text-sm font-medium text-gray-100">
        Date
      </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                />
                </div>
<div>
      <label htmlFor="textarea" className="block text-sm font-medium text-gray-100">
        Content
      </label>
      <div className="mt-1">
        <textarea
        type="textarea"
        rows={5}
          name="textarea"
          id="textarea"
          value={textarea}
          onChange={e => setTextarea(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
         
        />
      </div>
    </div>
             
    </div>
              <button
                onClick={savePost}
                className="mt-4 inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                data-aos="fade-left"
              >
                <span>Save Post</span>
              </button>
             
            </form>
          </div>
        </div>
      </section>
      </>
  )
}
}
