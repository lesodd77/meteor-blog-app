// @ts-nocheck
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {App} from '../../App'
import {RoutePaths} from './RoutePaths';
  import React from 'react';
  import { Home } from './Home';
  import { NotFound } from '../../notFound/NotFound';
  import { ContactForm } from '../../contacts/ContactForm';
  import { ContactList } from '../../contacts/ContactList';
 import { Post } from '../../post/Post';
 import { PostForm } from '../../post/PostForm';
 import { AdminLogin } from '../../admin/AdminLogin';
 import { AdminRegister } from '../../admin/AdminRegister';
import { Profile } from '../../auth/Profile';
  
export const MainRoutes = () => {
  return (<>
          <Router>

              <Routes>
                  <Route path={RoutePaths.ROOT} element={<App/>}>
                  <Route element={<AdminRegister />} path={RoutePaths.ADMINLOGIN}/>
                      <Route element={<Home/>} path={RoutePaths.HOME}/>
                      <Route element={<Post/>} path={RoutePaths.POST}/>
                      <Route element={<Profile/>} path={RoutePaths.PROFILE}/>
                      <Route element={<ContactForm />} path={RoutePaths.CONTACTFORM}/>
                      <Route element={<ContactList/>} path={RoutePaths.CONTACTLIST}/>
                      <Route element={<AdminLogin/>} path={RoutePaths.ADMINLOGIN}/>
                      <Route element={<AdminRegister/>} path={RoutePaths.REGISTER}/>
                      <Route element={<PostForm/>} path={RoutePaths.POSTFORM}/>
                      <Route path="*" element={<NotFound/>}/>
                  </Route>
              </Routes>

          </Router>
      </>
  );
}