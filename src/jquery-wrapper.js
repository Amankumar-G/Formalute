(function ($) {
    $.fn.formable = function (options) {
      const defaults = {
        type: "builder",
        jsonConfig: {},
        title: "Build Your Form",
        theme: "light",
        onSave: function (jsonConfig) { console.log("Saved:", jsonConfig); }
      };
  
      const settings = $.extend({}, defaults, options);
  
      return this.each(function () {
        const element = this;
  
        // Ensure React and Formable are available
        if (!window.React || !window.ReactDOM || !window.Formable) {
          console.error("React, ReactDOM, or Formable is missing!");
          return;
        }
  
        const { FormableBuilder, FormableRenderer } = window.Formable;
        const root = ReactDOM.createRoot(element);
  
        if (settings.type === "builder") {
          root.render(
            React.createElement(FormableBuilder, {
              title: settings.title,
              theme: settings.theme,
              onSave: settings.onSave
            })
          );
        } else if (settings.type === "renderer") {
          root.render(
            React.createElement(FormableRenderer, { jsonConfig: settings.jsonConfig,onSubmit: settings.onSubmit })
          );
        }
      });
    };
  })(jQuery);
  
