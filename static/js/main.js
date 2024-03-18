// Sticky navigation bar on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up');
        }
    }

    lastScrollTop = st;
};

// dynamic divider block scrolling
$(document).ready(function () {
    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween
    var tween1 = TweenMax.to("#box1", 0.5, { height: "100px" });
    var tween2 = TweenMax.to("#box2", 0.5, { height: "150px" });
    var tween3 = TweenMax.to("#box3", 0.5, { height: "75px" });
    var tween4 = TweenMax.to("#box4", 0.5, { height: "150px" });
    var tween5 = TweenMax.to("#box5", 0.5, { height: "75px" });
    var tween6 = TweenMax.to("#box6", 0.5, { height: "100px" });

    // build scene
    var scene1 = new ScrollMagic.Scene({ triggerElement: ".pinDiv1", duration: 300 })
        .setTween(tween1)
        // .addIndicators()
        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({ triggerElement: ".pinDiv1", duration: 300 })
        .setTween(tween2)
        .addTo(controller);
    var scene3 = new ScrollMagic.Scene({ triggerElement: ".pinDiv1", duration: 300 })
        .setTween(tween3)
        .addTo(controller);
    var scene4 = new ScrollMagic.Scene({ triggerElement: ".pinDiv1", duration: 300 })
        .setTween(tween4)
        .addTo(controller);
    var scene5 = new ScrollMagic.Scene({ triggerElement: ".pinDiv1", duration: 300 })
        .setTween(tween5)
        .addTo(controller);
    var scene6 = new ScrollMagic.Scene({ triggerElement: ".pinDiv1", duration: 300 })
        .setTween(tween6)
        .addTo(controller);
});

// facets 
docReady(function () {
    $('.facet-checkbox').change(function () {
        filterItems();
        updateFacetCount();
    });

    updateFacetCount();
});

function filterItems() {
    // Create helper with {groupname:facets[]}
    let selectedGroups = getSelectedGroups();

    // Show all items
    getAllArticles().each(function () {
        $(this).show();
    });

    // Hide those without the right facets
    // The logic is as follow
    // We loop through all selected groups, as we dont want to filter on non-selected groups
    // Then we get all articles and loop through their facets
    // If none of them match any filters within the group, hide it.

    // Loop through all groups
    $.each(selectedGroups, function (groupName, selectedFacets) {
        // Get all articles
        getAllArticles().each(function () {
            // Loop through their facets
            var facets_on_article = getFacetsOnArticle(this);
            if (!anyFacetMatches(facets_on_article, selectedFacets)) {
                $(this).hide();
            }
        })
    })
}

function updateFacetCount() {
    // Create helper with {groupname:facets[]} for all groups
    let groups = {};
    $('.facet-group').each(function () {
        let group_name = $(this).attr('data-facet-group');
        groups[group_name] = [];
        $(this).find('input:checkbox').each(function () {
            groups[group_name].push(this.id);
        })
    });

    // Loop through all groups so we can handle their facets
    $.each(groups, function (groupName, facets) {
        let articles = getAllArticles();

        // Remove articles which are selected/filtered through other selected groups
        $.each(getSelectedGroups(), function (selectedGroupName, selectedFacets) {

            // skip our own group, because other facets within this group don't filter. (OR logic within groups) 
            if (groupName == selectedGroupName) {
                return true;
            }

            // filter all articles matching the selected facets
            articles = articles.filter(function () {
                return anyFacetMatches(getFacetsOnArticle(this), selectedFacets);
            });
        })

        // Loop through all facets within this group so we can update their count
        $(facets).each(function (facet_index) {
            // Calculate the matching articles for this facet
            let facet = facets[facet_index];
            let facetCount = articles.filter(function () {
                return anyFacetMatches(getFacetsOnArticle(this), [facet]);
            }).length;

            // Update the label according to the count
            let facetCheckbox = $('#' + facet);
            let facetLabel = facetCheckbox.attr('name');
            let facetLabelWithCount = facetLabel + ' (' + facetCount + ')';
            facetCheckbox.text(facetLabelWithCount);
            $('label[for="' + facet + '"]').text(facetLabelWithCount);
        });
    });
}

function getAllArticles() {
    return $('.facet-item');
}

function getFacetsOnArticle(article) {
    return $(article).attr('data-facets').split(' ');
}

function anyFacetMatches(facetsA, facetsB) {
    return $(facetsA).is(function (index_facet_a) {
        let facet_a = facetsA[index_facet_a];
        return $(facetsB).is(function (index_facet_b) {
            let facet_b = facetsB[index_facet_b];

            // Check if they match
            return facet_b == facet_a;
        });

    })
}

function getSelectedGroups() {
    let selectedGroups = {};
    $('.facet-group').each(function () {
        // Atleast one element is checked
        if ($(this).find('input:checkbox:checked').length > 0) {
            let group_name = $(this).attr('data-facet-group');
            selectedGroups[group_name] = [];
            $(this).find('input:checkbox:checked').each(function () {
                selectedGroups[group_name].push(this.id);
            })
        }
    });
    return selectedGroups;
}

// footer info
$(document).ready(function()
{
  // info
  var slogan = "Building public knowledge for ethical algorithms";
  var slogan_NL = "Publieke kennisopbouw voor ethische algoritmes";

  var KvK = "Stichting Algorithm Audit is registered as a non-profit organisation at the Dutch Chambre of Commerce under license number 83979212"
  var KvK_NL = "Stichting Algorithm Audit is bij de Kamer van Koophandel geregistreerd onder nummer 83979212"

  var follow = "Follow us:"
  var follow_NL = "Volg ons:"

  var location = window.location.href
  if(location.includes("nl")){
    // info
    var slogan = slogan_NL
    var KvK = KvK_NL
    var follow = follow_NL
  }

  // info
  $('#motto').text(slogan);
  $('#KvK').text(KvK);
  $('#follow').text(follow);


  $('.clickable-wrapper').each(function() {
    let clickable_item = $(this);
    clickable_item.click(function() {
      window.location = clickable_item.attr('data-href');
    })
  });
});

// Send subscibtion for newsletter
(function($) 
    {
    window.fnames = new Array(); 
    window.ftypes = new Array();
    fnames[0]='EMAIL';
    ftypes[0]='email';
    }
    (jQuery)
);
var $mcj = jQuery.noConflict(true);

// js changing 'Choose file' text to name of uploaded file in form
function displayFile(ID) {
const fileInput = document.getElementById(ID);
const textArea = fileInput.nextElementSibling;
const file = fileInput.files[0];
textArea.innerText = file.name;
};