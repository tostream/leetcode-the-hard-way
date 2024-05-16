"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[48071],{62776:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=s(85893),r=s(11151);const a={description:"Author: @wingkwong | https://leetcode.com/problems/shortest-unsorted-continuous-subarray/"},i="0581 - Shortest Unsorted Continuous Subarray (Medium)",o={id:"0500-0599/shortest-unsorted-continuous-subarray-medium",title:"0581 - Shortest Unsorted Continuous Subarray (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",source:"@site/solutions/0500-0599/0581-shortest-unsorted-continuous-subarray-medium.md",sourceDirName:"0500-0599",slug:"/0500-0599/shortest-unsorted-continuous-subarray-medium",permalink:"/solutions/0500-0599/shortest-unsorted-continuous-subarray-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0581-shortest-unsorted-continuous-subarray-medium.md",tags:[],version:"current",sidebarPosition:581,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/shortest-unsorted-continuous-subarray/"},sidebar:"tutorialSidebar",previous:{title:"0572 - Subtree of Another Tree (Easy)",permalink:"/solutions/0500-0599/subtree-of-another-tree-easy"},next:{title:"0589 - N-ary Tree Preorder Traversal (Easy)",permalink:"/solutions/0500-0599/n-ary-tree-preorder-traversal-easy"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sort",id:"approach-1-sort",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"0581---shortest-unsorted-continuous-subarray-medium",children:"0581 - Shortest Unsorted Continuous Subarray (Medium)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",children:"https://leetcode.com/problems/shortest-unsorted-continuous-subarray/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["Given an integer array ",(0,t.jsx)(n.code,{children:"nums"}),", you need to find one ",(0,t.jsx)(n.strong,{children:"continuous subarray"})," that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order."]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsx)(n.em,{children:"the shortest such subarray and output its length"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [2,6,4,8,10,9,15]\nOutput: 5\nExplanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [1,2,3,4]\nOutput: 0\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [1]\nOutput: 0\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums.length <= 10^4"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-105 <= nums[i] <= 10^5"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-sort",children:"Approach 1: Sort"}),"\n",(0,t.jsxs)(n.p,{children:["If the input is sorted, then return ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"0"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"0"})]})})]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Otherwise, we compare the input with the sorted version to check the first difference ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"l"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"l"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"})]})})]})," and the last difference ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"r"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"r"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"})]})})]}),". The answer will be ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"r"}),(0,t.jsx)(n.mo,{children:"\u2212"}),(0,t.jsx)(n.mi,{children:"l"}),(0,t.jsx)(n.mo,{children:"+"}),(0,t.jsx)(n.mn,{children:"1"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"r - l + 1"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"+"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"1"})]})]})]}),"."]}),"\n",(0,t.jsx)(s,{name:"@wingkwong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findUnsortedSubarray(vector<int>& nums) {\n        vector<int> v = nums;\n        // sort the cloned input\n        sort(v.begin(), v.end());\n        // if it is sorted, then return 0\n        if (v == nums) return 0;\n        // assuming it must have the answer\n        int l = -1, r = -1;\n        for (int i = 0; i < nums.size(); i++) {\n            // find the first index of the difference\n            if (l == -1 && v[i] != nums[i]) l = i;\n            // find the last index of the difference\n            if (v[i] != nums[i]) r = i;\n        }\n        // output the length\n        return r - l + 1;\n    }\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Same idea but search from both side."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findUnsortedSubarray(vector<int>& nums) {\n        vector<int> v = nums;\n        sort(nums.begin(), nums.end());\n        int n = nums.size(), i = 0, j = n - 1;\n        while (i < n && nums[i] == v[i]) i++;\n        while (j > i && nums[j] == v[j]) j--;\n        return j - i + 1;\n    }\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(67294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);