import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// @ts-ignore
import { App } from '/app/ui/App';
import { Cloudinary } from 'meteor/socialize:cloudinary';

const settings = Meteor.settings;
Cloudinary.config({
  cloud_name: settings.public.cloudinary_cloud_name,
  api_key: settings.public.cloudinary_api_key,
});

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});
