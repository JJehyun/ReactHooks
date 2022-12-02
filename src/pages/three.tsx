import { useEffect, useRef, useState } from "react";
 
//video 실행, 멈춤 , 제거 예제
 function Three() {
 const videoRef = useRef<HTMLVideoElement>(null);
 const playVideo = () => {
    if(videoRef.current)
    videoRef.current.play();
    /* 3. 버튼 클릭으로 비디오 재생을 제어하거나 */
  };

  const pauseVideo = () => {
    if(videoRef.current){
    videoRef.current.pause();
    videoRef.current.remove();}
    /* 4. 비디오 재생을 멈출 수도 있다. */
  };


        return (
            <div className="App">
            <div>
              <button onClick={playVideo}>Play</button>
              <button onClick={pauseVideo}>Pause</button>
            </div>
            <video ref={videoRef} width="320" height="240" controls>
              /* 2. 비디오 태그의 ref 속성에 해당 변수를 할당하면 */
              <source
                type="video/mp4"
                src="https://player.vimeo.com/external/544643152.sd.mp4?s=7dbf132a4774254dde51f4f9baabbd92f6941282&profile_id=165"
              />
            </video>
          </div>
        );
      }

export default Three;
