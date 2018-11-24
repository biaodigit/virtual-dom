let snabbdom = window.snabbdom;

let patch = snabbdom.init([
    snabbdom_class,
    snabbdom_props,
    snabbdom_style,
    snabbdom_eventlisteners
]);

let h = snabbdom.h;
let container = document.getElementById('container');

let vnode = h('ul#list',{},[
    h('li.item',{}, 'Item1'),
    h('li.item',{}, 'Item2')
]);

patch(container, vnode);

document.getElementById('btn-change').addEventListener('click', function () {
    let newvnode = h('ul#list',{},[
        h('li.item',{}, 'Item1'),
        h('li.item',{}, 'Itemb'),
        h('li.item',{}, 'Item3')
    ]);

    patch(vnode, newvnode);
})