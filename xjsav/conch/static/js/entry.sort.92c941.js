(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{35:function(t,i,s){t.exports=s("Mh02")},Mh02:function(t,i,s){"use strict";(function(t){var i=s("TqRt");s("dRSK");var e=i(s("/qSt"));t(function(){var i=t(".J_sortClassList"),s=new e["default"]({bsOptions:{pullUpLoad:!0},template:'<$ if(data && data.length){ $>\n  <$ for(i = 0; i < data.length; i++ ){ $>\n  <$ var item = data[i]; $>\n  <li class="item comic-item">\n    <a href="/<$= utils.getComicId(siteConf,item) $>/" \n        title="<$= item.comic_name $>,<$= item.comic_name.addEnd(\'漫画\') $>">\n      <div class="thumbnail">\n        <img class="img" src="<$= siteConf.staticRoot $>images/comm/space.gif"\n        data-src="<$= utils.formatImgSrc(siteConf, item.comic_id) $>"\n        alt="<$= item.comic_name $>,<$= item.comic_name.addEnd(\'漫画\') $>" />\n        <$ if(item.score){ $>\n        <span class="score"><$= item.score.toFixed(1) $></span>\n        <$ } $>\n        <$ if(item.last_chapter_name){ $>\n        <span class="chapter"><$= item.last_chapter_name $></span>\n        <$ } $>\n      </div>\n      <p class="title"><$= item.comic_name $></p>\n      <$ if(item.desc){ $>\n      <p class="desc"><$= item.desc $></p>\n      <$ } $>\n    </a>\n  </li>\n  <$ } $>\n  <$ } $>'});s.initScorll(),s.$sortSelect.on("click",".hd, .mask",function(){i.addClass("hide"),s.switchSortSelectHd()}),s.$orderList.on("click","li",function(){return s.switchSortSelectHd(),!t(this).hasClass("active")&&(0!==s.Bs.bs.y&&s.Bs.bs.scrollTo(0,0,0),s.numGlobalPage=1,s.$sortSelect.find(".hd .text").text(t(this).text()),t(this).addClass("active").siblings("li").removeClass("active"),s.appendDom(),void s.Bs.unlockPullUp())}),t(".J_sortClassSelect").on("click",function(t){s.hideSortSelect(),i.toggleClass("hide")}),i.on("click",function(t){i.toggleClass("hide")}),s.isEmptyComic&&s.bsOptions.pullUpLoad&&s.Bs.bindPullUp(function(t){s.numGlobalPage+=1,s.appendDom(t)})})}).call(this,s("+2Rf"))}},[[35,0,1]]]);