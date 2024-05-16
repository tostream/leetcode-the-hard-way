"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[35693],{48204:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var a=s(85893),t=s(11151);const i={description:"Author: @wingkwong, @vigneshshiv, @radojicic23 |  https://leetcode.com/problems/find-the-duplicate-number/"},l="0287 - Find the Duplicate Number (Medium)",r={id:"0200-0299/find-the-duplicate-number-medium",title:"0287 - Find the Duplicate Number (Medium)",description:"Author: @wingkwong, @vigneshshiv, @radojicic23 |  https://leetcode.com/problems/find-the-duplicate-number/",source:"@site/solutions/0200-0299/0287-find-the-duplicate-number-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/find-the-duplicate-number-medium",permalink:"/solutions/0200-0299/find-the-duplicate-number-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0287-find-the-duplicate-number-medium.md",tags:[],version:"current",sidebarPosition:287,frontMatter:{description:"Author: @wingkwong, @vigneshshiv, @radojicic23 |  https://leetcode.com/problems/find-the-duplicate-number/"},sidebar:"tutorialSidebar",previous:{title:"0286 - Walls and Gates (Medium)",permalink:"/solutions/0200-0299/walls-and-gates-medium"},next:{title:"0290 - Word Pattern (Easy)",permalink:"/solutions/0200-0299/word-pattern-easy"}},c={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit Masking",id:"approach-1-bit-masking",level:2},{value:"Approach 2: Index based",id:"approach-2-index-based",level:2},{value:"Approach 3: Floyd&#39;s Tortoise and Hare (cycle detection)",id:"approach-3-floyds-tortoise-and-hare-cycle-detection",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:s,TabItem:i,Tabs:l}=n;return s||m("SolutionAuthor",!0),i||m("TabItem",!0),l||m("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"0287---find-the-duplicate-number-medium",children:"0287 - Find the Duplicate Number (Medium)"}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/find-the-duplicate-number/",children:"https://leetcode.com/problems/find-the-duplicate-number/"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["Given an array of integers ",(0,a.jsx)(n.code,{children:"nums"})," containing ",(0,a.jsx)(n.code,{children:"n + 1"})," integers where each integer is in the range ",(0,a.jsx)(n.code,{children:"[1, n]"})," inclusive."]}),"\n",(0,a.jsxs)(n.p,{children:["There is only ",(0,a.jsx)(n.strong,{children:"one repeated number"})," in ",(0,a.jsx)(n.code,{children:"nums"}),", return ",(0,a.jsx)(n.em,{children:"this repeated number"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You must solve the problem ",(0,a.jsx)(n.strong,{children:"without"})," modifying the array ",(0,a.jsx)(n.code,{children:"nums"})," and uses only constant extra space."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: nums = [1,3,4,2,2]\nOutput: 2\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: nums = [3,1,3,4,2]\nOutput: 3\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= n <= 10^5"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"nums.length == n + 1"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= nums[i] <= n"})}),"\n",(0,a.jsxs)(n.li,{children:["All the integers in ",(0,a.jsx)(n.code,{children:"nums"})," appear only ",(0,a.jsx)(n.strong,{children:"once"})," except for ",(0,a.jsx)(n.strong,{children:"precisely one integer"})," which appears ",(0,a.jsx)(n.strong,{children:"two or more"})," times."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-bit-masking",children:"Approach 1: Bit Masking"}),"\n",(0,a.jsx)(n.p,{children:"We iterate each bit one by one. We calculate the expected bit count and the actual bit count. If the actual one is greater than the expected one, then it means this bit is part of the duplicate number."}),"\n",(0,a.jsx)(l,{children:(0,a.jsxs)(i,{value:"c++",label:"C++",children:[(0,a.jsx)(s,{name:"@wingkwong"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findDuplicate(vector<int>& nums) {\n        int duplicate = 0, n = nums.size() - 1;\n        // iterate each bit one by one\n        for(int i = 0; i < 31; i++) {\n            long expected = 0, actual = 0;\n            // the integer range [1, n] inclusive\n            // iterate each integer to calculate the expected bit count\n            for(int j = 1; j <= n; j++) expected += (1 << i) & j;\n            // iterate each number to calculate the actual bit count\n            for(int j : nums) actual += (1 << i) & j;\n            // if actual one is greater than the expected one\n            // then this bit is part of the duplicate number\n            if(actual > expected) duplicate |= (1 << i);\n        }\n        return duplicate;\n    }\n};\n"})})]})}),"\n",(0,a.jsx)(n.h2,{id:"approach-2-index-based",children:"Approach 2: Index based"}),"\n",(0,a.jsxs)(n.p,{children:["As per problem constraint, all numbers starting from ",(0,a.jsx)(n.code,{children:"1 to N"}),". So shift all numbers to the exact index (",(0,a.jsx)(n.code,{children:"num - 1"}),") positions and find the duplicate. Here, ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"1"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"})]})})]})," can be placed in index ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"0"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"0"})]})})]}),", like wise shift all the numbers one by one, at last, in the last index we will be having the duplicate number."]}),"\n",(0,a.jsxs)(n.p,{children:["Time complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", where n is the number of elements in the array"]}),"\n",(0,a.jsxs)(n.p,{children:["Space complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsx)(l,{children:(0,a.jsxs)(i,{value:"java",label:"Java",children:[(0,a.jsx)(s,{name:"@vigneshshiv"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public int findDuplicate(int[] nums) {\n        int i = 0;\n        while (i < arr.length) {\n            if (arr[i] != i + 1) {\n                if (arr[arr[i] - 1] != arr[i]) {\n                    int j = arr[i] - 1;\n                    int temp = arr[i];\n                    arr[i] = arr[j];\n                    arr[j] = temp;\n                } else {\n                    return arr[i];\n                }\n            } else {\n                i++;\n            }\n        }\n        return -1;\n    }\n}\n"})})]})}),"\n",(0,a.jsx)(n.h2,{id:"approach-3-floyds-tortoise-and-hare-cycle-detection",children:"Approach 3: Floyd's Tortoise and Hare (cycle detection)"}),"\n",(0,a.jsx)(n.p,{children:"Solving this in linear time and constant space requires Floyd's Tortoise and Hare algorithm."}),"\n",(0,a.jsx)(n.p,{children:"It's a simple cycle detection algorithm, where one pointer traverses twice as fast as another, once two pointers meet, we can trace back to where the cycle begins."}),"\n",(0,a.jsxs)(n.p,{children:["Time complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", where n is the number of elements in the array"]}),"\n",(0,a.jsxs)(n.p,{children:["Space complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsxs)(i,{value:"java",label:"Java",children:[(0,a.jsx)(s,{name:"@vigneshshiv"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public int findDuplicate(int[] nums) {\n        int slow = nums[0];\n        int fast = nums[nums[0]];\n        while (slow != fast) {\n            slow = nums[slow];\n            fast = nums[nums[fast]];\n        }\n        fast = 0;\n        while (slow != fast) {\n            slow = nums[slow];\n            fast = nums[fast];\n        }\n        return slow;\n    }\n}\n"})})]}),(0,a.jsxs)(i,{value:"javascript",label:"JavaScript",children:[(0,a.jsx)(s,{name:"@radojicic23"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findDuplicate = function(nums) {\n    let slow = 0;\n    let fast = 0;\n    while (true) {\n        slow = nums[slow];\n        fast = nums[nums[fast]];\n        if (slow == fast) break;\n    }\n    fast = 0;\n    while (true) {\n        slow = nums[slow];\n        fast = nums[fast];\n        if (slow == fast) return slow;\n    }\n};\n"})})]}),(0,a.jsxs)(i,{value:"python",label:"Python",children:[(0,a.jsx)(s,{name:"@radojicic23"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def findDuplicate(self, nums: List[int]) -> int:\n        slow, fast = 0, 0 \n        while True:\n            slow = nums[slow]\n            fast = nums[nums[fast]]\n            if slow == fast:\n                break\n        \n        fast = 0\n        while True:\n            slow = nums[slow]\n            fast = nums[fast]\n            if slow == fast:\n                return slow \n"})})]}),(0,a.jsxs)(i,{value:"cpp",label:"C++",children:[(0,a.jsx)(s,{name:"@radojicic23"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findDuplicate(vector<int>& nums) {\n        int slow = 0;\n        int fast = 0;\n        while (true) {\n            slow = nums[slow];\n            fast = nums[nums[fast]];\n            if (slow == fast) {\n                break;\n            }\n        }\n        fast = 0;\n        while (true) {\n            slow = nums[slow];\n            fast = nums[fast];\n            if (slow == fast) {\n                return slow;\n            }\n        }\n    }\n};\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var a=s(67294);const t={},i=a.createContext(t);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);