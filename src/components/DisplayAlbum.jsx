import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { albumsData, assets } from "../assets/assets";


const DisplayAlbum = () => {

    const { id } = useParams();
    // console.log(id);

    const albumData = albumsData[id];
    // console.log(albumData)
 
  return (
    <>
        <Navbar />
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
            <img className="w-40 rounded" src={albumData.image} alt="img pic" />
            <div className="flex flex-col">
                <p>Playlist</p>
                <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className="mt-1">
                    <img className="inline-block w-5" src={assets.spotify_logo} alt="img pic" />
                    <b>Spotify</b>
                    • 1,342,564 likes
                    • <b>50 songs,</b>
                    about 2 hr 30 min
                </p>
            </div>
        </div>
    </>
  )
}

export default DisplayAlbum
