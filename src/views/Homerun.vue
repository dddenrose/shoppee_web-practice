<template>
  <div class="hello">
    <div class="header">
      <div class="gradient header">
        <div class="container">
          <div class="nav">
            <div class="nav-left">
              <ul>
                <li><a href="#">賣家中心</a></li>
                <li class="plus1"><a href="#">下載</a></li>
                <li class="plus2"><a href="#">追蹤我們</a></li>
                <li class="social-media">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-line"></i>
                </li>                
              </ul>
            </div>
            <div class="nav-right">
              <ul>
                <li><a href="#"><i class="far fa-bell"></i> 通知總覽</a></li>
                <li><a href="#"><i class="far fa-question-circle"></i> 幫助中心</a></li>
                <li><a href="#"><i class="fas fa-globe"></i> 繁體中文</a></li>
                <li><a href="#">註冊</a></li>
                <li><a href="#">登入</a></li>
              </ul>
            </div>
          </div>
          <div class="search-bar">
            <div class="logo">
              <!-- <img src="https://picsum.photos/164/47" alt="logo" /> -->
              <img src="../img/logo-white.png" alt="logo" width="164" height="40"/>
            </div>
            <div class="search">
              <div class="search-bar-text">
                <input type="text" placeholder="   看更多免運商品" />
                <a href="#" class="button">
                  <button><i class="fas fa-search"></i></button>
                </a>
              </div>
              <ul class="command">
                <li><a href="#">紅包袋</a></li>
                <li><a href="#">Switch</a></li>
                <li><a href="#">阿爾宙斯</a></li>
                <li><a href="#">襪子</a></li>
                <li><a href="#">魔芋爽</a></li>
                <li><a href="#">拖鞋</a></li>
                <li><a href="#">除濕機</a></li>
                <li><a href="#">遊戲片</a></li>
              </ul>
            </div>
            <div class="shopping-car" id="icon">
              <i class="fas fa-shopping-cart" style="color:white"></i>
            </div>
          </div>
      </div>
      </div>
    </div>
    <div class="content">
      <div class="activity">
        <div class="container image-bar">
          <div class="images">
            <div class="image-left">
              <a href="#" class="link-image">
                <div class="main-full-image"></div>
              </a>
            </div>
            <div class="image-right">
              <a href="#" class="link-image one">
                <div class="full-image"></div>
              </a>
              <a href="#" class="link-image">
                <div class="full-image three"></div>
              </a>
            </div>
          </div>
          <div class="categories">
              <div class="categories-detail">
                <a href="#" class="categories-detail-icon">
                  <div class="icon"><i class="fas fa-truck" style="color:rgb(208, 1, 27)"></i></div>
                  <div class="info">免運!蝦皮直送</div>
                </a>
              </div>
              <div class="categories-detail">
                <a href="#" class="categories-detail-icon">
                  <div class="icon"><i class="fas fa-store-alt" style="color:rgb(22, 85, 170)"></i></div>
                  <div class="info">蝦皮超市</div>
                </a>
              </div>
              <div class="categories-detail">
                <a href="#" class="categories-detail-icon">
                  <div class="icon"><i class="fas fa-ticket-alt" style="color:rgb(255, 153, 17)"></i></div>
                  <div class="info">搶5折券</div>
                </a>
              </div>
              <div class="categories-detail">
                <a href="#" class="categories-detail-icon">
                  <div class="icon"><i class="fas fa-gem" style="color:rgb(22, 85, 170)"></i></div>
                  <div class="info">蝦時尚</div>
                </a>
              </div>
              <div class="categories-detail">
                <a href="#" class="categories-detail-icon">
                  <div class="icon"><i class="fas fa-user-tie" style="color:rgb(45, 173, 156)"></i></div>
                  <div class="info">男人館</div>
                </a>
              </div>
              <div class="categories-detail">
                <a href="#" class="categories-detail-icon">
                  <div class="icon"><i class="fas fa-shopping-bag" style="color:rgb(22, 85, 170)"></i></div>
                  <div class="info">蝦皮團購</div>
                </a>
              </div>
              <div class="categories-detail">
                <a href="#" class="categories-detail-icon">
                  <div class="icon"><i class="fas fa-ship" style="color:rgb(208, 1, 27)"></i></div>
                  <div class="info">蝦皮海外直送</div>
                </a>
              </div>
              <div class="categories-detail">
                <a href="#" class="categories-detail-icon">
                  <div class="icon"><i class="fas fa-dollar-sign" style="color:rgb(45, 173, 156)"></i></div>
                  <div class="info">超便宜$1up</div>
                </a>
              </div>
              <div class="categories-detail">
                <a href="#" class="categories-detail-icon">
                  <div class="icon"><i class="fas fa-coins" style="color:rgb(208, 1, 27)"></i></div>
                  <div class="info">財神狂灑發財金</div>
                </a>
              </div>
              <div class="categories-detail">
                <a href="#" class="categories-detail-icon">
                  <div class="icon"><i class="fas fa-store" style="color:rgb(45, 173, 156)"></i></div>
                  <div class="info">最強活動合集</div>
                </a>
              </div>
            </div>
        </div>
      </div>
      <div class="event">
        <div class="container">
          <div class="main-image"></div>
          <div class="info">
            <span>85折券限今天!</span>
            <div class="link">
              <a href="#">查看全部></a>
            </div>
          </div>
          <div class="products-full">
            <div class="products-little">
              <div class="product">
                <a href="#">
                  <div class="product-detail">
                    <img src="https://picsum.photos/157/162" alt="product">
                    <div class="logo"><i class="fab fa-google"></i></div>
                    <div class="title">質感皮夾7折UP</div>
                  </div>
                </a>
              </div>
              <div class="product">
                <a href="#">
                  <div class="product-detail">
                    <img src="https://picsum.photos/157/162" alt="product">
                    <div class="logo"><i class="fab fa-yahoo"></i></div>
                    <div class="title">滿1800折220</div>
                  </div>
                </a>
              </div>
              <div class="product">
                <a href="#">
                  <div class="product-detail">
                    <img src="https://picsum.photos/157/162" alt="product">
                    <div class="logo"><i class="fab fa-slack"></i></div>
                    <div class="title">全館6折起</div>
                  </div>
                </a>
              </div>
              <div class="product">
                <a href="#">
                  <div class="product-detail">
                    <img src="https://picsum.photos/157/162" alt="product">
                    <div class="logo"><i class="fab fa-wordpress"></i></div>
                    <div class="title">滿額最高折$666</div>
                  </div>
                </a>
              </div>
              <div class="product">
                <a href="#">
                  <div class="product-detail">
                    <img src="https://picsum.photos/157/162" alt="product">
                    <div class="logo"><i class="fab fa-digg"></i></div>
                    <div class="title">滿$1800折$210</div>
                  </div>
                </a>
              </div>
              <div class="product">
                <a href="#">
                  <div class="product-detail">
                    <img src="https://picsum.photos/157/162" alt="product">
                    <div class="logo"><i class="fab fa-blogger-b"></i></div>
                    <div class="title">新春獻禮第二件5折</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="categoryies-detail">
        <div class="container">
          <div class="title"><h3>分類</h3></div>
          <div class="categoryies-part">
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-tshirt" style="color:rgb(208, 1, 27)"></i></div>
              <div class="info">女生衣著</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-user-tie" style="color:rgb(22, 85, 170)"></i></div>
              <div class="info">男生衣著</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-basketball-ball" style="color:rgb(45, 173, 156)"></i></div>
              <div class="info">運動/健身</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-shoe-prints" style="color:rgb(208, 1, 27)"></i></div>
              <div class="info">男女鞋</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="far fa-gem" style="color:rgb(255, 153, 17)"></i></div>
              <div class="info">女生配件/黃金</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-mask" style="color:rgb(208, 1, 27)"></i></div>
              <div class="info">美妝保健</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-baby-carriage" style="color:rgb(45, 173, 156)"></i></div>
              <div class="info">嬰幼童與母親</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-shopping-bag" style="color:rgb(255, 153, 17)"></i></div>
              <div class="info">女生包包/精品</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-plane-departure" style="color:rgb(208, 1, 27)"></i></div>
              <div class="info">男生包包與配件</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-shoe-prints" style="color:rgb(45, 173, 156)"></i></div>
              <div class="info">戶外/旅行</div>
            </a>
          </div>
          <a href="#" class="arrow">></a>
          <div class="categoryies-part">
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-book" style="color:rgb(45, 173, 156)"></i></div>
              <div class="info">書籍及雜誌期刊</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-couch" style="color:rgb(22, 85, 170)"></i></div>
              <div class="info">居家生活</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-birthday-cake" style="color:rgb(208, 1, 27)"></i></div>
              <div class="info">美食、伴手禮</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-car" style="color:rgb(255, 153, 17)"></i></div>
              <div class="info">汽機車零件百貨</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-gamepad" style="color:rgb(208, 1, 27)"></i></div>
              <div class="info">遊戲王</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-hotel" style="color:rgb(45, 173, 156)"></i></div>
              <div class="info">娛樂、收藏</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-paw" style="color:rgb(255, 153, 17)"></i></div>
              <div class="info">寵物</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-mobile-alt" style="color:rgb(208, 1, 27)"></i></div>
              <div class="info">手機平板與周邊</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-laptop" style="color:rgb(45, 173, 156)"></i></div>
              <div class="info">3C與筆電</div>
            </a>
            <a href="#" class="product">
              <div class="icon"><i class="fas fa-tv" style="color:rgb(208, 1, 27)"></i></div>
              <div class="info">家電影音</div>
            </a>
          </div>
        </div>
      </div>
      <div class="sale">
        <div class="container">
          <div class="title-bar">
            <div class="sale-title"></div>
            <div class="info">查看全部 ></div>
          </div>
          <div class="product-bar">
            <a href="#" class="product">
              <div class="sale-off">4折</div>
              <div class="image"><img src="https://picsum.photos/200/180" alt="product"></div>
              <div class="price">$599</div>
              <div class="result">
                <div class="percent-bar">
                  <div class="percent"></div>
                  <div class="full-bar"></div>
                </div>
                <span>已售出 54</span>
              </div>
            </a>
            <a href="#" class="product">
              <div class="sale-off">4折</div>
              <div class="image"><img src="https://picsum.photos/200/180" alt="product"></div>
              <div class="price">$599</div>
              <div class="result">
                <div class="percent-bar">
                  <div class="percent"></div>
                  <div class="full-bar"></div>
                </div>
                <span>已售出 54</span>
              </div>
            </a>
            <a href="#" class="product">
              <div class="sale-off">4折</div>
              <div class="image"><img src="https://picsum.photos/200/180" alt="product"></div>
              <div class="price">$599</div>
              <div class="result">
                <div class="percent-bar">
                  <div class="percent"></div>
                  <div class="full-bar"></div>
                </div>
                <span>已售出 54</span>
              </div>
            </a>
            <a href="#" class="product">
              <div class="sale-off">4折</div>
              <div class="image"><img src="https://picsum.photos/200/180" alt="product"></div>
              <div class="price">$599</div>
              <div class="result">
                <div class="percent-bar">
                  <div class="percent"></div>
                  <div class="full-bar"></div>
                </div>
                <span>已售出 54</span>
              </div>
            </a>
            <a href="#" class="product">
              <div class="sale-off">4折</div>
              <div class="image"><img src="https://picsum.photos/200/180" alt="product"></div>
              <div class="price">$599</div>
              <div class="result">
                <div class="percent-bar">
                  <div class="percent"></div>
                  <div class="full-bar"></div>
                </div>
                <span>已售出 54</span>
              </div>
            </a>
            <a href="#" class="product">
              <div class="sale-off">4折</div>
              <div class="image"><img src="https://picsum.photos/200/180" alt="product"></div>
              <div class="price">$599</div>
              <div class="result">
                <div class="percent-bar">
                  <div class="percent"></div>
                  <div class="full-bar"></div>
                </div>
                <span>已售出 54</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="little-event">
        <div class="container">
          <div class="image-bar">
              <img src="../img/img06.jpg" alt="event">
              <img src="../img/img07.jpg" alt="event">
              <img src="../img/img08.jpg" alt="event">
          </div>
        </div>
      </div>
      <div class="shopping-mall">
        <div class="container">
          <div class="title-main">
            <div class="info">
              <a>蝦皮商城</a>
              <ul>
                <li><i class="fas fa-undo"></i>15天鑑賞期</li>
                <li><i class="fas fa-truck"></i>蝦皮安心退</li>
                <li><i class="fas fa-shield-alt"></i>假一賠二</li>
              </ul>
            </div>
            <a class="right">查看全部 ></a>
          </div>
          <div class="product-bar">
            <a href="#" class="full-image">
              <img src="https://picsum.photos/400/475" alt="image">
            </a>
            <div class="products-all">
              <div class="line">
                <div class="product">
                    <a href="#">
                      <div class="product-detail">
                        <img src="https://picsum.photos/150/160" alt="product">
                        <div class="logo"><i class="fab fa-google"></i></div>
                      </div>
                    </a>
                    <div class="title">整點瘋搶1折券</div>
                </div>
                <div class="product">
                    <a href="#">
                      <div class="product-detail">
                        <img src="https://picsum.photos/150/160" alt="product">
                        <div class="logo"><i class="fab fa-google"></i></div>
                      </div>
                    </a>
                    <div class="title">整點瘋搶1折券</div>
                </div>
                <div class="product">
                    <a href="#">
                      <div class="product-detail">
                        <img src="https://picsum.photos/150/160" alt="product">
                        <div class="logo"><i class="fab fa-google"></i></div>
                      </div>
                    </a>
                    <div class="title">整點瘋搶1折券</div>
                </div>
                <div class="product">
                    <a href="#">
                      <div class="product-detail">
                        <img src="https://picsum.photos/150/160" alt="product">
                        <div class="logo"><i class="fab fa-google"></i></div>
                      </div>
                    </a>
                    <div class="title">整點瘋搶1折券</div>
                </div>
              </div>
              <div class="line">
                <div class="product">
                    <a href="#">
                      <div class="product-detail">
                        <img src="https://picsum.photos/150/160" alt="product">
                        <div class="logo"><i class="fab fa-google"></i></div>
                      </div>
                    </a>
                    <div class="title">整點瘋搶1折券</div>
                </div>
                <div class="product">
                    <a href="#">
                      <div class="product-detail">
                        <img src="https://picsum.photos/150/160" alt="product">
                        <div class="logo"><i class="fab fa-google"></i></div>
                      </div>
                    </a>
                    <div class="title">整點瘋搶1折券</div>
                </div>
                <div class="product">
                    <a href="#">
                      <div class="product-detail">
                        <img src="https://picsum.photos/150/160" alt="product">
                        <div class="logo"><i class="fab fa-google"></i></div>
                      </div>
                    </a>
                    <div class="title">整點瘋搶1折券</div>
                </div>
                <div class="product">
                    <a href="#">
                      <div class="product-detail">
                        <img src="https://picsum.photos/150/160" alt="product">
                        <div class="logo"><i class="fab fa-google"></i></div>
                      </div>
                    </a>
                    <div class="title">整點瘋搶1折券</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="keyword">
        <div class="container">         
          <div class="title-main">
            <h2>熱門關鍵字</h2>
            <h3>更改</h3>
          </div>
          <div class="product-bar">
            <div class="product">
              <div class="info">
                <h3>大滑鼠墊</h3>
                <h4>3,520件商品</h4>
              </div>
              <img src="https://picsum.photos/115/100" alt="prodcut">
            </div>
            <div class="product">
              <div class="info">
                <h3>大滑鼠墊</h3>
                <h4>3,520件商品</h4>
              </div>
              <img src="https://picsum.photos/115/100" alt="prodcut">
            </div>
            <div class="product">
              <div class="info">
                <h3>大滑鼠墊</h3>
                <h4>3,520件商品</h4>
              </div>
              <img src="https://picsum.photos/115/100" alt="prodcut">
            </div>
            <div class="product">
              <div class="info">
                <h3>大滑鼠墊</h3>
                <h4>3,520件商品</h4>
              </div>
              <img src="https://picsum.photos/115/100" alt="prodcut">
            </div>
            <div class="product">
              <div class="info">
                <h3>大滑鼠墊</h3>
                <h4>3,520件商品</h4>
              </div>
              <img src="https://picsum.photos/115/100" alt="prodcut">
            </div>
          </div>
        </div>
      </div>
      <div class="hottest-product">
        <div class="container">
          <div class="title-main">
            <h2>熱門商品</h2>
            <h3>查看全部</h3>
          </div>
          <div class="product-bar">
            <div class="product">
              <img src="https://picsum.photos/115/100" alt="prodcut">
              <span class="box">月銷量4,500</span>
              <div class="info">熱門滿額免運專區</div>
              <span class="top">top</span>
            </div>
            <div class="product">
              <img src="https://picsum.photos/115/100" alt="prodcut">
              <span class="box">月銷量4,500</span>
              <div class="info">熱門滿額免運專區</div>
              <span class="top">top</span>
            </div>
            <div class="product">
              <img src="https://picsum.photos/115/100" alt="prodcut">
              <span class="box">月銷量4,500</span>
              <div class="info">熱門滿額免運專區</div>
              <span class="top">top</span>
            </div>
            <div class="product">
              <img src="https://picsum.photos/115/100" alt="prodcut">
              <span class="box">月銷量4,500</span>
              <div class="info">熱門滿額免運專區</div>
              <span class="top">top</span>
            </div>
            <div class="product">
              <img src="https://picsum.photos/115/100" alt="prodcut">
              <span class="box">月銷量4,500</span>
              <div class="info">熱門滿額免運專區</div>
              <span class="top">top</span>
            </div>
            <div class="product">
              <img src="https://picsum.photos/115/100" alt="prodcut">
              <span class="box">月銷量4,500</span>
              <div class="info">熱門滿額免運專區</div>
              <span class="top">top</span>
            </div>
          </div>          
        </div>
      </div>
      <div class="new-discovery">
        <div class="container">
          <div class="title-block">
            <h3>每日新發現</h3>
            <div class="orange-box"></div>
          </div>
          <div class="title-block">
            <h3>2.18新春購物節</h3>
            <div class="orange-box none"></div>
          </div>
        </div>
      </div>
      <div class="discovery-items">
        <div class="container">
          <div class="product-line">
          <a href="#" class="product">
            <img src="https://picsum.photos/200/180" alt="product">
            <div class="title">KICKASS Nike DUNK LOW RETRO WHITE BLACK</div>
            <div class="info">
              <div class="price">$5,920</div>
              <div class="result">已售出54</div>
            </div>
          </a>
          <a href="#" class="product">
            <img src="https://picsum.photos/200/180" alt="product">
            <div class="title">KICKASS Nike DUNK LOW RETRO WHITE BLACK</div>
            <div class="info">
              <div class="price">$5,920</div>
              <div class="result">已售出54</div>
            </div>
          </a>
          <a href="#" class="product">
            <img src="https://picsum.photos/200/180" alt="product">
            <div class="title">KICKASS Nike DUNK LOW RETRO WHITE BLACK</div>
            <div class="info">
              <div class="price">$5,920</div>
              <div class="result">已售出54</div>
            </div>
          </a>
          <a href="#" class="product">
            <img src="https://picsum.photos/200/180" alt="product">
            <div class="title">KICKASS Nike DUNK LOW RETRO WHITE BLACK</div>
            <div class="info">
              <div class="price">$5,920</div>
              <div class="result">已售出54</div>
            </div>
          </a>
          <a href="#" class="product">
            <img src="https://picsum.photos/200/180" alt="product">
            <div class="title">KICKASS Nike DUNK LOW RETRO WHITE BLACK</div>
            <div class="info">
              <div class="price">$5,920</div>
              <div class="result">已售出54</div>
            </div>
          </a>
          <a href="#" class="product">
            <img src="https://picsum.photos/200/180" alt="product">
            <div class="title">KICKASS Nike DUNK LOW RETRO WHITE BLACK</div>
            <div class="info">
              <div class="price">$5,920</div>
              <div class="result">已售出54</div>
            </div>
          </a>


          </div>
          <div class="product-line">
          <a href="#" class="product">
            <img src="https://picsum.photos/200/180" alt="product">
            <div class="title">KICKASS Nike DUNK LOW RETRO WHITE BLACK</div>
            <div class="info">
              <div class="price">$5,920</div>
              <div class="result">已售出54</div>
            </div>
          </a>
          <a href="#" class="product">
            <img src="https://picsum.photos/200/180" alt="product">
            <div class="title">KICKASS Nike DUNK LOW RETRO WHITE BLACK</div>
            <div class="info">
              <div class="price">$5,920</div>
              <div class="result">已售出54</div>
            </div>
          </a>
          <a href="#" class="product">
            <img src="https://picsum.photos/200/180" alt="product">
            <div class="title">KICKASS Nike DUNK LOW RETRO WHITE BLACK</div>
            <div class="info">
              <div class="price">$5,920</div>
              <div class="result">已售出54</div>
            </div>
          </a>
          <a href="#" class="product">
            <img src="https://picsum.photos/200/180" alt="product">
            <div class="title">KICKASS Nike DUNK LOW RETRO WHITE BLACK</div>
            <div class="info">
              <div class="price">$5,920</div>
              <div class="result">已售出54</div>
            </div>
          </a>
          <a href="#" class="product">
            <img src="https://picsum.photos/200/180" alt="product">
            <div class="title">KICKASS Nike DUNK LOW RETRO WHITE BLACK</div>
            <div class="info">
              <div class="price">$5,920</div>
              <div class="result">已售出54</div>
            </div>
          </a>
          <a href="#" class="product">
            <img src="https://picsum.photos/200/180" alt="product">
            <div class="title">KICKASS Nike DUNK LOW RETRO WHITE BLACK</div>
            <div class="info">
              <div class="price">$5,920</div>
              <div class="result">已售出54</div>
            </div>
          </a>


          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="orange-box"></div>
      <div class="information">
        
        <div class="container">
          <div class="info">
            <ul class="client">
              <li class="title">客服中心</li>
              <li><a href="#">幫助中心</a></li>
              <li><a href="#">蝦皮商城</a></li>
              <li><a href="#">付款方式</a></li>
              <li><a href="#">蝦皮錢包</a></li>
              <li><a href="#">蝦幣</a></li>
              <li><a href="#">運費補助</a></li>
              <li><a href="#">退貨退款</a></li>
              <li><a href="#">延長訂單撥款</a></li>
              <li><a href="#">聯絡客服</a></li>
              <li><a href="#">防詐騙宣導</a></li>
            </ul>
            <ul class="info-about">
              <li class="title">關於蝦皮</li>
              <li><a href="#">加入我們</a></li>
              <li><a href="#">蝦皮條款</a></li>
              <li><a href="#">隱私權政策</a></li>
              <li><a href="#">蝦皮商城</a></li>
              <li><a href="#">賣家中心</a></li>
              <li><a href="#">限時特價</a></li>
              <li><a href="#">聯絡媒體</a></li>            
            </ul>
            <div class="pay">
              <div class="title">付款</div>
              <div class="logo-bar">
                <img src="../img/Mastercard-logo.svg.png" alt="logo" style="width:40px">
                <img src="../img/jcb-logo.png" alt="logo" style="width:40px;position:relative;bottom:7px">
                <img src="../img/visa.png" alt="logo" style="width:50px; position:relative; top: 5px">
              </div>
              <div class="title special">物流合作</div>
              <div class="logo-bar">
                <img src="../img/7-eleven-logo.png" alt="logo" style="width:60px">
                <img src="../img/FamilyMart.png" alt="logo" style="width:80px; position:relative; top:10px; margin-left: 10px">
                <img src="../img/hi-life-logo.png" alt="logo" style="width:30px; margin-left:10px">
              </div>
              <div class="logo-bar" style="margin-top:10px">
                <img src="../img/下載.jpg" alt="logo">
                <img src="../img/okmart.png" alt="logo" style="margin-left:10px">
              </div>
            </div>
            <ul class="social-media">
              <li class="title">關注我們</li>
              <li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="#"><i class="fab fa-instagram-square"></i> Instagram</a></li>
              <li><a href="#"><i class="fab fa-line"></i> Line</a></li>
              <li><a href="#"><i class="fab fa-linkedin"></i> Linkedin</a></li>
              <li><a href="#"><i class="fas fa-lightbulb"></i> 蝦皮輯部落格</a></li>
            </ul>
            <ul class="download">
              <li class="title">下載蝦皮</li>
              <li><a href="#"><img src="../img/qrcode.png" alt="logo" style="width:70px;border:solid 1px gray;padding:4px"></a></li>
              <li><a href="#"><img src="../img/apple.png" alt="logo" style="width:70px; margin-top:10px"></a></li>
              <li><a href="#"><img src="../img/google.png" alt="logo" style="width:70px"></a></li>
              <li><a href="#"><img src="../img/appgallery.png" alt="logo" style="width:70px"></a></li>
            </ul>
          </div>
          <div class="about">
            <h3>2022 Shopee.版權所有。</h3>
            <ul>
              <li>新加坡</li>
              <li>印尼</li>
              <li>台灣</li>
              <li>泰國</li>
              <li>馬來西亞</li>
              <li>越南</li>
              <li>菲律賓</li>
              <li>巴西</li>
              <li>墨西哥</li>
              <li>哥倫比亞</li>
              <li>智利</li>
              <li>波蘭</li>
              <li>西班牙</li>
              <li>法國</li>
              <li>印度</li>
              <li>阿根廷</li>
            </ul>
          </div>

          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$regular-font-size:14px;
$gray-color:#333333;
$gray-transparency:rgb(146, 146, 146,0.2);
$background-color:rgb(245, 245, 245);
$orange: #f6412d;

// 全域設定

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;  
}

a {
  text-decoration: none;
}
  
.container {  //設定整體頁面寬度
    width:1200px;
    margin-right: auto;
    margin-left: auto;
  }

img {
  vertical-align: top;  
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: $background-color;
}

// content

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transform: translateZ(0);
  z-index: 100;
  
  .nav {
    padding-top: 10px;
    display: flex;
    font-size: $regular-font-size;
    font-weight: bold;
  }

  .nav-left,.nav-right {
    flex:1;
    ul {
      margin-right: -10px;
      margin-left: -10px;
    }
  }

  .nav-left {
    text-align: left;
    .plus1::after {
      content: '';
      border-left: solid 1px rgb(255, 255, 255, .5);
      position: relative;
      right: 35px;
    }
    .plus2::after {
      content: '';
      border-left: solid 1px rgb(255, 255, 255, .5);
      position: relative;
      right: 65px;
    }
  }

  .nav-right {
    text-align: right;
  }

  li {
    color: white;
    a {
      color: white;
    }
  }

  .social-media {
    margin-left: -5px;
    svg {
      margin-right: 7px;
    }
  }

  .gradient {
    padding: 0px;
    margin-top: 0;/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f6412d+0,fe6433+100 */
    background: #f6412d; /* Old browsers */
    background: -moz-linear-gradient(top,  #f6412d 0%, #fe6433 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #f6412d 0%,#fe6433 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #f6412d 0%,#fe6433 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6412d', endColorstr='#fe6433',GradientType=0 ); /* IE6-9 */
  }
}

.content {
  padding-top: 121.2px;
}

.search-bar {
  display: flex;
  padding-top: 20px;
  

  .logo,.search,.shopping-car {
    flex:1;
  }

  .search {
    width: 840px;
  }

  .shopping-car {
    display: flex;
    flex: 1 0 0;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 20px;
    }
  }

  .logo {
    text-align: left;
    padding-right: 30px;
  }

  input {
    flex: 1;
    width:760px;
    height:30px;
    border: white;
    border-radius: 3px;
    font-weight: bold;
  }

  ul{
    font-size: 10px;
    text-align: left;
    margin: 3px -5px;
    opacity: 0.9;
    li{
      margin: 5px;
      font-weight: bold;
    }
  }

  
  .search-bar-text {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 3px;
    border-radius: 3px;
    box-sizing: border-box;
    width: 840px;

    button {
      font-size: 16px;
      color: white;
      background:$orange;
      border:solid $orange;
      height: 34px;
      width: 60px;
      box-sizing: border-box;
      border-radius: 3px;
    }
  }
}

.activity {
  background-color: white;
  padding-bottom: 1px;

  .image-bar {
    padding-top: 30px;
  }

  .images {
    display: flex;
    height: 235px;
  }

  .image-left {
    flex: 2 1 0;
    border-top-right-radius:2px;
  }

  .image-right {
    flex: 1 1 0;
    margin-left:5px;
    .one {
      margin-bottom: 5px;
    }
  }

  .link-image {
    flex: 1 1 50%;
    display: block;
  }

  .full-image {
    // background-image: url(https://picsum.photos/400/115);
    background-image: url(../img/img02.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    width: 400px;
    height: 115px;
    border-radius:3px;
    &.three {
      background-image: url(../img/img03.jpg);
    }
  }

  .main-full-image {
    width: 795px;
    height: 235px;
    background-image: url(../img/img01.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius:3px;
  }
  
  .categories{
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    
    .icon {
      font-size: 25px;
    }

    svg {
      width: 25px;
      height: 25px;
      border: solid 1px rgb(146, 146, 146,0.2);
      padding: 6px;
      border-radius: 6px;
      margin: 10px 10px 5px 10px;
    }

    a {
      display: block;
      color: $gray-color;
      font-weight: bold;
    }

    .categories-detail {
      flex: 1 1 0;
      font-size: $regular-font-size;
      color: rgb(8, 59, 153)
    }        
  }

}

.event {
  margin-top: 30px;

  .main-image {
    width: 1200px;
    height: 220px;
    background-image: url(../img/img04.jpg);
  }

  .info {
    background-color: rgb(184, 50, 33);
    display: flex;
    padding: 15px 0;

    span {
      flex: 1;
      text-align: left;
      margin-left: 25px;
      color: white;
      font-size: 16px;
      font-weight: bold;
    }

    .link {
      flex: 1;
      text-align: right;
      margin-right: 25px;
      a {
        color: white;
        font-size: 10px;
        font-weight: bold;
      }
    }
  }

  .products-full {
    background-color: rgb(184, 50, 33);
    padding-bottom: 30px;
  }

  .products-little {
    display: flex;
    box-sizing: border-box;
    padding: 0 15px;
  }

  .product {
    flex: 1 1 0;
    background-color: white;
    border: solid 1px rgb(184, 50, 33);

    .product-detail {
      box-sizing: border-box;
      padding: 15px;
      display: flex;
      flex-direction:column;
      align-items:center;
      color: black;
      font-weight: bold;
      font-size: 18px;
    }

    .logo {
      display: flex;
      align-items:center;
      justify-content:center;
      position: relative;
      top:-25px;
      background-color: white;
      font-size: 25px;
      width: 120px;
      height: 50px;
      border: solid 1px rgb(146, 146, 146,0.2);
      border-radius: 30px;
    }

  }
}


.categoryies-detail {
  width: 1200px;
  background-color: white;
  margin-top: 30px;

  .container{
    position: relative;  
  }

  .title {
    padding: 10px 0;
    border:solid 1px $background-color;
  }

  h3{
      text-align: left;
      margin-left: 30px;
      color: $gray-color;
      font-size: 16px;
  }
  
  .categoryies-part {
    display: flex;


    .product {
      flex: 1 1 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 150px;
      color: black;
      border: solid 1px $background-color;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      font-size: 40px;
      background-color: rgb(146, 146, 146, .2);
      border-radius: 30px;
    }
    
    .info {
      font-weight: bold;
      margin-top: 10px;
      font-size: $regular-font-size;
    }

  }
  
  .arrow {
    width: 25px;
    height: 25px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -10px;
    top: 185px;
    background-color: white;
    border: solid 1px $background-color;
    border-radius: 12.5px;
    color: $gray-color;
  }


  

}

.sale {
  margin-top: 30px;
  background-color: white;
  padding: 10px 0;

  .title-bar {
    display: flex;
  }

  .sale-title {
    flex: 1 1 0;
    background-image: url(../img/img05.jpg);
    background-repeat: no-repeat;
    width: 220px;
    height: 40px;
  }

  .info {
    display: flex;
    align-items: center;
    text-align: right;
    margin-right: 15px;
    color: $orange;
    font-weight: bold;
    font-size: $regular-font-size;
  }

  .product-bar {
    display: flex;
  }

  .product {
    flex: 1 1 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
  }

  .sale-off {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgb(255, 217, 63, .8);
    color: $orange;
    font-weight: bold;
  }

  .price {
    margin-top:10px;
    color: $orange;
    font-weight: bold;
    font-size: 20px;
  }

  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 155px;
    height: 15px;
    font-weight: bold;
    font-size: 10px;
    position: relative;

    span {
      flex: 1 1 0;
      display: block;
      position: absolute;
      color: white;
    }

    .percent-bar {
      display: flex;
      flex: 1 1 0;
      width: 155px;
      border-radius: 10px;
      text-align: center;
    }

    .full-bar {
      flex: 1 1 0;
      background-color: $orange;
      opacity: 0.5;
      border-radius:0 10px 10px 0;
    }
    .percent {
      flex: 1 1 0;
      background-color: $orange;
      border-radius:10px 0 0 10px;
    }
  }

}

.little-event {
  margin-top: 30px;

  .image-bar {
    display: flex;
    justify-content:space-between;
  }
  
  img {
    display: block;
    flex: 0 1 0;
    width: 390px;
    border-radius: 10px;
  }

}

.shopping-mall {
  background-color: white;
  margin-top: 30px;
  .title-main {
    display: flex;
    padding: 15px 0;
    border:solid 1px $background-color;
  }

  .info {
    display: flex;
    flex: 1;
    text-align: left;
    margin-left:10px;
    color: black;
    font-weight: bold;

    a {
      color: $orange;
    }

    svg {
      color: $orange;
      font-size: 14px;
      margin-right: 5px;
    }

  }

  .right {
      color: $orange;
      font-weight: bold;
      font-size: $regular-font-size;
      margin-right: 10px;
  }

  .product-bar {
    display: flex;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .line {
    display: flex;
    justify-content: space-around;
    flex: 1 1 0;
  }

  .product {
    font-weight: bold;
    color:$orange;
  }

  .full-image {
    flex: 0 1 0;
  }

  .products-all {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
  }

  .product-detail {
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    
  }

  .logo {
    display: flex;
    align-items:center;
    justify-content:center;
    position: relative;
    top:-10px;
    background-color: white;
    font-size: 25px;
    width: 120px;
    height: 50px;
    border: solid 1px rgb(146, 146, 146,0.2);
    border-radius: 30px;
    svg {
      color: black;
    }
  }

}

.keyword {
  background-color: white;
  margin-top: 30px;

  .title-main {
    display: flex;
    padding: 15px 0;
    border:solid 1px $background-color;
    align-items: center;
    h3,h2 {
      display: block;
      
    }
    h2 {
      flex: 1 1 0;
      text-align: left;
      font-weight: bold;
      text-align: left;
      margin-left: 10px;
      color: $gray-color;
      font-size: 16px;
    }

    h3 {
      margin-right: 10px;
      font-size: 10px;
      color: $orange;
    }
  }

  .product-bar {
    display: flex;
  }

  .product {
    display: flex;
    text-align: left;
    flex: 1 1 0;
    border: solid 1px $background-color;
  }

  .info {
    margin-top: 10px;
    width: 115px;
    box-sizing: border-box;
    padding: 0 10px;

    h3 {
      font-size: 14px;
      font-weight: bold;
      color: #333333;
    }

    h4 {
      font-size: 10px;
      color: #333333;
    }
  }

}

.hottest-product {
  background-color: white;
  margin-top: 30px;
  padding-bottom: 10px;

  .title-main {
    display: flex;
    padding: 15px 0;
    border:solid 1px $background-color;
    align-items: center;
    h3,h2 {
      display: block;
      
    }
    h2 {
      flex: 1 1 0;
      text-align: left;
      font-weight: bold;
      text-align: left;
      margin-left: 10px;
      color: $gray-color;
      font-size: 16px;
    }

    h3 {
      margin-right: 10px;
      font-size: 10px;
      color: $orange;
    }
  }

  .product-bar {
    display: flex;
  }

  .product {
    margin-top: 10px;
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
  }

  .top {
    position: absolute;
    line-height: 2;
    background-color: $orange;
    color: white;
    width: 40px;
    height: 40px;
    text-align: center;
    top: 0;
    right: 0;
  }

  img {
    width: 100%;
  }

  .box {
    color: white;
    background-color: rgb(146, 146, 146,0.8);
    width: 80%;
    position: relative;
    bottom: 20px;
    width: 150px;
    height: 20px;
    font-weight: bold;
    font-size: 10px;
  }

  .info {
    font-weight: bold;
    margin-top: -10px;
  }
  

}

.new-discovery {
  .container {
    margin-top: 30px;
    display: flex;
    background-color: white;
  }

  .title-block {
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 200px;
    line-height: 3;
    height: 55px;
    text-align: center;
    color: $orange;
    font-weight: bold;
  }

  .orange-box {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 5px;
    background-color: $orange;
    &.none {
      background-color: white;
    }
  }
}

.discovery-items {
  .container {
    margin-top: 30px;
    padding-bottom: 30px;
  }

  .product-line {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }

  .product {
    width: 190px;
    background-color: white;
    img {
      width: 100%;
    }
  }

  .title {
    color: black;
    font-weight: bold;
    box-sizing: border-box;
    padding: 10px 10px 5px 10px;
    font-size: 12px;
    text-align: left;
  }
  
  .info {
    display: flex;
    box-sizing: border-box;
    padding: 10px 10px;
    justify-content: center;
  }

  .price {
    flex: 1 1 0;
    text-align: left;
    color: $orange;
  }

  .result {
    font-size: 6px;
    color: gray;
  }
}

.footer {
  .orange-box {
    width: 100%;
    height: 3px;
    background-color: $orange;
    
  }

  .information {
  background-color: $background-color;
  padding-top: 30px;

  .info {
    display: flex;

    img {
      width:50px;
      height: auto;
    }
  
    ul {
      flex-direction: column;
      display: flex;
      text-align: left;
      flex: 1 1 0;
      font-size: 10px;
      line-height: 2;
    }

    .pay{
      width: 20%;
      text-align: left;
    }

    li {
      &.high {
        margin-top: 7px;
      }
    }

    a {
      color: $gray-color;
    }
  }

  .title {
    font-weight: 800;
    font-size: 14px;
    color: $gray-color;
    margin-bottom: 10px;
    &.special {
      margin-top: 5px;
    }
  }

  .about {
    padding-top: 30px;
    display: flex;
    padding-bottom: 30px;
    h3 {
        
      font-size: 14px;
      color: gray;
      text-align: left;
      flex: 1 1 0;
    }

    ul {
      text-align: right;
      flex: 3 1 0;
      font-size: 12px;
    }

    li {
      font-weight: bold;
      margin: 0 5px;
    }
  }

  svg {
    color: gray;
    font-size: 20px;
  }

  .social-media {
    svg {
      font-size: 15px;
    }
  }

}

}


</style>