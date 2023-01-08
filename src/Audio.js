import React from 'react'
import styled from 'styled-components';


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
const ContentPart1 = styled.div`
    margin-top: 50px;
    color: #5448C8;
    font-weight: bolder;
    font-size: 70px;
    margin-left: -48px; 
`
const ContentPart2 = styled.div`
    text-align: center;
    background-color: #6DD0A5;
    font-size: 18px;
    padding: 2px;
    color: #FFFF;
    font-weight: normal;
    width: 100px;
    height: 25px;
    margin-left: 20px;
    margin-right: 5px;
    border-radius: 6px;
    margin-top:60px;   
`
const ContentPart3 = styled.div`
    margin-top: 75px;
`
const SubPart1 = styled.div`
    color: #999999;
    font-size: 12px; 
    font-weight: normal;
`
const SubPart2 = styled.div`
    color: #999999;
    font-size: 25px; 
    font-weight: bolder;
    margin-left: -15px;
`

const Audio = () => {
  return (
    <>
        <Title>Audio</Title>
              <Content>
                <ContentPart1>2</ContentPart1>
                <ContentPart2>PLAYING</ContentPart2>
                  <ContentPart3>
                    <SubPart1>TOTAL</SubPart1>
                    <SubPart2>5</SubPart2>
                  </ContentPart3>
              </Content>
    </>
  )
}

export default Audio