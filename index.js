// main.JS
(() => {


    // DOM要素の取得
    const $doc = document;
    const $navBtn = $doc.getElementById("js-navBtn"); // ナビボタン
    const $navBox = $doc.getElementById("js-navBox"); // ナビ全体
    const $navClose = $doc.getElementById("js-navClose"); // ナビのコンテンツ以外の部分
    const $navUl = $doc.getElementById("js-navUl"); // ナビのリスト全体
    const $navLinks = $navUl.getElementsByTagName("a"); // ナビリンクを配列
    let $navLink;
  
    // ハンバーガーメニュー
    addEventListener("DOMContentLoaded", function() {
      $navBtn.addEventListener("click", function() {
        this.classList.toggle("nav-btn-active");
        $navBox.classList.toggle("nav-box-active");
      });
    });
  
  
  
    // ナビ要素を一つずつ取得
    for (let navLinkIndex = 0; navLinkIndex < $navLinks.length; navLinkIndex++) {
      $navLink = $navLinks[navLinkIndex];
  
      // ハンバーガーメニューのクリック時にメニューを非表示にする
      $navLink.addEventListener("click", function() {
        $navBtn.classList.toggle("nav-btn-active");
        $navBox.classList.toggle("nav-box-active");
      });
    };
  
    // ナビのコンテンツ以外をクリックしたときに初期化
    $navClose.addEventListener("click", function() {
      $navBtn.classList.remove("nav-btn-active");
      $navBox.classList.remove("nav-box-active");
    });
  
  
    
    
  
  
    // ロゴをクリックしたときの処理
    $logo.addEventListener("click", function(e) {
      e.preventDefault();
      scroll({
        top: 0,
        behavior: "smooth",
      });
    });
  
  
  
  
  
    
  
  })();
  
  