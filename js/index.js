const talkButton = document.getElementById('talk-button');
talkButton.onclick = async () => {
  // connectionState not supported in firefox
  //curl -X 'POST' \
  // 'http://127.0.0.1:9000/voiceChat' \
  // -H 'accept: application/json' \

//   const url = 'http://127.0.0.1:9000/voiceChat';
//   const talkResponse = await fetch(`${url}`,
//       {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' }
//       });

//       if(talkResponse != null){

//     }
const talkVideo = document.getElementById('talk-video');
talkVideo.setAttribute('src', 'mp4/welcome.mp4');

}

const talkVideo = document.getElementById('talk-video');
talkVideo.addEventListener('ended',function(){
    console.log("播放结束");
    talkVideo.setAttribute('src', 'mp4/defult.mp4');
},false);

talkVideo.addEventListener('playing',function(){
    console.log("播放中");
},false);
