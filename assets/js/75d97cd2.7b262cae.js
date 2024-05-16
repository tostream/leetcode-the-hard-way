"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[53818],{82764:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=t(85893),i=t(11151);const o={description:"Author: @wingkwong | https://leetcode.com/problems/calculate-digit-sum-of-a-string/"},r="2243 - Calculate Digit Sum of a String (Easy)",l={id:"2200-2299/calculate-digit-sum-of-a-string-easy",title:"2243 - Calculate Digit Sum of a String (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/calculate-digit-sum-of-a-string/",source:"@site/solutions/2200-2299/2243-calculate-digit-sum-of-a-string-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/calculate-digit-sum-of-a-string-easy",permalink:"/solutions/2200-2299/calculate-digit-sum-of-a-string-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2243-calculate-digit-sum-of-a-string-easy.md",tags:[],version:"current",sidebarPosition:2243,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/calculate-digit-sum-of-a-string/"},sidebar:"tutorialSidebar",previous:{title:"2242 - Maximum Score of a Node Sequence (Hard)",permalink:"/solutions/2200-2299/maximum-score-of-a-node-sequence-hard"},next:{title:"2244 - Minimum Rounds to Complete All Tasks (Medium)",permalink:"/solutions/2200-2299/minimum-rounds-to-complete-all-tasks-medium"}},c={},a=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2243---calculate-digit-sum-of-a-string-easy",children:"2243 - Calculate Digit Sum of a String (Easy)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/calculate-digit-sum-of-a-string/",children:"https://leetcode.com/problems/calculate-digit-sum-of-a-string/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["You are given a string ",(0,s.jsx)(n.code,{children:"s"})," consisting of digits and an integer ",(0,s.jsx)(n.code,{children:"k"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"round"})," can be completed if the length of ",(0,s.jsx)(n.code,{children:"s"})," is greater than ",(0,s.jsx)(n.code,{children:"k"}),". In one round, do the following:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Divide"})," ",(0,s.jsx)(n.code,{children:"s"})," into ",(0,s.jsx)(n.strong,{children:"consecutive groups"})," of size ",(0,s.jsx)(n.code,{children:"k"})," such that the first ",(0,s.jsx)(n.code,{children:"k"})," characters are in the first group, the next ",(0,s.jsx)(n.code,{children:"k"})," characters are in the second group, and so on. ",(0,s.jsx)(n.strong,{children:"Note"})," that the size of the last group can be smaller than ",(0,s.jsx)(n.code,{children:"k"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Replace"})," each group of ",(0,s.jsx)(n.code,{children:"s"})," with a string representing the sum of all its digits. For example, ",(0,s.jsx)(n.code,{children:'"346"'})," is replaced with ",(0,s.jsx)(n.code,{children:'"13"'})," because ",(0,s.jsx)(n.code,{children:"3 + 4 + 6 = 13"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Merge"})," consecutive groups together to form a new string. If the length of the string is greater than ",(0,s.jsx)(n.code,{children:"k"}),", repeat from step ",(0,s.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Return ",(0,s.jsx)(n.code,{children:"s"})," ",(0,s.jsx)(n.em,{children:"after all rounds have been completed"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: s = "11111222223", k = 3\nOutput: "135"\nExplanation: \n- For the first round, we divide s into groups of size 3: "111", "112", "222", and "23".\n  \u200b\u200b\u200b\u200b\u200bThen we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5. \n  So, s becomes "3" + "4" + "6" + "5" = "3465" after the first round.\n- For the second round, we divide s into "346" and "5".\n  Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5. \n  So, s becomes "13" + "5" = "135" after second round. \nNow, s.length <= k, so we return "135" as the answer.\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: s = "00000000", k = 3\nOutput: "000"\nExplanation: \nWe divide s into "000", "000", and "00".\nThen we calculate the digit sum of each group: 0 + 0 + 0 = 0, 0 + 0 + 0 = 0, and 0 + 0 = 0. \ns becomes "0" + "0" + "0" = "000", whose length is equal to k, so we return "000".\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= s.length <= 100"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"2 <= k <= 100"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s"})," consists of digits only."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-simulation",children:"Approach 1: Simulation"}),"\n",(0,s.jsx)(n.p,{children:"Just following the instructions."}),"\n",(0,s.jsx)(t,{name:"@wingkwong"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string digitSum(string s, int k) {\n        while (s.size() > k) {\n            string ns = \"\";\n            for (int i = 0; i < s.size(); i += k) {\n                // Divide s into a group of size k\n                string t = s.substr(i, k);\n                // Calulate the digit sum in the current group\n                int sum = 0;\n                for (int j = 0; j < min((int) t.size(), k); j++) {\n                    sum += t[j] - '0';\n                }\n                // merge back together\n                ns += to_string(sum);\n            }\n            // replace s and do the next round\n            s = ns;\n        }\n        return s;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(67294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);