import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactBootstrap from "react-bootstrap";
import Component, { configure, fetchComponent } from '@nebohq/nebo';
import WebflowConnect from '../components/webflow_connect';
const accessToken = 'a1b15381-8816-42a1-9eea-512a364d9cbe';
const directory = configure({
  directory:
  {
    WebflowConnect: WebflowConnect,
    ...ReactBootstrap
  },
  react: React,
  renderer: ReactDOM,
  // fill in your access token here
  accessToken,
});
const getNeboPage = async (idOrSlug) => {
  return await fetchComponent({ idOrSlug, accessToken });
};
const NeboComponent = Component;
export default directory;
export { NeboComponent, getNeboPage };
