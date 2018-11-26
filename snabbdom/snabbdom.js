const data = [
    {
        name: '姓名',
        age: '年龄',
        address: '地址'
    },
    {
        name: '张三',
        age: '20',
        address: '北京'
    },
    {
        name: '李四',
        age: '21',
        address: '上海'
    },
    {
        name: '王五',
        age: '22',
        address: '广州'
    }
];

let snabbdom = window.snabbdom;

let patch = snabbdom.init([
    snabbdom_class,
    snabbdom_props,
    snabbdom_style,
    snabbdom_eventlisteners
]);

let h = snabbdom.h;
let container = document.getElementById('container');
let btn = document.getElementById('btn-change');

let vnode;

function render(data) {
    let newVnode = h('table', {}, data.map(function (item) {
        let tds = [];

        for (let i in item) {
            if (item.hasOwnProperty(i)) {
                tds.push(h('td', {}, item[i] + ''))
            }
        }

        return h('tr', {}, tds)
    }));

    if (vnode) {
        patch(vnode, newVnode)
    } else {
        patch(container, newVnode)
    }

    vnode = newVnode
}

render(data);


btn.addEventListener('click', function () {
    data[2].age = '30';
    data[3].address = '深圳';
    render(data)
});