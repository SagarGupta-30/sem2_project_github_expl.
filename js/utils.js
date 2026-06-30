//Anshu//
(function () {
// utils.js
/*
*/
Sort Repositories
function sortRepositories(repos, type){
1
const copy = [...repos];
if(type === "stars"){
copy.sort(
(a,b) =>
b.stargazers_count -
a.stargazers_count
);
}
else if(type === "latest"){
copy.sort(
(a,b) =>
new Date(b.updated_at) -
new Date(a.updated_at)
);
}
else if(type === "oldest"){
copy.sort(
(a,b) =>
new Date(a.updated_at) -
new Date(b.updated_at)
);
}
return copy;
}
























//=====================================//

//uttkarsh//























//=================================================//


//shahnawaz//

/*
Unique Languages
*/

function getUniqueLanguages(repos){
const languages =
repos
.map(
)
repo => repo.language
.filter(Boolean);
return [...new Set(languages)];
}

/*
Global Object
*/

window.Utils = {
sortRepositories,
filterRepositories,
formatDate,
formatNumber,
getUniqueLanguages
};
})();




























//=====================end=======================//
