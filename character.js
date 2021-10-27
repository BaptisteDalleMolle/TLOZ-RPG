let inputFor = document.getElementById('tab-input-FOR');

console.log(inputFor);

inputFor.addEventListener('input', function (e) {
    document.getElementById('tab-value-FOR').innerHTML = e.target.value;
});