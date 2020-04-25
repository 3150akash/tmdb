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

export const _handleScroll = (ev, callBack) => {
    // client Height
    const clientHeight = ev.srcElement.documentElement.clientHeight;
    const scrollTop = ev.srcElement.documentElement.scrollTop;
    const scrollHeight = ev.srcElement.documentElement.scrollHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
        callBack();
    }
}

export const disableWindowsScroll = (listner) => {
    window.removeEventListener("scroll", listner)
    console.log('******************* UNMOUNTED');
}



// console.log(stringTemplateParser('my name is {{name}} and age is {{age}}', { name: 'Tom', age: 100 }));