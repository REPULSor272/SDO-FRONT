import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1340px;
    margin: 0 auto;
`

export const Description = styled.div`
  background-color: #DDE5F8;
  padding: 32px 64px;
  margin-top: 40px;
    border-radius:4px;
`

export const DescriptionText = styled.p`
  font-size: 16px;
`

export const DescriptionTextBold = styled.p`
  font-size: 16px;
  font-weight: bold
`

export const DescriptionTest = styled.div`
  margin-top: 21px;

`


export const SolutionBlock = styled.div`
    margin-top: 20px;
    min-height: 40px;
    background-color: ${(props) => props.$color};
    align-items: center;
    border-radius:4px;
    padding-bottom: 20px;
`
export const SolutionInfo = styled.div`
    display: flex;
    position: relative;
`

export const SolutionBlockText = styled.h1`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0%;
    margin-left: 64px;
    position: absolute;
    top: 5px
`

export const DetailsBtn = styled.button`
    width: 181px;
    height: 30px;
    background-color: #BECBEE;
    color: white;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0%;
    text-align: center;
    border-radius:4px;
    border:none;
    position:absolute;
    right:64px;
    top: 20px;
`
export const SolutionDetails = styled.div`
    margin-left: 60px;
    margin-top: 70px;
`
export const SolutionDetailsCode = styled.div`
    white-space: pre-wrap;
    background-color: #F0F0F0;
    width: 1195px;
    font-size: 20px;
    padding: 10px
    `

export const SolutionDetailsResult = styled.div`

`
export const SolutionDetailsResultText = styled.h1`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0%;
`

export const SolutionDetailsBlock = styled.div`
    display: flex;
    border: 1px solid black;
    width: 1195px;
    border-radius: 4px;
    padding: 0 5px;
    position: relative;
    margin-top: 10px;
`
export const SolutionDetailsResultInfo = styled.div`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0%;
    position: absolute;
    top: 15px;
    right: 40px;
`

export const ThrowAttemps = styled.button`
    width: 250px;
    height: 91px;
    border-radius: 8px;
    angle: 0 deg;
    opacity: 1;
    padding: 32px;
    background-color:#E6F4CF;
    font-family: Montserrat;
    font-weight: 400;
    font-style: Regular;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 27px;
    letter-spacing: 0%;
    text-align: center;
    margin-top: 20px;
    border: none;
    cursor: pointer;
`