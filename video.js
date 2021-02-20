const readFromJSON = () => JSON.parse(data);
let videoData = readFromJSON();
const listCnt = document.getElementById('list_cnt');
const mainVideo = document.getElementById('main_video');
const videoTitle = document.getElementById('video_title');
const videoDescription = document.getElementById('video_description');


// videoItem - елемент с JSON
const updateHTMLVideoData = (videoItem) => {

    mainVideo.src = `https://www.youtube.com/embed/${videoItem.url}`
    videoTitle.innerHTML = videoItem.title;
    videoDescription.innerHTML = videoItem.description;
}

updateHTMLVideoData(videoData[0]);

const renderVideoItem = (title, description, videoId) => `
    <li onclick="onVideoItemClick('${videoId}')">
        <p class="content_title">${title}</p>
        <span class="content_description">${description}</span>
    </li>
    `


const renderVIdeoList = () => {

    let htmlItems = '';
    videoData.forEach(videoItem => {
        let htmlItem = renderVideoItem(videoItem.title, videoItem.description, videoItem.url);
        // add new child to parent html
        htmlItems += htmlItem;
    })

    listCnt.innerHTML = htmlItems;
}


renderVIdeoList();


const onVideoItemClick = (videoId) => {
    //ищем по JSON с таким же videoId
    let videoItem = videoData.find(element => element.url == videoId);
    console.log(videoItem);

    updateHTMLVideoData(videoItem);

};

