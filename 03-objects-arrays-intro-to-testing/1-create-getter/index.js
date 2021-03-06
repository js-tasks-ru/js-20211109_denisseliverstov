/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const arrKeys = path.split('.');
    
    return function (obj) {
        return arrKeys.reduce((prev, curr) => prev && prev[curr], obj)
    }
}
