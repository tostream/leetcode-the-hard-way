"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[32893],{66598:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>m});var n=a(85893),l=a(11151);const t={description:"Author: @aryankashyap7, @radojicic23 | https://leetcode.com/problems/climbing-stairs/",tags:["Math","Dynamic Programming","Memoization"]},i="0070 - Climbing Stairs (Easy)",c={id:"0000-0099/climbing-stairs-easy",title:"0070 - Climbing Stairs (Easy)",description:"Author: @aryankashyap7, @radojicic23 | https://leetcode.com/problems/climbing-stairs/",source:"@site/solutions/0000-0099/0070-climbing-stairs-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/climbing-stairs-easy",permalink:"/solutions/0000-0099/climbing-stairs-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0070-climbing-stairs-easy.md",tags:[{label:"Math",permalink:"/solutions/tags/math"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Memoization",permalink:"/solutions/tags/memoization"}],version:"current",sidebarPosition:70,frontMatter:{description:"Author: @aryankashyap7, @radojicic23 | https://leetcode.com/problems/climbing-stairs/",tags:["Math","Dynamic Programming","Memoization"]},sidebar:"tutorialSidebar",previous:{title:"0069 - Sqrt(x) (Easy)",permalink:"/solutions/0000-0099/sqrt-x-easy"},next:{title:"0072 - Edit Distance (Hard)",permalink:"/solutions/0000-0099/edit-distance-hard"}},r={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Fibonacci Series",id:"approach-1-fibonacci-series",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.a)(),...s.components},{SolutionAuthor:a,TabItem:t,Tabs:i}=e;return a||x("SolutionAuthor",!0),t||x("TabItem",!0),i||x("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"0070---climbing-stairs-easy",children:"0070 - Climbing Stairs (Easy)"}),"\n",(0,n.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://leetcode.com/problems/climbing-stairs/",children:"https://leetcode.com/problems/climbing-stairs/"})}),"\n",(0,n.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(e.p,{children:["You are climbing a staircase. It takes ",(0,n.jsx)(e.code,{children:"n"})," steps to reach the top."]}),"\n",(0,n.jsxs)(e.p,{children:["Each time you can either climb ",(0,n.jsx)(e.code,{children:"1"})," or ",(0,n.jsx)(e.code,{children:"2"})," steps. In how many distinct ways can you climb to the top?"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: n = 2\nOutput: 2\nExplanation: There are two ways to climb to the top.\n1. 1 step + 1 step\n2. 2 steps\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: x = 8\nOutput: 2\nExplanation: There are three ways to climb to the top.\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= n <= 45"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"approach-1-fibonacci-series",children:"Approach 1: Fibonacci Series"}),"\n",(0,n.jsxs)(e.p,{children:["We can apply the concept of Fibonacci Numbers to solve this problem. The number of ways to reach the ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"h"})]})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n^{th}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8491em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8491em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"h"})]})})]})})})})})]})]})})]})," step is equal to the sum of ways of reaching ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"h"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"(n-1)^{th}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0991em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsxs)(e.span,{className:"mclose",children:[(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8491em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"h"})]})})]})})})})})]})]})]})]})," step and ways of reaching ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"h"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"(n-2)^{th}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0991em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsxs)(e.span,{className:"mclose",children:[(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8491em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"h"})]})})]})})})})})]})]})]})]})," step. The base cases for this problem are ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n = 1"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," and ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n = 2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"})]})]})]}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["We can see that for ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n = 1"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),", the number of ways to reach the ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"t"})]})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"1^{st}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7936em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7936em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"s"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"})]})})]})})})})})]})]})})]})," step is ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mn,{children:"1"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})})]})," and for ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n = 2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"})]})]})]}),", the number of ways to reach the ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"d"})]})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"2^{nd}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8491em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8491em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"})]})})]})})})})})]})]})})]})," step is ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mn,{children:"2"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"})]})})]}),". Similarly, for ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"3"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n = 3"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"3"})]})]})]}),", the number of ways to reach the ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mn,{children:"3"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"d"})]})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"3^{rd}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8491em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"3"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8491em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"})]})})]})})})})})]})]})})]})," step is ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mn,{children:"3"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"3"})]})})]})," and for ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"4"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n = 4"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"4"})]})]})]}),", the number of ways to reach the ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mn,{children:"4"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"h"})]})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"4^{th}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8491em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"4"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8491em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"h"})]})})]})})})})})]})]})})]})," step is ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mn,{children:"5"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"5"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"5"})]})})]}),". This follows the Fibonacci Series(1, 2, 3, 5, 8, 13, ...)."]}),"\n",(0,n.jsxs)(e.p,{children:["Time Complexity: ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]}),", where ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"n"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," is the number of steps to reach the top."]}),"\n",(0,n.jsxs)(e.p,{children:["Space complexity: ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsxs)(t,{value:"cpp",label:"C++",children:[(0,n.jsx)(a,{name:"@aryankashyap7"}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int climbStairs(int n){\n        // base cases\n        if (n < 4) return n;\n        // apply Fibonacci Series where a and b are the previous two numbers\n        int a = 2, b = 3;\n        int res = 0;\n        // calculate the number of ways to reach the n^{th} step\n        for (int i = 4; i <= n; i++) {\n            res = a + b;\n            // Updating the values of a and b\n            if (i % 2 == 0) a = res;\n            else b = res;\n        }\n        // return the number of ways possible\n        return res;\n    }\n};\n"})})]}),(0,n.jsxs)(t,{value:"python",label:"Python",children:[(0,n.jsx)(a,{name:"@radojicic23"}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def climbStairs(self, n: int) -> int:\n        # base case\n        if n < 4:\n            return n\n        # apply Fibonacci Series where a and b are the previous two numbers\n        a, b = 2, 3\n        res = 0\n        # calculate the number of ways to reach the n^{th} step\n        for i in range(4, n+1):\n            res = a + b\n            # updating the values of a and b\n            if (i % 2 == 0):\n                a = res\n            else:\n                b = res\n        return res\n"})})]}),(0,n.jsxs)(t,{value:"js",label:"JavaScript",children:[(0,n.jsx)(a,{name:"@radojicic23"}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-js",children:"/**\n * @param {number} n\n * @return {number}\n */\nvar climbStairs = function (n) {\n  // base case\n  if (n < 4) {\n    return n;\n  }\n  // apply Fibonacci Series where a and b are the previous two numbers\n  let a = 2;\n  let b = 3;\n  let res = 0;\n  // calculate the number of ways to reach the n^{th} step\n  for (i = 4; i < n + 1; i++) {\n    res = a + b;\n    // updating values of a and b\n    if (i % 2 == 0) {\n      a = res;\n    } else {\n      b = res;\n    }\n  }\n  return res;\n};\n"})})]})]})]})}function d(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}function x(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,e,a)=>{a.d(e,{Z:()=>c,a:()=>i});var n=a(67294);const l={},t=n.createContext(l);function i(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);