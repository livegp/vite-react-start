import{s as m,c as l,r as i,j as s}from"./index-4ed5703b.js";import{Q as f}from"./react-toastify.esm-0b027e14.js";import{f as h}from"./fetch-9f92a825.js";import g from"./Loader-f395d2d5.js";import{N as p}from"./NoDataMessage-34c501c6.js";const u=m.ul`
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
`;function R(){const{id:r}=l(),[t,a]=i.useState([]),[n,o]=i.useState(!0);return i.useEffect(()=>{r&&h("movieReviews","","",r).then(e=>{a(e.results),o(!1)}).catch(e=>{f.error(`Error fetching data: ${e.message}`),o(!1)})},[r]),n?s.jsx(g,{}):Array.isArray(t)&&t.length>0?s.jsx(u,{children:t.map(({id:e,author:c,content:d})=>s.jsxs("li",{children:[s.jsxs("h3",{children:[c,":"]}),s.jsx("p",{children:d})]},e))}):s.jsx(p,{})}export{R as default};
