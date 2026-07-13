(function() {
  const path = window.location.pathname;
  const editingh_ele = document.getElementById("editingh");
  if (path.startsWith("/Blog/posts/") && path != "/Blog/posts/") {
    editingh_ele.hidden = false;
    editingh_ele.href = `https://github.com/qiufengcute/Blog/source/_posts/${path.split("/Blog/posts/")[1].slice(0, -1)}.md/`;
  }
})();
