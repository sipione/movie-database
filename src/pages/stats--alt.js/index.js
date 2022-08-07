import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { PrimaryColorHex } from "../../common/foundation/variables";
import { StatsAltContainer } from "./style";


const PageStatsAlt = ()=>{
    const [data, setData]= useState(null);
    const [dataChartByMovie, setDataChartByMovie] = useState();
    const [dataChartByVotes, setDataChartByVotes] = useState();

    const options = {
        width: "100%",
        height: "50vh",
        animation:{
          startup: true,
          duration: 5000,
          easing: 'out'
        },
        bar: { groupWidth: '60%' }
      };

    useEffect(()=>{
        if(data){
            const arrayByMovie = data.map(item=>[item.title, item.vote_average, item.vote_average, `Total: ${item.vote_count} votes`, `color: ${PrimaryColorHex}`])
            const arrayByVotes = data.map(item=>[item.title, item.vote_count, item.vote_count, `Average: ${item.vote_average}`, `color: ${PrimaryColorHex}`])
    
            setDataChartByMovie([["movies", "vote average", {role: 'annotation'}, {role: 'tooltip'}, {role: "style"}], ...arrayByMovie]);

            setDataChartByVotes([["movies", "vote count", {role: 'annotation'}, {role: 'tooltip'}, {role: "style"}], ...arrayByVotes]);
        }else{
            getTopRated();
        }
    }, [data])

    
    const getTopRated = async ()=>{
        const uri = `https://api.themoviedb.org/3/movie/top_rated?api_key=5b706ce296b45e978df1e2dd4f607f96&language=pt-br&language=pt-PT&page=1`

        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }    
        }

        try{
            const response = await fetch(uri, options);
            const dataJson = await response.json();
            setData(dataJson.results.slice(0,10));

        }catch(err){
            console.log(err)
        }   
    }

    return(
        <StatsAltContainer>

            <Chart
                chartType="ColumnChart"
                data={dataChartByMovie}
                options = {options}
            />

            <Chart
                chartType="ColumnChart"
                data={dataChartByVotes}
                options = {options}
            />
        </StatsAltContainer>

    )
}

export default PageStatsAlt;