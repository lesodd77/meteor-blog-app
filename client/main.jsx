import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// @ts-ignore
import { App } from '/app/ui/App';

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});
