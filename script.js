$(document).ready(function() {
  // Lorsque le document est prêt, cache toutes les sections sauf la première
  $('.content-region:not(:first)').hide();

  // Quand on clique sur un lien du menu principal
  $('.main-menu a').click(function(e) {
    e.preventDefault(); // Empêche le comportement par défaut du lien

    // Récupère l'ID de la section cible à partir de l'attribut href du lien
    var targetSection = $(this).attr('href');

    // Cache toutes les sections
    $('.content-region').hide();

    // Affiche la section cible
    $(targetSection).show();
  });
});
