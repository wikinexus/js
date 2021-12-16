let doc_referrer = document.referrer ? document.referrer : 'direct';
let doc_location = window.location.href;
let urlObject = new URL(doc_location);
let urlParams = urlObject.searchParams;
let input_publisher = urlParams.get('publisher');
if(input_publisher) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://app.wikinexus.com/api/track', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('url=' + doc_location + '&referrer=' + doc_referrer);
    xhr.onload = function () {
        console.log(this.responseText);
    }
}