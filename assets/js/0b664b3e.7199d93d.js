"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[27186],{21366:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>r});var n=a(85893),l=a(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/"},t="1359 - Count All Valid Pickup and Delivery Options (Hard)",m={id:"1300-1399/count-all-valid-pickup-and-delivery-options-hard",title:"1359 - Count All Valid Pickup and Delivery Options (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/",source:"@site/solutions/1300-1399/1359-count-all-valid-pickup-and-delivery-options-hard.md",sourceDirName:"1300-1399",slug:"/1300-1399/count-all-valid-pickup-and-delivery-options-hard",permalink:"/solutions/1300-1399/count-all-valid-pickup-and-delivery-options-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1359-count-all-valid-pickup-and-delivery-options-hard.md",tags:[],version:"current",sidebarPosition:1359,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/"},sidebar:"tutorialSidebar",previous:{title:"1356 - Sort Integers by The Number of 1 Bits (Easy)",permalink:"/solutions/1300-1399/sort-integers-by-the-number-of-1-bits-easy"},next:{title:"1365 - How Many Numbers Are Smaller Than the Current Number (Easy)",permalink:"/solutions/1300-1399/how-many-numbers-are-smaller-than-the-current-number-easy"}},c={},r=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Math",id:"approach-1-math",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msubsup:"msubsup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.a)(),...s.components},{SolutionAuthor:a,TabItem:i,Tabs:t}=e;return a||x("SolutionAuthor",!0),i||x("TabItem",!0),t||x("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"1359---count-all-valid-pickup-and-delivery-options-hard",children:"1359 - Count All Valid Pickup and Delivery Options (Hard)"}),"\n",(0,n.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/",children:"https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/"})}),"\n",(0,n.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(e.p,{children:["Given ",(0,n.jsx)(e.code,{children:"n"})," orders, each order consist in pickup and delivery services."]}),"\n",(0,n.jsx)(e.p,{children:"Count all valid pickup/delivery possible sequences such that delivery(i) is always after of pickup(i)."}),"\n",(0,n.jsx)(e.p,{children:"Since the answer may be too large, return it modulo 10^9 + 7."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: n = 1\nOutput: 1\nExplanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: n = 2\nOutput: 6\nExplanation: All possible orders: \n(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).\nThis is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: n = 3\nOutput: 90\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= n <= 500"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"approach-1-math",children:"Approach 1: Math"}),"\n",(0,n.jsxs)(e.p,{children:["If we just put all ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"P"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"P"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"})]})})]})," in a row, we would have ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"!"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"N!"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mclose",children:"!"})]})})]})," ways. It's a permutation with no repetition. The first choice has ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"N"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"N"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]})," possibilities, and the next choice has ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"N - 1"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," possibilities (as you cannot choose the first choice), and then ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"N - 2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"})]})]})]})," (as you cannot choose the previous two choices), ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"3"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"N - 3"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"3"})]})]})]})," and so on.  Hence, we got ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"!"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"N * (N - 1) * (N - 2) * .. * 1 = N!"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4653em"}}),(0,n.jsx)(e.span,{className:"mord",children:".."}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mclose",children:"!"})]})]})]}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["Then we need to think how to put ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"D"}),(0,n.jsx)(e.mi,{children:"i"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"D_i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),"in some possible places. We know that",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"D"}),(0,n.jsx)(e.mi,{children:"i"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"D_i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," must come after ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mi,{children:"i"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"P_i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),". It's obvious that there is only one way to put ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"D"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"D"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"})]})})]})," for the last ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"P"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"P"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"})]})})]}),". For the second ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"D"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"D"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"})]})})]}),", we can put it right after the corresponding ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"P"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"P"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"})]})})]})," or put it to the left / right of the previous ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"D"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"D"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"})]})})]}),". Hence, we have ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mn,{children:"3"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"3"})]})})]})," possible places to put. If you keep doing the same thing, you should find the number of ways to put ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"D"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"D"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"})]})})]})," is ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mn,{children:"3"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mn,{children:"5"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 * 3 * 5 * .. * (2N - 1)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"3"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4653em"}}),(0,n.jsx)(e.span,{className:"mord",children:".."}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["Hence, the answer is ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"!"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mi,{children:"N"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"N! * \\sum_{i=1}^{N} (2 * i - 1)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mclose",children:"!"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.2809em",verticalAlign:"-0.2997em"}}),(0,n.jsxs)(e.span,{className:"mop",children:[(0,n.jsx)(e.span,{className:"mop op-symbol small-op",style:{position:"relative",top:"0em"},children:"\u2211"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.9812em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.4003em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.2029em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2997em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),". Remember to take ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mi,{children:"D"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"MOD"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"MO"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"})]})})]})," during the calculation."]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsxs)(i,{value:"cpp",label:"C++",children:[(0,n.jsx)(a,{name:"@wingkwong"}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countOrders(int n) {\n        long long M = 1e9 + 7, ans = 1;\n        for (int i = 1; i <= n; i++) {\n            // number of ways to put P: N!\n            (ans *= i) %= M;\n            // number of ways to put D after P: 1 * 3 * 5 * .. * (2N - 1)\n            (ans *= (2 * i - 1)) %= M;\n        }\n        return ans;\n    }\n};\n"})})]}),(0,n.jsxs)(i,{value:"java",label:"Java",children:[(0,n.jsx)(a,{name:"@wingkwong"}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"\nclass Solution {\n    public int countOrders(int n) {\n        long M = (long) 1e9 + 7;\n        long ans = 1;\n        for (int i = 1; i <= n; i++) {\n            // number of ways to put P: N!\n            ans = (ans * i) % M;\n            // number of ways to put D after P: 1 * 3 * 5 * .. * (2N - 1)\n            ans = (ans * (2 * i - 1)) % M;\n        }\n        return (int) ans;\n    }\n}\n"})})]}),(0,n.jsxs)(i,{value:"kotlin",label:"Kotlin",children:[(0,n.jsx)(a,{name:"@wingkwong"}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-kt",children:"class Solution {\n    fun countOrders(n: Int): Int {\n        val M = (1e9 + 7).toLong()\n        var ans = 1L\n        for (i in 1..n) {\n            // number of ways to put P: N!\n            ans = (ans * i) % M\n            // number of ways to put D after P: 1 * 3 * 5 * .. * (2N - 1)\n            ans = (ans * (2 * i - 1)) % M\n        }\n        return ans.toInt()\n    }\n}\n"})})]})]})]})}function d(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}function x(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,e,a)=>{a.d(e,{Z:()=>m,a:()=>t});var n=a(67294);const l={},i=n.createContext(l);function t(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);