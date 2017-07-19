module.exports = {
  root: true,
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
    ecmaFeatures: {
      experimentalObjectRestSpread: false,
      globalReturn: true,
      impliedStrict: true,
      jsx: false
    }
  },
  env: {
    browser: true,
    node: true
  },
  globals: {},
  rules: {
    // Possible Errors: These rules relate to possible syntax or logic errors in JavaScript code
    // -------------------------------------------------------------
    'no-cond-assign': [                // http://eslint.org/docs/rules/no-cond-assign
      'error'                         // disallow assignment operators in conditional expressions
    ],
    'no-console': [                    // http://eslint.org/docs/rules/no-console
      'off'                           // disallow the use of `console`
    ],
    'no-constant-condition': [         // http://eslint.org/docs/rules/no-constant-condition
      'error'                         // disallow constant expressions in conditions
    ],
    'no-control-regex': [              // http://eslint.org/docs/rules/no-control-regex
      'error'                         // disallow control characters in regular expressions
    ],
    'no-debugger': [                   // http://eslint.org/docs/rules/no-debugger
      'error'                         // disallow the use of `debugger`
    ],
    'no-dupe-args': [                  // http://eslint.org/docs/rules/no-dupe-args
      'error'                         // disallow duplicate arguments in `function` definitions
    ],
    'no-dupe-keys': [                  // http://eslint.org/docs/rules/no-dupe-keys
      'error'                         // disallow duplicate keys in object literals
    ],
    'no-duplicate-case': [             // http://eslint.org/docs/rules/no-duplicate-case
      'error'                         // disallow duplicate case labels
    ],
    'no-empty-character-class': [      // http://eslint.org/docs/rules/no-empty-character-class
      'error'                         // disallow empty character classes in regular expressions
    ],
    'no-empty': [                      // http://eslint.org/docs/rules/no-empty
      'error'                         // disallow empty block statements
    ],
    'no-ex-assign': [                  // http://eslint.org/docs/rules/no-ex-assign
      'error'                         // disallow reassigning exceptions in `catch` clauses
    ],
    'no-extra-boolean-cast': [         // http://eslint.org/docs/rules/no-extra-boolean-cast
      'error'                         // disallow unnecessary boolean casts
    ],
    'no-extra-parens': [               // http://eslint.org/docs/rules/no-extra-parens
      'off'                            // disallow unnecessary parentheses
    ],
    'no-extra-semi': [                 // http://eslint.org/docs/rules/no-extra-semi
      'error'                         // disallow unnecessary semicolons
    ],
    'no-func-assign': [                // http://eslint.org/docs/rules/no-func-assign
      'error'                         // disallow reassigning `function` declarations
    ],
    'no-inner-declarations': [         // http://eslint.org/docs/rules/no-inner-declarations
      'error'                         // disallow variable or `function` declarations in nested blocks
    ],
    'no-invalid-regexp': [             // http://eslint.org/docs/rules/no-invalid-regexp
      'error'                         // disallow invalid regular expression strings in `RegExp` constructors
    ],
    'no-irregular-whitespace': [       // http://eslint.org/docs/rules/no-irregular-whitespace
      'error'                         // disallow irregular whitespace outside of strings and comments
    ],
    'no-obj-calls': [                  // http://eslint.org/docs/rules/no-obj-calls
      'error'                         // disallow calling global object properties as functions
    ],
    'no-prototype-builtins': [         // http://eslint.org/docs/rules/no-prototype-builtins
      'off'                           // disallow calling some `Object.prototype` methods directly on objects
    ],
    'no-regex-spaces': [               // http://eslint.org/docs/rules/no-regex-spaces
      'error'                         // disallow multiple spaces in regular expressions
    ],
    'no-sparse-arrays': [              // http://eslint.org/docs/rules/no-sparse-arrays
      'off'                           // disallow sparse arrays
    ],
    'no-template-curly-in-string': [   // http://eslint.org/docs/rules/no-template-curly-in-string
      'warn'                          // disallow template literal placeholder syntax in regular strings
    ],
    'no-unexpected-multiline': [       // http://eslint.org/docs/rules/no-unexpected-multiline
      'error'                         // disallow confusing multiline expressions
    ],
    'no-unreachable': [                // http://eslint.org/docs/rules/no-unreachable
      'error'                         // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    ],
    'no-unsafe-finally': [             // http://eslint.org/docs/rules/no-unsafe-finally
      'error'                         // disallow control flow statements in `finally` blocks
    ],
    'no-unsafe-negation': [            // http://eslint.org/docs/rules/no-unsafe-negation
      'error'                         // disallow negating the left operand of relational operators
    ],
    'use-isnan': [                     // http://eslint.org/docs/rules/use-isnan
      'error'                         // require calls to `isNaN()` when checking for `NaN`
    ],
    'valid-jsdoc': [                   // http://eslint.org/docs/rules/valid-jsdoc
      'off'                           // enforce valid JSDoc comments
    ],
    'valid-typeof': [                  // http://eslint.org/docs/rules/valid-typeof
      'error'                         // enforce comparing `typeof` expressions against valid strings
    ],


    // Best Practices: These rules relate to better ways of doing things to help you avoid problems
    // -------------------------------------------------------------
    'accessor-pairs': [                // http://eslint.org/docs/rules/accessor-pairs
      'off'                           // enforce getter and setter pairs in objects
    ],
    'array-callback-return': [         // http://eslint.org/docs/rules/array-callback-return
      'warn'                          // enforce `return` statements in callbacks of array methods
    ],
    'block-scoped-var': [              // http://eslint.org/docs/rules/block-scoped-var
      'warn'                          // enforce the use of variables within the scope they are defined
    ],
    'class-methods-use-this': [        // http://eslint.org/docs/rules/class-methods-use-this
      'off'                           // enforce that class methods utilize `this`
    ],
    complexity: [                      // http://eslint.org/docs/rules/complexity
      'error',                         // enforce a maximum cyclomatic complexity allowed in a program
      {
        max: 10
      }
    ],
    'consistent-return': [             // http://eslint.org/docs/rules/consistent-return
      'error'                         // require `return` statements to either always or never specify values
    ],
    curly: [                           // http://eslint.org/docs/rules/curly
      'error'                          // enforce consistent brace style for all control statements
    ],
    'default-case': [                  // http://eslint.org/docs/rules/default-case
      'off'                           // require `default` cases in `switch` statements
    ],
    'dot-location': [                  // http://eslint.org/docs/rules/dot-location
      'error',                         // enforce consistent newlines before and after dots
      'property'
    ],
    'dot-notation': [                  // http://eslint.org/docs/rules/dot-notation
      'warn'                          // enforce dot notation whenever possible
    ],
    eqeqeq: [                          // http://eslint.org/docs/rules/eqeqeq
      'error'                         // require the use of `===` and `!==`
    ],
    'guard-for-in': [                  // http://eslint.org/docs/rules/guard-for-in
      'error'                         // require `for-in` loops to include an `if` statement
    ],
    'no-alert': [                      // http://eslint.org/docs/rules/no-alert
      'error'                         // disallow the use of `alert`, `confirm`, and `prompt`
    ],
    'no-caller': [                     // http://eslint.org/docs/rules/no-caller
      'error'                         // disallow the use of `arguments.caller` or `arguments.callee`
    ],
    'no-case-declarations': [          // http://eslint.org/docs/rules/no-case-declarations
      'error'                         // disallow lexical declarations in case clauses
    ],
    'no-div-regex': [                  // http://eslint.org/docs/rules/no-div-regex
      'error'                         // disallow division operators explicitly at the beginning of regular expressions
    ],
    'no-else-return': [                // http://eslint.org/docs/rules/no-else-return
      'warn'                          // disallow `else` blocks after `return` statements in `if` statements
    ],
    'no-empty-function': [             // http://eslint.org/docs/rules/no-empty-function
      'warn'                          // disallow empty functions
    ],
    'no-empty-pattern': [              // http://eslint.org/docs/rules/no-empty-pattern
      'error'                         // disallow empty destructuring patterns
    ],
    'no-eq-null': [                    // http://eslint.org/docs/rules/no-eq-null
      'warn'                          // disallow `null` comparisons without type-checking operators
    ],
    'no-eval': [                       // http://eslint.org/docs/rules/no-eval
      'error'                         // disallow the use of `eval()`
    ],
    'no-extend-native': [              // http://eslint.org/docs/rules/no-extend-native
      'warn'                          // disallow extending native types
    ],
    'no-extra-bind': [                 // http://eslint.org/docs/rules/no-extra-bind
      'warn'                          // disallow unnecessary calls to `.bind()`
    ],
    'no-extra-label': [                // http://eslint.org/docs/rules/no-extra-label
      'error'                         // disallow unnecessary labels
    ],
    'no-fallthrough': [                // http://eslint.org/docs/rules/no-fallthrough
      'error'                         // disallow fallthrough of `case` statements
    ],
    'no-floating-decimal': [           // http://eslint.org/docs/rules/no-floating-decimal
      'error'                         // disallow leading or trailing decimal points in numeric literals
    ],
    'no-global-assign': [              // http://eslint.org/docs/rules/no-global-assign
      'error'                         // disallow assignments to native objects or read-only global variables
    ],
    'no-implicit-coercion': [          // http://eslint.org/docs/rules/no-implicit-coercion
      'off'                           // disallow shorthand type conversions
    ],
    'no-implicit-globals': [           // http://eslint.org/docs/rules/no-implicit-globals
      'error'                         // disallow variable and `function` declarations in the global scope
    ],
    'no-implied-eval': [               // http://eslint.org/docs/rules/no-implied-eval
      'error'                         // disallow the use of `eval()`-like methods
    ],
    'no-invalid-this': [               // http://eslint.org/docs/rules/no-invalid-this
      'error'                         // disallow `this` keywords outside of classes or class-like objects
    ],
    'no-iterator': [                   // http://eslint.org/docs/rules/no-iterator
      'error'                         // disallow the use of the `__iterator__` property
    ],
    'no-labels': [                     // http://eslint.org/docs/rules/no-labels
      'error'                         // disallow labeled statements
    ],
    'no-lone-blocks': [                // http://eslint.org/docs/rules/no-lone-blocks
      'error'                         // disallow unnecessary nested blocks
    ],
    'no-loop-func': [                  // http://eslint.org/docs/rules/no-loop-func
      'error'                         // disallow `function` declarations and expressions inside loop statements
    ],
    'no-magic-numbers': [              // http://eslint.org/docs/rules/no-magic-numbers
      'warn'                          // disallow magic numbers
    ],
    'no-multi-spaces': [               // http://eslint.org/docs/rules/no-multi-spaces
      'error'                         // disallow multiple spaces
    ],
    'no-multi-str': [                  // http://eslint.org/docs/rules/no-multi-str
      'error'                         // disallow multiline strings
    ],
    'no-new-func': [                   // http://eslint.org/docs/rules/no-new-func
      'error'                         // disallow `new` operators with the `Function` object
    ],
    'no-new-wrappers': [               // http://eslint.org/docs/rules/no-new-wrappers
      'error'                         // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    ],
    'no-new': [                        // http://eslint.org/docs/rules/no-new
      'error'                         // disallow `new` operators outside of assignments or comparisons
    ],
    'no-octal-escape': [               // http://eslint.org/docs/rules/no-octal-escape
      'error'                         // disallow octal escape sequences in string literals
    ],
    'no-octal': [                      // http://eslint.org/docs/rules/no-octal
      'error'                         // disallow octal literals
    ],
    'no-param-reassign': [             // http://eslint.org/docs/rules/no-param-reassign
      'off'                           // disallow reassigning `function` parameters
    ],
    'no-proto': [                      // http://eslint.org/docs/rules/no-proto
      'error'                         // disallow the use of the `__proto__` property
    ],
    'no-redeclare': [                  // http://eslint.org/docs/rules/no-redeclare
      'error'                         // disallow variable redeclaration
    ],
    'no-restricted-properties': [      // http://eslint.org/docs/rules/no-restricted-properties
      'off'                           // disallow certain properties on certain objects
    ],
    'no-return-assign': [              // http://eslint.org/docs/rules/no-return-assign
      'warn'                          // disallow assignment operators in `return` statements
    ],
    'no-return-await': [               // http://eslint.org/docs/rules/no-return-await
      'error'                         // disallow unnecessary `return await`
    ],
    'no-script-url': [                 // http://eslint.org/docs/rules/no-script-url
      'error'                         // disallow `javascript:` urls
    ],
    'no-self-assign': [                // http://eslint.org/docs/rules/no-self-assign
      'error'                         // disallow assignments where both sides are exactly the same
    ],
    'no-self-compare': [               // http://eslint.org/docs/rules/no-self-compare
      'error'                         // disallow comparisons where both sides are exactly the same
    ],
    'no-sequences': [                  // http://eslint.org/docs/rules/no-sequences
      'error'                         // disallow comma operators
    ],
    'no-throw-literal': [              // http://eslint.org/docs/rules/no-throw-literal
      'error'                         // disallow throwing literals as exceptions
    ],
    'no-unmodified-loop-condition': [  // http://eslint.org/docs/rules/no-unmodified-loop-condition
      'warn'                          // disallow unmodified loop conditions
    ],
    'no-unused-expressions': [         // http://eslint.org/docs/rules/no-unused-expressions
      'error'                          // disallow unused expressions
    ],
    'no-unused-labels': [              // http://eslint.org/docs/rules/no-unused-labels
      'error'                         // disallow unused labels
    ],
    'no-useless-call': [               // http://eslint.org/docs/rules/no-useless-call
      'error'                         // disallow unnecessary calls to `.call()` and `.apply()`
    ],
    'no-useless-concat': [             // http://eslint.org/docs/rules/no-useless-concat
      'error'                         // disallow unnecessary concatenation of literals or template literals
    ],
    'no-useless-escape': [             // http://eslint.org/docs/rules/no-useless-escape
      'error'                         // disallow unnecessary escape characters
    ],
    'no-useless-return': [             // http://eslint.org/docs/rules/no-useless-return
      'error'                         // disallow redundant return statements
    ],
    'no-void': [                       // http://eslint.org/docs/rules/no-void
      'warn'                          // disallow `void` operators
    ],
    'no-warning-comments': [           // http://eslint.org/docs/rules/no-warning-comments
      'warn'                          // disallow specified warning terms in comments
    ],
    'no-with': [                       // http://eslint.org/docs/rules/no-with
      'error'                         // disallow `with` statements
    ],
    radix: [                           // http://eslint.org/docs/rules/radix
      'error'                         // enforce the consistent use of the radix argument when using `parseInt()`
    ],
    'vars-on-top': [                   // http://eslint.org/docs/rules/vars-on-top
      'error'                         // require `var` declarations be placed at the top of their containing scope
    ],
    'wrap-iife': [                     // http://eslint.org/docs/rules/wrap-iife
      'error'                         // require parentheses around immediate `function` invocations
    ],
    yoda: [                            // http://eslint.org/docs/rules/yoda
      'off'                           // require or disallow "Yoda" conditions
    ],


    // Strict Mode: These rules relate to strict mode directives
    // -------------------------------------------------------------
    strict: [                          // http://eslint.org/docs/rules/strict
      'error',                         // require or disallow strict mode directives
      'never'
    ],


    // Variables: These rules relate to variable declarations
    // -------------------------------------------------------------
    'init-declarations': [             // http://eslint.org/docs/rules/init-declarations
      'off'                           // require or disallow initialization in variable declarations
    ],
    'no-catch-shadow': [               // http://eslint.org/docs/rules/no-catch-shadow
      'error'                         // disallow `catch` clause parameters from shadowing variables in the outer scope
    ],
    'no-delete-var': [                 // http://eslint.org/docs/rules/no-delete-var
      'error'                         // disallow deleting variables
    ],
    'no-label-var': [                  // http://eslint.org/docs/rules/no-label-var
      'error'                         // disallow labels that share a name with a variable
    ],
    'no-restricted-globals': [         // http://eslint.org/docs/rules/no-restricted-globals
      'off'                           // disallow specified global variables
    ],
    'no-shadow-restricted-names': [    // http://eslint.org/docs/rules/no-shadow-restricted-names
      'off'                           // disallow identifiers from shadowing restricted names
    ],
    'no-shadow': [                     // http://eslint.org/docs/rules/no-shadow
      'warn'                          // disallow variable declarations from shadowing variables declared in the outer scope
    ],
    'no-undef-init': [                 // http://eslint.org/docs/rules/no-undef-init
      'error'                         // disallow initializing variables to `undefined`
    ],
    'no-undef': [                      // http://eslint.org/docs/rules/no-undef
      'off'                           // disallow the use of undeclared variables unless mentioned in `/*global */` comments
    ],
    'no-undefined': [                  // http://eslint.org/docs/rules/no-undefined
      'error'                         // disallow the use of `undefined` as an identifier
    ],
    'no-unused-vars': [                // http://eslint.org/docs/rules/no-unused-vars
      'error'                         // disallow unused variables
    ],
    'no-use-before-define': [          // http://eslint.org/docs/rules/no-use-before-define
      'error',                         // disallow the use of variables before they are defined
      {
        functions: false,
        classes: true
      }
    ],


    // Node.js and CommonJS: These rules relate to code running in Node.js, or in browsers with CommonJS
    // -------------------------------------------------------------
    'callback-return': [               // http://eslint.org/docs/rules/callback-return
      'error'                         // require `return` statements after callbacks
    ],
    'global-require': [                // http://eslint.org/docs/rules/global-require
      'warn'                          // require `require()` calls to be placed at top-level module scope
    ],
    'handle-callback-err': [           // http://eslint.org/docs/rules/handle-callback-err
      'error'                         // require error handling in callbacks
    ],
    'no-mixed-requires': [             // http://eslint.org/docs/rules/no-mixed-requires
      'off'                           // disallow `require` calls to be mixed with regular variable declarations
    ],
    'no-new-require': [                // http://eslint.org/docs/rules/no-new-require
      'off'                           // disallow `new` operators with calls to `require`
    ],
    'no-path-concat': [                // http://eslint.org/docs/rules/no-path-concat
      'error'                         // disallow string concatenation with `__dirname` and `__filename`
    ],
    'no-process-env': [                // http://eslint.org/docs/rules/no-process-env
      'error'                         // disallow the use of `process.env`
    ],
    'no-process-exit': [               // http://eslint.org/docs/rules/no-process-exit
      'error'                         // disallow the use of `process.exit()`
    ],
    'no-restricted-modules': [         // http://eslint.org/docs/rules/no-restricted-modules
      'off'                           // disallow specified modules when loaded by `require`
    ],
    'no-sync': [                       // http://eslint.org/docs/rules/no-sync
      'error'                         // disallow synchronous methods
    ],


    // Stylistic Issues: These rules relate to style guidelines, and are therefore quite subjective
    // -------------------------------------------------------------
    'array-bracket-spacing': [         // http://eslint.org/docs/rules/array-bracket-spacing
      'error'                         // enforce consistent spacing inside array brackets
    ],
    'block-spacing': [                 // http://eslint.org/docs/rules/block-spacing
      'error'                         // enforce consistent spacing inside single-line blocks
    ],
    'brace-style': [                   // http://eslint.org/docs/rules/brace-style
      'error'                         // enforce consistent brace style for blocks
    ],
    camelcase: [                       // http://eslint.org/docs/rules/camelcase
      'error'                         // enforce camelcase naming convention
    ],
    'comma-dangle': [                  // http://eslint.org/docs/rules/comma-dangle
      'error'                         // require or disallow trailing commas
    ],
    'comma-spacing': [                 // http://eslint.org/docs/rules/comma-spacing
      'error'                         // enforce consistent spacing before and after commas
    ],
    'comma-style': [                   // http://eslint.org/docs/rules/comma-style
      'error'                         // enforce consistent comma style
    ],
    'computed-property-spacing': [     // http://eslint.org/docs/rules/computed-property-spacing
      'error'                         // enforce consistent spacing inside computed property brackets
    ],
    'consistent-this': [               // http://eslint.org/docs/rules/consistent-this
      'off'                           // enforce consistent naming when capturing the current execution context
    ],
    'eol-last': [                      // http://eslint.org/docs/rules/eol-last
      'error'                         // require or disallow newline at the end of files
    ],
    'func-call-spacing': [             // http://eslint.org/docs/rules/func-call-spacing
      'error'                         // require or disallow spacing between function identifiers and their invocations
    ],
    'func-name-matching': [            // http://eslint.org/docs/rules/func-name-matching
      'error'                         // require function names to match the name of the variable or property to which they are assigned
    ],
    'func-names': [                    // http://eslint.org/docs/rules/func-names
      'error'                         // require or disallow named `function` expressions
    ],
    'func-style': [                    // http://eslint.org/docs/rules/func-style
      'off'                           // enforce the consistent use of either `function` declarations or expressions
    ],
    'id-blacklist': [                  // http://eslint.org/docs/rules/id-blacklist
      'off'                           // disallow specified identifiers
    ],
    'id-length': [                     // http://eslint.org/docs/rules/id-length
      'off'                           // enforce minimum and maximum identifier lengths
    ],
    'id-match': [                      // http://eslint.org/docs/rules/id-match
      'off'                           // require identifiers to match a specified regular expression
    ],
    indent: [                          // http://eslint.org/docs/rules/indent
      'error',                         // enforce consistent indentation
      2
    ],
    'jsx-quotes': [                    // http://eslint.org/docs/rules/jsx-quotes
      'off'                           // enforce the consistent use of either double or single quotes in JSX attributes
    ],
    'key-spacing': [                   // http://eslint.org/docs/rules/key-spacing
      'error'                           // enforce consistent spacing between keys and values in object literal properties
    ],
    'keyword-spacing': [               // http://eslint.org/docs/rules/keyword-spacing
      'error'                           // enforce consistent spacing before and after keywords
    ],
    'line-comment-position': [         // http://eslint.org/docs/rules/line-comment-position
      'off'                           // enforce position of line comments
    ],
    'linebreak-style': [               // http://eslint.org/docs/rules/linebreak-style
      'error'                         // enforce consistent linebreak style
    ],
    'lines-around-comment': [          // http://eslint.org/docs/rules/lines-around-comment
      'off'                           // require empty lines around comments
    ],
    'lines-around-directive': [        // http://eslint.org/docs/rules/lines-around-directive
      'off'                           // require or disallow newlines around directives
    ],
    'max-depth': [                     // http://eslint.org/docs/rules/max-depth
      'warn',                          // enforce a maximum depth that blocks can be nested
      {
        max: 6
      }
    ],
    'max-len': [                       // http://eslint.org/docs/rules/max-len
      'error',                         // enforce a maximum line length
      {
        code: 100,
        comments: 100,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'max-lines': [                     // http://eslint.org/docs/rules/max-lines
      'error',                         // enforce a maximum number of lines per file
      {
        max: 600,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-nested-callbacks': [          // http://eslint.org/docs/rules/max-nested-callbacks
      'error',                         // enforce a maximum depth that callbacks can be nested
      {
        max: 4
      }
    ],
    'max-params': [                    // http://eslint.org/docs/rules/max-params
      'error',                         // enforce a maximum number of parameters in function definitions
      {
        max: 10
      }
    ],
    'max-statements-per-line': [       // http://eslint.org/docs/rules/max-statements-per-line
      'error'                         // enforce a maximum number of statements allowed per line
    ],
    'max-statements': [                // http://eslint.org/docs/rules/max-statements
      'off'                           // enforce a maximum number of statements allowed in function blocks
    ],
    'multiline-ternary': [             // http://eslint.org/docs/rules/multiline-ternary
      'off'                           // enforce newlines between operands of ternary expressions
    ],
    'new-cap': [                       // http://eslint.org/docs/rules/new-cap
      'error'                           // require constructor names to begin with a capital letter
    ],
    'new-parens': [                    // http://eslint.org/docs/rules/new-parens
      'error'                         // require parentheses when invoking a constructor with no arguments
    ],
    'newline-after-var': [             // http://eslint.org/docs/rules/newline-after-var
      'off'                           // require or disallow an empty line after variable declarations
    ],
    'newline-before-return': [         // http://eslint.org/docs/rules/newline-before-return
      'off'                           // require an empty line before `return` statements
    ],
    'newline-per-chained-call': [      // http://eslint.org/docs/rules/newline-per-chained-call
      'error',                           // require a newline after each call in a method chain
      {
        ignoreChainWithDepth: 2
      }
    ],
    'no-array-constructor': [          // http://eslint.org/docs/rules/no-array-constructor
      'error'                         // disallow `Array` constructors
    ],
    'no-bitwise': [                    // http://eslint.org/docs/rules/no-bitwise
      'error'                         // disallow bitwise operators
    ],
    'no-continue': [                   // http://eslint.org/docs/rules/no-continue
      'off'                           // disallow `continue` statements
    ],
    'no-inline-comments': [            // http://eslint.org/docs/rules/no-inline-comments
      'off'                           // disallow inline comments after code
    ],
    'no-lonely-if': [                  // http://eslint.org/docs/rules/no-lonely-if
      'error'                         // disallow `if` statements as the only statement in `else` blocks
    ],
    'no-mixed-operators': [            // http://eslint.org/docs/rules/no-mixed-operators
      'off'                           // disallow mixed binary operators
    ],
    'no-mixed-spaces-and-tabs': [      // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
      'error'                         // disallow mixed spaces and tabs for indentation
    ],
    'no-multiple-empty-lines': [       // http://eslint.org/docs/rules/no-multiple-empty-lines
      'error'                         // disallow multiple empty lines
    ],
    'no-negated-condition': [          // http://eslint.org/docs/rules/no-negated-condition
      'off'                           // disallow negated conditions
    ],
    'no-nested-ternary': [             // http://eslint.org/docs/rules/no-nested-ternary
      'off'                           // disallow nested ternary expressions
    ],
    'no-new-object': [                 // http://eslint.org/docs/rules/no-new-object
      'error'                         // disallow `Object` constructors
    ],
    'no-plusplus': [                   // http://eslint.org/docs/rules/no-plusplus
      'off'                           // disallow the unary operators `++` and `--`
    ],
    'no-restricted-syntax': [          // http://eslint.org/docs/rules/no-restricted-syntax
      'off'                           // disallow specified syntax
    ],
    'no-tabs': [                       // http://eslint.org/docs/rules/no-tabs
      'off'                           // disallow all tabs
    ],
    'no-ternary': [                    // http://eslint.org/docs/rules/no-ternary
      'off'                           // disallow ternary operators
    ],
    'no-trailing-spaces': [            // http://eslint.org/docs/rules/no-trailing-spaces
      'error'                         // disallow trailing whitespace at the end of lines
    ],
    'no-underscore-dangle': [          // http://eslint.org/docs/rules/no-underscore-dangle
      'error',                        // disallow dangling underscores in identifiers
      {allow: ['_id']}
    ],
    'no-unneeded-ternary': [           // http://eslint.org/docs/rules/no-unneeded-ternary
      'error'                         // disallow ternary operators when simpler alternatives exist
    ],
    'no-whitespace-before-property': [ // http://eslint.org/docs/rules/no-whitespace-before-property
      'error'                         // disallow whitespace before properties
    ],
    'object-curly-newline': [          // http://eslint.org/docs/rules/object-curly-newline
      'error',                         // enforce consistent line breaks inside braces
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 1
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 3
        }
      }
    ],
    'object-curly-spacing': [          // http://eslint.org/docs/rules/object-curly-spacing
      'error'                           // enforce consistent spacing inside braces
    ],
    'object-property-newline': [       // http://eslint.org/docs/rules/object-property-newline
      'error',                         // enforce placing object properties on separate lines
      {
        allowMultiplePropertiesPerLine: false
      }
    ],
    'one-var-declaration-per-line': [  // http://eslint.org/docs/rules/one-var-declaration-per-line
      'error'                         // require or disallow newlines around variable declarations
    ],
    'one-var': [                       // http://eslint.org/docs/rules/one-var
      'error',                         // enforce variables to be declared either together or separately in functions
      'never'
    ],
    'operator-assignment': [           // http://eslint.org/docs/rules/operator-assignment
      'off'                           // require or disallow assignment operator shorthand where possible
    ],
    'operator-linebreak': [            // http://eslint.org/docs/rules/operator-linebreak
      'error'                         // enforce consistent linebreak style for operators
    ],
    'padded-blocks': [                 // http://eslint.org/docs/rules/padded-blocks
      'off'                           // require or disallow padding within blocks
    ],
    'quote-props': [                   // http://eslint.org/docs/rules/quote-props
      'error',                         // require quotes around object literal property names
      'as-needed'
    ],
    quotes: [                          // http://eslint.org/docs/rules/quotes
      'error',                         // enforce the consistent use of either backticks, double, or single quotes
      'single'
    ],
    'require-jsdoc': [                 // http://eslint.org/docs/rules/require-jsdoc
      'off'                           // require JSDoc comments
    ],
    'semi-spacing': [                  // http://eslint.org/docs/rules/semi-spacing
      'error'                         // enforce consistent spacing before and after semicolons
    ],
    semi: [                            // http://eslint.org/docs/rules/semi
      'error'                         // require or disallow semicolons instead of ASI
    ],
    'sort-keys': [                     // http://eslint.org/docs/rules/sort-keys
      'off'                           // require object keys to be sorted
    ],
    'sort-vars': [                     // http://eslint.org/docs/rules/sort-vars
      'off'                           // require variables within the same declaration block to be sorted
    ],
    'space-before-blocks': [           // http://eslint.org/docs/rules/space-before-blocks
      'error'                         // enforce consistent spacing before blocks
    ],
    'space-before-function-paren': [   // http://eslint.org/docs/rules/space-before-function-paren
      'error'                         // enforce consistent spacing before `function` definition opening parenthesis
    ],
    'space-in-parens': [               // http://eslint.org/docs/rules/space-in-parens
      'error'                         // enforce consistent spacing inside parentheses
    ],
    'space-infix-ops': [               // http://eslint.org/docs/rules/space-infix-ops
      'error'                         // require spacing around infix operators
    ],
    'space-unary-ops': [               // http://eslint.org/docs/rules/space-unary-ops
      'error'                         // enforce consistent spacing before or after unary operators
    ],
    'spaced-comment': [                // http://eslint.org/docs/rules/spaced-comment
      'error'                         // enforce consistent spacing after the `//` or `/*` in a comment
    ],
    'unicode-bom': [                   // http://eslint.org/docs/rules/unicode-bom
      'error'                         // require or disallow Unicode byte order mark (BOM)
    ],
    'wrap-regex': [                    // http://eslint.org/docs/rules/wrap-regex
      'off'                           // require parenthesis around regex literals
    ],


    // ECMAScript 6: These rules relate to ES6, also known as ES2015
    // -------------------------------------------------------------
    'arrow-body-style': [              // http://eslint.org/docs/rules/arrow-body-style
      'error'                         // require braces around arrow function bodies
    ],
    'arrow-parens': [                  // http://eslint.org/docs/rules/arrow-parens
      'error'                         // require parentheses around arrow function arguments
    ],
    'arrow-spacing': [                 // http://eslint.org/docs/rules/arrow-spacing
      'error'                         // enforce consistent spacing before and after the arrow in arrow functions
    ],
    'constructor-super': [             // http://eslint.org/docs/rules/constructor-super
      'error'                         // require `super()` calls in constructors
    ],
    'generator-star-spacing': [        // http://eslint.org/docs/rules/generator-star-spacing
      'error'                           // enforce consistent spacing around `*` operators in generator functions
    ],
    'no-class-assign': [               // http://eslint.org/docs/rules/no-class-assign
      'error'                         // disallow reassigning class members
    ],
    'no-confusing-arrow': [            // http://eslint.org/docs/rules/no-confusing-arrow
      'off'                           // disallow arrow functions where they could be confused with comparisons
    ],
    'no-const-assign': [               // http://eslint.org/docs/rules/no-const-assign
      'error'                         // disallow reassigning `const` variables
    ],
    'no-dupe-class-members': [         // http://eslint.org/docs/rules/no-dupe-class-members
      'error'                         // disallow duplicate class members
    ],
    'no-duplicate-imports': [          // http://eslint.org/docs/rules/no-duplicate-imports
      'error'                           // disallow duplicate module imports
    ],
    'no-new-symbol': [                 // http://eslint.org/docs/rules/no-new-symbol
      'error'                         // disallow `new` operators with the `Symbol` object
    ],
    'no-restricted-imports': [         // http://eslint.org/docs/rules/no-restricted-imports
      'off'                           // disallow specified modules when loaded by `import`
    ],
    'no-this-before-super': [          // http://eslint.org/docs/rules/no-this-before-super
      'error'                         // disallow `this`/`super` before calling `super()` in constructors
    ],
    'no-useless-computed-key': [       // http://eslint.org/docs/rules/no-useless-computed-key
      'error'                         // disallow unnecessary computed property keys in object literals
    ],
    'no-useless-constructor': [        // http://eslint.org/docs/rules/no-useless-constructor
      'error'                         // disallow unnecessary constructors
    ],
    'no-useless-rename': [             // http://eslint.org/docs/rules/no-useless-rename
      'error'                         // disallow renaming import, export, and destructured assignments to the same name
    ],
    'no-var': [                        // http://eslint.org/docs/rules/no-var
      'error'                         // require `let` or `const` instead of `var`
    ],
    'object-shorthand': [              // http://eslint.org/docs/rules/object-shorthand
      'error'                         // require or disallow method and property shorthand syntax for object literals
    ],
    'prefer-arrow-callback': [         // http://eslint.org/docs/rules/prefer-arrow-callback
      'off'                            // require arrow functions as callbacks
    ],
    'prefer-const': [                  // http://eslint.org/docs/rules/prefer-const
      'error'                         // require `const` declarations for variables that are never reassigned after declared
    ],
    'prefer-numeric-literals': [       // http://eslint.org/docs/rules/prefer-numeric-literals
      'error'                         // disallow `parseInt()` in favor of binary, octal, and hexadecimal literals
    ],
    'prefer-rest-params': [            // http://eslint.org/docs/rules/prefer-rest-params
      'error'                         // require rest parameters instead of `arguments`
    ],
    'prefer-spread': [                 // http://eslint.org/docs/rules/prefer-spread
      'error'                         // require spread operators instead of `.apply()`
    ],
    'prefer-template': [               // http://eslint.org/docs/rules/prefer-template
      'error'                         // require template literals instead of string concatenation
    ],
    'require-yield': [                 // http://eslint.org/docs/rules/require-yield
      'error'                         // require generator functions to contain `yield`
    ],
    'rest-spread-spacing': [           // http://eslint.org/docs/rules/rest-spread-spacing
      'error'                         // enforce spacing between rest and spread operators and their expressions
    ],
    'sort-imports': [                  // http://eslint.org/docs/rules/sort-imports
      'off'                           // enforce sorted import declarations within modules
    ],
    'symbol-description': [            // http://eslint.org/docs/rules/symbol-description
      'error'                         // require symbol descriptions
    ],
    'template-curly-spacing': [        // http://eslint.org/docs/rules/template-curly-spacing
      'off'                           // require or disallow spacing around embedded expressions of template strings
    ],
    'yield-star-spacing': [            // http://eslint.org/docs/rules/yield-star-spacing
      'off'                           // require or disallow spacing around the `*` in `yield*` expressions
    ]
  }
};
