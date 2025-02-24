document.getElementById("Post_Comment")?.addEventListener("click", function () {
  //   console.log("post button");

  // @ts-ignore
  const comment = document.getElementById("comment");
  // @ts-ignore
  const newComment = comment.value;

  const commentsContainer = document.getElementById("comments_container");
  //   console.log(commentsContainer);
  const commentElement = document.createElement("p");
  // @ts-ignore
  commentElement.classList.add("comment");
  commentElement.innerText = newComment;
  // @ts-ignore
  commentsContainer.appendChild(commentElement);

  // @ts-ignore
  comment.value = "";
});
