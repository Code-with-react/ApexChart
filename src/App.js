import React, { useState } from 'react'
import Chart from "react-apexcharts";
const App = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  }
  );
  return (
    <>
      <h1 className='title'>ReactJs Charts Demo</h1>
      <div className="Charts">

        <div className="">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="500"
          />
        </div>
      </div>

    </>
  )
}

export default App