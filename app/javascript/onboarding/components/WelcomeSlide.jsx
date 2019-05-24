import { h, Component } from 'preact';

import Navigation from './Navigation';

export default ({ prev, next }) => (
  <div>
    <h1>Welcome to the DEV community!</h1>
    <p>
      DEV is where programmers share ideas and help each other grow. It’s a
      global community for contributing and discovering great ideas, having
      debates, and making friends.
    </p>
    <p>A couple quick questions for you before you get started...</p>
    <Navigation prev={prev} next={next} />
  </div>
);
