import React from 'react'
import styled from 'styled-components';
import ArrowUpwardSharp from '@material-ui/icons/ArrowUpwardSharp';
import ArrowDownwardSharp from '@material-ui/icons/ArrowDownwardSharp';

const Title = styled.div`
    text-align: left;
    color: #2D2D2D;
    padding: 10px;
    font-weight: bold;
`
const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`
const Divider= styled.div`
    background-color:#999999;
    width: 100px;
    height: 0.5px;
    opacity: 15%; 
`

const ContentPart1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6DD0A5;
    width: 120px;
    height: 120px;
    color: white;
    font-weight: bolder;
    font-size: 50px;
    border-radius: 50%; 
`
const ContentPart2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
`
const InnerContent = styled.div`
    color: #999999;
    font-size: 30px; 
    font-weight: bolder;
    padding: 10px;
`

const AirQuality = () => {
  return (
    <>
        <Title>Air Quality</Title>
              <Content>
                <ContentPart1>72</ContentPart1>
                <ContentPart2>
                  <InnerContent><ArrowUpwardSharp style={{color: "#6DD0A5"}}/>93</InnerContent> 
                  <Divider></Divider>                
                  <InnerContent><ArrowDownwardSharp style={{color: "orange"}}/>61</InnerContent>
                </ContentPart2>
              </Content>
    </>
  )
}

export default AirQuality