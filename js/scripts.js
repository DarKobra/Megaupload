function catchSubmit() {
    document.getElementById('message').innerHTML = '';
    if (document.getElementById('name').value == '') {
        document.getElementById('message').innerHTML = 'Please insert your name';
        return false;
    }
    else if (document.getElementById('email').value == '') {
        document.getElementById('message').innerHTML = 'Please insert your email';
        return false;
    }
}
function getUrlVars() {
    var vars = {}, hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function init() {
    var gets = getUrlVars();
    if(gets.error && gets.error != '') {
        document.getElementById('message').innerHTML = unescape(gets.error);
    }
    else if(gets.ok) {
        document.getElementById('message').innerHTML = '<div class="subscript-ok">Subscription was successful</div>';
        document.getElementById('newss_form').style.display = 'none';
    }
    
    $("a#sel_but1").fancybox({
        overlayColor: '#efefef',
        overlayOpacity: 0.8,
        padding:0,
        transitionIn: 'elastic',
        transitionOut: 'elastic',
        speedIn: 600, 
        speedOut: 200
    });
}

function toggleLabel(elem) {
    $label = $(elem).prev();
    elem.value == '' ? $label.show() : $label.hide();
}