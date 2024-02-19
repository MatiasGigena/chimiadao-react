import Hello from './App';
import './style.css';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

root.render(
  <h1>
    <Hello />
  </h1>
);
