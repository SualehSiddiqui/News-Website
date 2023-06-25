const mainDiv = document.getElementById("main-div")
let loader = document.getElementById("loader");
// console.log("hello")
let getNews = (topic) => {
    fetch(`https://gnews.io/api/v4/search?q=${topic}&apikey=8123aac2c529560fcf10f65a50226fe2`)
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            loader.style.display = "none";
            mainDiv.innerHTML = "";
            const articles = res.articles;
            for (var i = 0; i < articles.length; i++) {
                let { publishedAt, url, image, title, content, source } = articles[i]
                if (image) {
                    // console.log()
                    // console.log(articles[i]);
                    mainDiv.innerHTML += `
                    <a href="${url}" class="news-link">
                        <div class="news-div">
                            <div class="image-div">
                                <div class="time-div">
                                  <i class="fa-solid fa-clock"></i>
                                  ${moment(publishedAt.slice(0, 10), "YYYY-MM-DD").fromNow()}
                                </div>
                                <img src="${image}" alt="" class="news-image">
                            </div>
                            <div class="news">
                               <h5 class="news-title">
                                    ${title.slice(0, 30)}...
                               </h5>
                                 <div class="hr-line"></div>
                                    <p>${content.slice(0, 150)}....</p>
                            </div>
                            <div class="author-div">
                                <span class="">${source.name ? source.name : "Sualeh"}</span>
                            </div>
                        </div>
                    </a>
                `
                }

            }

        })
        .catch(err => console.log(err));
}

getNews("World Wide");

let searchBar = document.getElementById("search-bar");

let search = () => {
    if (searchBar.value.trim()) {
        loader.style.display = "flex";
        mainDiv.innerHTML = "";
        getNews(searchBar.value);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please type something',
            // footer: '<a href="">Why do I have this issue?</a>'
          })
    }
}

let filter = topic => {
    loader.style.display = "flex";
    mainDiv.innerHTML = "";
    getNews(topic);
}