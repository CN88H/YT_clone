
const DisplayVideosThumbnails = (props) => {
    return ( 
        <table>
        <tbody>
            <h1>Related Videos</h1>
            {props.parentThumbnails.map((thumbnail) => {
              return (
                <tr>
                  <td>{thumbnail.info}</td>
                  <td>{thumbnail.thumbnails}</td>
                </tr>
              )
            })}
        </tbody>
        </table>
     );
}
 
export default DisplayVideosThumbnails;