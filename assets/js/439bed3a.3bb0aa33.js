"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[14232],{5393:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=s(85893),a=s(11151);const t={description:"Author: @DoubleSpicy | https://leetcode.com/problems/remove-k-digits/"},r="0402 - Remove K Digits (Medium)",l={id:"0400-0499/remove-k-digits-medium",title:"0402 - Remove K Digits (Medium)",description:"Author: @DoubleSpicy | https://leetcode.com/problems/remove-k-digits/",source:"@site/solutions/0400-0499/0402-remove-k-digits-medium.md",sourceDirName:"0400-0499",slug:"/0400-0499/remove-k-digits-medium",permalink:"/solutions/0400-0499/remove-k-digits-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0402-remove-k-digits-medium.md",tags:[],version:"current",sidebarPosition:402,frontMatter:{description:"Author: @DoubleSpicy | https://leetcode.com/problems/remove-k-digits/"},sidebar:"tutorialSidebar",previous:{title:"0400 - 0499",permalink:"/solutions/category/0400---0499"},next:{title:"0403 - Frog Jump (Hard)",permalink:"/solutions/0400-0499/Frog-Jump"}},c={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Monotonic Stack",id:"approach-1-monotonic-stack",level:2}];function m(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"0402---remove-k-digits-medium",children:"0402 - Remove K Digits (Medium)"}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/remove-k-digits/",children:"https://leetcode.com/problems/remove-k-digits/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["Given string num representing a non-negative integer ",(0,i.jsx)(n.code,{children:"num"}),", and an integer ",(0,i.jsx)(n.code,{children:"k"}),", return ",(0,i.jsx)(n.em,{children:"the smallest possible integer after removing"})," ",(0,i.jsx)(n.code,{children:"k"})," ",(0,i.jsx)(n.em,{children:"digits from"})," ",(0,i.jsx)(n.code,{children:"num"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: num = "1432219", k = 3\nOutput: "1219"\nExplanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: num = "10200", k = 1\nOutput: "200"\nExplanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: num = "10", k = 2\nOutput: "0"\nExplanation: Remove all the digits from the number and it is left with nothing which is 0.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= k <= num.length <= 10^5"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"num"})," consists of only digits."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"num"})," does not have any leading zeros except for the zero itself."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-monotonic-stack",children:"Approach 1: Monotonic Stack"}),"\n",(0,i.jsxs)(n.p,{children:["Only a (local) monotonically increasing stack is allowed. i.e. ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{children:"n"}),(0,i.jsx)(n.mi,{children:"u"}),(0,i.jsx)(n.mi,{children:"m"}),(0,i.jsx)(n.mo,{stretchy:"false",children:"["}),(0,i.jsx)(n.mi,{children:"i"}),(0,i.jsx)(n.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(n.mo,{children:"\u2265"}),(0,i.jsx)(n.mi,{children:"n"}),(0,i.jsx)(n.mi,{children:"u"}),(0,i.jsx)(n.mi,{children:"m"}),(0,i.jsx)(n.mo,{stretchy:"false",children:"["}),(0,i.jsx)(n.mi,{children:"j"}),(0,i.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"num[i] \\geq num[j]"})]})})}),(0,i.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(n.span,{className:"mopen",children:"["}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(n.span,{className:"mclose",children:"]"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(n.span,{className:"mrel",children:"\u2265"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(n.span,{className:"mopen",children:"["}),(0,i.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,i.jsx)(n.span,{className:"mclose",children:"]"})]})]})]})," for any ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{children:"i"}),(0,i.jsx)(n.mo,{children:">"}),(0,i.jsx)(n.mi,{children:"j"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"i > j"})]})})}),(0,i.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.6986em",verticalAlign:"-0.0391em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(n.span,{className:"mrel",children:">"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})]})]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For example: ",(0,i.jsx)(n.code,{children:"142"}),", ",(0,i.jsx)(n.code,{children:"k = 1"}),", smallest value possible is 12 because 12 is the smallest among 42, 12 and 14 (removing 1st, 2nd and 3rd digit respectively)."]}),"\n",(0,i.jsxs)(n.p,{children:["Explanation: we only care for the local monotonicity because when we have a number split into two part, ab ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsx)(n.mrow,{children:(0,i.jsx)(n.mo,{children:"\u21d2"})}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\rArr"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,i.jsx)(n.span,{className:"mrel",children:"\u21d2"})]})})]})," a, b, when each of digit inside a and b is monotonically increasing, ab is also smallest. This is true no matter is the input number ab itself is monotonic or not."]}),"\n",(0,i.jsx)(n.p,{children:"After that, if k > 0, i.e. some more digits need to be removed, we remove the trailing k digits. This is true because in such case the remaining digits must be monotonically increasing. Remove the least significant digits gives the smallest value."}),"\n",(0,i.jsxs)(n.p,{children:["The time and space complexity is ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{children:"O"}),(0,i.jsx)(n.mo,{stretchy:"false",children:"("}),(0,i.jsx)(n.mi,{children:"N"}),(0,i.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(n.span,{className:"mopen",children:"("}),(0,i.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,i.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["p.s. ",(0,i.jsx)(n.code,{children:"vector<char>"})," is used instead of ",(0,i.jsx)(n.code,{children:"stack<char>"})," because we can get iterator ",(0,i.jsx)(n.code,{children:"vector<char>::begin()"})," and ",(0,i.jsx)(n.code,{children:"vector<char>::end()"})," while stack doesn't have iterators. One line conversion to string could be done by ",(0,i.jsx)(n.code,{children:"string ansStr(ans.begin()+idx, ans.end());"}),"."]}),"\n",(0,i.jsx)(s,{name:"@DoubleSpicy"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string removeKdigits(string num, int k) {\n        vector<char> ans = {num[0]};\n        // do the monotoically increasing thing\n        for (int i = 1; i < num.length(); i++){\n            while(k > 0 && ans.size() > 0 && num[i] < ans.back()){\n                ans.pop_back();\n                k--;\n            }\n            ans.push_back(num[i]);\n        }\n\n        // if there are still some more digits that need to be removed, \n        // remove k more trailing digits\n        while(k--){\n            ans.pop_back();\n        }\n\n        // remove leading zeroes\n        int idx = 0;\n        while(idx < ans.size()){\n            if (ans[idx] == '0'){\n                idx++;\n            }\n            else{\n                break;\n            }\n        }\n\n        string ansStr(ans.begin()+idx, ans.end());\n        \n        if (ansStr.length() == 0){\n          // if everything is popped, give it back a 0.\n          // e.g. 12, k = 2\n            ansStr += '0';\n        }\n        return ansStr;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(67294);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);