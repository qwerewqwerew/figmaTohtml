# 1. 반응형

## 1.1. 미디어쿼리 적용 방법 두가지

### 1.1.1. 링크방식

1. html

```html #
  <link rel="stylesheet" href="./css/mobile.css" media="screen and (max-width:580px)" >
```

2. ./css/mobile.css

```css #
  body {
	background-color: red;
}

```

### 1.1.2. 미디어룰 방식

1. html

```html #
  <link rel="stylesheet" href="./css/mobile.css">
```

2. ./css/mobile.css

```css #
@media screen and (max-width: 580px) {
	body {
		background-color: red;
	}
}

```

# 2. 변수값 재할당

1. common.css 의 :root 와 html 선택자를 복사하여 mobile.css 에 붙여 넣고 필요한 부분만 수정한다.
   (116*4) + (28*3) = 548px

```css #
@media screen and (max-width: 580px) {
	:root {
		--col: 11.6rem;
		--g: 1.4rem;
		--gu: calc(var(--g) * 2);
		--row: 2.8rem;
		--unit: calc(var(--col) + var(--gu));
		--layout: calc(var(--unit) * 4 - var(--gu));

	}
	html {
		font-size: 62.5%; /* 16*62.5/100 = 10px */
	}
	.inner {
		width: 100%;
		max-width: var(--layout);
		margin: 0 auto;
	}

	/* ====================================
   header ===============
  ==================================== */



} /* ========= (max-width: 580px) ================= */
```

# 3. header

## 3.1. 모바일메뉴

### html

1. 구조변경
2. nav를 복사하여 pc,mo 클래스 추가
3. css 의 기본값에는 mo 숨김 pc 표시, 미디어쿼리에서는 pc숨김/mo 표시

```html #
      <!-- .pc.gnb -->
      <nav class="pc gnb pa">
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
          </div><!-- //.util -->
        </div>
      </nav>
      <!-- //.pc.gnb -->
      <!-- .mo.gnb -->
      <nav class="mo gnb pa">
        <div class="inner df">
          <h1><a href="#" class="ir_so">LOGO</a><img src="./imgs/logo.svg" alt="logo"></h1>
          <a href="#" class="button ghost">open</a>
          <ul class="menu df">
            <li><a href="#">추천앱</a></li>
            <li><a href="#">최신앱</a></li>
            <li><a href="#">인기앱</a></li>
            <li><a href="#">블로그</a></li>
            <li><a href="#" class="button ghost">로그인</a></li>
            <li><a href="#" class="button cta">회원가입</a></li>
          </ul>
        </div>
      </nav> <!-- //.mo.gnb -->
```

### css

1. 기본형

```css #
.pc{display:block;}
.mo{display:none;}
```

2. mobile

```css #
	.mo {
		display: block;
		height: calc(var(--row) * 2);
	}
  .mo_btn {
		display: block;
		right: 2%;
		padding: 1.4rem 2rem;
	}
	header .gnb.mo .menu {
		padding: 2.8rem 0;
		position: absolute;
		width: 100%;
		background: rgba(255, 255, 255, 0.309);
		backdrop-filter: blur(20px);
		flex-direction: column;
		align-items: center;
		top: 5.6rem;
		left: 0;
		gap: 1rem;
	}
	header .gnb.mo .menu li {
		width: 100%;
		max-width: var(--layout);
		flex: 1 1 100%;
	}
	header .gnb.mo .menu li a {
		height: calc(var(--row) * 2);
		line-height: calc(var(--row) * 2);
    padding:0;
	}
.main_banner {
padding-bottom: 150%; /* 580/360*100=161 */
}
.response_video,
video {
height: 100vh;
width: auto;
}
.headline {
width: calc(100% - 14.6rem);
}
```

3. 스크립트

```html #
  <script src='https://code.jquery.com/jquery-3.7.0.slim.min.js' integrity='sha256-tG5mcZUtJsZvyKAxYLVXrmjKBVLd6VpVccqz/r4ypFE=' crossorigin='anonymous'></script>
  <script src="./src/script.js"></script>
```

```js #
$('.mo .menu').hide();
$('.mo_btn').on('click', () => {
	$('.mo .menu').stop().slideToggle(500);
	$('.fa-bars').toggleClass('fa-x', '.fa-bars');
	return false;
});

```

# section

## css

```css #
/* ====================================
  main ===============
  ==================================== */
	section {
		width: calc(100% - 4.6rem);
	}
	section.propose .lists {
		flex-direction: column;
    justify-content: space-between;
		width: 100%;
		height: auto;
		gap: 2.8rem;
	}
	section.propose .lists .card {
		width: 100%;
		height: auto;
	}
	section.subscribe .input_group {
		width: calc(100% - 3.8rem);
	}
```

# footer

```css #
/* ====================================
  footer ===============
  ==================================== */

	footer {
		padding: 3.8rem;
		flex-flow: nowrap row;
	}
	footer .map:not(.sns) {
		display: none;
	}
	footer .map:is(.sns) {
		flex-flow: row nowrap;
	}
	footer .sitemap .map.sns.df {
		flex: 1 1 30%;
		width: 30%;
	}
	footer .sitemap .map.sns.df a {
		flex: 0 0 4.4rem;
	}
	footer .copyright {
		text-align: right;
		height: auto;
		background: none;
		flex: 1 1 auto;
	}
} /*
```
