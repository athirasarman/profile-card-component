import "./App.css";
import topImage from "./assets/images/bg-pattern-top.svg";
import bottomImage from "./assets/images/bg-pattern-bottom.svg";
import banner from "./assets/images/bg-pattern-card.svg";
import avatar from "./assets/images/image-victor.jpg";

function App() {
  return (
    <main className="App">
      <img src={topImage} className="top-image" alt="top background"></img>
      <img src={bottomImage} className='bottom-image' alt="bottom background"></img>
      <div className="profile-card">
        <img src={banner} className="banner" alt="banner"></img>
        <div className="avatar">
          <img src={avatar} className="banner" alt="avatar"></img>
        </div>
        <div className="details">
          <div className="title">
            Victor Crest <span className="age">26</span>
          </div>
          <div className="location">London</div>
        </div>
        <div className="media-details">
          <div className="detail">
            <div className="title">80K</div>
            <div className="media-tag">Followers</div>
          </div>
          <div className="detail">
            <div className="title">803K</div>
            <div className="media-tag">Likes</div>
          </div>
          <div className="detail">
            <div className="title">1.4K</div>
            <div className="media-tag">Photos</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
