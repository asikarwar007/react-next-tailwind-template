const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).replaceAll('_', " ");
};
const generateSlug = (str: string): string => {
    return str
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, '_') // Replace spaces with hyphens
        .replace(/[^\w-]+/g, '') // Remove all non-word characters
        .replace(/--+/g, '_') // Replace multiple hyphens with single hyphen
        .replace(/^-+|-+$/g, ''); // Trim hyphens from start and end
};
const parseAttributes = (inputString: string) => {
    const lines = inputString.split('\n');
    const result = [];

    for (const line of lines) {
        const [tag, value] = line.split(': ');
        if (tag && value) {
            result.push({ tag, value });
        }
    }

    return result;
}

const convertRecipeJsonToArray = (recipeJSON: any) => {
    let output = {
        "header": [
            "Material",
            "Quantity"
        ],
        "rows": []
    };

    const keys = Object.keys(recipeJSON);
    for (let i = 0; i < keys.length; i++) {
        const element = recipeJSON[keys[i]];
        
        if (keys[i].includes('mat')) {
            output.rows.push([`[[${element}]]`, recipeJSON[keys[i + 1]]]);
            i++;
        }

    }
    return [output];

}
const sortByProperty = (array: any, property: any) => {
    return array.sort((a: any, b: any) => {
        const valueA = a[property];
        const valueB = b[property];

        if (typeof valueA === 'string' && typeof valueB === 'string') {
            const matchA = valueA.match(/\d+/);
            const matchB = valueB.match(/\d+/);

            if (matchA && matchB) {
                const numericValueA = parseInt(matchA[0]);
                const numericValueB = parseInt(matchB[0]);

                return numericValueA - numericValueB;
            }
            // const numericValueA = parseInt(valueA.match(/\d+/)[0]);
            // const numericValueB = parseInt(valueB.match(/\d+/)[0]);

            // return numericValueA - numericValueB;
        }

        return valueA - valueB;
    });
}


export { capitalizeFirstLetter, parseAttributes, sortByProperty, generateSlug, convertRecipeJsonToArray };
