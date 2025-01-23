// Utility function to convert keys to camelCase
const toCamelCase = (() => {
  // Special cases for known attributes that need specific conversion
  const specialCases = {
    autocomplete: 'autoComplete',
    autofocus: 'autoFocus',
    checked: 'defaultChecked',
    class: 'className',
    for: 'htmlFor',
    maxlength: 'maxLength',
    minlength: 'minLength',
    spellcheck: 'spellCheck',
    readonly: 'readOnly',
    tabindex: 'tabIndex',
    colspan: 'colSpan',
    rowspan: 'rowSpan',
    usemap: 'useMap',
    enctype: 'encType',
    contenteditable: 'contentEditable',
    httpEquiv: 'httpEquiv',
    acceptcharset: 'acceptCharset',
    frameborder: 'frameBorder',
  };

  // Create a cache for already processed attributes
  const cache = {};

  return (str) => {
    // Return cached result if available
    if (cache[str]) return cache[str];

    // Check if it's a special case
    if (specialCases[str]) {
      cache[str] = specialCases[str];
      return specialCases[str];
    }

    // General case for hyphenated attributes
    const camelCaseResult = str.replace(/-./g, (match) => match[1].toUpperCase());
    cache[str] = camelCaseResult;
    return camelCaseResult;
  };
})();

const convertAttributesToCamelCase = (attributes) => {
  return Object.keys(attributes).reduce((acc, key) => {
    const camelCasedKey = toCamelCase(key);
    acc[camelCasedKey] = attributes[key];
    return acc;
  }, {});
};
export default convertAttributesToCamelCase;