import React, { useEffect, useState } from "react";
import customAxios from "../../util/axios";
import {Button} from '../../components/Button/Button';
import { Link } from "react-router-dom";
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';
import './Graph.css';
function Graph() {

  const [data, setData] = useState([]);
    
useEffect(() => {
    customAxios.get("/outlets/1/averages/hourly").then(
      (result) => {
        console.log(result.data.outlets);
        console.log("data: "+ data);
        setData(result.data.outlets);
      },
      (error) => {
      }
    );
  }, []);

    console.log(data);
  

    return (
        <div className="container">
            <h1>Graph</h1>
            <div className="container--graph">
            <div className="graph">
        <XYPlot height={500} width={900}>
        <VerticalGridLines style={{strokeWidth: 2}}  />
<HorizontalGridLines   />
<XAxis title="Time in Hours" style={{  line: {stroke: '#fff'}}}/>
<YAxis  title="Average WATT per hour"  />
          <LineSeries data={data}   style={{strokeWidth: 5}} />
        </XYPlot>
      </div>            
      </div>
            <Link to="/"><Button >Daily Average</Button></Link>
            <Link to="/"><Button >Weekly Average</Button></Link>
        </div>
    )
}

export default Graph
