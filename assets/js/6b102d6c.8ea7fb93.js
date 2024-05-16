"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[35926],{64963:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var a=s(85893),t=s(11151);const i={description:"Author: @ColeB2 | https://leetcode.com/problems/find-median-from-data-stream/",tags:["Two Pointers","Design","Sorting","Heap (Priority Queue)","Data Stream"]},r="0295 - Find Median from Data Stream (Hard)",l={id:"0200-0299/find-median-from-data-stream-hard",title:"0295 - Find Median from Data Stream (Hard)",description:"Author: @ColeB2 | https://leetcode.com/problems/find-median-from-data-stream/",source:"@site/solutions/0200-0299/0295-find-median-from-data-stream-hard.md",sourceDirName:"0200-0299",slug:"/0200-0299/find-median-from-data-stream-hard",permalink:"/solutions/0200-0299/find-median-from-data-stream-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0295-find-median-from-data-stream-hard.md",tags:[{label:"Two Pointers",permalink:"/solutions/tags/two-pointers"},{label:"Design",permalink:"/solutions/tags/design"},{label:"Sorting",permalink:"/solutions/tags/sorting"},{label:"Heap (Priority Queue)",permalink:"/solutions/tags/heap-priority-queue"},{label:"Data Stream",permalink:"/solutions/tags/data-stream"}],version:"current",sidebarPosition:295,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/find-median-from-data-stream/",tags:["Two Pointers","Design","Sorting","Heap (Priority Queue)","Data Stream"]},sidebar:"tutorialSidebar",previous:{title:"0290 - Word Pattern (Easy)",permalink:"/solutions/0200-0299/word-pattern-easy"},next:{title:"0297 - Serialize and Deserialize Binary Tree (Hard)",permalink:"/solutions/0200-0299/serialize-and-deserialize-binary-tree-hard"}},d={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: 2 Heaps/Priority Queues",id:"approach-1-2-heapspriority-queues",level:2}];function m(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:s,TabItem:i,Tabs:r}=n;return s||c("SolutionAuthor",!0),i||c("TabItem",!0),r||c("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"0295---find-median-from-data-stream-hard",children:"0295 - Find Median from Data Stream (Hard)"}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/find-median-from-data-stream/",children:"https://leetcode.com/problems/find-median-from-data-stream/"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"median"})," is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["For example, for ",(0,a.jsx)(n.code,{children:"arr = [2,3,4]"}),", the median is ",(0,a.jsx)(n.code,{children:"3"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["For example, for ",(0,a.jsx)(n.code,{children:"arr = [2,3]"}),", the median is ",(0,a.jsx)(n.code,{children:"(2 + 3) / 2 = 2.5"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Implement the MedianFinder class:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"MedianFinder() initializes the "}),"MedianFinder` object."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"void addNum(int num)"})," adds the integer ",(0,a.jsx)(n.code,{children:"num"})," from the data stream to the data structure."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"double findMedian()"})," returns the median of all elements so far. Answers within ",(0,a.jsx)(n.code,{children:"10^-5"})," of the actual answer will be accepted."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input\n["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]\n[[], [1], [2], [], [3], []]\nOutput\n[null, null, null, 1.5, null, 2.0]\n\nExplanation\nMedianFinder medianFinder = new MedianFinder();\nmedianFinder.addNum(1);    // arr = [1]\nmedianFinder.addNum(2);    // arr = [1, 2]\nmedianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)\nmedianFinder.addNum(3);    // arr[1, 2, 3]\nmedianFinder.findMedian(); // return 2.0\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"-10^5 <= num <= 10^5"})}),"\n",(0,a.jsxs)(n.li,{children:["There will be at least one element in the data structure before calling ",(0,a.jsx)(n.code,{children:"findMedian"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["At most ",(0,a.jsx)(n.code,{children:"5 * 10^4"})," calls will be made to ",(0,a.jsx)(n.code,{children:"addNum"})," and ",(0,a.jsx)(n.code,{children:"findMedian"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Follow up:"}),"\nFollow up:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If all integer numbers from the stream are in the range ",(0,a.jsx)(n.code,{children:"[0, 100]"}),", how would you optimize your solution?"]}),"\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(n.code,{children:"99%"})," of all integer numbers from the stream are in the range ",(0,a.jsx)(n.code,{children:"[0, 100]"}),", how would you optimize your solution?"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-2-heapspriority-queues",children:"Approach 1: 2 Heaps/Priority Queues"}),"\n",(0,a.jsxs)(n.p,{children:["We need to maintain a sorted data structure so we can access the middle/middle 2 numbers. A priority queue sorts itself in a way to give us access to the first number in ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," time, and sorts the new inputs in ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"l"}),(0,a.jsx)(n.mi,{children:"o"}),(0,a.jsx)(n.mi,{children:"g"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(logn)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," time."]}),"\n",(0,a.jsx)(n.p,{children:"If we maintain 2 priority queues, a left and right one, where the left one contains all numbers less than the right one and we balanced these 2 priority queues, then we could access the middle numbers extremely quickly, and add to our data structure efficiently as well."}),"\n",(0,a.jsx)(n.p,{children:"The key being the left data structure must be a max heap, as we want access to the largest number to the left of the middle, and the right data structure must be a min heap, as we want access to the smallest number to the right of the middle."}),"\n",(0,a.jsx)(n.p,{children:"If we do that, it gives us 2 conditions to add numbers."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["If left and right are of equal length:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Here we must push our number to the right, pop the smallest on the right and push the popped number to the left."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["The other condition, left is larger:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Here we will push our number to the left, pop the largest on the left and push the popped number to the right."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Time Complexity:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["addNum: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"l"}),(0,a.jsx)(n.mi,{children:"o"}),(0,a.jsx)(n.mi,{children:"g"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(logn)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," it takes ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"l"}),(0,a.jsx)(n.mi,{children:"o"}),(0,a.jsx)(n.mi,{children:"g"}),(0,a.jsx)(n.mi,{children:"n"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"logn"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," time to push to heaps of sized n."]}),"\n",(0,a.jsxs)(n.li,{children:["findMedian: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," we can access the numbers we need in constant time."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Space Complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", we need to push n numbers to our data structure."]}),"\n",(0,a.jsx)(r,{children:(0,a.jsxs)(i,{value:"python",label:"Python",children:[(0,a.jsx)(s,{name:"@ColeB2"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"class MedianFinder:\n    def __init__(self):\n        # initialize our heaps.\n        # max heap as our left side heap for all numbers < median.\n        self.max_l = []\n        # min heap as our right heap for all numbers > median.\n        self.min_r = []\n        \n\n    def addNum(self, num: int) -> None:\n        # Time: O(logn) to push to heaps.\n        # if our heaps are equal length, we can pushpop to our right.\n        # this will maintain the same length on the right but give\n        # us the smallest number on the left to push to our left.\n        if len(self.max_l) == len(self.min_r):\n            # pushpop the num on the right.\n            n = heapq.heappushpop(self.min_r, num)\n            # push given number to the left. Note we ust -n as\n            # python only implements min heaps and we need a max heap.\n            heapq.heappush(self.max_l, -n)\n        # left side is larger: Here we pushpop our number to the left.\n        # This keeps left the same size as it was, but gives us access\n        # to the largest number on the left that we can then push onto\n        # the right heap.\n        else:\n            # pushpop the num on to the left heap. Note we push\n            # the -num as it is a min heap implementation being\n            # converted to a max heap.\n            n = heapq.heappushpop(self.max_l, -num)\n            # push the popped number to the right, min heap. Note again\n            # we use -n here as all numbers popped off the min heap\n            # we flipped to convert the Python min heap to a max heap.\n            heapq.heappush(self.min_r, -n)\n        \n\n    def findMedian(self) -> float:\n        # Time: O(1)\n        # Median is simply going to be the middle/middle 2 numbers.\n        # Since our left will always be equal in size or larger, when\n        # it is larger, we have odd numbers:\n        if len(self.max_l) > len(self.min_r):\n            # return largest of our left heap, again return negative\n            # value as we pushed the negative number to it to convert\n            # it to a max heap.\n            return -self.max_l[0]\n        # They are even in size: mean of the middle 2.\n        else:\n            # Note, remember to flip left heaps value.\n            return (-self.max_l[0] + self.min_r[0]) / 2\n"})})]})})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var a=s(67294);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);