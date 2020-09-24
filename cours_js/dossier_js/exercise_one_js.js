let divContainer = document.createElement('div');
divContainer.classList.add("container");
console.log(divContainer);

let divSiteHeaderClearfix = document.createElement('div');
divSiteHeaderClearfix.classList.add("site-header", "clearfix");
divSiteHeaderClearfix.setAttribute("role","banner");

let divSiteLogo = document.createElement('div');
divSiteLogo.classList.add("site-logo");
divSiteLogo.innerHTML = 'HTML5';

let spanStar = document.createElement('span');
spanStar.classList.add("star");
spanStar.innerHTML = '&#9733;';

let textBoilerplate = document.createElement('text');
let boilerplateText = document.createTextNode('Boilerplate');

let ulSiteNav = document.createElement('ul');
ulSiteNav.classList.add("site-nav", "inline-block-list");

let liOneOfUlSiteNav = document.createElement('li');
let liTwoOfUlSiteNav = document.createElement('li');
let liThreeOfUlSiteNav = document.createElement('li');

let linkOnLiOneOfUlSiteNav = document.createElement('a');
linkOnLiOneOfUlSiteNav.href = 'https://github.com/h5bp/html5-boilerplate';
linkOnLiOneOfUlSiteNav.setAttribute("data-ga-category", "Outbound links");
linkOnLiOneOfUlSiteNav.setAttribute("data-ga-action", "Nav click");
linkOnLiOneOfUlSiteNav.setAttribute("data-ga-label", "Source code");
linkOnLiOneOfUlSiteNav.innerHTML = 'Source code';

let linkOnLiTwOfUlSiteNav = document.createElement('a');
linkOnLiTwOfUlSiteNav.href = 'https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md';
linkOnLiTwOfUlSiteNav.setAttribute("data-ga-category", "Outbound links");
linkOnLiTwOfUlSiteNav.setAttribute("data-ga-action", "Nav click");
linkOnLiTwOfUlSiteNav.setAttribute("data-ga-label", "Docs");
linkOnLiTwOfUlSiteNav.innerHTML = 'Docs';

let linkOnLiThreeOfUlSiteNav = document.createElement('a');
linkOnLiThreeOfUlSiteNav.href = 'https://h5bp.org/';
linkOnLiThreeOfUlSiteNav.setAttribute("data-ga-category", "Outbound links");
linkOnLiThreeOfUlSiteNav.setAttribute("data-ga-action", "Nav click");
linkOnLiThreeOfUlSiteNav.setAttribute("data-ga-label", "Other Projects");
linkOnLiThreeOfUlSiteNav.innerHTML = 'Other Projects';

let divSitePromo = document.createElement('div');
divSitePromo.classList.add("site-promo");

let titleOne = document.createElement('h1');
titleOne.innerHTML = 'The web\'s most popular front-end template';

let paragraphDescription = document.createElement('p');


divSiteLogo.appendChild(spanStar);
divSiteLogo.appendChild(boilerplateText);
divSiteHeaderClearfix.appendChild(divSiteLogo);
divContainer.appendChild(divSiteHeaderClearfix);
liOneOfUlSiteNav.appendChild(linkOnLiOneOfUlSiteNav);
liTwoOfUlSiteNav.appendChild(linkOnLiTwOfUlSiteNav);
liThreeOfUlSiteNav.appendChild(linkOnLiThreeOfUlSiteNav);
ulSiteNav.appendChild(liOneOfUlSiteNav);
ulSiteNav.appendChild(liTwoOfUlSiteNav);
ulSiteNav.appendChild(liThreeOfUlSiteNav);
divContainer.appendChild(divSitePromo);
divSitePromo.appendChild(titleOne);
divSiteHeaderClearfix.appendChild(ulSiteNav);


document.querySelector('body').appendChild(divContainer);
//create element script
