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
const Divider= styled.div`
background-color:#999999;
width: 1px;
height: 100px;
opacity: 15%; 
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
    font-size: 15px;
    padding: 0px;
    margin-left: 3px;
    margin-top: 20px;
    font-weight: bold;
`

const Displays = () => {
  return (
    <>
        <Title>Displays</Title>
              <Content>
                <ContentPart1>10
                  <SubPart>/16</SubPart>
                </ContentPart1>
                <Divider></Divider> 
                <ContentPart2>
                  <InnerContent1>On Time</InnerContent1>         
                  <InnerContent>00:00</InnerContent>
                </ContentPart2>
              </Content>
    </>
  )
}

export default Displays