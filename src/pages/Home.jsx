import React from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Row from "../components/Row";

import requests from "../Requests";

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Row
        rowId="1"
        title="Prochainement"
        fetchUrl={requests.requestUpcoming}
      />
      <Row rowId="2" title="Populaire" fetchUrl={requests.requestPopular} />
      <Row rowId="3" title="À la une" fetchUrl={requests.requestTrending} />
      <Row
        rowId="4"
        title="Les mieux notés"
        fetchUrl={requests.requestTopRated}
      />
      <Row rowId="5" title="Horreur" fetchUrl={requests.requestHorror} />
    </div>
  );
}

export default Home;
