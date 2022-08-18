$(document).ready(function(){
    $('#forminfo').submit(function(){
        
        var dados = jQuery(this).serialize();

        $.ajax({
            url: '/api/enviar.php',
            cache: false,
            data: dados,
            type: "POST",

            success: function(msg){
                alert(msg);
            }
        })

        return false;
    });
})