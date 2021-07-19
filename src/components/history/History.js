import React from "react";
import "./History.scss";
import { Search } from "@material-ui/icons";

const History = () => {
  //     <div className={classes.margin}>
  //     <Grid container spacing={1} alignItems="flex-end">
  //       <Grid item>
  //         <AccountCircle />
  //       </Grid>
  //       <Grid item>
  //         <TextField id="input-with-icon-grid" label="With a grid" />
  //       </Grid>
  //     </Grid>
  //   </div>

  return (
    <div className="history">
      <div className="historyLeft">
        <h3 className="historyHeader">Watch History</h3>
        <h3 className="historyLeftHeader">Today</h3>
      </div>
      <div className="historyRight">
        <div className="historyRightInput">
          <Search className="historyRightIcon" />
          <input className="historyInput" placeholder="Search watch history" />
        </div>
      </div>
    </div>
  );
};

export default History;
