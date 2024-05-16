"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[40795],{55622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(85893),r=t(11151);const a={description:"Author: @wingkwong | https://leetcode.com/problems/make-the-string-great/",tags:["String","Stack"]},i="1544 - Make The String Great (Easy)",o={id:"1500-1599/make-the-string-great-easy",title:"1544 - Make The String Great (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/make-the-string-great/",source:"@site/solutions/1500-1599/1544-make-the-string-great-easy.md",sourceDirName:"1500-1599",slug:"/1500-1599/make-the-string-great-easy",permalink:"/solutions/1500-1599/make-the-string-great-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1500-1599/1544-make-the-string-great-easy.md",tags:[{label:"String",permalink:"/solutions/tags/string"},{label:"Stack",permalink:"/solutions/tags/stack"}],version:"current",sidebarPosition:1544,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/make-the-string-great/",tags:["String","Stack"]},sidebar:"tutorialSidebar",previous:{title:"1539 - Kth Missing Positive Number (Easy)",permalink:"/solutions/1500-1599/kth-missing-positive-number-easy"},next:{title:"1547 - Minimum Cost to Cut a Stick (Hard)",permalink:"/solutions/1500-1599/minimum-cost-to-cut-a-stick-hard"}},c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: One Pass",id:"approach-1-one-pass",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:t,TabItem:a,Tabs:i}=n;return t||u("SolutionAuthor",!0),a||u("TabItem",!0),i||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1544---make-the-string-great-easy",children:"1544 - Make The String Great (Easy)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/make-the-string-great/",children:"https://leetcode.com/problems/make-the-string-great/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Given a string ",(0,s.jsx)(n.code,{children:"s"})," of lower and upper case English letters."]}),"\n",(0,s.jsxs)(n.p,{children:["A good string is a string which doesn't have ",(0,s.jsx)(n.strong,{children:"two adjacent characters"})," ",(0,s.jsx)(n.code,{children:"s[i]"})," and ",(0,s.jsx)(n.code,{children:"s[i + 1]"})," where:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= i <= s.length - 2"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s[i]"})," is a lower-case letter and ",(0,s.jsx)(n.code,{children:"s[i + 1]"})," is the same letter but in upper-case or ",(0,s.jsx)(n.strong,{children:"vice-versa"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To make the string good, you can choose ",(0,s.jsx)(n.strong,{children:"two adjacent"})," characters that make the string bad and remove them. You can keep doing this until the string becomes good."]}),"\n",(0,s.jsxs)(n.p,{children:["Return ",(0,s.jsx)(n.em,{children:"the string"})," after making it good. The answer is guaranteed to be unique under the given constraints."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notice"})," that an empty string is also good."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: s = "leEeetcode"\nOutput: "leetcode"\nExplanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: s = "abBAcC"\nOutput: ""\nExplanation: We have many possible scenarios, and all lead to the same answer. For example:\n"abBAcC" --\x3e "aAcC" --\x3e "cC" --\x3e ""\n"abBAcC" --\x3e "abBA" --\x3e "aA" --\x3e ""\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: s = "s"\nOutput: "s"\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= s.length <= 100"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s"})," contains only lower and upper case English letters."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-one-pass",children:"Approach 1: One Pass"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsxs)(a,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string makeGood(string s) {\n        // we can use stack as well but we need to build the final string at the end\n        // hence, using string is enough\n        string t;\n        // for each character\n        for (auto c : s) {\n            // as long as `t` has a character, we check if the last character is same letter but in upper-case or vice-versa\n            // here we can use XOR and 1 << 5 to convert a lower character to a upper one and vice-versa\n            // A: 01[0]00001\n            // a: 01[1]00001\n            // Z: 01[0]11010\n            // z: 01[1]11010\n            // a -> A / A -> a\n            if (t.size() && (t.back() ^ (1 << 5)) == c) {\n                // if it matches the requirement, we remove the last character in `t`\n                t.pop_back();\n            } else {\n                // otherweise, we add the current char to `t`\n                t.push_back(c);\n            }\n        }\n        return t;\n    }\n};\n"})})]}),(0,s.jsxs)(a,{value:"java",label:"Java",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public String makeGood(String s) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < s.length(); i++) {\n            // as long as `sb` has a character, \n            // we check if the last character is same letter but in upper-case or vice-versa\n            // here we can use XOR and 1 << 5 to convert a lower character to a upper one and vice-versa\n            // A: 01[0]00001\n            // a: 01[1]00001\n            // Z: 01[0]11010\n            // z: 01[1]11010\n            // a -> A / A -> a\n            if (sb.length() > 0  && ((sb.charAt(sb.length() - 1) ^ (1 << 5)) == s.charAt(i))) {\n                // if it matches the requirement, we remove the last character in `sb`\n                sb.deleteCharAt(sb.length() - 1);\n            } else {\n                // otherwise, we add the current char to `sb`\n                sb.append(s.charAt(i));\n            }\n        }\n        return sb.toString();\n    }\n}\n"})})]}),(0,s.jsxs)(a,{value:"kt",label:"Kotlin",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kt",children:'class Solution {\n    fun makeGood(s: String): String {\n        var t : String = ""\n        // for each character\n        for (i in 0 .. s.length - 1) {\n            // as long as `t` has a character, we check if the last character is same letter but in upper-case or vice-versa\n            // here we can use XOR and 1 << 5 to convert a lower character to a upper one and vice-versa\n            // A: 01[0]00001\n            // a: 01[1]00001\n            // Z: 01[0]11010\n            // z: 01[1]11010\n            // a -> A / A -> a\n            if (t.length > 0 && (Math.abs(t.last().toInt() - s[i].toInt()) == (1 shl 5))) {\n                // if it matches the requirement, we remove the last character in `t`\n                t = t.dropLast(1)\n            } else {\n                // otherweise, we add the current char to `t`\n                t += s[i]\n            }\n        }\n        return t\n    }\n}\n'})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(67294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);