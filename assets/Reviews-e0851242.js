import{s as d,c as f,r as i,j as s}from"./index-accfd6bd.js";import{Q as l}from"./react-toastify.esm-087d8226.js";import{f as h}from"./fetch-d28947ed.js";import g from"./Loader-c018fdd2.js";import{N as p}from"./NoDataMessage-8d7f89f5.js";const u=d.ul`
  display: grid;
  gap: 25px;
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  color: #3b5998;
  text-align: justify;

  h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.2;
  }

  @media (width <= 576px) {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
  }
`;function R(){const{id:t}=f(),[e,a]=i.useState([]),[n,o]=i.useState(!0);return i.useEffect(()=>{t&&h("movieReviews","","",t).then(r=>{a(r.results),o(!1)}).catch(r=>{l.error(`Error fetching data: ${r.message}`),o(!1)})},[t]),n?s.jsx(g,{}):Array.isArray(e)&&e.length>0?s.jsx(u,{children:e.map(({id:r,author:c,content:m})=>s.jsxs("li",{children:[s.jsxs("h3",{children:[c,":"]}),s.jsx("p",{children:m})]},r))}):s.jsx(p,{})}export{R as default};
