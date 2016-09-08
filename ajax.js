function ajaxGET()
{
       $.ajax({             
       type: "GET",
       data: 
        { 
       		nome:'Driely',
       		endereco: 'Rua: ......, numero: 000',
       		telefone: '0000000'
       	},             
       url: "http://exemplo.com.br"
    });
}



//a requisição será feita sem refresh da pagina na url 
// http://exemplo.com.br com as variáveis passadas de maneira OCULTA
function ajaxPOST()
{
       $.ajax({             
       type: "POST",
       data: 
        { 
       		nome:'Driely',
       		endereco: 'Rua: ......, numero: 000',
       		telefone: '0000000'
       	},             
       url: "http://exemplo.com.br"
    });
}
