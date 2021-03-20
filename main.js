// Task 1
let $random = document.createElement("DIV");
$random.id = "random";

h4 = document.createElement("h4");
h4.textContent = "Random number:";

$random.appendChild(h4);

$generate = document.createElement("BUTTON");
$generate.textContent = "Generate random number";

$show_num = document.createElement("p");
$show_num.textContent = "0";
$random.appendChild($show_num);
$random.appendChild($generate);
$generate.addEventListener("click", () => {
  $show_num.textContent = `${Math.floor(Math.random() * 100)}`;
});

style("20px auto", "center", "#fbf2e9", "300px", "10px");
document.body.appendChild($random);

function style(margin, textAlign, backgroundColor, width, padding) {
  $random.style.margin = margin;
  $random.style.textAlign = textAlign;
  $random.style.backgroundColor = backgroundColor;
  $random.style.width = width;
  $random.style.padding = padding;
}
// Task 2
let $mouse_div = document.createElement("DIV");
$mouse_div.id = "mouse_div";
document.body.appendChild($mouse_div);
$mouse_div.style.width = "50%";
$mouse_div.style.height = "50%";
$mouse_div.style.backgroundColor = "#fbf2e9";
$mouse_div.style.textAlign = "center";
$mouse_div.style.margin = "0 auto";
let x, y;
$corr = document.createElement("P");
$mouse_div.appendChild($corr);
document.body.addEventListener("mousemove", (event) => {
  x = event.clientX;
  y = event.clientY;
  $corr.textContent = `X = ${x} , Y = ${y}`;
});
$click = document.createElement("P");
$mouse_div.appendChild($click);
document.body.addEventListener("click", () => {
  $click.textContent = "Ви натиснули Ліву Кнопку Миші";
});
document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  $click.textContent = "Ви натиснули Праву Кнопку Миші";
});
// Task 3
let $text = document.createElement("DIV");
document.body.appendChild($text);
$text.style.padding = "20px";
$text.style.backgroundColor = "#fbf2e9";

$btn = document.createElement("button");
$btn.textContent = "Hide/Show";
$text.appendChild($btn);
$text_content = document.createElement("P");
$text_content.textContent =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae optio perferendis dolorem, ab, repudiandae odit nihil aliquid reiciendis iure repellendus deserunt velit qui sequi ratione veritatis consequuntur dolor ipsum deleniti.";

$text.appendChild($text_content);
$btn.addEventListener("click", () => {
  $text_content.classList.toggle("display");
});

// Task 4
let $task4 = document.createElement("DIV");
document.body.appendChild($task4);
$task4.classList.add("task4");
$listHold = document.createElement("DIV");
$task4.appendChild($listHold);
$articleHold = document.createElement("DIV");
$task4.appendChild($articleHold);
$articleHold.classList.add("hold");

$listHold.classList.add("list");
$list = document.createElement("UL");
$listHold.appendChild($list);
for (let i = 0; i < 3; i++) {
  $li = document.createElement("LI");
  $list.appendChild($li);
}
let $li1 = document.querySelector(".list ul li:nth-of-type(1)"),
  $li2 = document.querySelector(".list ul li:nth-of-type(2)"),
  $li3 = document.querySelector(".list ul li:nth-of-type(3)");
$li1.textContent = "HTML";
$li1.classList.add("hovered");
$li2.textContent = "CSS";
$li3.textContent = "JS";
for (let i = 0; i < 3; i++) {
  $article = document.createElement("ARTICLE");
  $articleHold.appendChild($article);
  for (let j = 0; j < 1; j++) {
    $p = document.createElement("P");
    $article.appendChild($p);
  }
}
let $article1 = document.querySelector(".hold article:nth-of-type(1) p"),
  $article2 = document.querySelector(".hold article:nth-of-type(2) p"),
  $article3 = document.querySelector(".hold article:nth-of-type(3) p"),
  articleA = document.querySelector(".hold article:nth-of-type(1)"),
  list = document.querySelectorAll(".list ul li"),
  article = document.querySelectorAll(".hold article");
prev = 0;
$article1.textContent =
  "HTML — стандартизированный язык разметки веб-страниц во Всемирной паутине.";
$article2.textContent =
  "CSS — формальный язык описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML).";
$article3.textContent =
  "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262[7]).";

articleA.classList.add("toggle");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    article[prev].classList.remove("toggle");
    list[prev].classList.remove("hovered");
    prev = i;
    article[i].classList.add("toggle");
    list[i].classList.add("hovered");
  });
}

// Task 5
let $articleTask5 = document.querySelectorAll(".task5 article");
$buttonTask5 = document.querySelectorAll(".task5 article button");
for (let i = 0; i < $buttonTask5.length; i++) {
  $buttonTask5[i].addEventListener("click", () => {
    $articleTask5[i].classList.add("display");
  });
}
// Task 6
let $progress = document.querySelector("progress"),
  $btnProg = document.querySelector(".task6 button");
$btnProg.addEventListener("click", () => {
  $progress.setAttribute(
    "value",
    parseInt($progress.getAttribute("value")) + 5
  );
});
