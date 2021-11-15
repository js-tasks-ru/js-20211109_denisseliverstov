/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const arrayKeys = Array.from(new Set(fields));
    const arrayObj = Object.entries(obj);
    const filteredArr = arrayObj.filter(item => {
        return arrayKeys.some(el => el === item[0])
    });
    return Object.fromEntries(filteredArr);
};
