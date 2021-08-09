const ajax = new XMLHttpRequest(); // DOM API가 HTML의 선택해주는 도구 역할 처럼 햇던것 처럼, 네트워크 너머에 있는 도구를 가져오는 XMLHttpsREquest, 이것을 ajasx라는 저장소에 넣어준다
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'; //원천에서 데이터를 가져온다

ajax.open('GET', NEWS_URL, false); // false는 동기적으로 가져온다는 뜻, 선언
ajax.send(); // 이때 데이터를 가져옴

const newsFeed = JSON.parse(ajax.response); // ajax.reponsew에 데이터가 들어와있다 , 응답값이 보기 어렵기때문에 JSON값을 객체화 시켜서 만든다
const ul = document.createElement('ul');

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');

  li.innerHTML = newsFeed[i].title;

  ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);
