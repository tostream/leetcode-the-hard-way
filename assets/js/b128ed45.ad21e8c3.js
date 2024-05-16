"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5215],{9822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(85893),i=t(11151);const o={description:"Author: @wingkwong | https://leetcode.com/problems/make-number-of-distinct-characters-equal/"},s="2531 - Make Number of Distinct Characters Equal (Medium)",c={id:"2500-2599/make-number-of-distinct-characters-equal-medium",title:"2531 - Make Number of Distinct Characters Equal (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/make-number-of-distinct-characters-equal/",source:"@site/solutions/2500-2599/2531-make-number-of-distinct-characters-equal-medium.md",sourceDirName:"2500-2599",slug:"/2500-2599/make-number-of-distinct-characters-equal-medium",permalink:"/solutions/2500-2599/make-number-of-distinct-characters-equal-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2500-2599/2531-make-number-of-distinct-characters-equal-medium.md",tags:[],version:"current",sidebarPosition:2531,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/make-number-of-distinct-characters-equal/"},sidebar:"tutorialSidebar",previous:{title:"2530 - Maximal Score After Applying K Operations (Medium)",permalink:"/solutions/2500-2599/maximal-score-after-applying-k-operations-medium"},next:{title:"2535 - Difference Between Element Sum and Digit Sum of an Array (Easy)",permalink:"/solutions/2500-2599/difference-between-element-sum-and-digit-sum-of-an-array-easy"}},a={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hashmap",id:"approach-1-hashmap",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t,TabItem:o,Tabs:s}=n;return t||m("SolutionAuthor",!0),o||m("TabItem",!0),s||m("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2531---make-number-of-distinct-characters-equal-medium",children:"2531 - Make Number of Distinct Characters Equal (Medium)"}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/make-number-of-distinct-characters-equal/",children:"https://leetcode.com/problems/make-number-of-distinct-characters-equal/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["You are given two ",(0,r.jsx)(n.strong,{children:"0-indexed"})," strings ",(0,r.jsx)(n.code,{children:"word1"})," and ",(0,r.jsx)(n.code,{children:"word2"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"move"})," consists of choosing two indices ",(0,r.jsx)(n.code,{children:"i"})," and ",(0,r.jsx)(n.code,{children:"j"})," such that ",(0,r.jsx)(n.code,{children:"0 <= i < word1.length"})," and ",(0,r.jsx)(n.code,{children:"0 <= j < word2.length"})," and swapping ",(0,r.jsx)(n.code,{children:"word1[i]"})," with ",(0,r.jsx)(n.code,{children:"word2[j]"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Return ",(0,r.jsx)(n.code,{children:"true"})," ",(0,r.jsx)(n.em,{children:"if it is possible to get the number of distinct characters in"})," ",(0,r.jsx)(n.code,{children:"word1"})," ",(0,r.jsx)(n.em,{children:"and"})," ",(0,r.jsx)(n.code,{children:"word2"})," *to be equal with ",(0,r.jsx)(n.strong,{children:"exactly one"})," move.*Return ",(0,r.jsx)(n.code,{children:"false"})," ",(0,r.jsx)(n.em,{children:"otherwise"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: word1 = "ac", word2 = "b"\nOutput: false\nExplanation: Any pair of swaps would yield two distinct characters in the first string, and one in the second string.\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: word1 = "abcc", word2 = "aab"\nOutput: true\nExplanation: We swap index 2 of the first string with index 0 of the second string. The resulting strings are word1 = "abac" and word2 = "cab", which both have 3 distinct characters.\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: word1 = "abcde", word2 = "fghij"\nOutput: true\nExplanation: Both resulting strings will have 5 distinct characters, regardless of which indices we swap.\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= word1.length, word2.length <= 105"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"word1"})," and ",(0,r.jsx)(n.code,{children:"word2"})," consist of only lowercase English letters."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-hashmap",children:"Approach 1: Hashmap"}),"\n",(0,r.jsx)(s,{children:(0,r.jsxs)(o,{value:"cpp",label:"C++",children:[(0,r.jsx)(t,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isItPossible(string word1, string word2) {\n        unordered_map<char, int> m1, m2;\n        // count the frequency of each character in word1\n        for (char c : word1) m1[c]++;\n        // count the frequency of each character in word2\n        for (char c : word2) m2[c]++;\n        // simulate the swap\n        for (int i = 0; i < 26; i++) {\n            for (int j = 0; j < 26; j++) {\n                char x = i + 'a';\n                char y = j + 'a';\n                // if we need to swap x and y, \n                // we need to make sure x is in word1 and y is in word2\n                if (m1[x] > 0 && m2[y] > 0) {\n                    // swap x in word1 and y in word2\n                    m1[x]--; m2[x]++;\n                    m1[y]++; m2[y]--;\n                    // check if the number of distinct characters are equal\n                    int cnt1 = 0, cnt2 = 0;\n                    for (int k = 0; k < 26; k++) {\n                        cnt1 += m1[k + 'a'] > 0;\n                        cnt2 += m2[k + 'a'] > 0;\n                    }\n                    // if so, then return true\n                    if (cnt1 == cnt2) return true;\n                    // undo the swap so that we can perform a new swap\n                    m1[x]++; m2[x]--;\n                    m1[y]--; m2[y]++;   \n                }\n            }\n        }\n        return false;\n    }\n};\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var r=t(67294);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);