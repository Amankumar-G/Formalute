(function ($) {
  $.fn.dragFormX = function (options) {
    const defaults = {
      type: "builder", // "builder" or "renderer"
      jsonConfig: {},
      title: "Build Your Form",
      theme: "light",
      onSave: function (jsonConfig) { console.log("Saved:", jsonConfig); }
    };

    const settings = $.extend({}, defaults, options);

    return this.each(function () {
      const element = this;

      // Ensure React and DragFormX are available
      if (!window.React || !window.ReactDOM || !window.DragFormX) {
        console.error("React, ReactDOM, or DragFormX is missing!");
        return;
      }

      const { DragFormXBuilder, DragFormXRenderer } = window.DragFormX;
      const root = ReactDOM.createRoot(element);

      if (settings.type === "builder") {
        root.render(
          React.createElement(DragFormXBuilder, {
            title: settings.title,
            theme: settings.theme,
            onSave: settings.onSave
          })
        );
      } else if (settings.type === "renderer") {
        root.render(
          React.createElement(DragFormXRenderer, { jsonConfig: settings.jsonConfig })
        );
      }
    });
  };
})(jQuery);
