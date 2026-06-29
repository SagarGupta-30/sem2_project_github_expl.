// Anshu negi //






















// ------------------------------------------------------------//


//utkarsh verma //

let allRepos = [];
let currentUsername = "";
/*
*/
Theme
themeToggle.addEventListener(
    "click",
    toggleTheme
);
function toggleTheme() {
    const currentTheme =
        document.documentElement.getAttribute(
            "data-theme"
        );
    if (currentTheme === "dark") {
        document.documentElement.setAttribute(
            "data-theme",
            "light"
        );
    }
    else {
        document.documentElement.setAttribute(
            "data-theme","dark"
        );
    }
}































//-------------------------------------------------------//

//sagar gupta//
/*
 Search Form
*/

searchForm.addEventListener(
    "submit",
    handleSearch
);

async function handleSearch(event) {

    event.preventDefault();

    const username =
        searchInput.value.trim();

    if (!username) {

        UI.showSearchError(
            "Please enter username"
        );

        return;
    }

    UI.hideSearchError();

    currentUsername = username;

    await loadUser(username);

}


/*
 Load User
*/

async function loadUser(username) {

    UI.hideError();

    UI.showLoader();

    try {

        const data =
            await API.fetchUserAndRepos(
                username
            );

        const user =
            data.user;

        const repos =
            data.repos;

        allRepos = repos;

        const languages =
            Utils.getUniqueLanguages(
                repos
            );

        UI.populateLangFilter(
            languages
        );

        UI.renderProfile(
            user
        );

        UI.renderRepositories(
            repos
        );

        UI.showResults();

    }

    catch (error) {

        UI.showError(
            "Error",
            error.message
        );

    }

    finally {

        UI.hideLoader();

    }

}


/*
 Retry Button
*/

retryBtn.addEventListener(
    "click",
    () => {

        if (currentUsername) {

            loadUser(
                currentUsername
            );

        }

    }
);


/*
 Repository Search
*/

repoSearch.addEventListener(
    "input",
    filterAndSortRepos
);


/*
 Language Filter
*/

langFilter.addEventListener(
    "change",
    filterAndSortRepos
);


/*
 Sort
*/

sortSelect.addEventListener(
    "change",
    filterAndSortRepos
);
//---------------------------------------------------------------//

// shahnawaz //

/*
Repository Search
*/

repoSearch.addEventListener(
    "input",
    filterAndSortRepos
);

/*
Language Filter
*/

langFilter.addEventListener(
    "change",
    filterAndSortRepos
);

/*
Sort
*/

sortSelect.addEventListener(
    "change",
    filterAndSortRepos
);

/*
Filter + Sort
*/

function filterAndSortRepos() {
    let repos =

        Utils.filterRepositories(
            allRepos,
            repoSearch.value,
            langFilter.value
        );
    repos =
        Utils.sortRepositories(
            repos,
            sortSelect.value
        );
    UI.renderRepositories(
        repos
    );
}
}) ();



























//========================end================================//

