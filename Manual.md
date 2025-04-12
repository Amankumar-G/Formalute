# Formalute - User Manual

Welcome to **Formalute**, your go-to solution for building and rendering forms effortlessly in React and jQuery projects. This guide will walk you through the installation and integration process step by step.

---

## 1. Installation

### For React Projects:

Ensure you have **Node.js** installed, then install Formalute using:

```sh
npm install formalute
```

OR

```sh
yarn add formalute
```

### For jQuery (HTML/CSS) Projects:

Simply include these CDN links in your HTML file:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="path-to/Formalute.umd.js"></script>
```

---

## 2. Using Formalute in a React Project

### 🚀 Example: Form Builder

```jsx
import React from "react";
import { FormaluteBuilder } from "formalute";

const App = () => {
  const handleSave = (jsonConfig) => {
    console.log("Saved Form Data:", jsonConfig);
  };

  return (
    <div>
      <h2>React Form Builder</h2>
      <FormaluteBuilder onSave={handleSave} />
    </div>
  );
};

export default App;
```

### 🎨 Example: Form Renderer

```jsx
import React from "react";
import { FormaluteRenderer } from "formalute";
import jsonConfig from './config.json' with { type: "json" };

const App = () => {
  const config = JSON.stringify(jsonConfig, null, 4)
  return (
  <div>
    <h2>Form Renderer</h2>
    <FormaluteRenderer jsonConfig={config} onSubmit={(data) => console.log("Form Submitted:", data)} />
  </div>
)};

export default App;
```

---

## 3. Using Formalute in jQuery

### 🏗️ Example: Form Builder

```html
<div id="form-builder"></div>
<script>
  $(document).ready(function () {
    $("#form-builder").formalute({
      type: "builder",
      onSave: function (jsonConfig) {
        console.log("Form Saved:", jsonConfig);
      },
    });
  });
</script>
```

### 📝 Example: Form Renderer

```html
<div id="form-renderer"></div>
<script>
  $(document).ready(function () {
    $("#form-renderer").formalute({
      type: "renderer",
      jsonConfig: {/* Your form JSON Builded by Builder*/},
      onSubmit: function (data) {
        console.log("Form Submitted:", data);
      },
    });
  });
</script>
```

---

## 4. Using Formalute with React.createElement (HTML/CSS)

If you prefer a more direct approach using **React.createElement**, here’s how:

```html
<div id="react-root"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="path-to/Formalute.umd.js"></script>
<script>
  (function() {
    var rootElement = document.getElementById("react-root");
    var root = ReactDOM.createRoot(rootElement);

    root.render(
      React.createElement(window.Formalute.FormaluteBuilder, {
        onSave: function(jsonConfig) {
          console.log("Saved Form:", jsonConfig);
        }
      })
    );
  })();
</script>
```

---

## 5. Troubleshooting & FAQs

### ❓ Common Issues & Fixes

1. **React is undefined?**
   - Ensure React and ReactDOM are loaded before Formalute.

2. **jQuery plugin not working?**
   - Make sure jQuery is included **before** Formalute in your HTML file.

3. **Form not rendering?**
   - Double-check your `jsonConfig` structure.

### 🤔 Frequently Asked Questions

🔹 **How do I handle form data?**
   - Use the `onSave` callback in the builder and `onSubmit` in the renderer.

🔹 **Does Formalute work in older browsers?**
   - It's optimized for modern browsers. Consider using polyfills if needed.

---

🚀 **Get started with Formalute today and build forms effortlessly!**

