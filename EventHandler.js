// @ts-ignore
document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log("btn clicked");
    const title = document.getElementById("title-text");
    // console.log(title);
    // @ts-ignore
    title.innerText = "Updated Title";
  });

// @ts-ignore
document.getElementById("login_btn").addEventListener("click", function () {
  //   console.log("btn-0");
  const userInfo = document.getElementById("user_info");
  //   console.log(userInfo);
  // @ts-ignore
  userInfo.innerText = "Login succese";
});

// @ts-ignore
document.getElementById("update_btn").addEventListener("click", function () {
  // @ts-ignore
  const InputValue = document.getElementById("your_Name").value;

  const UserName = document.getElementById("User_name");
  // @ts-ignore
  UserName.innerText = InputValue;
});
