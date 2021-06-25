import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";

function SellerDashboard() {
  const [curr, setCurr] = useState("");

  return (
    // <div className="row">
    //   <div className="col-lg-2 backimage sidebar d-flex flex-column">
    //     <center>
    //       {/* <h5 className="fontsize" mt-5 onClick={() => setCurr("Body")}>
    //         <Typography>Items</Typography>
    //       </h5> */}
    //       <br />
    //       <h5 className="fontsize" mt-5 onClick={() => setCurr("AddItems")}>
    //         Add Items
    //       </h5>
    //       <br />
    //       <h5 className="fontsize" mt-5 onClick={() => setCurr("Items")}>
    //         Items
    //       </h5>
    //       <h5 className="fontsize" mt-5 onClick={() => setCurr("Orders")}>
    //         Orders
    //       </h5>
    //     </center>
    //   </div>
    //   <div className="col-lg-10">
    //     {curr === "Items" ? <Items /> : null}
    //     {curr === "AddItems" ? <AddItems /> : null}
    //     {curr === "Orders" ? <Orders /> : null}
    //   </div>
    // </div>
    "Welcome to dashbaord"
  );
}

export default SellerDashboard;
