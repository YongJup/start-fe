const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const $moreBtn = document.querySelector('#more');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 9ecc9a02f9fc014a70cd43b8001371be' };
let page = 1;

function success(data) {
  const { documents, meta } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  });

  $result.innerHTML += `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;

  if (!meta.is_end) $moreBtn.hidden = false;
}

function error() {
  // eslint-disable-next-line no-alert
  alert('데이터를 가져올 수 없습니다.');
  $moreBtn.hidden = true;
}

function fetchSearch(value) {
  fetch(`${url}?query=${value}&page=${page}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
}

function search() {
  const { value } = $text;
  if (value === '') {
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요');
    return false;
  }
  fetchSearch(value);
  return true;
}

$btn.addEventListener('click', () => {
  page = 1;
  $result.innerHTML = '';
  search();
});

$moreBtn.addEventListener('click', () => {
  page += 1;
  search();
});

$moreBtn.hidden = true;
