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

const newsFeed = getData(NEWS_URL); // 목록 부분을 함수로 묶음
const ul = document.createElement('ul');

window.addEventListener('hashchange', function () {
  const id = location.hash.substr(1);

  const newsContent = getData(CONTENT_URL.replace('@id', id))
  // 기존 콘테이너 안에 있던 내용을 지워버리고 만들어짐
  container.innerHTML = ` 
    <h1>${newsContent.title}</h1>

    <div>
      <a href="#">목록으로</a>
    </div>
  `;
});

const newsList = []; // 기준 DOM 구조는 반복해서 마지막에 ul로 합쳐야 하기 때문에 DOM API사용할수 밖에 없지만, 리스트를 이용해 ,첫번쨰와  마지막 부분만 ul을 넣는다면? -> push

newsList.push('<ul>'); //첫 부분 ul

for (let i = 0; i < 10; i++) {
  newsList.push(`
    <li>
      <a href="#${newsFeed[i].id}">
        ${newsFeed[i].title} (${newsFeed[i].comments_count})
      </a>
    </li>
  `);
}

newsList.push('</ul>'); // 뒷부분 ul

container.innerHTML = newsList.join(''); // 배열안에 문자열을 합쳐줌, 구분자를 넣어줘야하는데 우리는 구분자는 없으니, 빈 문자열을 넣는다
// 라우터는 중계기 어떤 화면에서는 A 어떤 화면에서 B 이런식으로 화면을 전환 시켜줌
