import $ from 'jquery';
import './jquery-wrapper';

// Ensure jQuery is available globally
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = $;
}

// Export main React components
export { default as FormaluteBuilder } from './App.jsx';
export { default as FormaluteRenderer } from './components/FormRenderer/FormRenderer.jsx';
