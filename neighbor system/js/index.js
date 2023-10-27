// 교통정보 토글
var menu1 = document.getElementsByClassName('menu01')[0];
var subMenu01 = document.getElementsByClassName('subMenu01')[0];
var menu01Img = document.getElementsByClassName('menu01Img')[0];

var menuToggle1 = false;

menu1.onclick = function () {
  if (!menuToggle1) {
    subMenu01.style.display = 'flex';
    menu1.style.borderColor = '#3652ac';
    menu01Img.style.backgroundImage = 'url(./images/arrow_off.png)';
    menuToggle1 = true;
  } else {
    subMenu01.style.display = 'none';
    menu1.style.borderColor = '#bebebd';
    menu01Img.style.backgroundImage = 'url(./images/arrow_on.png)';
    menuToggle1 = false;
  }
};

// 지역정보 토글
var menu2 = document.getElementsByClassName('menu02')[0];
var subMenu02 = document.getElementsByClassName('subMenu02')[0];
var menu02Img = document.getElementsByClassName('menu02Img')[0];

var menuToggle2 = false;

menu2.onclick = function () {
  if (!menuToggle2) {
    subMenu02.style.display = 'flex';
    menu2.style.borderColor = '#3652ac';
    menu02Img.style.backgroundImage = 'url(./images/arrow_off.png)';
    menuToggle2 = true;
  } else {
    subMenu02.style.display = 'none';
    menu2.style.borderColor = '#bebebd';
    menu02Img.style.backgroundImage = 'url(./images/arrow_on.png)';
    menuToggle2 = false;
  }
};

// 항공지도 토글
var menu3 = document.getElementsByClassName('menu3')[0];
var subMenu03 = document.getElementsByClassName('subMenu03')[0];
var menu03Img = document.getElementsByClassName('menu03Img')[0];

var menuToggle3 = false;

menu3.onclick = function () {
  if (!menuToggle3) {
    subMenu03.style.display = 'flex';
    menu3.style.borderColor = '#3652ac';
    menu03Img.style.backgroundImage = 'url(./images/arrow_off.png)';
    menuToggle3 = true;
  } else {
    subMenu03.style.display = 'none';
    menu3.style.borderColor = '#bebebd';
    menu03Img.style.backgroundImage = 'url(./images/arrow_on.png)';
    menuToggle3 = false;
  }
};

// 일반지도 토글
var menu4 = document.getElementsByClassName('menu04')[0];
var subMenu04 = document.getElementsByClassName('subMenu04')[0];
var menu04Img = document.getElementsByClassName('menu04Img')[0];

var menuToggle4 = false;

menu4.onclick = function () {
  if (!menuToggle4) {
    subMenu04.style.display = 'flex';
    menu4.style.borderColor = '#3652ac';
    menu04Img.style.backgroundImage = 'url(./images/arrow_off.png)';
    menuToggle4 = true;
  } else {
    subMenu04.style.display = 'none';
    menu4.style.borderColor = '#bebebd';
    menu04Img.style.backgroundImage = 'url(./images/arrow_on.png)';
    menuToggle4 = false;
  }
};

// 체크박스 토글
var check1 = document.getElementsByClassName('check1')[0];
var check2 = document.getElementsByClassName('check2')[0];
var check3 = document.getElementsByClassName('check3')[0];
var check4 = document.getElementsByClassName('check4')[0];
var check5 = document.getElementsByClassName('check5')[0];
var check6 = document.getElementsByClassName('check6')[0];
var check7 = document.getElementsByClassName('check7')[0];
var check8 = document.getElementsByClassName('check8')[0];
var check9 = document.getElementsByClassName('check9')[0];
var check10 = document.getElementsByClassName('check10')[0];
var subMenu1 = document.getElementsByClassName('subMenu1')[0];
var subMenu2 = document.getElementsByClassName('subMenu2')[0];
var subMenu3 = document.getElementsByClassName('subMenu3')[0];
var subMenu4 = document.getElementsByClassName('subMenu4')[0];
var subMenu5 = document.getElementsByClassName('subMenu5')[0];
var subMenu6 = document.getElementsByClassName('subMenu6')[0];
var subMenu7 = document.getElementsByClassName('subMenu7')[0];
var subMenu8 = document.getElementsByClassName('subMenu8')[0];
var subMenu9 = document.getElementsByClassName('subMenu9')[0];
var subMenu10 = document.getElementsByClassName('subMenu10')[0];

var checkToggle1 = false;
var checkToggle2 = false;
var checkToggle3 = false;
var checkToggle4 = false;
var checkToggle5 = false;
var checkToggle6 = false;
var checkToggle7 = false;
var checkToggle8 = false;
var checkToggle9 = false;
var checkToggle10 = false;

subMenu1.onclick = function () {
  if (!checkToggle1) {
    check1.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle1 = true;
  } else {
    check1.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle1 = false;
  }
};
subMenu2.onclick = function () {
  if (!checkToggle2) {
    check2.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle2 = true;
  } else {
    check2.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle2 = false;
  }
};
subMenu3.onclick = function () {
  if (!checkToggle3) {
    check3.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle3 = true;
  } else {
    check3.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle3 = false;
  }
};
subMenu4.onclick = function () {
  if (!checkToggle4) {
    check4.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle4 = true;
  } else {
    check4.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle4 = false;
  }
};
subMenu5.onclick = function () {
  if (!checkToggle5) {
    check5.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle5 = true;
  } else {
    check5.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle5 = false;
  }
};
subMenu6.onclick = function () {
  if (!checkToggle6) {
    check6.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle6 = true;
  } else {
    check6.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle6 = false;
  }
};
subMenu7.onclick = function () {
  if (!checkToggle7) {
    check7.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle7 = true;
  } else {
    check7.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle7 = false;
  }
};
subMenu8.onclick = function () {
  if (!checkToggle8) {
    check8.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle8 = true;
  } else {
    check8.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle8 = false;
  }
};
subMenu9.onclick = function () {
  if (!checkToggle9) {
    check9.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle9 = true;
  } else {
    check9.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle9 = false;
  }
};
subMenu10.onclick = function () {
  if (!checkToggle10) {
    check10.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle10 = true;
  } else {
    check10.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle10 = false;
  }
};

// 지번 도로명 토글
var searchBt = document.getElementsByClassName('searchBt')[0];

var toggle = false;

searchBt.onclick = function () {
  if (!toggle) {
    console.log('gd');
    searchBt.style.backgroundImage = 'url(./images/serch_icon_2.png)';
    toggle = true;
  } else {
    searchBt.style.backgroundImage = 'url(./images/serch_icon_1.png)';
    toggle = false;
  }
};

// 미니맵
var minmap = document.getElementsByClassName('minmap0')[0];
var minmapSub = document.getElementsByClassName('bar-sub3')[0];

var minToggle = false;

minmap.onclick = function () {
  if (!minToggle) {
    minmapSub.style.display = 'flex';
    minToggle = true;
  } else {
    minmapSub.style.display = 'none';
    minToggle = false;
  }
};

// 우클릭 방지
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// 로드뷰
var roadviewBt = document.getElementsByClassName('loadviewBt')[0];
var loadview = document.getElementsByClassName('loadview')[0];
var loadviewIcon = document.getElementsByClassName('loadviewIcon')[0];

var roadToggle = false;

roadviewBt.addEventListener('contextmenu', function () {
  loadview.style.display = 'block';
  roadToggle = true;
});

loadviewIcon.onclick = function () {
  loadview.style.display = 'none';
  roadToggle = false;
};

// 면적
var area = document.getElementsByClassName('bar_icon10')[0];
var areaDiv = document.getElementsByClassName('area')[0];

area.onclick = function () {
  areaDiv.style.display = 'flex';
};
area.addEventListener('contextmenu', function () {
  areaDiv.style.display = 'none';
});

// 거리
var radius = document.getElementsByClassName('bar_icon9')[0];
var radiusDiv = document.getElementsByClassName('radius')[0];

radius.onclick = function () {
  radiusDiv.style.display = 'flex';
};
radius.addEventListener('contextmenu', function () {
  radiusDiv.style.display = 'none';
});

// 반경
var capital = document.getElementsByClassName('bar_icon11')[0];
var capitalDiv = document.getElementsByClassName('capital')[0];

capital.onclick = function () {
  capitalDiv.style.display = 'flex';
};
capital.addEventListener('contextmenu', function () {
  capitalDiv.style.display = 'none';
});
