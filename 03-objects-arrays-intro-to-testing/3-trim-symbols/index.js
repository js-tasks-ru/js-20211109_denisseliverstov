/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    const arr = string.split('');
    const result = [];
    let counter = 0;
    let symbol = '';
    arr.forEach((item, index, arr) => {
        symbol = item;
        if (size === 0) {
            return            
        } else if (!size) {
            result.push(item);
        } else {
            if (symbol !== arr[index + 1]) {
                if (counter < size) {
                    result.push(item);
                }
                counter = 0;
            } else if (symbol === arr[index + 1] && (counter < size)) {
                result.push(item);
                counter = counter + 1;
            }
        }
    })

    return result.join('')
}
