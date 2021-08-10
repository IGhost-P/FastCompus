const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const store = { // 전체적으로 관리해야할 변수는 여러개가 있으니, 이렇게 저장소를 만든다.
  currentPage: 1, // 피드 안에 페이지가 한정되어 있으면, 현재페이지가 몇번째인지 저정 할수 없기 떄문에, 전체에서 변경되어야한다
};

function getData(url) {
  ajax.open('GET', url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

function newsFeed() {
  const newsFeed = getData(NEWS_URL);
  const newsList = [];

  newsList.push('<ul>');
  // 1페이지 일때 맨 처음 i는 0 이여야하기때문에 -1, 그리고 페이지가 넘어 갈때마다 10개의 목록씩 넘어가니깐 * 10을 해준다
  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    newsList.push(`
      <li>
        <a href="#/show/${newsFeed[i].id}">
          ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
      </li>
    `);
  }

  newsList.push('</ul>');
  // 네비게이션 UI를 만들자
  newsList.push(` 
    <div>
      <a href="#/page/${store.currentPage > 1 ? store.currentPage - 1 : 1}">이전 페이지</a>
      <a href="#/page/${store.currentPage + 1}">다음 페이지</a>
    </div>
  `);

  container.innerHTML = newsList.join('');
}

function newsDetail() {
  const id = location.hash.substr(7);
  const newsContent = getData(CONTENT_URL.replace('@id', id))

  container.innerHTML = `
    <h1>${newsContent.title}</h1>

    <div>
      <a href="#/page/${store.currentPage}">목록으로</a>
    </div>
  `;
}

function router() {
  const routePath = location.hash;

  if (routePath === '') {
    newsFeed();
    // 보여지는 부분과, 페이지부분을 구분했다
  } else if (routePath.indexOf('#/page/') >= 0) {
    store.currentPage = Number(routePath.substr(7));//라우터 값에서 페이지 값을 추출함 하지만 문자열이기 때문에, Number로 바꿔줌 (#뒤에 /page/'이부분이')
    newsFeed();
  } else {
    newsDetail()
  }
}

window.addEventListener('hashchange', router);

router();
