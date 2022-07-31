const socket = io.connect("https://ekim-botlist.glitch.me/");

socket.on('userCount', userCount => {
        document.getElementById('connectionCount').innerHTML = userCount;
  })