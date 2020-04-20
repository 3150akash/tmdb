export const updateobject = (originalObject, UpdatedProperties) => {
    // console.log("home reducer----" + JSON.stringify(UpdatedProperties))
    return {
        ...originalObject,
        ...UpdatedProperties
    }
}

export const stringTemplateParser = (expression, valueObj) => {
    const templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    let text = expression.replace(templateMatcher, (substring, value, index) => {
        value = valueObj[value];
        return value;
    });
    return text
}

// console.log(stringTemplateParser('my name is {{name}} and age is {{age}}', { name: 'Tom', age: 100 }));