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

  
  export const MainRoutes = () => (
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contactList" element={<ContactList/>} />
          <Route path="contactForm" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       
    );
  