import React from "react";
import { Graph } from "./components/graph";
import { Betting } from "./components/betting";
import { UserHistory } from "./components/userHistory";
import { BetHistory } from "./components/betHistory";
import "./index.css";

function Homeview() {
  return (
    <>
      <div className="_wrapper_1cwmz_19 h-screen">
        <div className="_gameDisplay_1cwmz_32">
          <Graph />
        </div>
        <div className="_betControls_1cwmz_32">
          <Betting />
        </div>
        <div className="_bottomPanel_1cwmz_100">
          <BetHistory />
        </div>
        <div className="_rightPanel_1cwmz_32">
          <UserHistory />
          <div className="table-responsive">
            <table className="_playerListStatsTable_93izl_5">
              <tr>
                <td>online: -</td>
                <td>Playing: -</td>
                <td>Betting: -</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homeview;
