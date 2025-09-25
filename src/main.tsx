import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { TasklyApp } from './TasklyApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasklyApp />
  </StrictMode>
);
