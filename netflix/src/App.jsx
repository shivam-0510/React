import React from "react";
import Card from "./Components/Card";
import SDATA from "./SDATA";
let App = () => {
  return (
    <>
      <h1 className="heading_style">List of TV Serials</h1>
      {SDATA.map(
        ((val) => {
          return (
            <Card
              sname={val.name}
              img={val.image_thumbnail_path}
              title={val.network}
              link={val.url}
            />
          );
        })
      )}
    </>
  );
};

export default App;
