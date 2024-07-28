# 1. Step1 - HIFI

1. css 변수 생성 후 root 에 추가
   common.css

```css #
:root {
	--gradient: linear-gradient(53deg, #4C6DD0 2.85%, #04BEFE 151.96%) ;
	--gradient_re: linear-gradient(46deg, #04BEFE -23.14%, #4C6DD0 91.64%);
	--primary_10: rgba(198, 211, 252, 1);
	--primary_20: rgba(151, 174, 243, 1);
	--primary_30: rgba(110, 139, 229, 1);
	--primary_40: rgba(76, 109, 208, 1);
	--primary_50: rgba(51, 84, 183, 1);
	--primary_60: rgba(35, 67, 161, 1);
	--primary_70: rgba(25, 55, 145, 1);
	--primary_80: rgba(20, 49, 136, 1);
	--primary_90: rgba(17, 46, 133, 1);
	--secondary_10: rgba(253, 245, 241, 1);
	--secondary_20: rgba(249, 237, 232, 1);
	--secondary_30: rgba(242, 226, 218, 1);
	--secondary_40: rgba(233, 209, 198, 1);
	--secondary_50: rgba(221, 189, 174, 1);
	--secondary_60: rgba(205, 164, 146, 1);
	--secondary_70: rgba(184, 138, 116, 1);
	--secondary_80: rgba(160, 111, 88, 1);
	--secondary_90: rgba(135, 87, 65, 1);
}
2. heading 에 행간 1.25로 수정


```

1. components 의 값 수정
   style.css

```css #
/* ====================================
components ===============
==================================== */
.inner {
	width: 100%;
	max-width: var(--layout);
	margin: 0 auto;
}
.button,
button {
	box-sizing: border-box;
	display: block;
	padding: 1.3rem 2.3rem;
	border-radius: 0.8rem;
	text-align: center;
  line-height:1;
}
.button.cta {
	transition: all 0.5s;
	border: 1px solid transparent;
	color: var(--gray40);
	background: var(--gradient);
}
/* 방법1 */
.button.ghost {
	background-image: linear-gradient(53deg, #fff 2.85%, #fff 151.96%), linear-gradient(53deg, #4c6dd0 2.85%, #04befe 151.96%);
	border: 2px solid transparent;
	background-origin: border-box;
	background-clip: padding-box, border-box;
	color: var(--primary_40);
}
/* 방법2
.button.ghost {
	box-sizing: border-box;
	border: 2px solid transparent;
	border-image: var(--gradient);
	border-image-slice: 1;
} */
.button.normal {
	padding: 1rem;
}
```

# 2. Step2 [header]

## 2.1. gnb

1. 리소스 저장후 구조작성

```html #
  <nav class="gnb pa">
    <div class="inner df">
      <h1><a href="#" class="ir_so">LOGO</a><img src="./imgs/logo.svg" alt="logo"></h1>
      <ul class="menu df">
        <li><a href="#">추천앱</a></li>
        <li><a href="#">최신앱</a></li>
        <li><a href="#">인기앱</a></li>
        <li><a href="#">블로그</a></li>
      </ul>
      <div class="util df">
        <a href="#" class="button ghost">로그인</a><a href="#" class="button cta">회원가입</a>
      </div>
    </div>  <!-- //.util -->
  </nav>
```

1. [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
2. header 에 작성한 높이와 배경색 삭제

```css #
.gnb {left: 0;right: 0;background: rgba(255, 255, 255, 0.25);backdrop-filter: blur(10px);z-index: 2; }
.gnb .inner {justify-content: space-between;align-items: center; }
.gnb .inner .menu {justify-content: space-between;line-height: calc(var(--row) * 3); }
.gnb .inner .menu a {padding: 0 2.3rem; }
.gnb .inner .util {align-items: start;column-gap: 2.8rem; }

```

## 2.2. main_banner

1. 부모높이를 꽉 채우는 가변 비디오를 만든다
2. 아래와 같이 구조를 작성한다.

```html #
<div class="main_banner pr">
	<div class="response_video pa">
		<video src="./imgs/video.mp4" muted autoplay loop></video>
	</div>
	<div class="headline pa df">
		<h1>사회적 기업의 가치와 사회적 영향력</h1>
		<h4>퇴근길에 이런 유익한 글을 보니 기분이 좋네요.</h4>
		<a href="#" class="button cta">자세히보기</a>
	</div>  <!-- //.headline -->
</div>  <!-- //.main_banner -->
```

```css #
.main_banner {
	height: 0;
	padding-bottom: 56.25%;
	overflow: hidden;
}
.response_video {
	height: 120vh;
}
video {
	height: 100%;
}
.headline {
	max-width: calc(var(--unit) * 4);
	left: 50%;
	top: 20%;
	transform: translateX(-50%);
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	row-gap: 1.6rem;
	text-align: center;
}
.headline h1,
.headline h4,
.headline .cta {
	z-index: 5555;
}
.headline h1 {
	font-weight: 700;
	background: var(--gradient, linear-gradient(53deg, #4c6dd0 2.85%, #04befe 151.96%));
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	word-break: auto-phrase;
}
.headline .cta {
	margin-top: 1.2rem;
	padding-left: 4.8rem;
	padding-right: 4.8rem;
}
.headline:after {
	content: '';
	position: absolute;
	background: var(--gray10);
	width: 100%;
	height: 100%;
	filter: blur(50px) opacity(0.1);
	border-radius: 20%;
	top: -10%;
}
```

# 3. section [main]

## 3.1. propose

### 3.1.1. HTML

1. card 작성

```html #
      <section class="propose inner">
        <!-- .sec_tit+ul.lists+ul.lists+.pager -->
        <div class="sec_tit">
          <h2>추천앱</h2>
          <span>고효율 작업을 위한 생산성 도구 추천</span>
        </div> <!-- //.sec_tit -->
        <ul class="lists df">
          <!-- li.card>img.card_img+(.card_desc>.card_desc_tit+.card_desc_body)+a.button.ghost -->
          <li class="card df">
            <img src="./imgs/img.jpg" alt="" class="card_img">
            <div class="card_desc df">
              <div class="card_desc_tit df">
                <h3>이용약관 답변 봇</h3>
                <span>shareware</span>
              </div>
              <div class="card_desc_body">건강과 지속 가능성을 추구하는 이들을 위해, 맛과 영양이 가득한 채식 요리 레시피를 소개합니다. 이 글에서는 간단하지만 맛있는 채식 요리 10가지를 선보입니다. 첫 번째 레시피는 아보카도 토스트, 아침 식사로 완벽하며 영양소가 풍부합니다.</div>
            </div>
            <a href="#" class="button ghost">자세히보기</a>
          </li>
...
				</ul> <!-- //.lists -->
...
        <div class="pager df"><a href="#" class="comment">1</a><a href="#" class="comment">2</a><a href="#" class="comment">3</a><a href="#" class="comment">4</a></div> <!-- //.pager -->
      </section> <!-- //section.propose -->
```

### 3.1.2. CSS 수정

1. section 정의부분 삭제

```css #
section {display: flex;flex-direction: column;row-gap: 2.8rem; }
section .sec_tit {align-self: center;width: calc(var(--unit) * 3);height: calc(var(--row) * 3);text-align: center; }
section .sec_tit h2 {font-weight: 600; }
section .sec_tit span {color: var(--gray70); }

section.propose {margin-bottom: 8.4rem; }
```

### 3.1.3. CSS 작성

```css #

section.propose .lists { width: 100%; height: 38rem; column-gap: var(--gu); }
section.propose .lists .card { flex-direction: column; width: calc(25% - var(--gu)); box-sizing: border-box; padding: 2.8rem; border: 1px solid var(--gray40); border-radius: 0.8rem; justify-content: space-between; row-gap: 1.4rem; }
section.propose .lists .card .card_desc { flex-direction: column; row-gap: 0.7rem; }
section.propose .lists .card .card_desc .card_desc_tit { justify-content: space-between; }

section.propose .lists .card .card_desc .card_desc_tit span { font-size: 1.3rem; text-transform: capitalize; letter-spacing: 0; color: var(--gray70, #505050); }
section.propose .lists .card .card_desc .card_desc_body { overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; line-clamp: 2; box-orient: vertical; }
section.propose .pager { height: 2.8rem; padding:.5rem 3rem; justify-content: center;align-items: center;gap: 2.8rem; }
section.propose .pager a:first-child { color:var(--gray60, #A3A3A3); ; }
```

## 3.2. subscribe

### 3.2.1. html

```html #
<form action="#" method="post">
	<div class="input_group pr">
		<label for="subscribe" class="pa">
			<input type="email" id="subscribe" placeholder="이메일 주소를 작성하세요" /></label>
		<button type="submit" class="pa cta button">신청하기</button>
	</div>
</form>
```

### 3.2.2. css

```css #
section.subscribe .input_group {
	margin: auto;
	display: flex;
	width: calc(var(--unit) * 5);
	height: 5.6rem;
	background: var(--gradient);
	border-radius: 0.8rem;
}
section.subscribe .input_group label {
	top: 0.2rem;
	left: 0.2rem;
	width: calc(100% - 0.4rem);
	height: calc(100% - 0.4rem);
	background-color: var(--gray10);
	border-radius: 0.6rem;
}
section.subscribe .input_group input {
	border: none;
	outline: none;
	appearance: none;
	background: transparent;
	padding: 1.4rem;
	font-size: 1.8rem;
	line-height: 2.8rem;
	color:var(--primary_40);
	caret-color: var(--primary_40);
}
section.subscribe .input_group button {
	top: 0;
	right: 0;
	bottom: 0;
	width: 20.4rem;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
```

# 4. [Footer]

## html

```html #
    <footer>
      <div class="sitemap inner">
        <div class="map df sns">
          <a href="#" class="logo"></a>
          <a href="#" class="sns1"></a>
          <a href="#" class="sns2"></a>
          <a href="#" class="sns3"></a>
        </div>
        <dl class="map">
          <dt>리소스</dt>
          <dd><a href="#">소개</a></dd>
          <dd><a href="#">블로그</a></dd>
          <dd><a href="#">가이드</a></dd>
          <dd><a href="#">FAQ</a></dd>
        </dl>
...
      <div class="copyright">GoodIT All Right Reserved </div>
    </footer>
```

## css

```css #
footer {
	background: var(--primary_10);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 1.6rem;
	padding-top: 2.8rem;
}
footer .sitemap {
	display: flex;
	justify-content: space-between;
}
footer .sitemap .map {
	width: 14.4rem;
	min-height: var(--row);
}
footer .sitemap .map .h4 {
	margin-bottom: var(--g);
}
footer .sitemap .map.sns {
	width: 15.4rem;
	flex-wrap: wrap;
	gap: 0 1.4rem;
}
footer .sitemap .map.sns a {
	width: 4.2rem;
	height: 4.3rem;
	background-repeat: no-repeat;
	background-image: url(../imgs/sns3.svg);
}
footer .sitemap .map.sns a.logo {
	background-image: url(../imgs/logo.svg);
	flex: 0 0 100%;
}
footer .sitemap .map.sns a.sns2 {
	background-position: -5.6rem 0;
}
footer .sitemap .map.sns a.sns3 {
	background-position: -11.2rem 0;
}

footer .copyright {
	text-align: center;
  width: 100%;
	height: calc(var(--row) * 2);
	line-height: calc(var(--row) * 2);
	background-color: var(--primary_20);
}

```
