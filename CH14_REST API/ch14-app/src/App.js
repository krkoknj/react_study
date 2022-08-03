import logo from './logo.svg';
import './App.css';
import MainPage from './StyledComponents/MainPage';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

/** JS에서 비동기 HTTP 통신
 *  ajax, fetch, axios
 */

/** REST API
 * (Representational state transfer)
 * 2개의 컴퓨터 시스템이 인터넷을 통해
 * 정보를 교환하기 위해 사용하는 인터페이스.
 * HTTP Method : GET, POST, PUT, DELETE ...
 */

const MyImg = styled.img`
  width: 50px;
  border-radius: 50%;
`;

function App() {
  const [posts, setPosts] = useState([]); // 데이터 저장, map 함수 사용

  /*  
  // 마운트시 첫 랜더링, 비동기 통신
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/photos',
    }).then((res) => {
      setPosts(res.data); // data 이름은 고정
    });
  }, []); // 최초 랜더링 막기위해서 빈 배열 사용 (값이 안들어가면 재랜더링)
*/

  /*
  간단히 쓸수 있음

  axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
    setPosts(res.data);
  });
*/

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/photos',
    })
      .then((res) => {
        setPosts(res.data);
        console.log('hello');
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex" style={{ alignItems: 'center' }}>
          <img
            src="https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039__340.jpg
"
            alt=""
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <div className="d-flex">
            <input className="form-control ml-3" />
            <button className="btn btn-danger ml-1">Search</button>
          </div>
        </div>

        <div className="container">
          <span style={{ color: '#999' }}>{`Total : ${posts.length}`}</span>
          <hr />
          <table className="table text-light" style={{ fontSize: '1rem' }}>
            <thead>
              <tr>
                <th scope="col">NO</th>
                <th scope="col">ID</th>
                <th scope="col">TITLE</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, idx) => {
                return (
                  <tr key={idx}>
                    {/* <th
                      scope="row"
                      onClick={() => window.open(`${post.userId}`, '_blank')}
                    >
                      {post.userId}
                    </th> */}
                    <td>
                      <MyImg src={post.thumbnailUrl} alt="" />
                    </td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
