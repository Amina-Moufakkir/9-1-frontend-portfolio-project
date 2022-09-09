const BASE_URL = "https://api.github.com/";


fetch(`${BASE_URL}users/amina-moufakkir`)
.then((res) => res.json())
.then((res) => console.log(res))
.catch((err) => console.log(err));
