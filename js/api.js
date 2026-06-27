// sagar gupta //



(function () {
// api.js

const BASE_URL =
    "https://api.github.com/users";

/*
 Fetch User Profile
*/

async function fetchUser(username){

    const response =
        await fetch(
            `${BASE_URL}/${username}`
        );

    if(!response.ok){

        throw new Error(
            "User not found"
        );

    }

    return await response.json();
}


/*
 Fetch User Repositories
*/

async function fetchRepositories(username){

    const response =
        await fetch(
            `${BASE_URL}/${username}/repos`
        );

    if(!response.ok){

        throw new Error(
            "Repositories not found"
        );

    }

    return await response.json();
}


/*
 Fetch User + Repositories
*/

async function fetchUserAndRepos(username){

    const [user,repos] =
        await Promise.all([

            fetchUser(username),

            fetchRepositories(username)

        ]);

    return {
        user,
        repos
    };
}


/*
 Global Object
*/

window.API = {

    fetchUser,

    fetchRepositories,

    fetchUserAndRepos

};
})();
//==========================end======================//