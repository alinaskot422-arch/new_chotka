/* Error: The target selector was not found.
 * Use "@extend %subtitle-base !optional" to avoid this error.
 *    ,
 * 81 |   &__subtitle { @extend %subtitle-base; }
 *    |                 ^^^^^^^^^^^^^^^^^^^^^^
 *    '
 *   scss\blocks\about.scss 81:17  root stylesheet */

body::before {
  font-family: "Source Code Pro", "SF Mono", Monaco, Inconsolata, "Fira Mono",
      "Droid Sans Mono", monospace, monospace;
  white-space: pre;
  display: block;
  padding: 1em;
  margin-bottom: 1em;
  border-bottom: 2px solid black;
  content: 'Error: The target selector was not found.\aUse "@extend %subtitle-base !optional" to avoid this error.\a    \2577 \a 81 \2502    &__subtitle { @extend %subtitle-base; }\d\a    \2502                  ^^^^^^^^^^^^^^^^^^^^^^\a    \2575 \a   scss\\blocks\\about.scss 81:17  root stylesheet';
}
