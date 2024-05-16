"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[13691],{89908:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var n=a(85893),l=a(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/count-ways-to-distribute-candies/"},r="1692 - Count Ways to Distribute Candies (Hard)",c={id:"1600-1699/count-ways-to-distribute-candies-hard",title:"1692 - Count Ways to Distribute Candies (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/count-ways-to-distribute-candies/",source:"@site/solutions/1600-1699/1692-count-ways-to-distribute-candies-hard.md",sourceDirName:"1600-1699",slug:"/1600-1699/count-ways-to-distribute-candies-hard",permalink:"/solutions/1600-1699/count-ways-to-distribute-candies-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1600-1699/1692-count-ways-to-distribute-candies-hard.md",tags:[],version:"current",sidebarPosition:1692,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-ways-to-distribute-candies/"},sidebar:"tutorialSidebar",previous:{title:"1685 - Sum of Absolute Differences in a Sorted Array (Medium)",permalink:"/solutions/1600-1699/sum-of-absolute-differences-in-a-sorted-array-medium"},next:{title:"1700 - 1799",permalink:"/solutions/category/1700---1799"}},m={},t=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2},{value:"Approach 2: Combinatorics",id:"approach-2-combinatorics",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",munderover:"munderover",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.a)(),...s.components},{SolutionAuthor:a}=e;return a||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"1692---count-ways-to-distribute-candies-hard",children:"1692 - Count Ways to Distribute Candies (Hard)"}),"\n",(0,n.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://leetcode.com/problems/count-ways-to-distribute-candies/",children:"https://leetcode.com/problems/count-ways-to-distribute-candies/"})}),"\n",(0,n.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(e.p,{children:["There are ",(0,n.jsx)(e.code,{children:"n"})," ",(0,n.jsx)(e.strong,{children:"unique"})," candies (labeled ",(0,n.jsx)(e.code,{children:"1"})," through ",(0,n.jsx)(e.code,{children:"n"}),") and ",(0,n.jsx)(e.code,{children:"k"})," bags. You are asked to distribute ",(0,n.jsx)(e.strong,{children:"all"})," the candies into the bags such that every bag has ",(0,n.jsx)(e.strong,{children:"at least"})," one candy."]}),"\n",(0,n.jsxs)(e.p,{children:["There can be multiple ways to distribute the candies. Two ways are considered ",(0,n.jsx)(e.strong,{children:"different"})," if the candies in one bag in the first way are not all in the same bag in the second way. The order of the bags and the order of the candies within each bag do not matter."]}),"\n",(0,n.jsxs)(e.p,{children:["For example, ",(0,n.jsx)(e.code,{children:"(1), (2,3)"})," and ",(0,n.jsx)(e.code,{children:"(2), (1,3)"})," are considered different because candies ",(0,n.jsx)(e.code,{children:"2"})," and ",(0,n.jsx)(e.code,{children:"3"})," in the bag ",(0,n.jsx)(e.code,{children:"(2,3)"})," in the first way are not in the same bag in the second way (they are split between the bags ",(0,n.jsx)(e.code,{children:"(2)"})," and ",(0,n.jsx)(e.code,{children:"(1,3)"}),"). However, ",(0,n.jsx)(e.code,{children:"(1), (2,3)"})," and ",(0,n.jsx)(e.code,{children:"(3,2), (1)"})," are considered the same because the candies in each bag are all in the same bags in both ways."]}),"\n",(0,n.jsxs)(e.p,{children:["Given two integers, ",(0,n.jsx)(e.code,{children:"n"})," and ",(0,n.jsx)(e.code,{children:"k"}),", return ",(0,n.jsxs)(e.em,{children:["the ",(0,n.jsx)(e.strong,{children:"number"})," of different ways to distribute the candies"]}),". As the answer may be too large, return it ",(0,n.jsx)(e.strong,{children:"modulo"})," ",(0,n.jsx)(e.code,{children:"109 + 7"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2020/12/16/candies-1.png",alt:""})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: n = 3, k = 2\nOutput: 3\nExplanation: You can distribute 3 candies into 2 bags in 3 ways:\n(1), (2,3)\n(1,2), (3)\n(1,3), (2)\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: n = 4, k = 2\nOutput: 7\nExplanation: You can distribute 4 candies into 2 bags in 7 ways:\n(1), (2,3,4)\n(1,2), (3,4)\n(1,3), (2,4)\n(1,4), (2,3)\n(1,2,3), (4)\n(1,2,4), (3)\n(1,3,4), (2)\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: n = 20, k = 5\nOutput: 206085257\nExplanation: You can distribute 20 candies into 5 bags in 1881780996 ways. 1881780996 modulo 109 + 7 = 206085257.\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= k <= n <= 1000"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,n.jsxs)(e.p,{children:["Let ",(0,n.jsx)(e.code,{children:"dp[k][n]"})," be number of ways to distribute ",(0,n.jsx)(e.code,{children:"n"})," candies into ",(0,n.jsx)(e.code,{children:"k"})," bags."]}),"\n",(0,n.jsxs)(e.p,{children:["If ",(0,n.jsx)(e.code,{children:"k > n"}),", then ",(0,n.jsx)(e.code,{children:"dp[k][n]"})," = 0 because each bag must have at least one ball which this condition cannot be satisfied."]}),"\n",(0,n.jsxs)(e.p,{children:["If ",(0,n.jsx)(e.code,{children:"k == n"}),", then ",(0,n.jsx)(e.code,{children:"dp[k][n]"})," = 1 because obviously there is only one way to do it."]}),"\n",(0,n.jsxs)(e.p,{children:["If ",(0,n.jsx)(e.code,{children:"k < n"}),", we have two possible actions - either put ",(0,n.jsx)(e.code,{children:"n"}),"-th candy into any of the existing ",(0,n.jsx)(e.code,{children:"k"})," bags or put it into a new bag. For example, if we have 3 balls and 3 bags, what we can do for 3 balls 2 bags case? We either put 2 balls into 2 bags and the third goes to any of the two bags, or we put two balls into 1 bag and put the third one into the other one. Therefore, we have the following formula."]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mn,{children:"3"}),(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[2 bags][3 balls] = dp[2 bags][2 balls] * 2 bags + dp[1 bag][2 balls]"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ba"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord",children:"3"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ba"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ba"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ba"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ba"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ba"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ba"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"})]})]})]})}),"\n",(0,n.jsx)(e.p,{children:"To generalise, we have such transition."}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i][j] = dp[i][j - 1] * i + dp[i - 1][j - 1]"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"})]})]})]})}),"\n",(0,n.jsx)(a,{name:"@wingkwong"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int M = 1e9 + 7;\n    long long dfs(vector<vector<long long>>& dp, int n, int k) {\n        if (n < k || k == 0) return 0;\n        if (n == k) return 1;\n        if (dp[n][k] != -1) return dp[n][k];\n        return dp[n][k] = (dfs(dp, n - 1, k) * k + dfs(dp, n - 1, k - 1)) % M;\n    }\n    \n    int waysToDistribute(int n, int k) {\n        vector<vector<long long>> dp(n + 1, vector<long long>(k + 1, -1));\n        return dfs(dp, n, k);\n    }\n};\n"})}),"\n",(0,n.jsx)(a,{name:"@wingkwong"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int waysToDistribute(int n, int k) {\n        int M = 1e9 + 7;\n        // dp[k][n] : number of ways to distribute n candies into k bags\n        vector<vector<long long>> dp(k + 1, vector<long long>(n + 1));\n        for(int i = 0; i <= k; i++) dp[i][i] = 1;\n        for(int i = 1; i <= k; i++) {\n            for(int j = i + 1; j <= n; j++) {\n                dp[i][j] = (i * dp[i][j - 1] + dp[i - 1][j - 1]) % M;\n            }\n        }\n        return dp[k][n];\n    }\n};\n"})}),"\n",(0,n.jsx)(e.h2,{id:"approach-2-combinatorics",children:"Approach 2: Combinatorics"}),"\n",(0,n.jsx)(e.p,{children:"This problem is exactly asking Stirling number of the second kind (or Stirling partition number) which is the number of ways to partition a set of n objects into k non-empty subsets."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://user-images.githubusercontent.com/35857179/168303702-13eaa317-ed34-43a8-a6b1-926b3b9cf6ca.png",alt:"image"})}),"\n",(0,n.jsx)(e.p,{children:"Stirling partition number can be calculated by using the following formula."}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"S"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"!"})]})]}),(0,n.jsxs)(e.munderover,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"0"})]}),(0,n.jsx)(e.mi,{children:"k"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{children:"j"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.mfrac,{linethickness:"0px",children:[(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mi,{children:"j"})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{children:"n"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"S(n,k)=\\frac1{k!}\\sum_{j=0}^k(-1)^j\\binom{k}j(k-j)^n"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"3.2499em",verticalAlign:"-1.4138em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"mclose",children:"!"})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.8361em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,n.jsx)(e.span,{className:"mord mtight",children:"0"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,n.jsxs)(e.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.4138em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsxs)(e.span,{className:"mclose",children:[(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8747em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:"("})}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8804em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:")"})})]}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsxs)(e.span,{className:"mclose",children:[(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7144em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]})]})]})]})}),"\n",(0,n.jsx)(a,{name:"@wingkwong"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def waysToDistribute(self, n: int, k: int) -> int:\n        return int(sum((-1) ** j * comb(k, j) * (k - j) ** n \n                    for j in range(k)) // factorial(k)  % (10 ** 9 + 7))\n"})})]})}function d(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>c,a:()=>r});var n=a(67294);const l={},i=n.createContext(l);function r(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:r(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);