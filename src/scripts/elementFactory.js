export default class ElementFactory {
    constructor(elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, elementInnerText, parentElementName) {
        this.elementTagName = elementTagName;
        this.attributeName1 = attributeName1;
        this.attributeValue1 = attributeValue1;
        this.attributeName2 = attributeName2;
        this.attributeValue2 = attributeValue2;
        this.elementInnerText = elementInnerText;
        this.parentElementName = parentElementName;
    };
    createIt() {
        let newElement = document.createElement(this.newElement);
        this.newElement = newElement;
    };
    addFirstAttribute() {
        this.newElement.setAttribute(attributeName1, attributeValue1);
    };
    addSecondAttribute() {
        if(typeof this.attributeName2 === 'undefined' || this.attributeName2 === '') {
            console.log('a second parameter was not passed');
        } else {
            this.newElement.setAttribute(this.attributeName2, this.attributeValue2);
        };
    };
    addInnerText() {
        this.newElement = `${elementInnerText}`;
    };
    appendToParentElement() {
        parentElementName.appendChild(this.newElement);
    };
};

let createElement = (elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, elementInnerText, parentElementName) => {
    try {
        let newElement = new ElementFactory(elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, elementInnerText, parentElementName);
        newElement.createIt();
        newElement.addFirstAttribute();
        newElement.addSecondAttribute();
        newElement.addInnerText();
        newElement.appendToParentElement();
    } catch {
        console.error(`${e}, elementTagName: ${elementTagName}, attributeName1: ${attributeName1}, attributeValue1: ${attributeValue1}, attributeName2: ${attributeName2}, attributeValue2: ${attributeValue2}, elementInnerText: ${elementInnerText}, parentElementName: ${parentElementName}`);
        alert(e);
    }; 
};

