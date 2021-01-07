
const baseURL = "https://reqres.in/";
const allUrlList = {
    getUsers: baseURL + "api/users?page=2",
    empDetails: baseURL + "api/users",
    login: baseURL + "api/login"
}

const allUrls = {
    getURL(urlName) {
        return allUrlList[urlName];
    }
}

module.exports = allUrls;