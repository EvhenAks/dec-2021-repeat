
function nameOfClass (element) {
    console.log(element.className);
    let children = element.children;
    for (let child of children) {
        nameOfClass(child)
    }
}
nameOfClass(document.body)