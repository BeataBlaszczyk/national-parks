// missed rules for ESLint

module.exports = {

    rules: {
  
      'vue/max-attributes-per-line': ['error', {
  
        singleline: {
  
          max: 1,
  
        },
  
        multiline: {
  
          max: 1,
  
        },
  
      }],
  
      'vue/html-indent': ['error', 2, {
  
        attribute: 1,
  
        baseIndent: 1,
  
        closeBracket: 0,
  
        alignAttributesVertically: true,
  
        ignores: [],
  
      }],
  
      'vue/first-attribute-linebreak': ['error', {
  
        singleline: 'ignore',
  
        multiline: 'below',
  
      }],
  
      'vue/html-closing-bracket-newline': ['error', {
  
        singleline: 'never',
  
        multiline: 'always',
  
      }],
  
      'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
  
      'vue/no-multi-spaces': ['error', {
  
        ignoreProperties: false,
  
      }],
  
      'vue/block-tag-newline': ['error', {
  
        singleline: 'consistent',
  
        multiline: 'always',
  
      }],
  
      'vue/singleline-html-element-content-newline': ['error', {
  
        ignoreWhenNoAttributes: true,
  
        ignoreWhenEmpty: true,
  
        ignores: ['pre', 'textarea', 'code'],
  
      }],
  
      'vue/multiline-html-element-content-newline': ['error', {
  
        ignoreWhenEmpty: true,
  
        ignores: ['pre', 'textarea', 'code'],
  
        allowEmptyLines: false,
  
      }],
  
      'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
  
      'function-paren-newline': ['error', 'consistent'],
  
      'object-curly-spacing': ['error', 'always', {
  
        arraysInObjects: true,
  
        objectsInObjects: true,
  
      }],
  
      'comma-dangle': ['error', 'only-multiline'],
  
    },
  
  };
  
   