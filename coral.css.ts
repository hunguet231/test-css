@font-face {
    font-family: "Material Icons";
    font-style: normal;
    font-weight: 400;
    src: url("~material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff2")
      format("woff2"),
    url("~material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff")
      format("woff")
}
@font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-display: block;
    font-weight: 300;
    src: url("~typeface-source-sans-pro/files/source-sans-pro-latin-300.woff2")
      format("woff2"),
    url("~typeface-source-sans-pro/files/source-sans-pro-latin-300.woff")
      format("woff")
}
@font-face {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-display: block;
    font-weight: 300;
    src: url("~typeface-source-sans-pro/files/source-sans-pro-latin-300italic.woff2")
      format("woff2"),
    url("~typeface-source-sans-pro/files/source-sans-pro-latin-300italic.woff")
      format("woff")
}
@font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-display: block;
    font-weight: 400;
    src: url("~typeface-source-sans-pro/files/source-sans-pro-latin-400.woff2")
      format("woff2"),
    url("~typeface-source-sans-pro/files/source-sans-pro-latin-400.woff")
      format("woff")
}
@font-face {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-display: block;
    font-weight: 400;
    src: url("~typeface-source-sans-pro/files/source-sans-pro-latin-400italic.woff2")
      format("woff2"),
    url("~typeface-source-sans-pro/files/source-sans-pro-latin-400italic.woff")
      format("woff")
}
@font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-display: block;
    font-weight: 600;
    src: url("~typeface-source-sans-pro/files/source-sans-pro-latin-600.woff2")
      format("woff2"),
    url("~typeface-source-sans-pro/files/source-sans-pro-latin-600.woff")
      format("woff")
}
@font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-display: block;
    font-weight: 700;
    src: url("~typeface-source-sans-pro/files/source-sans-pro-latin-700.woff2")
      format("woff2"),
    url("~typeface-source-sans-pro/files/source-sans-pro-latin-700.woff")
      format("woff")
}
@font-face {
    font-family: "Manuale";
    font-style: normal;
    font-display: block;
    font-weight: 400;
    src: url("~typeface-manuale/files/manuale-latin-400.woff2") format("woff2"),
    url("~typeface-manuale/files/manuale-latin-400.woff") format("woff")
}
@font-face {
    font-family: "Manuale";
    font-style: normal;
    font-display: block;
    font-weight: 600;
    src: url("~typeface-manuale/files/manuale-latin-600.woff2") format("woff2"),
    url("~typeface-manuale/files/manuale-latin-600.woff") format("woff")
}
@font-face {
    font-family: "Manuale";
    font-style: normal;
    font-display: block;
    font-weight: 700;
    src: url("~typeface-manuale/files/manuale-latin-700.woff2") format("woff2"),
    url("~typeface-manuale/files/manuale-latin-700.woff") format("woff")
}
@font-face {
    font-family: "Nunito";
    font-style: normal;
    font-display: block;
    font-weight: 400;
    src: url("~typeface-nunito/files/nunito-latin-400.woff2") format("woff2"),
    url("~typeface-nunito/files/nunito-latin-400.woff") format("woff")
}
@font-face {
    font-family: "Nunito";
    font-style: normal;
    font-display: block;
    font-weight: 700;
    src: url("~typeface-nunito/files/nunito-latin-700.woff2") format("woff2"),
    url("~typeface-nunito/files/nunito-latin-700.woff") format("woff")
}
@font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-display: block;
    font-weight: 400;
    src: url("~typeface-open-sans/files/open-sans-latin-400.woff2") format("woff2"),
    url("~typeface-open-sans/files/open-sans-latin-400.woff") format("woff")
}
@font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-display: block;
    font-weight: 600;
    src: url("~typeface-open-sans/files/open-sans-latin-600.woff2") format("woff2"),
    url("~typeface-open-sans/files/open-sans-latin-600.woff") format("woff")
}
@font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-display: block;
    font-weight: 700;
    src: url("~typeface-open-sans/files/open-sans-latin-700.woff2") format("woff2"),
    url("~typeface-open-sans/files/open-sans-latin-700.woff") format("woff")
}
:root {
    --round-corners: 3px;
    --palette-background-body: #FFFFFF;
    --palette-background-popover: #FFFFFF;
    --palette-background-tooltip: #65696B;
    --palette-background-input: #FFFFFF;
    --palette-background-input-disabled: #EFEFEF;
    --palette-text-100: var(--palette-text-secondary, #65696B);
    --palette-text-500: var(--palette-text-primary, #353F44);
    --palette-text-900: var(--palette-text-dark, #14171A);
    --palette-text-000: var(--palette-text-light, #FFFFFF);
    --palette-text-placeholder: var(--palette-grey-lighter, #9FA4A6);
    --palette-text-input-disabled: var(--palette-grey-lighter, #9FA4A6);
    --palette-grey-100: var(--palette-grey-lightest, #F4F7F7);
    --palette-grey-200: var(--palette-grey-lightest, #EAEFF0);
    --palette-grey-300: var(--palette-grey-lighter, #CBD1D2);
    --palette-grey-400: var(--palette-grey-lighter, #9FA4A6);
    --palette-grey-500: var(--palette-grey-main, #65696B);
    --palette-grey-600: var(--palette-grey-dark, #49545C);
    --palette-grey-700: var(--palette-grey-darkest, #32404D);
    --palette-grey-800: var(--palette-grey-darkest, #202E3E);
    --palette-grey-900: var(--palette-grey-darkest, #132033);
    --palette-error-100: var(--palette-error-lightest, #FCE5D9);
    --palette-error-200: var(--palette-error-lighter, #FAC6B4);
    --palette-error-300: var(--palette-error-lighter, #F29D8B);
    --palette-error-400: var(--palette-error-light, #E5766C);
    --palette-error-500: var(--palette-error-main, #D53F3F);
    --palette-error-600: var(--palette-error-main, #B72E39);
    --palette-error-700: var(--palette-error-dark, #991F34);
    --palette-error-800: var(--palette-error-darkest, #7B142E);
    --palette-error-900: var(--palette-error-darkest, #660C2B);
    --palette-success-100: var(--palette-success-lightest, #D8F9D5);
    --palette-success-200: var(--palette-success-lighter, #ADF3AD);
    --palette-success-300: var(--palette-success-lighter, #7CDB85);
    --palette-success-400: var(--palette-success-light, #54B767);
    --palette-success-500: var(--palette-success-main, #268742);
    --palette-success-600: var(--palette-success-main, #1B743D);
    --palette-success-700: var(--palette-success-dark, #136138);
    --palette-success-800: var(--palette-success-darkest, #0C4E32);
    --palette-success-900: var(--palette-success-darkest, #07402E);
    --palette-warning-100: var(--palette-warning-main, #FFFACC);
    --palette-warning-500: var(--palette-warning-main, #FFE91F);
    --palette-warning-900: var(--palette-warning-main, #FFCC15);
    --palette-divider: rgba(0, 0, 0, 0.12);
    --palette-primary-100: var(--palette-primary-lightest, #EBF6FF);
    --palette-primary-200: var(--palette-primary-lighter, #B7DCFF);
    --palette-primary-300: var(--palette-primary-light, #61B3FF);
    --palette-primary-400: var(--palette-primary-main, #2897FF);
    --palette-primary-500: var(--palette-primary-main, #0070D9);
    --palette-primary-600: var(--palette-primary-main, #0062BE);
    --palette-primary-700: var(--palette-primary-main, #005AAE);
    --palette-primary-800: var(--palette-primary-dark, #004688);
    --palette-primary-900: var(--palette-primary-darkest, #00386D);
    --font-family-primary: var(--font-family-sans-serif, "Roboto", sans-serif);
    --font-family-secondary: var(--font-family-serif, "Roboto");
    --font-weight-primary-bold: var(--font-weight-bold, 700);
    --font-weight-primary-semi-bold: var(--font-weight-medium, 600);
    --font-weight-primary-regular: var(--font-weight-light, 300);
    --font-weight-secondary-bold: var(--font-weight-bold, 700);
    --font-weight-secondary-regular: var(--font-weight-light, 300);
    --font-size-1: 0.75rem;
    --font-size-2: 0.875rem;
    --font-size-3: 1rem;
    --font-size-4: 1.125rem;
    --font-size-5: 1.25rem;
    --font-size-6: 1.5rem;
    --font-size-7: 1.75rem;
    --font-size-8: 2rem;
    --font-size-9: 2.25rem;
    --font-size-icon-xl: 2.25rem;
    --font-size-icon-lg: 1.5rem;
    --font-size-icon-md: 1.125rem;
    --font-size-icon-sm: 0.875rem;
    --font-size-icon-xs: 0.75rem;
    --shadow-popover: var(--elevation-main, 1px 0px 4px rgba(0, 0, 0, 0.25));
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 12px;
    --spacing-4: 16px;
    --spacing-5: 24px;
    --spacing-6: 32px;
    --spacing-7: 44px;
    --spacing-8: 60px;
    --spacing-9: 84px;
    --mini-unit-small: 4;
    --mini-unit-large: 8;
    --mini-unit: calc(1px * var(--mini-unit-small))
}
@media (min-width: 320px) {
    :root {
        --mini-unit: calc(1px * var(--mini-unit-large))
    }
}
