"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[66721],{23324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=t(85893),o=t(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/two-out-of-three",tags:["Hash Map"]},a="2032 - Two Out of Three (Easy)",i={id:"2000-2099/two-out-of-three-easy",title:"2032 - Two Out of Three (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/two-out-of-three",source:"@site/solutions/2000-2099/2032-two-out-of-three-easy.md",sourceDirName:"2000-2099",slug:"/2000-2099/two-out-of-three-easy",permalink:"/solutions/2000-2099/two-out-of-three-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2000-2099/2032-two-out-of-three-easy.md",tags:[{label:"Hash Map",permalink:"/solutions/tags/hash-map"}],version:"current",sidebarPosition:2032,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/two-out-of-three",tags:["Hash Map"]},sidebar:"tutorialSidebar",previous:{title:"2017 - Grid Game (Medium)",permalink:"/solutions/2000-2099/grid-game-medium"},next:{title:"2050 - Parallel Courses III (Hard)",permalink:"/solutions/2000-2099/parallel-courses-iii-hard"}},l={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2032---two-out-of-three-easy",children:"2032 - Two Out of Three (Easy)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/two-out-of-three",children:"https://leetcode.com/problems/two-out-of-three"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Given three integer arrays ",(0,s.jsx)(n.code,{children:"nums1"}),", ",(0,s.jsx)(n.code,{children:"nums2"}),", and ",(0,s.jsx)(n.code,{children:"nums3"}),", return ",(0,s.jsxs)(n.em,{children:["a ",(0,s.jsx)(n.strong,{children:"distinct"})," array containing all the values that are present in ",(0,s.jsx)(n.strong,{children:"at least two"})," out of the three arrays. You may return the values in ",(0,s.jsx)(n.strong,{children:"any"})," order"]}),". "]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]\nOutput: [3,2]\nExplanation: The values that are present in at least two arrays are:\n- 3, in all three arrays.\n- 2, in nums1 and nums2.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]\nOutput: [2,3,1]\nExplanation: The values that are present in at least two arrays are:\n- 2, in nums2 and nums3.\n- 3, in nums1 and nums2.\n- 1, in nums1 and nums3.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]\nOutput: []\nExplanation: No value is present in at least two arrays.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= nums1.length, nums2.length, nums3.length <= 100"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= nums1[i], nums2[j], nums3[k] <= 100"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-hash-map",children:"Approach 1: Hash Map"}),"\n",(0,s.jsx)(t,{name:"@wingkwong"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> twoOutOfThree(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3) {\n        vector<int> ans;\n        // use hash map to all elements from nums1, nums2, and nums3\n        map<int, int> m;\n        for(auto x : nums1) m[x] = 1;\n        for(auto x : nums2) m[x] = 1;\n        for(auto x : nums3) m[x] = 1;\n        for(auto x : m) {\n            // for each element in hash map, check if it exists in nums1, nums2, and nums3\n            int c1 = 0, c2 = 0, c3 = 0;\n            if (find(nums1.begin(), nums1.end(), x.first) != nums1.end()) c1 = 1;\n            if (find(nums2.begin(), nums2.end(), x.first) != nums2.end()) c2 = 1;\n            if (find(nums3.begin(), nums3.end(), x.first) != nums3.end()) c3 = 1;\n            // if it presents in at least two out of the three arrays,\n            // then add it to ans\n            if (c1 + c2 + c3 >= 2) ans.push_back(x.first);\n        }\n        return ans;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(67294);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);