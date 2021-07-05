import React from 'react'
import { Jumbotron as Jumbo } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .head{
    font-size: 3.6rem;
  }
  p {
  margin:auto;
      max-width:600px;
  }
  .jumbo {
    background-color: rgba(0,0,0,0);
    color: #efefef;
    font-size: 1.3rem; //smaller the fonts
    height: 100%;
    position: relative;
    white-space: pre-line;
  }
  @media screen and (max-width: 767px){
    .jumbo{
      font-size: 1rem;
      white-space: pre-line;
    }
    .head{
      font-size: 2rem;
    }
  }
`;

export const Header = () => (
  <Styles>
    <Jumbo fluid className="jumbo text-center">
      <h1 className="head">Hi, I'm Dhaval Kotak</h1><br/>
      <p>I'm just a super curious guy who 
        likes to self learn web development and 
        cyber security through research and practice. 
        I love designing websites and playing CTFs. 
        I'm looking for more opportunities to
        work in freelance basis.</p>
    </Jumbo>
  </Styles>
)
