import React, { Suspense } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { MainRoutes } from '../app/ui/components/main/MainRoutes';
import { Loading } from  '../app/ui/components/spinner/Loading';
import { Cloudinary } from 'meteor/socialize:cloudinary';

const settings = Meteor.settings;
Cloudinary.config({
  cloud_name: settings.public.cloudinary_cloud_name,
  api_key: settings.public.cloudinary_api_key,
});

Meteor.startup(() => {
  render(<Suspense fallback={<Loading  />}>
  <MainRoutes/>
  </Suspense>, document.getElementById('react-target'));
});
