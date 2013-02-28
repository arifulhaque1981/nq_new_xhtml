var cls;

cls = ".smoothscroll";

jQuery(document).ready(function($) {
  return $(cls).click(function(e) {
    var hash, offset;
    hash = this.hash;
    offset = $('html,body').offset();
    e.preventDefault();
    $(window).bind('hashchange', function(e) {
      $('html,body').scrollTop(offset.top);
      $('html,body').scrollLeft(offset.left);
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 500);
      return $(window).unbind('hashchange');
    });
    return document.location.hash = hash;
  });
});
