// Portfolio page.
    
    const div = document.getElementById('github');
	const portfolio = document.getElementById("portfolio");

    const github = document.createElement('div');
	github.textContent = `
	<p><a href="https://github.com/aminamoufakkir">View my GitHub Profile</a></p>
	`
	div.append(github);
	github.hidden = true;
 function render (data) {
	github.innerHTML =
		`<div class="gh-grid">
			<div class="gh-avatar">
				<p><img alt="github picture" src="${data.avatar_url}" style= "height:200px;"></p>
			</div>
			<div class="gh-details">
				<p>
					<strong>${data.name}</strong><br>
					<em>${data.location}</em><br>
                    <em>${data.company}</em><br>
					<a href="${data.url}" class="public">${data.public_repos} public repos</a>
				</p>
			</div>
            <div class="gh-bio">
            <p>${data.bio}</p>
            </div>
		</div>`;
}


const BASE_URL = "https://api.github.com/";

portfolio.addEventListener("click", () => {
	github.hidden = false;
	const info = document.querySelector('.info');
	const myPic = document.querySelector('.my-pic');
	const homeIcon = document.querySelector(".active i");
	info.hidden = true;
	myPic.hidden = true;
	homeIcon.style.color = "purple";

fetch(`${BASE_URL}users/amina-moufakkir`) 
.then((res) =>  res.json())

.then((data) => {
    console.log(data);
    return render(data);
})
.catch((err) => console.warn(err));

});

