# Formable - User Manual

Welcome to **Formable**, your go-to solution for building and rendering forms effortlessly in React and jQuery projects. This guide will walk you through the installation and integration process step by step.

---

## 1. Installation

### For React Projects:

Ensure you have **Node.js** installed, then install Formable using:

```sh
npm install formable
```

OR

```sh
yarn add formable
```

### For jQuery (HTML/CSS) Projects:

Simply include these CDN links in your HTML file:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="path-to/Formable.umd.js"></script>
```

---

## 2. Using Formable in a React Project

### 🚀 Example: Form Builder

```jsx
import React from "react";
import { FormableBuilder } from "formable";

const App = () => {
  const handleSave = (jsonConfig) => {
    console.log("Saved Form Data:", jsonConfig);
  };

  return (
    <div>
      <h2>React Form Builder</h2>
      <FormableBuilder onSave={handleSave} />
    </div>
  );
};

export default App;
```

### 🎨 Example: Form Renderer

```jsx
import React from "react";
import { FormableRenderer } from "formable";

const jsonConfig = { /* Insert JSON Form Config */ };

const App = () => (
  <div>
    <h2>Form Renderer</h2>
    <FormableRenderer jsonConfig={jsonConfig} onSubmit={(data) => console.log("Form Submitted:", data)} />
  </div>
);

export default App;
```

---

## 3. Using Formable in jQuery

### 🏗️ Example: Form Builder

```html
<div id="form-builder"></div>
<script>
  $(document).ready(function () {
    $("#form-builder").formable({
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
    $("#form-renderer").formable({
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

## 4. Using Formable with React.createElement (HTML/CSS)

If you prefer a more direct approach using **React.createElement**, here’s how:

```html
<div id="react-root"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="path-to/Formable.umd.js"></script>
<script>
  (function() {
    var rootElement = document.getElementById("react-root");
    var root = ReactDOM.createRoot(rootElement);

    root.render(
      React.createElement(window.Formable.FormableBuilder, {
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
   - Ensure React and ReactDOM are loaded before Formable.

2. **jQuery plugin not working?**
   - Make sure jQuery is included **before** Formable in your HTML file.

3. **Form not rendering?**
   - Double-check your `jsonConfig` structure.

### 🤔 Frequently Asked Questions

🔹 **How do I handle form data?**
   - Use the `onSave` callback in the builder and `onSubmit` in the renderer.

🔹 **Does Formable work in older browsers?**
   - It's optimized for modern browsers. Consider using polyfills if needed.

---

🚀 **Get started with Formable today and build forms effortlessly!**

