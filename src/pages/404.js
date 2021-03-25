import React from 'react';
import SEO from '../components/seo';
import logo404 from '../images/internet_404_page_not_found.png';

const NotFound = () => (
  <>
    <SEO title="404: Not found" />
    <img src={logo404} alt="404 page not found image" id="page404"/>
  </>
);

export default NotFound;
