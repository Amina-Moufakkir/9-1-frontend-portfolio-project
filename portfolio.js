const BASE_URL = `https://api.github.com/`;
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const div = document.getElementById("user");

fetch(`${BASE_URL}users/Amina-Moufakkir`)
  .then((res) => res.json())
  .then((res) => {
    console.log(res.status);
    console.log(res)
    createProfile(res, div);

  })
  .catch((err) => console.log(err));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  fetch(`${BASE_URL}users/`+user)
    .then((res) => res.json())
    .then((res) => {
        if (res.message){
            alert("User Profile Not Found");
        } else {
        form.reset();
        createProfile(res, main);
      main.innerHTML = github;
        }
        
    })
    .catch((err) => console.log(err));
});


function createProfile(username, element) {
   
   const github = `<div>
     <img alt="" src="${username.avatar_url}" class="gh__avatar"></a>
 </div>
 <div class="user__info">
     <h2>${username.name}</h2>
     <p>${username.bio}
     </p>
     <ul>
         <li>${username.followers}<strong>Followers</strong></li>
         <li>${username.following}<strong>Following</strong></li>
         <li>${username.public_repos} <strong>Repositories</strong></li>
     </ul>

     
     <div id="repos"></div>
 </div>
</div>`;
    element.innerHTML = "";
    element.innerHTML = github; 
}

