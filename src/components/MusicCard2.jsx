import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const MusicCards = () => {
  const [music, setMusic] = useState([]);
  const baseEndpoint = " https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem";
  useEffect(() => {
    getMusic();
  }, []);
  const getMusic = async () => {
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const { data } = await response.json();
        setMusic(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="text-white">Eminem</h2>
      <div className="d-flex">
        {music.slice(0, 4).map((song) => (
          <Card
            key={song.id}
            className="bg-transparent border-0 my-5 mx-3"
            xs={11}
            md={6}
            xl={3}
            style={{ width: "15rem" }}
          >
            <Card.Img variant="top" src={song.artist.picture} />
            <Card.Body className="text-center">
              <Card.Text className="text-white">Track: {song.title} </Card.Text>
              <Card.Text className="text-white">Artist: {song.artist.name} </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default MusicCards;
