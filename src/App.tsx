import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Text1 from './pages/Test1';
import { css } from '@emotion/react';
const style = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
`;


const App = () => {
  return (
    <>
      <div css={style}>
        <Link to="/">Home</Link>
        <Link to="/test1">Test1</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test1" element={<Text1 />} />
      </Routes>
    </>
  );
}

export default App;