import React from "react";
import ReactDOM from "react-dom";
import { Radar } from "react-chartjs-2";

export default ({characterData, handleClick})=>{
    const data = {
        labels: Object.keys(characterData),
        datasets: [
          {
            borderColor: "rgba(255,255,255,0.5)",
            data: Object.values(characterData)
          }
        ]
      };
    return (
        <div className="Radar" onClick={handleClick}>
            <Radar options={{
            legend:{display:false}, 
            scale:{pointLabels:{fontColor:"white"},ticks:{display:false}}}} 
            data={data}/>
        </div>
    );
}