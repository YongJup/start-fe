const $url = document.getElementById('url');
const $btn = document.getElementById('btn');
const $log = document.getElementById('log');

function fail(res) {
  $log.value = res;
}

function good(res) {
  const textPromise = res.text();
  textPromise.then((data) => {
    $log.value = data;
  });
}

function fetchUrl() {
  const url = $url.value;
  const promise = fetch(url);
  promise.then(good).catch(fail);
}

function isEnter(event) {
  if (event.keyCode === 13) fetchUrl();
}

$btn.addEventListener('click', fetchUrl);
$url.addEventListener('keypress', isEnter);
