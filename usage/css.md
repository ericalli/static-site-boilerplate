# CSS

Static Site Boilerplate assumes you are using [Sass](https://sass-lang.com/) for writing your CSS styles. The main stylesheet located in the `src/scss/` directory is:

* [styles.scss](https://github.com/ericalli/static-site-boilerplate/blob/master/src/scss/styles.scss) - By default, no styles are included as this boilerplate makes no assumptions as to how you should write your CSS. However, it's highly recommended you conform to Sass best practices when writing and importing your additional styles.

{% hint style="info" %}
Easily create additional `.scss` stylesheets and [import](https://sass-lang.com/guide) them into the main `styles.scss` file to ensure they are processed when building your site.
{% endhint %}

## Source Maps

Source maps will be generated for debugging when running the local development server or after running `npm run build:dev` to generate a development build of your website.

