import React from 'react';
import Navigation from '../components/Navigation/Navigation';

const Layout = props => (
    <>
        <Navigation />
        {props.children}
    </>
)

export default Layout
