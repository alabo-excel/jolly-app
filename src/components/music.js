import './styles.css'
import Rating from "./rating"

function Music(props) {
  console.log(props)
  if(props.music == null){
    return(
      <div className="App d-flex justify-content-center pt-5">
        <div className="spinner-grow " role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }else{
    const musics = props.music.map(music =>{
        return(
          <div key={music.title} className="card col-lg-3 col-sm-12 mx-lg-5 mt-3">
            <div className="card-body d-flex">
              <img src={music.image} alt={music.title}/>
              <div className="pl-3">
                <h6> {music.title}</h6>
                <p>{music.director}</p>
                <p>{music.year}</p>
                <p>{music.genre}</p>
                <Rating />
              </div>
            </div>
          </div>
        )
      })
    return(
      <div className="App">
        <div className="row p-4">
          {musics}
        </div>
      </div>
    )
  }
}

export default Music;
