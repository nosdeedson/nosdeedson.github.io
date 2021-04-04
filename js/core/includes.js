

function loadIncludes(parent){
    if (!parent) parent = 'body';
    $(parent).find('[ejs-include]').each(
        function(i, e){
            const url = $(e).attr('ejs-include')
            console.log(url)
            $.ajax({
                url,
                success(data){
                    $(e).html(data);
                    $(e).removeAttr('ejs-include')
                    loadIncludes(e);
                }
            });
        }
    )
}


