"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[72231],{36914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(85893),i=n(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/detect-capital/"},o="0520 - Detect Capital (Easy)",l={id:"0500-0599/detect-capital-easy",title:"0520 - Detect Capital (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/detect-capital/",source:"@site/solutions/0500-0599/0520-detect-capital-easy.md",sourceDirName:"0500-0599",slug:"/0500-0599/detect-capital-easy",permalink:"/solutions/0500-0599/detect-capital-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0520-detect-capital-easy.md",tags:[],version:"current",sidebarPosition:520,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/detect-capital/"},sidebar:"tutorialSidebar",previous:{title:"0518 - Coin Change 2 (Medium)",permalink:"/solutions/0500-0599/coin-change-2-medium"},next:{title:"0523 - Continuous Subarray Sum (Medium)",permalink:"/solutions/0500-0599/continuous-subarray-sum-medium"}},a={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: One Pass",id:"approach-1-one-pass",level:2},{value:"Approach 2: Case By Case",id:"approach-2-case-by-case",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:n,TabItem:r,Tabs:o}=t;return n||h("SolutionAuthor",!0),r||h("TabItem",!0),o||h("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"0520---detect-capital-easy",children:"0520 - Detect Capital (Easy)"}),"\n",(0,s.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/detect-capital/",children:"https://leetcode.com/problems/detect-capital/"})}),"\n",(0,s.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsx)(t.p,{children:"We define the usage of capitals in a word to be right when one of the following cases holds:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["All letters in this word are capitals, like ",(0,s.jsx)(t.code,{children:'"USA"'}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["All letters in this word are not capitals, like ",(0,s.jsx)(t.code,{children:'"leetcode"'}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Only the first letter in this word is capital, like ",(0,s.jsx)(t.code,{children:'"Google"'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Given a string ",(0,s.jsx)(t.code,{children:"word"}),", return ",(0,s.jsx)(t.code,{children:"true"})," if the usage of capitals in it is right."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'Input: word = "USA"\nOutput: true\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'Input: word = "FlaG"\nOutput: false\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"1 <= word.length <= 100"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"word"})," consists of lowercase and uppercase English letters."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"approach-1-one-pass",children:"Approach 1: One Pass"}),"\n",(0,s.jsx)(t.p,{children:"Just check if it is invalid the conditions. If so, return false immediately."}),"\n",(0,s.jsx)(o,{children:(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(n,{name:"@wingkwong"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool detectCapitalUse(string word) {\n        for(int i = 1; i < word.size(); i++){\n            if(isupper(word[1]) != isupper(word[i]) || \n               islower(word[0]) && isupper(word[i])) return false;\n        }        \n        return true;\n    }\n};\n"})})]})}),"\n",(0,s.jsx)(t.h2,{id:"approach-2-case-by-case",children:"Approach 2: Case By Case"}),"\n",(0,s.jsx)(t.p,{children:"Count the number of characters with upper case and try those 3 cases."}),"\n",(0,s.jsx)(o,{children:(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(n,{name:"@wingkwong"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'class Solution {\npublic:\n    bool detectCapitalUse(string word) {\n        int upper = 0;\n\t\t// count number of characters with upper case\n        for (auto x : word) upper += isupper(x) ? 1 : 0;\n            // case 1: All letters in this word are capitals, like "USA".\n        return upper == word.size() ||\n            // case 2: All letters in this word are not capitals, like "leetcode".\n               upper == 0 ||\n            // case 3: Only the first letter in this word is capital, like "Google".\n               (upper == 1 && isupper(word.front()));\n    }\n};\n'})})]})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(67294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);