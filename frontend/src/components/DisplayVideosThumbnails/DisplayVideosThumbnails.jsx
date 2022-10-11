
const DisplayVideosThumbnails = (props) => {
    return ( 
        
        <div>
            <h1>Related Videos</h1>
            {props.videos.map((item) => {
              return (
  

                <div>

                  <p>{item.snippet.title}</p>
                  {/* make onClick buttons */}
                  <img src = {item.snippet.thumbnails.medium.url} width = {item.snippet.thumbnails.medium.width} height = {item.snippet.thumbnails.medium.height}/>
                </div>

              )
            })}
        </div>
    
     );
}
 
export default DisplayVideosThumbnails;