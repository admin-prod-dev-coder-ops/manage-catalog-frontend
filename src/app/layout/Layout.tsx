import React from 'react';
import PermanentDrawerLeft from './nav/PermanentDrawerLeft';
import { Routes } from 'react-router-dom';


interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <PermanentDrawerLeft />
      <div className="app-content">
        <Routes> {/* Only Routes component here */}
          {children} {/* Render routes passed as children */}
        </Routes>
      </div>
    </>
  );
}

export default Layout;