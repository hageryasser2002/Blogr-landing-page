var icon = document.getElementById("icon-hamburgare");
var menu = document.getElementById("menu");

var elements = [
  {item: document.getElementsByClassName("menu-ul 1"), element: document.getElementsByClassName("firstElement"), img: document.getElementsByClassName("firstImg")},
  {item: document.getElementsByClassName("menu-ul 2"), element: document.getElementsByClassName("secondElement"), img: document.getElementsByClassName("secondImg")},
  {item: document.getElementsByClassName("menu-ul 3"), element: document.getElementsByClassName("thirdElement"), img: document.getElementsByClassName("thirdImg")}
];

// تعيين القوائم لتكون مخفية بشكل افتراضي
Array.from(document.getElementsByClassName("menu-ul 1")).forEach(function(item) {
  item.style.display = "none";
});
Array.from(document.getElementsByClassName("menu-ul 2")).forEach(function(item) {
  item.style.display = "none";
});
Array.from(document.getElementsByClassName("menu-ul 3")).forEach(function(item) {
  item.style.display = "none";
});

icon.style.cursor = "pointer";
var isMenuOpen = 1;
icon.onclick = function () {
    icon.src = isMenuOpen ? "./images/icon-close.svg" : "./images/icon-hamburger.svg";
    menu.style.display = isMenuOpen ? "block" : "none";
    isMenuOpen = !isMenuOpen;
    menu.style.zIndex = "1";
    menu.style.position = "relative";
};

elements.forEach(function (member) {
  Array.from(member.element).forEach(function (el) {
    el.style.cursor = "pointer";
  });

  var isVisible = 0;

  Array.from(member.element).forEach(function (el) {
    el.onclick = function () {
      isVisible = !isVisible;

      // إظهار/إخفاء القائمة المرتبطة بالعنصر
      Array.from(member.item).forEach(function (elItem) {
        elItem.style.display = isVisible ? "block" : "none"; // عرض أو إخفاء القائمة
      });

      // تغيير اتجاه الصورة المرتبطة
      Array.from(member.img).forEach(function (img) {
        img.style.transform = isVisible ? "scale(-1)" : "scale(1)"; // تغيير اتجاه الصورة
      });
    };
  });
});
