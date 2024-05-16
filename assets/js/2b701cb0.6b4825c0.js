"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[40627],{47989:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=i(85893),r=i(11151);const o={description:"Author: @wingkwong | https://leetcode.com/problems/n-th-tribonacci-number/",tags:["Math","Dynamic Programming","Memoization"]},a="1137 - N-th Tribonacci Number (Easy)",c={id:"1100-1199/n-th-tribonacci-number-easy",title:"1137 - N-th Tribonacci Number (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/n-th-tribonacci-number/",source:"@site/solutions/1100-1199/1137-n-th-tribonacci-number-easy.md",sourceDirName:"1100-1199",slug:"/1100-1199/n-th-tribonacci-number-easy",permalink:"/solutions/1100-1199/n-th-tribonacci-number-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1100-1199/1137-n-th-tribonacci-number-easy.md",tags:[{label:"Math",permalink:"/solutions/tags/math"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Memoization",permalink:"/solutions/tags/memoization"}],version:"current",sidebarPosition:1137,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/n-th-tribonacci-number/",tags:["Math","Dynamic Programming","Memoization"]},sidebar:"tutorialSidebar",previous:{title:"1135 - Connecting Cities With Minimum Cost (Medium)",permalink:"/solutions/1100-1199/connecting-cities-with-minimum-cost-medium"},next:{title:"1140 - Stone Game II (Medium)",permalink:"/solutions/1100-1199/stone-game-ii-medium"}},s={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2},{value:"Approach 2: Dynamic Programming (Space Optimized)",id:"approach-2-dynamic-programming-space-optimized",level:2},{value:"Approach 3: Hardcode",id:"approach-3-hardcode",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components},{SolutionAuthor:i,TabItem:o,Tabs:a}=e;return i||m("SolutionAuthor",!0),o||m("TabItem",!0),a||m("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"1137---n-th-tribonacci-number-easy",children:"1137 - N-th Tribonacci Number (Easy)"}),"\n",(0,t.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.com/problems/n-th-tribonacci-number/",children:"https://leetcode.com/problems/n-th-tribonacci-number/"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsx)(e.p,{children:"The Tribonacci sequence Tn is defined as follows:"}),"\n",(0,t.jsx)(e.p,{children:"T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0."}),"\n",(0,t.jsxs)(e.p,{children:["Given ",(0,t.jsx)(e.code,{children:"n"}),", return the value of Tn."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: n = 4\nOutput: 4\nExplanation:\nT_3 = 0 + 1 + 1 = 2\nT_4 = 1 + 1 + 2 = 4\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: n = 25\nOutput: 1389537\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"0 <= n <= 37"})}),"\n",(0,t.jsxs)(e.li,{children:["The answer is guaranteed to fit within a 32-bit integer, ie. ",(0,t.jsx)(e.code,{children:"answer <= 2^31 - 1"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,t.jsx)(a,{children:(0,t.jsxs)(o,{value:"cpp",label:"C++",children:[(0,t.jsx)(i,{name:"@wingkwong"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"// TC: O(N)\n// SC: O(N)\nclass Solution {\npublic:\n    // since first three numbers are given,\n    // let dp[i] be the value of T_n\n    // we can build the dp[i] based on dp[i - 1] + dp[i - 2] + dp[i - 3]\n    int tribonacci(int n) {\n        // first three numbers are known\n        if (n == 0) return 0;\n        if (n == 1 || n == 2) return 1;\n        // dp[i]: the value of T_n\n        vector<int> dp(n + 1);\n        // base case\n        dp[0] = 0;\n        dp[1] = dp[2] = 1;\n        // dp[i] is the sum of the previous three values\n        for(int i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];\n        return dp[n];\n    }\n};\n"})})]})}),"\n",(0,t.jsx)(e.h2,{id:"approach-2-dynamic-programming-space-optimized",children:"Approach 2: Dynamic Programming (Space Optimized)"}),"\n",(0,t.jsx)(e.p,{children:"In the above DP solution, we can further optimize the space to constant space since we just need to know the previous three values."}),"\n",(0,t.jsx)(a,{children:(0,t.jsxs)(o,{value:"cpp",label:"C++",children:[(0,t.jsx)(i,{name:"@wingkwong"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"// TC: O(N)\n// SC: O(1)\nclass Solution {\npublic:\n    int tribonacci(int n) {\n        if (n == 0) return 0;\n        if (n == 1 || n == 2) return 1;\n        // vector<int> dp(n + 1);\n        // dp[0] = 0;\n        // dp[1] = dp[2] = 1;\n        int a = 0, b = 1, c = 1, t;\n        for(int i = 3; i <= n; i++) {\n            // dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];\n            t = a + b + c;\n            a = b;\n            b = c;\n            c = t;\n        }\n        // return dp[n];\n        return c;\n    }\n};\n"})})]})}),"\n",(0,t.jsx)(e.h2,{id:"approach-3-hardcode",children:"Approach 3: Hardcode"}),"\n",(0,t.jsx)(e.p,{children:"Here's the hardcoded solution. In case someone is interested, you may take a look at the tribonacci sequence A000073 at OEIS."}),"\n",(0,t.jsx)(a,{children:(0,t.jsxs)(o,{value:"cpp",label:"C++",children:[(0,t.jsx)(i,{name:"@wingkwong"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> lol = { 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890, 66012, 121415, 223317, 410744, 755476, 1389537, 2555757, 4700770, 8646064, 15902591, 29249425, 53798080, 98950096, 181997601, 334745777, 615693474, 1132436852, 2082876103 };\n    int tribonacci(int n) {\n        return lol[n];\n    }\n};\n"})})]})})]})}function p(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}function m(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>a});var t=i(67294);const r={},o=t.createContext(r);function a(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);