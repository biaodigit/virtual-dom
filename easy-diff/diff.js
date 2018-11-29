function createElement(vnode) {
    let tag = vnode.tag,
        attrs = vnode.attrs || {},
        children = vnode.children || [];

    if (!tag) return null;

    let elem = document.createElement(tag);

    let attrName;

    for (attrName in attrs) {
        if (attrs.hasOwnProperty(attrName)) {
            elem.setAttribute(attrName, attrs[attrName])
        }
    }

    children.forEach(function (childVnode) {
        elem.appendChild(createElement(childVnode))
    });

    return elem
}

function updateChildren(vnode, newvnode) {
    let children = vnode.children || [],
        newChildren = newvnode.children || [];

    children.forEach(function (child, index) {
        let newChild = newChildren[index];

        if (!newChild) return;

        if (newChild.tag === child.tag) {
            updateChildren(child, newChild)
        } else {
            replaceNode(child, newChild)
        }
    })
}

function replaceNode(vnode, newvnode) {
    let elem = vnode.elem,  //真实dom节点
        newElem = createElement(newvnode)

    //替换操作
    //...........
}