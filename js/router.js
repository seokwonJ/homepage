const app = document.getElementById('app');

const first = `
<div class="Hello-World"> 
              <div class="bizzy">
                  <h1 class="bizzy-letters letter-H">H</h1> 
                  <h1 class="bizzy-letters letter-E">E</h1>
                  <h1 class="bizzy-letters letter-L1">L</h1>
                  <h1 class="bizzy-letters letter-L2">L</h1>
                  <h1 class="bizzy-letters letter-O">O</h1>
              
              </div>
              
              <div class="bizzy-B">
              
                  <h1 class="bizzy-letters-B letter-W">W</h1>
                  <h1 class="bizzy-letters-B letter-O">O</h1>
                  <h1 class="bizzy-letters-B letter-R">R</h1>
                  <h1 class="bizzy-letters-B letter-L">L</h1>
                  <h1 class="bizzy-letters-B letter-D">D!</h1>
              
              </div>
          </div>
  `;

const homePage = `
<div class="container">     
  <div class="page" id="profile2">
      <h1><br><br>PROFILE</h1>
      <div class ="profile2" >
          <img class = "me" src ="media/band6.jpg" alt="" width="350px;" height="400px">
          <h3 class ="intext"> <strong>이름: 장석원<br>전공: 컴퓨터 공학과<br></strong><br>
            생년월일: 2000/05/26<br><br>
            고향: 경상남도 통영시<br><br>
            학교: 강원대학교<br><br>
            장래희망: 게임 개발자<br><br>
            취미: 풋살, 게임<br><br>
            
            좋아하는 수업: 웹프로그래밍
           </h3>
      </div>
  </div>
  <hr>
  <div class="page">
      <div class="main" id="main">
          <span class="profile"><img src="media/bada.jpg" width="350px;" height="400px" alt=""/></span> 

          <h1 class="main_text"><strong>안녕하세요 컴퓨터공학과 19학번 장석원입니다!</strong> </h1><br>
          <p>저는 경상남도 통영에서 태어나 나고 자랐으며 어렸을 때부터 게임을 좋아했습니다. 그래서 항상 장래희망을 적으라고하면</p>
          <p>마땅히 하고 싶었던 것도 없고 그래서 게임 개발자라고 쓰곤 했습니다. 그러다가 고등학생 때 무슨 과를 갈지 정할 때가 찾아왔고</p>
          <p>그때까지도 마땅히 하고 싶은 것이 없었기 때문에 어렸을 때부터 생각해왔던 게임 개발자로 진로를 확고히 굳혔습니다.</p><br>
          <p>어렸을 때부터 즐겨했던 게임은 컴퓨터 게임으로는 메이플 스토리, 서든어택, 크레이지 아케이드, 카트라이더, 버블파이터, 리그오브레전드, 배틀 그라운드, 등이 있고</p>
          <p>닌텐도 게임기로는 포켓몬스터, 별의 커비, 마리오 등을 즐겨 했습니다. 앞으로 게임 개발자의 꿈을 갖고 다양한 게임을 만들어 보고 싶습니다.</p>

      </div>
  </div>
</div>
`;

const weatherPage = `
<div class="container">     
  <div class="page">
      <div class="tmi" id="tmi">
          <h1><br><br> 주요 경력 </h1>
          <div class="favorites">
              <div class="lists">
                  <img class = "list_img" src="media/prize1.jpg" alt="">
                  <p class = "list_text"> 강원뉴비게임공모전 <br>특별상 수상</p>
              </div>

              <div class="lists">
                  <img class = "list_img" src="media/prize2.jpg" alt="">
                  <p class = "list_text">스마일게이트 윈터데브캠프 <br>클라이언트 담당</p>
              </div>

              <div class="lists">
                  <img class = "list_img" src="media/prize3.jpg" alt="">
                  <p class = "list_text"> 2022년도 컴공 게임제작동아리 <br>회장</p>
              </div>

              <div class="lists">
                  <img class = "list_img" src="media/prize4.jpg" alt="">
                  <p class = "list_text"> ACE+ 창의 융합 캠프 <br>대상 수상</p>
              </div>
             
              <div class="lists">
                  <img class = "list_img" src="media/prize5.jpg" alt="">
                  <p class = "list_text"> 육군 병장 만기 전역 </p>
              </div>
              
              <div class="lists">
                  <img class = "list_img" src="media/prize6.jpg" alt="">
                  <p class = "list_text"> 강원대학교 컴퓨터공학과 재학</p>
              </div>

              <div class="lists">
                  <img class = "list_img" src="media/prize7.jpg" alt="">
                  <p class = "list_text"> 오버워치 고수</p>
              </div>

              <div class="lists">
                  <img class = "list_img" src="media/prize8.jpg" alt="">
                  <p class = "list_text"> IT대학 졸업작품 전시회 <br> 장려상 수상 </p>
              </div>
          </div>
      </div>
    </div>
  </div>       
</div>
`;

const hobbyPage = `
<div class="page" id="profile3">
  <div class="page" id="profile3">
      <h1><br><br>Jsquash revolution</h1>
      <div class ="profile3">
          <img class = "me" src ="media/game1.jpg" alt="" width="350px;" height="400px">
          <h3 class ="intext"> 캐주얼 게임 <br><br>
          저의 첫 게임 작품으로 스쿼시 스포츠를 <br>
          모티브 삼아 만든<br>
          간단한 핑퐁 캐주얼 게임입니다.<br>
          동영상 강의를 보며 게임을 따라 만들었던<br> 
          제가 직접 처음으로 만든 작품이라<br>
          우여곡절도 많았지만 그 과정 속에서<br>
          많은 성장을 했습니다.<br><br>
          그런의미에서 이 작품은 저에게 시작입니다.<br><br><br>
          <a href="https://play.google.com/store/apps/details?id=com.JangSoftWon.jsquashrevolution&hl=ko&gl=US">Jsquash revolution 플레이하기<a>
          </h3>
      </div>
  </div>
  <hr>
  <div class="page" id="profile3">
      <h1><br><br>Blending Run</h1>
      <div class ="profile3">
          <img class = "me" src ="media/game2.jpg" alt="" width="350px;" height="400px">
          <h3 class ="intext"> 2D 플랫포머 게임 <br><br>
          컴퓨터 공학과 과동아리 회장을 맡아<br>
          동아리를 주제로 만든 게임이며<br>
          동아리 방이 없는 동아리원이<br>
          동아리 방을 찾아 떠나는 스토리입니다.<br> 
          유니티 스터디를 진행하면서 만든<br>
          게임이고 동아리원들과 함께 플레이하면서<br>
          좋은 추억을 만들었습니다.<br><br>
          그런의미에서 이 작품은 저에게 추억입니다.<br><br><br>
          <a href="https://play.unity.com/mg/other/webgl-builds-244547">Blending Run 플레이하기<a>
          </h3>
          
      </div>
  </div>
  <hr>
  <div class="page" id="profile3">
      <h1><br><br>Farm Guardian</h1>
      <div class ="profile3" >
          <img class = "me" src ="media/game4.jpg" alt="" width="350px;" height="400px">
          <h3 class ="intext"> 슈팅 서바이벌 게임<br><br>
          강원도내에서 개최한 강원뉴비게임공모전에<br>
          출품하기위해 만든 작품이며<br>
          GMO 토마토가 농장을 지키기 위해<br>
          물총으로 벌레와 세균을 무찌르는 내용입니다.<br> 
          처음으로 게임 공모전에 게임을 출품했는데<br>
          특별상을 수상해서 너무 기뻤고<br>
          게임개발자의 길에 다가간 기분이었습니다.<br><br>
          그런의미에서 이 작품은 저에게 기쁨입니다.<br><br><br>
          </h3>
      </div>
  </div>
  <div class="page" id="profile3">
      <h1><br><br>로아: 마녀의 집2</h1>
      <div class ="profile3" >
          <img class = "me" src ="media/game3.jpg" alt="" width="350px;" height="400px">
          <h3 class ="intext"> 2D 플랫포머 어드벤처 팬게임 <br><br>
          스마일게이트 윈터데브캠프에서<br>
          4명이서 팀을 이뤄 2개월간 만든 작품이며<br>
          로스트아크의 콘텐츠 중<br>
          마녀의 집을 모티브삼아 만든 팬게임입니다.<br> 
          처음으로 만든 멀티 플레이 게임 그리고<br>
          처음 만난 사람과 협업하여 만든 게임으로<br>
          저에게 큰 성장을 주었습니다.<br><br>
          그런의미에서 이 작품은 저에게 도전입니다.<br><br><br>
          </h3>
      </div>
  </div>
  </div>
`;

const routes = {
  '' :first,
  '/' :homePage,
  '/weather': weatherPage,
  '/hobby': hobbyPage
};

function onRouteChange() {
  const hash = window.location.hash.slice(1);
  app.innerHTML = routes[hash];
}

window.addEventListener('hashchange', onRouteChange);

onRouteChange();