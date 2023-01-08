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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    color: #5448C8;
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
    font-size: 25px; 
    font-weight: bolder;
`
const InnerContent1 = styled.div`
    display: flex;
    align-items: flex-start;
    color: #999999;
    font-size: 12px; 
    font-weight: normal;
    
`
const SubPart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 25px;
    background-color: #6DD0A5;
    font-size: 20px;
    color: #FFFF;
    font-weight: normal;
    margin-bottom: 30px;
    border-radius: 6px;
    margin-left: 3px;
`

const Lighting = () => {
  return (
    <>
        <Title>Lighting</Title>
              <Content>
                <ContentPart1>32
                  <SubPart><sup>ON</sup></SubPart>
                </ContentPart1> 
                <ContentPart2>
                  <InnerContent1>Total</InnerContent1>         
                  <InnerContent>43</InnerContent>
                </ContentPart2>
              </Content>
    </>
  )
}

export default Lighting