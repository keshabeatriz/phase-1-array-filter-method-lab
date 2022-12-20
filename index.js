function findMatching(array, str) {
    return array.filter(function (driver) {
        return driver.toUpperCase() === str.toUpperCase();
    });
};

function fuzzyMatch(array, str1) {
    return array.filter(function (driver) {
        return driver.startsWith(str1)
    });
};

function matchName(array, str3) {
    return array.filter(function (obj) {
        return obj.name === str3;
    });
}