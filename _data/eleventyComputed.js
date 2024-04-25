// This is a global data file (https://www.11ty.dev/docs/data-global/), exposed to every template in our project. `eleventyComputed` data (https://www.11ty.dev/docs/data-computed/) is special: It's processed last, after any other data sources, which means it can be calculated *from* those sources and takes priority over them.

module.exports = {
	// Does the page already have a `title` property (typically set in the front matter at the top of a file)? If so, keep it. If not, take its fileSlug (usually its filename with the date and extension removed; see https://www.11ty.dev/docs/data-eleventy-supplied/#fileslug), replace any hyphens with spaces, and use that.
	title: ({ title, page: { fileSlug } }) =>
		title ? title : fileSlug.replaceAll('-', ' '),
};
