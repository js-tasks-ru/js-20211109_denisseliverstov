/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const sortArray = [...arr];
    sortArray.sort((a, b) => {
        if (param === 'asc') {
            return a.localeCompare(b, ['ru-RU-u-kf-upper', 'en-US-u-kf-upper']);
        } else if (param === 'desc') {
            return b.localeCompare(a, ['ru-RU-u-kf-upper', 'en-US-u-kf-upper']);
        }
    });
    return sortArray;
}
