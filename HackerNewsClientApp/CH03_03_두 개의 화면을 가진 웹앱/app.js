const container = document.getElementById('root'); // 원래 맨 아래 코드가 루트로 계속 반복되었는데 이것을 컨테이너로 묶어서 사용하면, 나중에 root를 안쓰고 변경하더라도 변경하기 쉽디
const ajax = new XMLHttpRequest();
const content = document.createElement('div'); // 태그 만들어놓음
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'; // id에 값에 따라 주소가 바뀜, 마킹하는 방법은 여러개이지만, @id로 저장

ajax.open('GET', NEWS_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function () { // 해시는 일종의 북마크 인데, name이라고 하는 속성과 같은 해시 이름이 들어오면 그 위치로 바로 스콜링하게 해쥼
  // 그래서 이 해쉬가 바뀔때 = 해당 타이틀을 눌렀구나로 판단됨
  const id = location.hash.substr(1); // 로케이션은 주소와 관련된 다영한 정보를 제공해준다, #인 해쉬부분은 필요없으니 substr로 지워준다(해당 인자 이후로만 표현)

  ajax.open('GET', CONTENT_URL.replace('@id', id), false); // //@id라는 값을 id로 바꿔줌
  ajax.send();

  const newsContent = JSON.parse(ajax.response);
  const title = document.createElement('h1');

  title.innerHTML = newsContent.title;

  content.appendChild(title);
});

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a'); //클릭을 하기 위해선 앵커 태그가 좋음 href를 붙혀줘야 링크처럼 누를수있음

  a.href = `#${newsFeed[i].id}`; // a에 herf 속성을 넣어줌 ,해쉬에 아이디를 넣어주자
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`; // 댓글 표현

  li.appendChild(a);
  ul.appendChild(li);
}
container.appendChild(ul);
container.appendChild(content); //ul 밑으로 추가해줌 
// 지금은 계속 추가됨
