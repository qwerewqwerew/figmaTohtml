# 1. Step1

1. html 구조작성

```html #
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>flex</title>
  <link rel="stylesheet" href="./css/common.css">
  <link rel="stylesheet" href="./css/step1.css">
</head>

<body>
  <div class="wrap">
    <header></header>
    <main></main>
    <footer></footer>
  </div> <!-- //.wrap -->
</body>

</html>
```

2. css 컴포넌트 작성

```css #
.inner {
	width: 100%;
	max-width: var(--layout);
	margin:0 auto;
}
.button,button {
	display: block;
	padding: 1.3rem 2.3rem;
	border-radius: 0.8rem;
	text-align: center;
	flex:0 0 auto;
}
.button.cta {
	background-color: var(--gray80);
	border: 1px solid transparent;
	color: var(--gray40);
}
.button.ghost {
	background-color: transparent;
	border: 1px solid var(--gray80);
}
.button.normal {
	box-sizing: border-box;
	border: 1px solid transparent;
}

```

3. css 구조작성

```css
/* ====================================
	components ===============
==================================== */
.inner {
width: 100%;
max-width: var(--layout);
margin: auto;
}
.button {
display: block;
padding: 1.3rem 2.3rem;
border-radius: 0.8rem;
text-align: center;
flex-shrink: 0;
}
.button.cta {
background-color: var(--gray80);
border: 1px solid transparent;
color: var(--gray40);
}
.button.ghost {
background-color: transparent;
border: 1px solid var(--gray80);
}
.button.normal {
box-sizing: border-box;
border: 1px solid transparent;
}

/* ====================================
layout ===============
==================================== */
.wrap {
display: flex;
flex-direction: column;
row-gap: 8.4rem;
}
header {
min-height: 64.4rem;
background-color: var(--gray40);
}
main {
min-height: 118.6rem;
background-color: var(--gray50);
}
footer {
min-height: 35.2rem;
background-color: var(--gray40);
}
.inner {
	background-color: var(--gray10);
	opacity: 0.2;
	height: inherit;
}
```

---

# 2. Step2 [Header]

## html

```html #
<header class="pr">
	<nav class="gnb pa">
		<div class="inner"></div>
	</nav>
	<div class="main_banner pa">
		<div class="inner"></div>
	</div>
</header>
```

## css

```css #
.gnb {
	min-height: 8.4rem;
	left: 0;
	right: 0;
	background-color: var(--gray50);
}
.main_banner {
	height: calc(100% - 8.4rem);
	top: 8.4rem;
	left: 0;
	right: 0;
	background-color: var(--gray60);
}

```

# 3. Step3 [Main]

## html

```html #
<main>
	<section class="propose inner">
		<!-- .sec_tit+ul.lists+ul.lists+.pager -->
		<div class="sec_tit"></div>
		<ul class="lists"></ul>
		<ul class="lists"></ul>
		<div class="pager"></div>
	</section>
	<section class="subscribe inner">
		<div class="sec_tit"></div>
		<form action="#" method="post">
			<div class="input_group">
				<input type="email" id="subscribe" placeholder="이메일 주소를 작성하세요" />
				<button type="submit">신청하기</button>
			</div>
		</form>
	</section>
</main>
```

## css

```css #
section {
	display: flex;
	flex-direction: column;
	row-gap: 2.8rem;
}
section .sec_tit {
	align-self: center;
	width: calc(var(--unit) * 3);
	height: calc(var(--row) * 3);
	background-color: var(--gray80);
}
section.propose {
	height: 94.4rem;
	margin-bottom: 8.4rem;
}
section.subscribe {
	height: 15.8rem;
}

.section.propose .lists {
	width: 100%;
	height: 38rem;
	background-color: var(--gray80);
}
.section.propose .pager {
	align-self: center;
	width: calc(var(--unit) * 2);
	height: 2.8rem;
	background-color: var(--gray80);
}

section.subscribe .input_group {
	margin: auto;
	display: flex;
	width: calc(var(--unit) * 6);
	height: 5.6rem;
	background-color: var(--gray80);
}


```

# 4. Step4 [Footer]

## html

```html #
<footer>
	<div class="sitemap inner">
		<div class="map"></div>
		<div class="map"></div>
		<div class="map"></div>
		<div class="map"></div>
	</div>
	<div class="copyright"></div>
</footer>
```

## css

```css #
footer {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	column-gap: 1.6rem;
}
footer .sitemap {
	display: flex;
	justify-content: space-between;
}
footer .sitemap .map {
	max-width: 20%;
	width: var(--unit);
	min-height: var(--row);
	background-color: var(--gray80);
}
footer .sitemap .copyright {
	width: calc(var(--unit) * 2);
	height: var(--row);
	background-color: var(--gray80);
}


```
