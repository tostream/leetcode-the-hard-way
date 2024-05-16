"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[40061],{11930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,suggestedProblems:()=>h,toc:()=>c});var s=n(85893),i=n(11151);const r={title:"Two Pointers",description:"Two Pointers is an effective technique used for searching pairs in a sorted array.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","two pointers","algorithm"]},a=void 0,o={id:"basic-topics/two-pointers",title:"Two Pointers",description:"Two Pointers is an effective technique used for searching pairs in a sorted array.",source:"@site/tutorials/basic-topics/two-pointers.md",sourceDirName:"basic-topics",slug:"/basic-topics/two-pointers",permalink:"/tutorials/basic-topics/two-pointers",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/two-pointers.md",tags:[],version:"current",frontMatter:{title:"Two Pointers",description:"Two Pointers is an effective technique used for searching pairs in a sorted array.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","two pointers","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Trie",permalink:"/tutorials/basic-topics/trie"},next:{title:"Graph Theory",permalink:"/tutorials/category/graph-theory"}},l={},h=[{problemName:"1768 - Merge Strings Alternately",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/merge-strings-alternately/",solutionLink:"../../solutions/1700-1799/merge-strings-alternately-easy"},{problemName:"2108 - Find First Palindromic String in the Array",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/find-first-palindromic-string-in-the-array/",solutionLink:"../../solutions/2100-2199/find-first-palindromic-string-in-the-array-easy"},{problemName:"0283 - Move Zeroes",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/move-zeroes/",solutionLink:"../../solutions/0200-0299/move-zeroes-easy"}],c=[{value:"Overview",id:"overview",level:2}];function d(e){const t={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:n,TabItem:r,Table:a,Tabs:o,TutorialAuthors:l}=t;return n||p("SolutionAuthor",!0),r||p("TabItem",!0),a||p("Table",!0),o||p("Tabs",!0),l||p("TutorialAuthors",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{names:"@heiheihang, @wingkwong"}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"The two pointers technique is a technique used to iterate through a data set, typically an array or a list, in a controlled way. It involves using two pointers, one pointing to the beginning of the data set and the other pointing to the end, and moving them towards each other based on specific conditions. This technique is commonly used to solve problems that involve searching for a specific condition or pattern within a data set, or that require a comparison between different elements in the data set."}),"\n",(0,s.jsx)(t.p,{children:"The two pointers technique is mainly used for solving problems that have a linear time complexity, it can lead to substantial performance improvements over a brute-force approach. Some common examples of problems that can be solved using this technique include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Finding the maximum / minimum value in a set of data."}),"\n",(0,s.jsx)(t.li,{children:"Counting the number of occurrences of a specific element."}),"\n",(0,s.jsx)(t.li,{children:"Finding the longest substring without repeating characters."}),"\n",(0,s.jsxs)(t.li,{children:["Finding the maximum sum of a sub-array of size ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsx)(t.mrow,{children:(0,s.jsx)(t.mi,{children:"k"})}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.6944em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Overall, the two pointers technique is a useful approach for solving specific types of problems that involve iterating through a data set in a controlled way, such as in pattern matching, data analysis, and statistics. It allows for an efficient and controlled iteration of a data set, which can lead to improved performance and more accurate results."}),"\n",(0,s.jsxs)(t.h1,{id:"example-1-977-squares-of-a-sorted-array",children:["Example 1: ",(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/squares-of-a-sorted-array/",children:"977. Squares of a Sorted Array"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Given an integer array ",(0,s.jsx)(t.code,{children:"nums"})," sorted in ",(0,s.jsx)(t.strong,{children:"non-decreasing"})," order, return ",(0,s.jsxs)(t.em,{children:["an array of ",(0,s.jsx)(t.strong,{children:"the squares of each number"})," sorted in non-decreasing order"]}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Let's look at this example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# input\nnums = [-4,-1,0,3,10]\n"})}),"\n",(0,s.jsx)(t.p,{children:"From this input, we can generate the following square numbers:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"squares = [16, 1, 0, 9, 100]\n"})}),"\n",(0,s.jsx)(t.p,{children:"We want to return the following sorted squares:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"answer = [0, 1, 9, 16, 100]\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You may be thinking, why can't we generate the squares and then sort the result? This approach would take ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsxs)(t.mrow,{children:[(0,s.jsx)(t.mi,{children:"O"}),(0,s.jsx)(t.mo,{stretchy:"false",children:"("}),(0,s.jsx)(t.mi,{children:"N"}),(0,s.jsx)(t.mi,{children:"l"}),(0,s.jsx)(t.mi,{children:"o"}),(0,s.jsx)(t.mi,{children:"g"}),(0,s.jsx)(t.mi,{children:"N"}),(0,s.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"O(NlogN)"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(t.span,{className:"mopen",children:"("}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"Nl"}),(0,s.jsx)(t.span,{className:"mord mathnormal",children:"o"}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,s.jsx)(t.span,{className:"mclose",children:")"})]})})]}),", and we want to do better than this."]}),"\n",(0,s.jsxs)(t.p,{children:["We can sequentially add the next biggest elements with the two pointer approach. We first set a ",(0,s.jsx)(t.code,{children:"left_pointer"})," at the left of the list and a ",(0,s.jsx)(t.code,{children:"right_pointer"})," at the right of the list. The ",(0,s.jsx)(t.code,{children:"left_pointer"})," should be pointing at the ",(0,s.jsx)(t.strong,{children:"largest"})," negative number (most negative), and the ",(0,s.jsx)(t.code,{children:"right_pointer"})," should be pointing at the ",(0,s.jsx)(t.strong,{children:"largest"})," positive number. We can move the pointers accordingly to find the next largest squared number."]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsxs)(r,{value:"py",label:"Python",children:[(0,s.jsx)(n,{name:"@heiheihang"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:"class Solution:\n    def sortedSquares(self, nums: List[int]) -> List[int]:\n        # initialize two pointers\n        left_pointer, right_pointer = 0, len(nums) - 1\n        # initialize result\n        res = []\n        # while left_pointer does not meet right_pointer\n        while(left_pointer <= right_pointer):\n            # if the square of left_pointer and right_pointer \n            if(abs(nums[left_pointer]) > abs(nums[right_pointer])):\n                res.append(nums[left_pointer] ** 2)\n                # we move the left to the right\n                left_pointer += 1\n            else:\n                res.append(nums[right_pointer] ** 2)\n                # we move the right pointer to the left\n                right_pointer -= 1\n        # we need to reverse the result list\n        res.reverse()\n        return res\n"})})]}),(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(n,{name:"@wingkwong"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> sortedSquares(vector<int>& nums) {\n        int left_pointer = 0;\n        int right_pointer = nums.size() - 1;\n        vector<int> res;\n        while(left_pointer <= right_pointer) {\n            if(abs(nums[left_pointer]) > abs(nums[right_pointer])) {\n                res.push_back(nums[left_pointer] * nums[left_pointer]);\n                left_pointer += 1;\n            }\n            else {\n                res.push_back(nums[right_pointer] * nums[right_pointer]);\n                right_pointer -= 1;\n            }\n        }\n        reverse(res.begin(), res.end());\n        return res;\n    }\n};\n\n"})})]}),(0,s.jsxs)(r,{value:"java",label:"Java",children:[(0,s.jsx)(n,{name:"@wingkwong"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"class Solution {\n    public List<Integer> sortedSquares(int[] nums) {\n        int left_pointer = 0;\n        int right_pointer = nums.length - 1;\n        List<Integer> res = new ArrayList<>();\n        while(left_pointer <= right_pointer) {\n            if(Math.abs(nums[left_pointer]) > Math.abs(nums[right_pointer])) {\n                res.add(nums[left_pointer] * nums[left_pointer]);\n                left_pointer += 1;\n            }\n            else {\n                res.add(nums[right_pointer] * nums[right_pointer]);\n                right_pointer -= 1;\n            }\n        }\n        Collections.reverse(res);\n        return res;\n    }\n}\n\n"})})]})]}),"\n",(0,s.jsx)(t.p,{children:"Unfortunately, there is no fixed way to perform two pointers. However, generally, we have a pointer at the start of the list and another pointer at the end of the list. We have to carefully analyze the question and choose the most appropriate approach to operate the two pointers."}),"\n","\n",(0,s.jsx)(a,{title:"Suggested Problems",data:h})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(67294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);