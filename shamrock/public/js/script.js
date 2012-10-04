/* Author:

*/
function getPage(href, title, push) {
	$.ajax(href).done(function(data) {
		$('#contentWrap').replaceWith($(data).find('#contentWrap'));
		loadPlugins();
		document.title = title;
		if(push) {
			history.pushState({title:title, href: href}, title, href);
		}
	});
}

$('a.ajax').click(function() {
	if (window.history && window.history.pushState) {
		getPage(this.attributes.href.value, $(this).text(), true)
		return false;
	}
	return true;
});
window.onpopstate = function(event) {
	if(event.state) {
		getPage(event.state.href, event.state.title);
	}
}