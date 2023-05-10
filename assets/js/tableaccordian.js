$('tr').hide().filter(function () {
    return $(this).find('td[colspan]').length;
}).addClass('header').css('display', 'table-row').click(function () {
    $(this).nextUntil('tr.header').css('display', function (i, v) {
        return this.style.display === 'table-row' ? 'none' : 'table-row';
    });
});