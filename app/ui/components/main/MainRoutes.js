// @ts-nocheck
import {
    Routes,
    Route
  } from 'react-router-dom';
  import React from 'react';
  import { Home } from './Home';
  import { NotFound } from '../../notFound/NotFound';
  import { ContactForm } from '../../contacts/ContactForm';
  import { ContactList } from '../../contacts/ContactList';
 import { Post } from '../../post/Post';
 import { PostForm } from '../../post/PostForm';
  
  export const MainRoutes = () => (
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contactList" element={<ContactList/>} />
          <Route path="contactForm" element={<ContactForm />} />
          <Route path="postForm" element={<PostForm />} />
          <Route path="post" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       
    );
  