import $ from 'jquery';
import './jquery-wrapper';

// Ensure jQuery is available globally
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = $;
}

// Export main React components
export { default as DragFormXBuilder } from './App.jsx';
export { default as DragFormXRenderer } from './components/FormRenderer/FormRenderer.jsx';
