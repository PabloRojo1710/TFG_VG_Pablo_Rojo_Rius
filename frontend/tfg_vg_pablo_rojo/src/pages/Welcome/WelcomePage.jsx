import logs_img from "../../static/logs_img.webp";
import players_img from "../../static/players_img.webp";
import settings_img from "../../static/settings_img.webp";
import tables_img from "../../static/tables_img.webp";

const WelcomePage = ({navWidth }) => {
  /*
  <a href="/players">
          <article className="home-page-card">
            <img src={players_img} alt="players page"></img>
            <section>
              <h3 style={{ margin: 0 }}><strong>Players Page</strong></h3>
              <h5 style={{ margin: 0 , fontWeight: "normal"}}>This will be the description</h5>
            </section>
          </article>
        </a>
  */
    return (
      <div className="page-main" style={{ marginLeft: navWidth }}>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px'}}>
        <h1 style={{ margin: 0 }}><strong>Welcome to your administrator page!</strong></h1>
        <h3 style={{ margin: 0 , fontWeight: "normal"}}>In this website you will be able to manage all the leaderboards regarding your games.</h3>
       </div>
       <div className="home-page-card-container">
        <a href="/tables">
          <article className="home-page-card">
            <img src={tables_img} alt="tables page"></img>
            <section>
              <h3 style={{ margin: 0 }}><strong>Tables Page</strong></h3>
              <h5 style={{ margin: 0 , fontWeight: "normal"}}>In this section, you will be able to see all the puntuation tables</h5>
            </section>
          </article>
        </a>
        <a href="/logs">
          <article className="home-page-card">
            <img src={logs_img} alt="logs page"></img>
            <section>
              <h3 style={{ margin: 0 }}><strong>Logs Page</strong></h3>
              <h5 style={{ margin: 0 , fontWeight: "normal"}}>In this section, you will be able to see all the activity</h5>
            </section>
          </article>
        </a>
        <a href="/settings">
          <article className="home-page-card" style={{alignSelf: "center"}}>
            <img src={settings_img} alt="settings page"></img>
            <section>
              <h3 style={{ margin: 0 }}><strong>Settings Page</strong></h3>
              <h5 style={{ margin: 0 , fontWeight: "normal"}}>In this section, you will be able to get your API key to start saving puntuations</h5>
            </section>
          </article>
        </a>
        
       </div>
      </div>
    );
  };
  
  export default WelcomePage;