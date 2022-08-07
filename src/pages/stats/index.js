import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as d3  from "d3";
import { TextTitleH1 } from "../../common/foundation/typography";
import { format } from "d3";
import { MainColorHex, PrimaryColorHex, PrimaryColorRgba, SecondaryColorHex } from "../../common/foundation/variables";
import { Chart } from 'react-google-charts';


const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;

    g rect{
        fill: ${PrimaryColorHex};

        :hover{
            fill: ${SecondaryColorHex};
        }
    }

    
`;



const PageStats = ()=>{
    const svgContainer = useRef();
    const [data, setData]= useState(null);
    console.log(data);

    const [display, setDisplay] = useState({
        width: 500,
        height: 300,
        margin: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50
        }
    })

    const [dataFormated, setDataFormated] = useState();

    useEffect(()=>{
        getTopRated()

        if(data){

            const svg = d3.select(svgContainer.current)
            .attr('viewBox', [0,0,display.width, display.height])
    
            const x = d3.scaleBand()
                .domain(d3.range(data.length))
                .range([display.margin.left, display.width - display.margin.right])
                .padding(0.1);
            
            const y = d3.scaleLinear()
                .domain([0, 10])
                .range([display.height - display.margin.bottom, display.margin.top]) 
            svg
                .append('g')
                .selectAll('rect')
                .data(data.map(item=>item.vote_average))
                .attr("text-anchor", "end")
                .join('rect')
                    .attr('x', (_, index)=> x(index))
                    .attr('y', (dataY)=> y(dataY))
                    .attr('height', dataY=> y(0)-y(dataY))
                    .attr('width', x.bandwidth())
    
            function xAxis(g){
                g
                .call(d3.axisBottom(x)
                .tickFormat(i=>data[i].title))
                .attr('transform', `translate(0, ${display.height - display.margin.bottom})`)
            }
    
            function yAxis(g){
                g
                .call(d3.axisLeft(y)
                .ticks(null, data.format))
                .attr('transform', `translate(${display.margin.left}, 0)`)
                .call((g) => g.select(".domain").remove())
                .call((g) =>
                  g
                    .append("text")
                    .attr("x", -display.margin.left)
                    .attr("y", 10)
                    .attr("fill", "currentColor")
                    .attr("text-anchor", "start")
                );
            }
    
            svg.append('g').call(yAxis);
            svg.append('g').call(xAxis);
            svg.node();        
        }

    }, [data])
    
    var options = {
        width: "100%",
        height: 500,
        animation:{
          startup: true,
          duration: 1000,
          easing: 'linear'
        },
      };

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
        <Container>
            <svg ref={svgContainer}>

            </svg>
        </Container>

    )
}

export default PageStats;