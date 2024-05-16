"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[35663],{42178:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(85893),o=t(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",tags:["Array","Dynamic Programming"]},s="0188 - Best Time to Buy and Sell Stock IV (Hard)",a={id:"0100-0199/best-time-to-buy-and-sell-stock-iv-hard",title:"0188 - Best Time to Buy and Sell Stock IV (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",source:"@site/solutions/0100-0199/0188-best-time-to-buy-and-sell-stock-iv-hard.md",sourceDirName:"0100-0199",slug:"/0100-0199/best-time-to-buy-and-sell-stock-iv-hard",permalink:"/solutions/0100-0199/best-time-to-buy-and-sell-stock-iv-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0188-best-time-to-buy-and-sell-stock-iv-hard.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:188,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",tags:["Array","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"0169 - Majority Element (Easy)",permalink:"/solutions/0100-0199/majority-element-easy"},next:{title:"0191 - Number of 1 Bits (Easy)",permalink:"/solutions/0100-0199/number-of-1-bits-easy"}},c={},d=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP",id:"approach-1-dp",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components},{SolutionAuthor:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"0188---best-time-to-buy-and-sell-stock-iv-hard",children:"0188 - Best Time to Buy and Sell Stock IV (Hard)"}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["You are given an integer array ",(0,i.jsx)(e.code,{children:"prices"})," where ",(0,i.jsx)(e.code,{children:"prices[i]"})," is the price of a given stock on the ",(0,i.jsx)(e.code,{children:"ith"})," day, and an integer ",(0,i.jsx)(e.code,{children:"k"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Find the maximum profit you can achieve. You may complete at most ",(0,i.jsx)(e.code,{children:"k"})," transactions."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Note:"})," You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again)."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: k = 2, prices = [2,4,1]\nOutput: 2\nExplanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: k = 2, prices = [3,2,6,5,0,3]\nOutput: 7\nExplanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"0 <= k <= 100"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"0 <= prices.length <= 1000"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"0 <= prices[i] <= 1000"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-dp",children:"Approach 1: DP"}),"\n",(0,i.jsx)(t,{name:"@wingkwong"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxProfit(int k, vector<int>& prices) {\n        // no transaction, no profit\n        if (k == 0) return 0;\n        // dp[k][0] = min cost you need to spend at most k transactions\n        // dp[k][1] = max profit you can achieve at most k transactions\n        vector<vector<int>> dp(k + 1, vector<int>(2));\n        for (int i = 0; i <= k; i++) dp[i][0] = INT_MAX;\n        for (auto& price : prices) {\n            for (int i = 1; i <= k; i++) {\n                // price - dp[i - 1][1] is how much you need to spend\n                // i.e use the profit you earned from previous transaction to buy the stock\n                // we want to minimize it\n                dp[i][0] = min(dp[i][0], price - dp[i - 1][1]);\n                // price - dp[i][0] is how much you can achieve from previous min cost\n                // we want to maximize it\n                dp[i][1] = max(dp[i][1], price - dp[i][0]);\n            }\n        }\n        // return max profit at most k transactions\n        // or you can use `return dp.back()[1];`\n        return dp[k][1];\n    }\n};\n"})}),"\n",(0,i.jsx)(t,{name:"@wingkwong"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def maxProfit(self, k: int, prices: List[int]) -> int:\n        # no transaction, no profit\n        if k == 0: return 0\n        # dp[k][0] = min cost you need to spend at most k transactions\n        # dp[k][1] = max profit you can achieve at most k transactions\n        dp = [[1005, 0] for _ in range(k + 1)]\n        for price in prices:\n            for i in range(1, k + 1):\n                # price - dp[i - 1][1] is how much you need to spend\n                # i.e use the profit you earned from previous transaction to buy the stock\n                # we want to minimize it\n                dp[i][0] = min(dp[i][0], price - dp[i - 1][1])\n                # price - dp[i][0] is how much you can achieve from previous min cost\n                # we want to maximize it\n                dp[i][1] = max(dp[i][1], price - dp[i][0])\n        # return max profit at most k transactions\n        return dp[-1][1]\n"})}),"\n",(0,i.jsx)(t,{name:"@wingkwong"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public int maxProfit(int k, int[] prices) {\n        // no transaction, no profit\n        if (k == 0) return 0;\n        // dp[k][0] = min cost you need to spend at most k transactions\n        // dp[k][1] = max profit you can achieve at most k transactions\n        int [][] dp = new int[k + 1][2];\n        for (int i = 0; i <= k; i++) dp[i][0] = 1000;\n        for (int i = 0; i < prices.length; i++) {\n            for (int j = 1; j <= k; j++) {\n                // price - dp[i - 1][1] is how much you need to spend\n                // i.e use the profit you earned from previous transaction to buy the stock\n                // we want to minimize it\n                dp[j][0] = Math.min(dp[j][0], prices[i] - dp[j - 1][1]);\n                // price - dp[i][0] is how much you can achieve from previous min cost\n                // we want to maximize it\n                dp[j][1] = Math.max(dp[j][1], prices[i] - dp[j][0]);\n            }\n        }\n        // return max profit at most k transactions\n        return dp[k][1];\n    }\n}\n"})})]})}function l(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);