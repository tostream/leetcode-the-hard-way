"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[55673],{19808:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(85893),t=n(11151);const l={description:"Author: @wingkwong, @ColeB2, @radojicic23 | https://leetcode.com/problems/binary-search/"},r="0704 - Binary Search (Easy)",i={id:"0700-0799/binary-search-easy",title:"0704 - Binary Search (Easy)",description:"Author: @wingkwong, @ColeB2, @radojicic23 | https://leetcode.com/problems/binary-search/",source:"@site/solutions/0700-0799/0704-binary-search-easy.md",sourceDirName:"0700-0799",slug:"/0700-0799/binary-search-easy",permalink:"/solutions/0700-0799/binary-search-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0704-binary-search-easy.md",tags:[],version:"current",sidebarPosition:704,frontMatter:{description:"Author: @wingkwong, @ColeB2, @radojicic23 | https://leetcode.com/problems/binary-search/"},sidebar:"tutorialSidebar",previous:{title:"0703 - Kth Largest Element in a Stream (Easy)",permalink:"/solutions/0700-0799/kth-largest-element-in-a-stream-easy"},next:{title:"0706 - Design HashMap (Medium)",permalink:"/solutions/0700-0799/design-hashmap-medium"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force/Linear Search",id:"approach-1-brute-forcelinear-search",level:2},{value:"Approach 2: Binary Search",id:"approach-2-binary-search",level:2}];function h(e){const s={a:"a",admonition:"admonition",annotation:"annotation",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:n,TabItem:l,Tabs:r}=s;return n||o("SolutionAuthor",!0),l||o("TabItem",!0),r||o("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"0704---binary-search-easy",children:"0704 - Binary Search (Easy)"}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/binary-search/",children:"https://leetcode.com/problems/binary-search/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(s.p,{children:["Given an array of integers ",(0,a.jsx)(s.code,{children:"nums"})," which is sorted in ascending order, and an integer ",(0,a.jsx)(s.code,{children:"target"}),", write a function to search ",(0,a.jsx)(s.code,{children:"target"})," in ",(0,a.jsx)(s.code,{children:"nums"}),". If ",(0,a.jsx)(s.code,{children:"target"})," exists, then return its index. Otherwise, return ",(0,a.jsx)(s.code,{children:"-1"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["You must write an algorithm with ",(0,a.jsx)(s.code,{children:"O(log n)"})," runtime complexity."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: nums = [-1,0,3,5,9,12], target = 9\nOutput: 4\nExplanation: 9 exists in nums and its index is 4\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: nums = [-1,0,3,5,9,12], target = 2\nOutput: -1\nExplanation: 2 does not exist in nums so return -1\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= nums.length <= 10^4"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"-10^4 < nums[i], target < 10^4"})}),"\n",(0,a.jsxs)(s.li,{children:["All the integers in ",(0,a.jsx)(s.code,{children:"nums"})," are ",(0,a.jsx)(s.strong,{children:"unique"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"nums"})," is sorted in ascending order."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-brute-forcelinear-search",children:"Approach 1: Brute Force/Linear Search"}),"\n",(0,a.jsxs)(s.p,{children:["The questions asks for an ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(log n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," time answer. But what if we can't find that. We can always start with the brute force solution first to gain insight. Obviously we can imagine, that if we scan through the numbers, we can return it if we find it, and if we reach the end of the array without finding it, we can return -1."]}),"\n",(0,a.jsx)(s.p,{children:"We also know the array is sorted, so if we ever pass the target before the end, we can return early. That is our insight right there."}),"\n",(0,a.jsxs)(s.p,{children:["Time Complexity ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," to scan each number in the array."]}),"\n",(0,a.jsxs)(s.p,{children:["Space Complexity ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsx)(r,{children:(0,a.jsxs)(l,{value:"python",label:"Python",children:[(0,a.jsx)(n,{name:"@ColeB2"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # scan all numbers, tracking index, i and number, num.\n        for i, num in enumerate(nums):\n            # if num == target, we found num, return index, i\n            if num == target:\n                return i\n            # num > target, we passed it, we can return -1 early\n            elif num > target:\n                return -1\n        # if we couldn't find it and couldn't return early, return -1.\n        return -1\n"})})]})}),"\n",(0,a.jsx)(s.p,{children:"Note we found our insight above that the array is sorted. Since the array is sorted, and we know if the number we are looking at is larger or smaller than our target, then can we eliminate the need to look at all the numbers? Can we look directly in the middle, and eliminate half of all numbers in one go? We can. That is our intuition for binary search below."}),"\n",(0,a.jsx)(s.h2,{id:"approach-2-binary-search",children:"Approach 2: Binary Search"}),"\n",(0,a.jsx)(s.admonition,{title:"Prerequisite",type:"info",children:(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"../../tutorials/basic-topics/binary-search",children:"Binary Search"})}),"\n"]})}),"\n",(0,a.jsxs)(s.p,{children:["We set the boundary from the first index to the last index of the array. In each round, we try the middle one ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"m = l + (r - l + 1) / 2"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:")"}),(0,a.jsx)(s.span,{className:"mord",children:"/2"})]})]})]}),". The reason we add ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"1"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})})]})," here is that we need to take the upper one if there are even number of elements. If the target is less than ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"nums[m]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),", then move the right pointer to ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"m - 1"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})]})]}),", else move the left pointer to ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"m"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"})]})})]}),". At the end, if the target is found, the index would be ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"l"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"l"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"})]})})]}),"."]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsxs)(l,{value:"c++",label:"C++",children:[(0,a.jsx)(n,{name:"@wingkwong"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // init possible boundary\n        int n = nums.size(), l = 0, r = n - 1;\n        while (l < r) {\n            // get the middle one\n            // for even number of elements, take the upper one\n            int m = l + (r - l + 1) / 2;\n            // exclude m\n            if (target < nums[m]) r = m - 1;\n            // include m\n            else l = m;\n        }\n        return nums[l] == target ? l : -1;\n    }\n};\n"})})]}),(0,a.jsxs)(l,{value:"python",label:"Python",children:[(0,a.jsx)(n,{name:"@ColeB2"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # initialize left, l and right, r boundaries\n        l, r = 0, len(nums)-1\n        # l passes r, we are done.\n        while l < r:\n            # get our middle number, right one if even number elements.\n            # note: do it this way to prevent int overflow, don't have\n            # issue in Pythonn, but it is good practice for languages that do.\n            m = l + (r-l+1) // 2\n            # target smaller than we are looking at.\n            if nums[m] > target:\n                # set boundary m-1 to keep scanning left half\n                r = m - 1\n            else:\n                # set boundary to m to keep scanning right half\n                l = m\n        # if we found the item, it will be @ index l, else -1.\n        return l if nums[l] == target else -1\n"})})]}),(0,a.jsxs)(l,{value:"javascript",label:"JavaScript",children:[(0,a.jsx)(n,{name:"@radojicic23"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar search = function(nums, target) {\n    // initialize left and right boundary\n    let l = 0;\n    let r = nums.length - 1;\n    while (l <= r) {\n        // find mid value \n        let mid = Math.floor((l + r) / 2) \n        if (nums[mid] == target) return mid;\n        // if mid value is greater than target\n        // search left\n        else if (nums[mid] > target) r = mid - 1;\n        // if mid value is less than target\n        // search right\n        else l = mid + 1;\n    }\n    return -1;\n};\n"})})]})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"How about taking the lower element if the number of elements is even?"}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Similarly, we set the boundary from the first index to the last index of the array. In each round, we try the middle one ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"m = l + (r - l) / 2"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mclose",children:")"}),(0,a.jsx)(s.span,{className:"mord",children:"/2"})]})]})]}),". If there are even number of elements, we take the lower one. If the target is greater than ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"nums[m]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),", then move the left pointer to ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"m + 1"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})]})]}),", else move the right pointer to ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"m"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"})]})})]}),". At the end, if the target is found, the index would be ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"l"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"l"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"})]})})]}),"."]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsxs)(l,{value:"c++",label:"C++",children:[(0,a.jsx)(n,{name:"@wingkwong"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // init possible boundary\n        int n = nums.size(), l = 0, r = n - 1;\n        while (l < r) {\n            // get the middle one\n            // for even number of elements, take the lower one\n            int m = l + (r - l) / 2;\n            // exclude m\n            if (target > nums[m]) l = m + 1;\n            // include m\n            else r = m;\n        }\n        return nums[l] == target ? l : -1;\n    }\n};\n"})})]}),(0,a.jsxs)(l,{value:"python",label:"Python",children:[(0,a.jsx)(n,{name:"@ColeB2"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # initialize left, l and right, r boundaries\n        l, r = 0, len(nums)-1\n        # l passes r, we are done.\n        while l < r:\n            # get our middle number, left one if even number elements.\n            # note: do it this way to prevent int overflow, we don't have the\n            # issue in Python, but it is good practice for languages that do.\n            m = l + (r-l) // 2\n            # target larger than num we are looking at.\n            if nums[m] < target:\n                # set boundary m-1 to keep scanning right half\n                l = m + 1\n            else:\n                # set boundary to m to keep scanning left half\n                r = m\n        # if we found the item, it will be @ index l, else -1.\n        return l if nums[l] == target else -1\n"})})]}),(0,a.jsxs)(l,{value:"javascript",label:"JavaScript",children:[(0,a.jsx)(n,{name:"@radojicic23"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar search = function(nums, target) {\n    // initialize left and right boundary\n    let l = 0;\n    let r = nums.length - 1;\n    while (l <= r) {\n        // find mid value \n        let mid = Math.floor((l + r) / 2) \n        if (nums[mid] == target) return mid;\n        // if mid value is less than target\n        // search right\n        else if (nums[mid] < target) l = mid + 1;\n        // if mid value is greater than target\n        // search left\n        else r = mid - 1;\n    }\n    return -1;\n};\n"})})]})]})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function o(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>r});var a=n(67294);const t={},l=a.createContext(t);function r(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);