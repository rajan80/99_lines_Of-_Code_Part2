let Sing = document.getElementById("button");
Sing.addEventListener("click", function () {
  let friends = ["Ram", "Sita", "Roma", "Amit", "Heena"];

  for (let i = 0; i < friends.length; i++) {
    let friend = document.createElement("div");
    friend.classList.add("friends");
    let friendh3 = document.createElement("h3");

    friendh3.textContent = friends[i];
    friend.appendChild(friendh3);
    document.body.appendChild(friend);

    for (let j = 99; j >= 1; j--) {
      let newline= document.createElement("p");
      friend.appendChild(newline);

      if (j === 2) {
        newline.textContent =
          j +
          " lines of code in the file, 2 lines of code; " +
          friends[i] +
          " strikes one out, clears it all out, 1 line of code in the file";
      } else if (j === 1) {
        newline.textContent =
          j +
          " line of code in the file, 1 line of code; " +
          friends[i] +
          " strikes one out, clears it all out, no more lines of code in the file";
      } else {
        newline.textContent =
          j +
          " lines of code in the file, " +
          j +
          " lines of code; " +
          friends[i] +
          " strikes one out, clears it all out, " +
          (j - 1) +
          " lines of code in the file";
      }
    }
  }
});
