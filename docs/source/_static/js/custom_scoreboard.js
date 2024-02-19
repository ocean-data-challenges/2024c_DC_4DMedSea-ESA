$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = '/Users/sammymetref/Documents/DataChallenges/2024c_DC_4DMedSea-ESA/docs/source/_static/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})