import React, { useEffect, useState } from "react";
import customAxios from "../../util/axios";
import {Button} from '../../components/Button/Button';
import { Link } from "react-router-dom";


function Graph() {

    
useEffect(() => {
    customAxios.get("/outlets/1/averages/hourly").then(
      (result) => {
        console.log(result);

      },
      (error) => {
      }
    );
  }, []);

    return (
        <div className="container">
            <h1>Graph</h1>
            <div className="container--graph">
                <h1>Hello you</h1>
            </div>
            <Link to="/"><Button >Daily Average</Button></Link>
            <Link to="/"><Button >Weekly Average</Button></Link>
        </div>
    )
}

export default Graph
