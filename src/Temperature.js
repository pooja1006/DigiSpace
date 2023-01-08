import React from 'react'
import styled from 'styled-components';
import {ReactComponent as Snow} from './assets/snowflake.svg';
import {ReactComponent as Fire} from './assets/fire.svg';

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
    background-color: #5448C8;
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999999;
    font-size: 30px; 
    font-weight: bolder;
    padding: 10px;
`

const Temperature = () => {
  return (
    <>
        <Title>Temperature</Title>
              <Content>
                <ContentPart1>21
                    <div style={{ 
                        fontSize:"20px", 
                        padding: "0px",
                        marginTop: "15px" ,
                        fontWeight: "normal",

                        }}><sup>&#xB0;</sup>C</div>
                </ContentPart1>
                <ContentPart2>
                  <InnerContent>
                  <Fire 
                  style={{
                    width: "40%",
                    height: "40%",
                    marginRight: "10px",
                  }}
                  />
                    26
                    <div style={{ 
                        fontSize:"15px", 
                        padding: "0px",
                        marginTop: "8px" ,
                        fontWeight: "normal",

                        }}><sup>&#xB0;</sup>C</div>
                  </InnerContent>
                  <Divider></Divider>                
                  <InnerContent>
                  <Snow 
                  style={{
                    width: "40%",
                    height: "40%",
                    marginRight: "10px",
                  }}
                  />
                    18
                    <div style={{ 
                        fontSize:"15px", 
                        padding: "0px",
                        marginTop: "8px" ,
                        fontWeight: "normal",

                        }}><sup>&#xB0;</sup>C</div>
                  </InnerContent>
                </ContentPart2>
              </Content>
    </>
  )
}

export default Temperature