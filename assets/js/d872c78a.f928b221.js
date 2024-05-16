"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[99455],{41774:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,suggestedProblems:()=>m,toc:()=>o});var a=n(85893),t=n(11151);const i={title:"Cyclic Sort",description:"Cyclic Sort is a comparison sort algorithm that is theoretically optimal in terms of the total number of writes to the original array.",hide_table_of_contents:!1,keywords:["leetcode","tutorial","sorting","algorithm","cyclic sort"]},l=void 0,r={id:"basic-topics/sorting/cyclic-sort",title:"Cyclic Sort",description:"Cyclic Sort is a comparison sort algorithm that is theoretically optimal in terms of the total number of writes to the original array.",source:"@site/tutorials/basic-topics/sorting/cyclic-sort.md",sourceDirName:"basic-topics/sorting",slug:"/basic-topics/sorting/cyclic-sort",permalink:"/tutorials/basic-topics/sorting/cyclic-sort",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/sorting/cyclic-sort.md",tags:[],version:"current",frontMatter:{title:"Cyclic Sort",description:"Cyclic Sort is a comparison sort algorithm that is theoretically optimal in terms of the total number of writes to the original array.",hide_table_of_contents:!1,keywords:["leetcode","tutorial","sorting","algorithm","cyclic sort"]},sidebar:"tutorialSidebar",previous:{title:"Bubble Sort",permalink:"/tutorials/basic-topics/sorting/bubble-sort"},next:{title:"Insertion Sort",permalink:"/tutorials/basic-topics/sorting/insertion-sort"}},c={},m=[{problemName:"0268 - Missing Number",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/missing-number/",solutionLink:""},{problemName:"0041 - First Missing Positive",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/first-missing-positive/",solutionLink:""},{problemName:"0448 - Find All Numbers Disappeared In An Array",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",solutionLink:""},{problemName:"0645 - Set Mismatch",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/set-mismatch/",solutionLink:""}],o=[{value:"Overview",id:"overview",level:2},{value:"Algorithm",id:"algorithm",level:2},{value:"Example: 442. Find All Duplicates in an Array",id:"example-442-find-all-duplicates-in-an-array",level:2}];function h(e){const s={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Contributors:n,SolutionAuthor:i,TabItem:l,Table:r,Tabs:c,TutorialAuthors:o}=s;return n||x("Contributors",!0),i||x("SolutionAuthor",!0),l||x("TabItem",!0),r||x("Table",!0),c||x("Tabs",!0),o||x("TutorialAuthors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{names:"@prishit55"}),"\n",(0,a.jsx)(n,{names:"@wingkwong"}),"\n",(0,a.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(s.p,{children:"Cyclic Sort is an in-place, unstable-sorting algorithm."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"in-place"}),": An in-place algorithm transforms input without using any other auxiliary data structure. As the algorithm executes the input is overwritten by the output."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"unstable"})," : Unstable sorting algorithm don't preserve the relative order of equal elements while sorting."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Cyclic Sort algorithm factors the permutation to be sorted into number of cycles, which are individually rotated to give desired sorted result."}),"\n",(0,a.jsx)(s.h2,{id:"algorithm",children:"Algorithm"}),"\n",(0,a.jsxs)(s.p,{children:["Consider an array with ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"n"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," distinct elements. For any element ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"x"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]})," we can find the index at which it will occur in the sorted array by counting the number of elements smaller than ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"x"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]})," in the entire array. Now,"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"if the element is at the correct position then do nothing"}),"\n",(0,a.jsxs)(s.li,{children:["else, write the element to its intended position. That position must be inhabited by a different number ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"y"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]})," which has to be moved to its correct position. The process continues until we get an element at the original position of ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"x"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"This completes one cycle. Repeating the cycle for every element will generate a sorted array."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://user-images.githubusercontent.com/77775000/193418041-3fe52e97-17e9-4f32-89f8-975b6a7c788c.jpg",alt:"1"})}),"\n",(0,a.jsxs)(s.p,{children:["In the above example until and unless the correct element reaches its correct position, variable ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"i"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," will not get updated. This depicts one cycle. For any element ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"nums[i]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," its correct position will be ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"nums[nums[i]-1]"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})]})]}),", and if at any index correct element is not present that means its a duplicate element."]}),"\n",(0,a.jsxs)(s.h2,{id:"example-442-find-all-duplicates-in-an-array",children:["Example: ",(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/find-all-duplicates-in-an-array/",children:"442. Find All Duplicates in an Array"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"An array of integers in the range [1,n] is given, each integer appears once or twice. We have to find all the integers that appear twice in the array."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.em,{children:"Naive Approach"})," would be to simply use a map or a frequency array to store the frequency of each element and return an array of elements appearing twice. But we require constant space complexity."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.em,{children:"Efficient Approach"})," is to put each element at its each correct index in the array as we have all integers in the range ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"[1,n]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),", and check if any of the element is not at its correct position then it is a duplicate element. Hence we can use Cyclic Sort algorithm for this problem."]}),"\n",(0,a.jsx)(c,{children:(0,a.jsxs)(l,{value:"cpp",label:"C++",children:[(0,a.jsx)(i,{name:"@prishit55"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> findDuplicates(vector<int>& nums) {\n        vector<int> duplicates;\n        int n = nums.size();\n        // cyclc sort\n        int i = 0;\n        while (i < n) {\n            //correct index\n            int index = nums[i] - 1;\n            // if correct element is not present at the index        \n            if (nums[i] != nums[index]) {\n                // we swap the elements    \n                swap(nums[i], nums[index]); \n            } else {\n                //do nothing if element is present at its correct position    \n                i++;     \n            }\n        }\n        for(int i = 0; i < n; i++) {\n            // extract all those elements which are not present at their correct position\n            if (nums[i] != i + 1) {               \n                duplicates.push_back(nums[i]); \n            }\n        }\n        return duplicates;\n    }\n};\n  \n"})})]})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsxs)(s.strong,{children:["Time Complexity : ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"N"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})]})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsxs)(s.strong,{children:["Space Complexity : ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})]})}),"\n",(0,a.jsx)(s.p,{children:"Cyclic Sort pattern is very useful to solve problems involving arrays containing numbers in a given range, finding the missing or duplicate numbers."}),"\n","\n",(0,a.jsx)(r,{title:"Suggested Problems",data:m})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function x(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>l});var a=n(67294);const t={},i=a.createContext(t);function l(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);