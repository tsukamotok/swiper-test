let mySwiper = new Swiper ('.swiper-container', {
    //ページネーション表示の設定
    pagination: { 
      el: '.swiper-pagination', //ページネーションの要素
      type: 'bullets', //ページネーションの種類
      clickable: true, //クリックに反応させる
    },
   
    //ナビゲーションボタン（矢印）表示の設定
    navigation: { 
      nextEl: '.swiper-button-next', //「次へボタン」要素の指定
      prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
    },
   
    //スクロールバー表示の設定
    scrollbar: { 
      el: '.swiper-scrollbar', //要素の指定
    },

    preloadImages: false, //画像の先読みを無効に
    lazy: true, // Lazy Loading を有効に
  })
