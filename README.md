<p align="center" >
	<img src="https://raw.githubusercontent.com/codingstyles/codingstyles.io/master/codingstyles_logo.gif" alt="Coding styles" title="Coding styles">
</p>

Coding styles references conventions and guidelines for writing code. Any kind of contribution is welcomed and feel free to submit an issue or a pull-request if you want to add a language, your favorite coding style or a UI tweak.

The website uses [Bootstrap](http://getbootstrap.com) and [Jekyll](http://github.com/jekyll/jekyll), with a [custom plugin](http://stackoverflow.com/a/14427073/980240) to sort posts and a [hack](http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html) to use plugins on Github's pages.

# How to contribute?
To add a new language on Coding styles, just add a file in the `_posts` folder. The created file must be named as follow: `1970-01-01-languageName.md`. `1970-01-01` is the current date and `languageName` is the last component of the URL and must be lowercased and URL friendly.

In the post's front-matter, you have to set the following variables:
- `layout` *(required)*: `language`.
- `title` *(required)*: Name of the language.
- `date` *(required)*: Creation or edit date.
- `nb_styles` *(optional)*: Number of referenced styles, has to be set manualy.

# Contact
[Adrien Humilière](http://github.com/adhumi) ([@adhumi](http://twitter.com/adhumi))
