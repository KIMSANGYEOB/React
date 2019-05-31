import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
import { confetti } from 'dom-confetti';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${props =>
    props.backgroundImage
      ? `linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0)), url(${props.backgroundImage})`
      : ''};
  background-position: 50% 50%;
  background-size: cover;
  padding: 2rem;
  transition: 0.25s;
  &:hover {
    padding-top: 10rem;
    padding-bottom: 10rem;
    > div.sub-introduce {
      display: flex;
      flex-direction: column;
    }
    > div.like-button {
      display: flex;
      justify-content: center;
    }
  }

  > span.title {
    font-size: 3.5rem;
    color: #61dafb;
    margin-bottom: 2rem;
    cursor: pointer;
  }
  > div.genre {
    display: flex;
    margin-bottom: 1rem;

    > span {
      margin-right: 1rem;
      font-size: 1rem;
      color: #f5f5f5;
    }
  }
  > span.sub {
    font-size: 2rem;
    color: #f5f5f5;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  > div.sub-introduce {
    display: none;
    padding-top: 2rem;
    transition: 0.25s;

    > span {
      color: white;
      line-height: 1.5;
      font-size: 1.5rem;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
    }
  }
  > div.like-button {
    display: none;
    padding-top: 4rem;

    > span {
      width: 100px;
      height: 100px;
      cursor: pointer;
      background-image: ${props =>
        props.likeImage
          ? `linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0)), url(${props.likeImage})`
          : ''};
      background-position: 50% 50%;
      background-size: cover;
    }
  }
`;

class MovieList extends React.Component {
  // create Ref 를 한다.
  movieListRef = this.props.movieData.map(() => React.createRef());

  // 리터럴 function 효과 관련
  effect = {
    showParadise: idx => {
      confetti(this.movieListRef[idx].current);
    }
  }

  componentDidMount() {
    console.log('ref: ', this.movieListRef);

  }

  render() {
    // 리터럴 function dataFormat 관련
    const dataFormat = {
      showGenre: (array) => {
        return array.map((genre, i) => {
          return <span key={i}>{genre}</span>;
        })
      },
      convertEnterToLine: string => {
        const stringArray = string.split('\n');

        return stringArray.map((value, i) => {
          return <span key={i}>{value}</span>;
        });
      },
    }

    const renderMoive = (list) => {
      // list 는 key를 넣어줘야한다.
        return list.map((movie, i) => {
            return  <StyledDiv key={i} backgroundImage={ movie.image } likeImage={'/images/like.svg'}>
              <span className="title"> { movie.movieName }</span>
              <div className="genre"> { dataFormat.showGenre(movie.genre) }</div>
              <span className="sub">
                { movie.releaseDate === null ? '미개봉' : `${movie.releaseDate} 개봉` }
              </span>
              { movie.releaseDate !== null && 
                <span className="sub">
                  { `누적 관객수 ${numeral(movie.totalAudience).format('0,0')} (평점 ${movie.grade}/10)` }
                </span> }
              
              <div className="sub-introduce"> { dataFormat.convertEnterToLine(movie.subIntro) }</div>

              <div className="like-button">
                <span ref={this.movieListRef[i]} onClick={() => this.effect.showParadise(i)}>
                </span>
              </div>
            </StyledDiv>
        })
      }

        return <div>{renderMoive(this.props.movieData)}</div>
  }
}

export default MovieList;
