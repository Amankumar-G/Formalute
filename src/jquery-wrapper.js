(function ($) {
    $.fn.formalute = function (options) {
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
  
        // Ensure React and Formalute are available
        if (!window.React || !window.ReactDOM || !window.Formalute) {
          console.error("React, ReactDOM, or Formalute is missing!");
          return;
        }
  
        const { FormaluteBuilder, FormaluteRenderer } = window.Formalute;
        const root = ReactDOM.createRoot(element);
  
        if (settings.type === "builder") {
          root.render(
            React.createElement(FormaluteBuilder, {
              title: settings.title,
              theme: settings.theme,
              onSave: settings.onSave
            })
          );
        } else if (settings.type === "renderer") {
          root.render(
            React.createElement(FormaluteRenderer, { jsonConfig: settings.jsonConfig,onSubmit: settings.onSubmit })
          );
        }
      });
    };
  })(jQuery);
  
