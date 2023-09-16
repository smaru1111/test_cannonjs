/** @jsxImportSource @emotion/react */
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Text1 from './pages/Test1';
import Chain from './pages/Chain';
import { css } from '@emotion/react';
import Trigger from './pages/Trigger';
import Fog from './pages/Fog';
const style = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
`;
const wrapper = css`
  position: relative;
`;


const App = () => {
  return (
    <>
      <div css={wrapper}>
        <div css={style}>
          <Link to="/">Home</Link>
          <Link to="/test1">Test1</Link>
          <Link to="/chain">Chain</Link>
          <Link to="/trigger">Trigger</Link>
          <Link to="/fog">Fog</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test1" element={<Text1 />} />
          <Route path="/chain" element={<Chain />} />
          <Route path="/trigger" element={<Trigger/>} /> 
          <Route path="/fog" element={<Fog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;