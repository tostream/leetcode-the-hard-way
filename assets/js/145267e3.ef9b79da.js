"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[58672],{28281:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=o(85893),r=o(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/"},s="2571 - Minimum Operations to Reduce an Integer to 0 (Easy)",a={id:"2500-2599/minimum-operations-to-reduce-an-integer-to-0-easy",title:"2571 - Minimum Operations to Reduce an Integer to 0 (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/",source:"@site/solutions/2500-2599/2571-minimum-operations-to-reduce-an-integer-to-0-easy.md",sourceDirName:"2500-2599",slug:"/2500-2599/minimum-operations-to-reduce-an-integer-to-0-easy",permalink:"/solutions/2500-2599/minimum-operations-to-reduce-an-integer-to-0-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2500-2599/2571-minimum-operations-to-reduce-an-integer-to-0-easy.md",tags:[],version:"current",sidebarPosition:2571,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/"},sidebar:"tutorialSidebar",previous:{title:"2535 - Difference Between Element Sum and Digit Sum of an Array (Easy)",permalink:"/solutions/2500-2599/difference-between-element-sum-and-digit-sum-of-an-array-easy"},next:{title:"2600 - 2699",permalink:"/solutions/category/2600---2699"}},c={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP",id:"approach-1-dp",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:o,TabItem:i,Tabs:s}=n;return o||u("SolutionAuthor",!0),i||u("TabItem",!0),s||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"2571---minimum-operations-to-reduce-an-integer-to-0-easy",children:"2571 - Minimum Operations to Reduce an Integer to 0 (Easy)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/",children:"https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["You are given a positive integer ",(0,t.jsx)(n.code,{children:"n"}),", you can do the following operation ",(0,t.jsx)(n.strong,{children:"any"})," number of times:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add or subtract a ",(0,t.jsx)(n.strong,{children:"power"})," of ",(0,t.jsx)(n.code,{children:"2"})," from ",(0,t.jsx)(n.code,{children:"n"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsxs)(n.em,{children:["the ",(0,t.jsx)(n.strong,{children:"minimum"})," number of operations to make"]}),(0,t.jsx)(n.code,{children:"n"}),(0,t.jsx)(n.em,{children:"equal to"}),(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A number ",(0,t.jsx)(n.code,{children:"x"})," is power of ",(0,t.jsx)(n.code,{children:"2"})," if ",(0,t.jsx)(n.code,{children:"x == 2i"}),"\xa0where ",(0,t.jsx)(n.code,{children:"i >= 0"}),(0,t.jsx)(n.em,{children:"."})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: n = 39\nOutput: 3\nExplanation: We can do the following operations:\n- Add 20 = 1 to n, so now n = 40.\n- Subtract 23 = 8 from n, so now n = 32.\n- Subtract 25 = 32 from n, so now n = 0.\nIt can be shown that 3 is the minimum number of operations we need to make n equal to 0.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: n = 54\nOutput: 3\nExplanation: We can do the following operations:\n- Add 21 = 2 to n, so now n = 56.\n- Add 23 = 8 to n, so now n = 64.\n- Subtract 26 = 64 from n, so now n = 0.\nSo the minimum number of operations is 3.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= n <= 10^5"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-dp",children:"Approach 1: DP"}),"\n",(0,t.jsx)(s,{children:(0,t.jsxs)(i,{value:"py",label:"Python",children:[(0,t.jsx)(o,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def minOperations(self, n: int) -> int:\n        # precompute power of 2\n        p = {1 << i for i in range(20)}\n        def dp(x):\n            # reach 0 -> 0 operation\n            if x == 0: return 0\n            # if x is a power of 2, \n            # we need 1 operation (i.e. subtract itself)\n            if x in p: return 1\n            # otherwise we either add / subtract the lsb to x\n            # e.g. 0111 -> 1000 -> 0000\n            # e.g. 1001 -> 1000 -> 0000\n            return min(dp(x + (x & -x)), dp(x - (x & -x))) + 1\n        return dp(n)\n"})})]})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var t=o(67294);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);