import React from 'react';
import { render } from 'react-dom';
import PhoneLayout from './layouts/phoneLayout';
import DesktopLayout from './layouts/desktopLayout';
import MobileDetect from 'mobile-detect';
import { BrowserRouter, hashHistory, Route } from 'react-router-dom';

var md = new MobileDetect(window.navigator.userAgent);
var layout;
if(md.tablet() !== null){
  layout = TabletLayout;
}else if(md.phone() !== null){
  layout = PhoneLayout;
}else{
  layout = DesktopLayout;
}

render(
    <BrowserRouter history={hashHistory}>
      <Route path="/" component={layout} />
    </BrowserRouter>,
  document.getElementById('app')
);
