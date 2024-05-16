"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[40991],{26001:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var a=n(85893),t=n(11151);const l={description:"Author: @wingkwong | https://leetcode.com/problems/longest-chunked-palindrome-decomposition/"},i="1147 - Longest Chunked Palindrome Decomposition (Hard)",r={id:"1100-1199/longest-chunked-palindrome-decomposition-hard",title:"1147 - Longest Chunked Palindrome Decomposition (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/longest-chunked-palindrome-decomposition/",source:"@site/solutions/1100-1199/1147-longest-chunked-palindrome-decomposition-hard.md",sourceDirName:"1100-1199",slug:"/1100-1199/longest-chunked-palindrome-decomposition-hard",permalink:"/solutions/1100-1199/longest-chunked-palindrome-decomposition-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1100-1199/1147-longest-chunked-palindrome-decomposition-hard.md",tags:[],version:"current",sidebarPosition:1147,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/longest-chunked-palindrome-decomposition/"},sidebar:"tutorialSidebar",previous:{title:"1143 - Longest Common Subsequence (Medium)",permalink:"/solutions/1100-1199/longest-common-subsequence-medium"},next:{title:"1544 - Make The String Great (Easy)",permalink:"/solutions/1100-1199/make-the-string-great-easy"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function o(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"1147---longest-chunked-palindrome-decomposition-hard",children:"1147 - Longest Chunked Palindrome Decomposition (Hard)"}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/longest-chunked-palindrome-decomposition/",children:"https://leetcode.com/problems/longest-chunked-palindrome-decomposition/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(s.p,{children:["You are given a string ",(0,a.jsx)(s.code,{children:"text"}),". You should split it to k substrings ",(0,a.jsx)(s.code,{children:"(subtext1, subtext2, ..., subtextk)"})," such that:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"subtexti"})," is a ",(0,a.jsx)(s.strong,{children:"non-empty"})," string."]}),"\n",(0,a.jsxs)(s.li,{children:["The concatenation of all the substrings is equal to ",(0,a.jsx)(s.code,{children:"text"})," (i.e., ",(0,a.jsx)(s.code,{children:"subtext1 + subtext2 + ... + subtextk == text"}),")."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"subtexti == subtextk - i + 1"})," for all valid values of ",(0,a.jsx)(s.code,{children:"i"})," (i.e., ",(0,a.jsx)(s.code,{children:"1 <= i <= k"}),")."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Return the largest possible value of ",(0,a.jsx)(s.code,{children:"k"}),"."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input: text = "ghiabcdefhelloadamhelloabcdefghi"\nOutput: 7\nExplanation: We can split the string on "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)".\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input: text = "merchant"\nOutput: 1\nExplanation: We can split the string on "(merchant)".\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input: text = "antaprezatepzapreanta"\nOutput: 11\nExplanation: We can split the string on "(a)(nt)(a)(pre)(za)(tpe)(za)(pre)(a)(nt)(a)".\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= text.length <= 1000"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"text"})," consists only of lowercase English characters."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,a.jsxs)(s.p,{children:["Build the subtext from the left ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"x"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"l = l + text[i]"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})]})]})," and from the right ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"x"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mi,{children:"r"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"r = text[n - 1 - i] + r"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"})]})]})]}),". If at a point they are same, then increase the answer by ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"1"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})})]})," and reset both ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"l"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"l"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"})]})})]})," and ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"r"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"r"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"})]})})]}),"."]}),"\n",(0,a.jsx)(n,{name:"@wingkwong"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:'class Solution {\npublic:\n    int longestDecomposition(string text) {\n        int n = text.size(), ans = 0;\n        string l, r;\n        for (int i = 0; i < n; i++) {\n            // build subtect from the left\n            l = l + text[i];\n            // build subtect from the right\n            r = text[n - 1 - i] + r;\n            // if they are same, \n            if (l == r) {\n                // then increase answer by 1\n                ans += 1;\n                // reset l & r\n                l = r = "";\n            }\n        }\n        return ans;\n    }\n};\n'})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>i});var a=n(67294);const t={},l=a.createContext(t);function i(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);