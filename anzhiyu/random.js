var posts=["2024/10/27/666/","2024/11/23/etahzdngxfmsjau5yWEGDxfh,viug9tfsaye/","2024/10/20/hello-world/","2024/10/27/hello/","2024/11/30/hexo网站/","2024/11/23/jmg/","2024/11/09/今天/","2024/11/29/华为手机助手---1/","2024/12/20/无语大事件 - 副本/","2024/11/16/无语大事件/","2024/11/16/那些winxp里的一些东西（怀旧）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };