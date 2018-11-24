const data = [
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

$('#btn-change').click(function () {
    data[1].age = '30';
    data[2].address = '深圳';

    render(data)
});


function render(data) {
    let $container = $('#container');

    $container.html('');

    let $table = $('<table>');
    $table.append($('<tr><td>name</td><td>age</td><td>address</td></tr>'))
    data.forEach(function (item) {
        $table.append($('<tr><td>' + item.name + '</td><td>' + item.age + '</td><td>' + item.address + '</td></tr>'))
    });

    $container.append($table)
}

render(data);