// This is Eleventy's configuration file (https://www.11ty.dev/docs/config/). It's optional! We'll use it to create some custom filters and make sure our images and CSS are included in the build.

// Import the `DateTime` class from Luxon, a JavaScript library for handling dates/times. Eleventy already uses Luxon internally, and we'll use it for a couple of our custom filters, too. (If you want to modify these or add your own, see https://moment.github.io/luxon/#/formatting)
const { DateTime } = require('luxon');

// Import Eleventy's HTML `<base>` plugin (https://www.11ty.dev/docs/plugins/html-base/). If we deploy our site to a subdirectory (like how https://cypressSap.codeberg.page/11ty-zones-demo/ is in the `11ty-zones-demo` subdirectory), absolute URLs like `/about/` won't work as expected (that one would resolve to `https://cypressSap.codeberg.page/about/`). This plugin uses the `pathPrefix` (set down below) to automatically correct these throughout the project.
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
	// Add the plugin we just imported
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	// Filters (https://www.11ty.dev/docs/filters/) can be called from our templates to process data, usually to make it more presentable.
	// By default, Eleventy renders dates something like "Wed Feb 21 2024 16:00:00 GMT-0800 (Pacific Standard Time)". These first two filters (adapted from https://11ty.rocks/eleventyjs/dates/#postdate-filter) take a date and transform it:
	// "2024-02-22"
	eleventyConfig.addFilter('toISODate', (dateObj) =>
		DateTime.fromJSDate(dateObj).toUTC().toISODate()
	);
	// "22 Feb, 2024"
	eleventyConfig.addFilter('toZoneletsPostDate', (dateObj) =>
		DateTime.fromJSDate(dateObj).toUTC().toFormat("dd LLL',' y")
	);
	// This last filter (from https://11ty.rocks/eleventyjs/data-arrays/#limit-filter) returns a limited number of items from an array (such as a collection of posts):
	eleventyConfig.addFilter('limit', (arr, limit) => arr.slice(0, limit));

	// By default, when building pages, Eleventy only looks for template files (like the `.njk` Nunjucks and `.md` Markdown files in our project). If a file's extension doesn't match a known templating language, it's ignored. That means our images and CSS aren't included! Let's make sure they get copied over. (See https://www.11ty.dev/docs/copy/)
	// Copy `images` to `_site/images`
	eleventyConfig.addPassthroughCopy('images');
	// Copy `style` to `_site/style`
	eleventyConfig.addPassthroughCopy('style');

	return {
		// Update this if you're deploying your site to a subdirectory. (https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix)
		pathPrefix: '/',
	};
};
