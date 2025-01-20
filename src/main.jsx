import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import Container from './context/Container.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <App />
    </Container>
  </StrictMode>
);
