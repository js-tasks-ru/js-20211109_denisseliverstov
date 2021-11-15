/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    const arrayKeys = Array.from(new Set(fields));
    const arrayObj = Object.entries(obj);
    const filteredArr = arrayObj.filter(item => {
        return !arrayKeys.some(el => el === item[0])
    });
    return Object.fromEntries(filteredArr);
};
