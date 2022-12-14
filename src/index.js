import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProviderWrapper } from './contexts/auth.context';
import { ProSidebarProvider } from 'react-pro-sidebar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </AuthProviderWrapper>
  </React.StrictMode>
);


