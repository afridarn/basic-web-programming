document.getElementById("getPosts").addEventListener("click", getPost);

function getPost() {
  fetch("https://digimon-api.vercel.app/api/digimon")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      console.log("data", data);

      data.forEach(function (post) {
        output += `
        <div class="card-item">
        <h3>${post.name}</h3>
        <img src="${post.img}" alt="${post.name}" class="img-item"/>
        <p>${post.level}</p>
        </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}
