setInterval(() => {
fetch("http://localhost:4444/api")
.then(res => {
  document.getElementById('rdata').append(JSON.stringify(res));
})
.catch(e => console.error(e));
}, 3000)