import{s as m,c as u,r as e,j as s}from"./index-accfd6bd.js";import{Q as l}from"./react-toastify.esm-087d8226.js";import{f as d}from"./fetch-d28947ed.js";import f from"./Loader-c018fdd2.js";import{N as p}from"./NoDataMessage-8d7f89f5.js";const g=m.ul`
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  color: #3b5998;
  column-count: 6;
  column-gap: 25px;
  column-rule: 1px solid #dfe3ee;

  li {
    line-height: 1.2;
  }

  @media (width <= 576px) {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
    column-count: 2;
  }
`;function L(){const{id:r}=u(),[o,i]=e.useState([]),[n,a]=e.useState(!0);return e.useEffect(()=>{r&&d("movieCredits","","",r).then(t=>{i(t.cast),a(!1)}).catch(t=>{l.error(`Error fetching data: ${t.message}`),a(!1)})},[r]),n?s.jsx(f,{}):Array.isArray(o)&&o.length>0?s.jsx(g,{children:o.map(({id:t,name:c})=>s.jsx("li",{children:c},t))}):s.jsx(p,{})}export{L as default};
