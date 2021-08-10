const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

function getData(url) {
  ajax.open('GET', url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

function newsFeed() { // 뉴스 피드 분리해서 함수로 만들기
  const newsFeed = getData(NEWS_URL); //데이터 가져와야하니깐 여기에 넣음
  const newsList = [];

  newsList.push('<ul>');

  for (let i = 0; i < 10; i++) {
    newsList.push(`
      <li>
        <a href="#${newsFeed[i].id}"> 
          ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
      </li>
    `);
  }

  newsList.push('</ul>');

  container.innerHTML = newsList.join('');
}

function newsDetail() { // 뺴낸뒤에 기명 함수로 바꿔준다
  const id = location.hash.substr(1);
  const newsContent = getData(CONTENT_URL.replace('@id', id))

  container.innerHTML = `
    <h1>${newsContent.title}</h1>

    <div>
      <a href="#">목록으로</a>
    </div>
  `;
}

function router() { // newFeed를 함수로 만들어 놓았으니, 맨처음에 해당 함수를 호풀할 기능이 필요해서 만듬
  const routePath = location.hash;

  if (routePath === '') { //비어 있으면 첫 진입,location에#만 들어와 있으면 빈 문자열로 인식
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener('hashchange', router); // 이벤트 핸들러에 묶여 있는 익명 함수이기 때문에 분리 해준다 그리고, 해쉬가 바뀔때마다 페이지를 교체해줄수있게 라우터로 바꿔준다

router(); // 최초 호출해준다
