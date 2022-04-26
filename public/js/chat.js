console.log("abc");

const socket = io("/", {
  auth: {
    token: "",
    userName: "name"
  },
});

document.getElementById("form-messages").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = document.getElementById("input-messages").value;
  socket.emit("send-message", message, (error) => {
    if (error) {
      return alert("empty mess");
    }
    console.log(error);
  });
});
socket.on("receive-message", (message) => {
  console.log({ messageReceive: message });
});
socket.on("refresh-user", (arrUser) => {
  if (Array.isArray(arrUser)) {
    const html = arrUser
      .map((element) => ` <li class="app__item-user">${element.user}</li>`)
      .concat(" ");
    document.getElementById("user-list-by-room").innerHTML = html;
    console.log({ messageReceive: arrUser });
  }
});
