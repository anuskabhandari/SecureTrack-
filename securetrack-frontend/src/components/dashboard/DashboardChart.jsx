import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

const data = [

    {name:"Critical",value:15},

    {name:"High",value:25},

    {name:"Medium",value:35},

    {name:"Low",value:20}

];

const COLORS=[

"#ef4444",

"#f97316",

"#facc15",

"#22c55e"

];

export default function DashboardChart(){

return(

<div className="chart-card">

<h3>Vulnerability Severity</h3>

<ResponsiveContainer
width="100%"
height={320}
>

<PieChart>

<Pie

data={data}

dataKey="value"

outerRadius={120}

label

>

{

data.map((entry,index)=>(

<Cell

key={index}

fill={COLORS[index]}

/>

))

}

</Pie>

<Tooltip/>

<Legend/>

</PieChart>

</ResponsiveContainer>

</div>

);

}