var definitive=definitive || {};

definitive.rest=function(uri, method, data, success, fail, error){
	///PROGRAMAR AQUÍ
    $.ajax({
        "url":uri,
        "type":method,
        "data":data,
        success:function (data) {
            return data;
        },
        error:function(error) {
            return error;
        },
        complete:function(error) {
            return error;
        }

    });
};

var jquery_url="https://code.jquery.com/jquery-3.6.0.min.js";

function on_doc_ready() {
    $(document).ready(() => {
		if (definitive.onready) 
			definitive.onready();
	});
}

if(typeof jQuery=='undefined') {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
    jqTag.type = 'text/javascript';
    jqTag.src = jquery_url;
    jqTag.onload = on_doc_ready;
    headTag.appendChild(jqTag);
} else {
     on_doc_ready();
}