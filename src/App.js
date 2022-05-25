import React, { useState } from "react";

import Timer from "./component/timer";

function App() {
  // const [loginstatus, updteLoginstatus] = useState(false);
  // function Getstatus(status) {
  //   updteLoginstatus(status);
  // }

  return (
    <div>
<Timer/>

      {/* <Contxt.Provider value={{loggedIn:false}}>
        {!loginstatus && <Login sendStatustoapp={Getstatus} />}
        {loginstatus &&
          Movie.map((Film) => {
            return (
              <Imbd
                Moviename={Film.Moviename}
                Path={Film.Path}
                rating={Film.rating}
                Link={Film.link}
              />
            );
          })}
      </Contxt.Provider> */}
    </div>
  );
}

export default App;
// every component functn shoould be first letter  capital
