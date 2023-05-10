$('tr.expand').click(function(){
    $(this).nextUntil('tr.expand').css('display', function(i,v){
        return this.style.display === 'table-row' ? 'none' : 'table-row';
    });
});