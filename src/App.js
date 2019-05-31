import React from 'react';
import styled from 'styled-components';
import Header from './header';
import { data } from './data';
import MovieList from './movie-list/movie-list'


const MainDiv = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    headerMessage: '코딩애플 영화 프로젝트',
    movieData: data,
  }

  componentDidMount() {
  }

  render() {
    return (
      <MainDiv>
        <Header headerMessage={this.state.headerMessage} />
        <MovieList movieData={this.state.movieData} />
      </MainDiv>
    )
  }
}

/*
*
*
*/
export default App;
