const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
// 이코드가 반복되서 나오니깐, 중복되는것은 하나로 만들어준다. 데이터를 담을수 있는 것은 변수, 뱐수 여러개는 객체, 코드 여러개는 함수로
function getData(url) {
  ajax.open('GET', url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

const newsFeed = getData(NEWS_URL);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function () {
  const id = location.hash.substr(1);

  const newsContent = getDat(CONTENT_URL.replace('@id', id))
  const title = document.createElement('h1');

  title.innerHTML = newsContent.title;

  content.appendChild(title);
});

for (let i = 0; i < 10; i++) {
  const div = document.createElement('div'); // 일단은 div로 넣어주자 나중에 지울거임
  //DOM API를 이용하면 html구조를 알기 어려워서 , 이렇게 문자열로 넣는 방법이 있다
  div.innerHTML = ` 
    <li>
      <a href="#${newsFeed[i].id}">
        ${newsFeed[i].title} (${newsFeed[i].comments_count})
      </a>
    </li>
  `;

  ul.appendChild(div.firstElementChild); // 현재 li라는 태그가 없고 우리는 div로 감싸줬다. div의 첫번째 자식 요소를 가져오면된다. children[0]도 가능
}

container.appendChild(ul);
container.appendChild(content);
