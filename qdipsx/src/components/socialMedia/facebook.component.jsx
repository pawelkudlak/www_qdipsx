import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
export default class FaceBookQdiPage extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Page href="https://www.facebook.com/qdipsx" tabs="timeline" />
      </FacebookProvider>    
    );
  }
}