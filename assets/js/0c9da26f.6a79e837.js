"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[23008],{22287:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>m});var t=i(85893),r=i(11151);const o={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-or/"},s="2680 - Maximum OR (Medium)",a={id:"2600-2699/maximum-or-medium",title:"2680 - Maximum OR (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-or/",source:"@site/solutions/2600-2699/2680-maximum-or-medium.md",sourceDirName:"2600-2699",slug:"/2600-2699/maximum-or-medium",permalink:"/solutions/2600-2699/maximum-or-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2600-2699/2680-maximum-or-medium.md",tags:[],version:"current",sidebarPosition:2680,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-or/"},sidebar:"tutorialSidebar",previous:{title:"2679 - Sum in a Matrix (Medium)",permalink:"/solutions/2600-2699/sum-in-a-matrix-medium"},next:{title:"2681 - Power of Heroes (Hard)",permalink:"/solutions/2600-2699/power-of-heroes-hard"}},l={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Prefix &amp; Suffix",id:"approach-1-prefix--suffix",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:i,TabItem:o,Tabs:s}=n;return i||d("SolutionAuthor",!0),o||d("TabItem",!0),s||d("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"2680---maximum-or-medium",children:"2680 - Maximum OR (Medium)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-or/",children:"https://leetcode.com/problems/maximum-or/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["You are given a ",(0,t.jsx)(n.strong,{children:"0-indexed"})," integer array ",(0,t.jsx)(n.code,{children:"nums"})," of length ",(0,t.jsx)(n.code,{children:"n"})," and an integer ",(0,t.jsx)(n.code,{children:"k"}),". In an operation, you can choose an element and multiply it by ",(0,t.jsx)(n.code,{children:"2"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsx)(n.em,{children:"the maximum possible value of"}),(0,t.jsx)(n.code,{children:"nums[0] | nums[1] | ... | nums[n - 1]"})," ",(0,t.jsx)(n.em,{children:"that can be obtained after applying the operation on nums at most"}),(0,t.jsx)(n.code,{children:"k"}),(0,t.jsx)(n.em,{children:"times"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.code,{children:"a | b"})," denotes the ",(0,t.jsx)(n.strong,{children:"bitwise or"})," between two integers ",(0,t.jsx)(n.code,{children:"a"})," and ",(0,t.jsx)(n.code,{children:"b"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [12,9], k = 1\nOutput: 30\nExplanation: If we apply the operation to index 1, our new array nums will be equal to [12,18]. Thus, we return the bitwise or of 12 and 18, which is 30.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [8,1,2], k = 2\nOutput: 35\nExplanation: If we apply the operation twice on index 0, we yield a new array of [32,1,2]. Thus, we return 32|1|2 = 35.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums.length <= 10^5"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums[i] <= 10^9"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= k <= 15"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-prefix--suffix",children:"Approach 1: Prefix & Suffix"}),"\n",(0,t.jsx)(s,{children:(0,t.jsxs)(o,{value:"cpp",label:"Python",children:[(0,t.jsx)(i,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def maximumOr(self, nums: List[int], k: int) -> int:\n        n, res = len(nums), 0\n        pre, suf = [0] * n, [0] * n\n        # calculate the prefix OR \n        for i in range(n - 1): pre[i + 1] = pre[i] | nums[i]\n        # calculate the suffix OR\n        for i in range(n - 1, 0, -1): suf[i - 1] = suf[i] | nums[i]\n        # iterate each number\n        # we apply k operations on nums[i], i.e. shift k bits to the left\n        # why not applying on multiple numbers? \n        # first in binary format, multiplying a number by 2 is shifting 1 bit to the left\n        # e.g. 0010 (2) -> 0100 (4)\n        # e.g. 0101 (5) -> 1010 (10)\n        # second, in OR operation, we wish there is a 1 as left as possible\n        # which produces the greater value\n        # hence, we apply on the same number to achieve the max value\n        # which produces the max OR value\n        # now we calculate nums[0] | nums[1] | ... | nums[n - 1]\n        # by utilising the prefix OR and suffix OR\n        # the reason is simple\n        # we precompute the result instead of calculate the OR values on each iteration\n        for i in range(n): res = max(res, pre[i] | nums[i] << k | suf[i])\n        return res\n"})})]})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(67294);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);