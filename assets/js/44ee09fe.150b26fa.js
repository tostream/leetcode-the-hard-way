"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[98707],{84080:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var i=o(85893),t=o(11151);const a={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-time-to-make-rope-colorful/",tags:["Array","String","Dynamic Programming","Greedy"]},d="1578 - Minimum Time to Make Rope Colorful (Medium)",r={id:"1500-1599/minimum-time-to-make-rope-colorful-medium",title:"1578 - Minimum Time to Make Rope Colorful (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-time-to-make-rope-colorful/",source:"@site/solutions/1500-1599/1578-minimum-time-to-make-rope-colorful-medium.md",sourceDirName:"1500-1599",slug:"/1500-1599/minimum-time-to-make-rope-colorful-medium",permalink:"/solutions/1500-1599/minimum-time-to-make-rope-colorful-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1500-1599/1578-minimum-time-to-make-rope-colorful-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"String",permalink:"/solutions/tags/string"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Greedy",permalink:"/solutions/tags/greedy"}],version:"current",sidebarPosition:1578,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-time-to-make-rope-colorful/",tags:["Array","String","Dynamic Programming","Greedy"]},sidebar:"tutorialSidebar",previous:{title:"1575 - Count All Possible Routes (Hard)",permalink:"/solutions/1500-1599/count-all-possible-routes-hard"},next:{title:"1584 - Min Cost to Connect All Points (Medium)",permalink:"/solutions/1500-1599/min-cost-to-connect-all-points-medium"}},l={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function m(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:o,TabItem:a,Tabs:d}=n;return o||h("SolutionAuthor",!0),a||h("TabItem",!0),d||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"1578---minimum-time-to-make-rope-colorful-medium",children:"1578 - Minimum Time to Make Rope Colorful (Medium)"}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-time-to-make-rope-colorful/",children:"https://leetcode.com/problems/minimum-time-to-make-rope-colorful/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["Alice has ",(0,i.jsx)(n.code,{children:"n"})," balloons arranged on a rope. You are given a ",(0,i.jsx)(n.strong,{children:"0-indexed"})," string ",(0,i.jsx)(n.code,{children:"colors"})," where ",(0,i.jsx)(n.code,{children:"colors[i]"})," is the color of the ",(0,i.jsx)(n.code,{children:"ith"})," balloon."]}),"\n",(0,i.jsxs)(n.p,{children:["Alice wants the rope to be ",(0,i.jsx)(n.strong,{children:"colorful"}),". She does not want ",(0,i.jsx)(n.strong,{children:"two consecutive balloons"})," to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it ",(0,i.jsx)(n.strong,{children:"colorful"}),". You are given a ",(0,i.jsx)(n.strong,{children:"0-indexed"})," integer array ",(0,i.jsx)(n.code,{children:"neededTime"})," where ",(0,i.jsx)(n.code,{children:"neededTime[i]"})," is the time (in seconds) that Bob needs to remove the ",(0,i.jsx)(n.code,{children:"ith"})," balloon from the rope."]}),"\n",(0,i.jsxs)(n.p,{children:["Return ",(0,i.jsxs)(n.em,{children:["the ",(0,i.jsx)(n.strong,{children:"minimum time"})," Bob needs to make the rope ",(0,i.jsx)(n.strong,{children:"colorful"})]}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: colors = \"abaac\", neededTime = [1,2,3,4,5]\nOutput: 3\nExplanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.\nBob can remove the blue balloon at index 2. This takes 3 seconds.\nThere are no longer two consecutive balloons of the same color. Total time = 3.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: colors = "abc", neededTime = [1,2,3]\nOutput: 0\nExplanation: The rope is already colorful. Bob does not need to remove any balloons from the rope.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: colors = "aabaa", neededTime = [1,2,3,4,1]\nOutput: 2\nExplanation: Bob will remove the ballons at indices 0 and 4. Each ballon takes 1 second to remove.\nThere are no longer two consecutive balloons of the same color. Total time = 1 + 1 = 2.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"n == colors.length == neededTime.length"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= n <= 10^5"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= neededTime[i] <= 10^4"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"colors"})," contains only lowercase English letters."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,i.jsxs)(d,{children:[(0,i.jsxs)(a,{value:"cpp",label:"C++",children:[(0,i.jsx)(o,{name:"@wingkwong"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'// Time Complexity: O(n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n    // intuition: \n    // ---------------\n    // if there are consecutive balloons with the same color, \n    // we want to keep the one with maximum neededTime and remove others \n    \n    // if there are 2 balloons with different colors, ans = 0 as it is colorful\n    // if there are 2 balloons with same color, ans = min(neededTime[0], neededTime[1])\n    // if there are 3 consecutive balloons with same color, ans = sum(neededTime[0 .. 2]) - max(neededTime[0 .. 2])\n    // if there are N consecutive balloons with same color, ans = sum(neededTime[0 .. n - 1]) - max(neededTime[0 .. n - 1])\n    // we don\'t need to calculate the sum and subtract the max though. instead, we can either\n    // 1. update neededTime in place to the max of neededTime[i] and neededTime[i - 1] (shown in below solution) or \n    // 2. store the current max time in a variable\n    // why? let\'s say colors = "aaa" and neededTime = [1,2,1]\n    // we first compare neededTime[0] and neededTime[1] and decide to remove the first balloon (neededTime[0] < neededTime[1])\n    // now colors = "_aa" and neededTime = [_,2,1] and the current max time is 2\n    // then compare neededTime[1] and neededTime[2] and decide to remove the last balloon, (neededTime[2] < neededTime[1])\n    // now colors = "_a_" and neededTime = [_,2,_]. we remove all balloons but the one with maximum neededTime\n    int minCost(string colors, vector<int>& neededTime) {\n        int ans = 0, n = colors.size();\n        for (int i = 1; i < n; i++) {\n            // if the i-th balloon has the same color as (i - 1)th one\n            // e.g. aba[a]c and i = 3 (0-based)\n            if (colors[i] == colors[i - 1]) {\n                // then we remove the one with less time\n                // e.g. in above example, we remove the balloon at index 2 \n                // with neededTime[2] since neededTime[2] < neededTime[3] \n                ans += min(neededTime[i], neededTime[i - 1]);\n                // update the max neededTime inplace \n                // or alternatively you can store it in a variable\n                neededTime[i] = max(neededTime[i], neededTime[i - 1]);\n            }\n        }\n        return ans;\n    }\n};\n'})})]}),(0,i.jsxs)(a,{value:"py",label:"Python",children:[(0,i.jsx)(o,{name:"@wingkwong"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'# Time Complexity: O(n)\n# Space Complexity: O(1)\nclass Solution:\n    # intuition: \n    # ---------------\n    # if there are consecutive balloons with the same color, \n    # we want to keep the one with maximum neededTime and remove others \n    \n    # if there are 2 balloons with different colors, ans = 0 as it is colorful\n    # if there are 2 balloons with same color, ans = min(neededTime[0], neededTime[1])\n    # if there are 3 consecutive balloons with same color, ans = sum(neededTime[0 .. 2]) - max(neededTime[0 .. 2])\n    # if there are N consecutive balloons with same color, ans = sum(neededTime[0 .. n - 1]) - max(neededTime[0 .. n - 1])\n    # we don\'t need to calculate the sum and subtract the max though. instead, we can either\n    # 1. update neededTime in place to the max of neededTime[i] and neededTime[i - 1] (shown in below solution) or \n    # 2. store the current max time in a variable\n    # why? let\'s say colors = "aaa" and neededTime = [1,2,1]\n    # we first compare neededTime[0] and neededTime[1] and decide to remove the first balloon (neededTime[0] < neededTime[1])\n    # now colors = "_aa" and neededTime = [_,2,1] and the current max time is 2\n    # then compare neededTime[1] and neededTime[2] and decide to remove the last balloon, (neededTime[2] < neededTime[1])\n    # now colors = "_a_" and neededTime = [_,2,_]. we remove all balloons but the one with maximum neededTime\n    def minCost(self, colors: str, neededTime: List[int]) -> int:\n        ans = 0\n        for i in range(1, len(colors)):\n            # if the i-th balloon has the same color as (i - 1)th one\n            # e.g. aba[a]c and i = 3 (0-based)\n            if colors[i] == colors[i - 1]:\n                # then we remove the one with less time\n                # e.g. in above example, we remove the balloon at index 2 \n                # with neededTime[2] since neededTime[2] < neededTime[3] \n                ans += min(neededTime[i], neededTime[i - 1])\n                # update the max neededTime inplace \n                # or alternatively you can store it in a variable\n                neededTime[i] = max(neededTime[i], neededTime[i - 1])\n        return ans\n'})})]}),(0,i.jsxs)(a,{value:"java",label:"Java",children:[(0,i.jsx)(o,{name:"@wingkwong"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// Time Complexity: O(n)\n// Space Complexity: O(1)\nclass Solution {\n    // intuition: \n    // ---------------\n    // if there are consecutive balloons with the same color, \n    // we want to keep the one with maximum neededTime and remove others \n    \n    // if there are 2 balloons with different colors, ans = 0 as it is colorful\n    // if there are 2 balloons with same color, ans = min(neededTime[0], neededTime[1])\n    // if there are 3 consecutive balloons with same color, ans = sum(neededTime[0 .. 2]) - max(neededTime[0 .. 2])\n    // if there are N consecutive balloons with same color, ans = sum(neededTime[0 .. n - 1]) - max(neededTime[0 .. n - 1])\n    // we don\'t need to calculate the sum and subtract the max though. instead, we can either\n    // 1. update neededTime in place to the max of neededTime[i] and neededTime[i - 1] (shown in below solution) or \n    // 2. store the current max time in a variable\n    // why? let\'s say colors = "aaa" and neededTime = [1,2,1]\n    // we first compare neededTime[0] and neededTime[1] and decide to remove the first balloon (neededTime[0] < neededTime[1])\n    // now colors = "_aa" and neededTime = [_,2,1] and the current max time is 2\n    // then compare neededTime[1] and neededTime[2] and decide to remove the last balloon, (neededTime[2] < neededTime[1])\n    // now colors = "_a_" and neededTime = [_,2,_]. we remove all balloons but the one with maximum neededTime\n    public int minCost(String colors, int[] neededTime) {\n        int ans = 0, n = colors.length();\n        for (int i = 1; i < n; i++) {\n            // if the i-th balloon has the same color as (i - 1)th one\n            // e.g. aba[a]c and i = 3 (0-based)\n            if (colors.charAt(i) == colors.charAt(i - 1)) {\n                // then we remove the one with less time\n                // e.g. in above example, we remove the balloon at index 2 \n                // with neededTime[2] since neededTime[2] < neededTime[3] \n                ans += Math.min(neededTime[i], neededTime[i - 1]);\n                // update the max neededTime inplace \n                // or alternatively you can store it in a variable\n                neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);\n            }\n        }\n        return ans;\n    }\n}\n'})})]})]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>d});var i=o(67294);const t={},a=i.createContext(t);function d(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);