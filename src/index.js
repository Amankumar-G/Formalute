import $ from 'jquery';
import './jquery-wrapper';

// Ensure jQuery is available globally
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = $;
}

// Export main React components
export { default as FormableBuilder } from './App.jsx';
export { default as FormableRenderer } from './components/FormRenderer/FormRenderer.jsx';
