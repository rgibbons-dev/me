// This is a directory data file (https://www.11ty.dev/docs/data-template-dir/), exposed to every template in its folder. Without this, we'd have to add front matter at the top of every post to set its `layout` and add 'blogPosts' to its `tags`.

module.exports = {
	tags: 'blogPosts',
	layout: 'post.njk',
};
