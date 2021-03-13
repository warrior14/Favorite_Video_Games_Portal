export default class ElementFactory {
    constructor() {
    };
    createIt(elementTag) {
        this.newElement = document.createElement(elementTag);
    };
    addAttribute(attributeName, attributeValue) {
        this.newElement.setAttribute(attributeName, attributeValue);
    };
    addInnerText(elementInnerText) {
        this.newElement.innerText = `${elementInnerText}`;
    };
    appendToParent(parentElementName) {
        parentElementName.appendChild(this.newElement);
    };

    createNewElement(elementTag, attributeName, attributeValue, elementInnerText, parentElementName) {
        try {
            this.createIt(elementTag);
            this.addAttribute(attributeName, attributeValue);
            this.addInnerText(elementInnerText);
            this.appendToParent(parentElementName);
        } catch (e) {
            console.error(e);

        };
    };
};








