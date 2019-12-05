window.CompassUtil = {}
window.CompassUtil.getUrlParameter = (name) => {
    if (!window.location.href.includes("?")) {
        return null
    }

    let queryStringArray = window.location.href.split("?")
    if (!Array.isArray(queryStringArray) || queryStringArray.length == 0) {
        return null
    }

    let queryStringParamArray = queryStringArray[1].split("&")
    let nameValue = null

    for (let i = 0; i < queryStringParamArray.length; i++) {
        let queryStringNameValueArray = queryStringParamArray[i].split("=")
        if (name == queryStringNameValueArray[0]) {
            nameValue = queryStringNameValueArray[1]
        }
    }

    return nameValue
}