let news = []
const getLatestNews = async() =>{
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=2`);
    let header = new Headers({'x-api-key':'-fIDpXUF81skKM2eP6e_kum9X70N5Ik1AjR_vrSorUk'})

    let response = await fetch(url,{headers:header});
    let data = await response.json();
    console.log("this is data", data);
    news = data.articles;
    console.log(news);
}

getLatestNews();