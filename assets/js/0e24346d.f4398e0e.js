"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[16722],{30216:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>h,toc:()=>c});var t=s(85893),i=s(11151);const a={description:"Author: @wingkwong | https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"},r="1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance (Medium)",h={id:"1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium",title:"1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",source:"@site/solutions/1300-1399/1334-find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium.md",sourceDirName:"1300-1399",slug:"/1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium",permalink:"/solutions/1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1334-find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium.md",tags:[],version:"current",sidebarPosition:1334,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"},sidebar:"tutorialSidebar",previous:{title:"1331 - Rank Transform of an Array (Easy)",permalink:"/solutions/1300-1399/rank-transform-of-an-array-easy"},next:{title:"1335 - Minimum Difficulty of a Job Schedule (Hard)",permalink:"/solutions/1300-1399/minimum-difficulty-of-a-job-schedule-hard"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Floyd Warshall Algorithm",id:"approach-1-floyd-warshall-algorithm",level:2},{value:"Approach 2: Dijkstra&#39;s Algorithm",id:"approach-2-dijkstras-algorithm",level:2}];function d(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"1334---find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium",children:"1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance (Medium)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",children:"https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["There are ",(0,t.jsx)(n.code,{children:"n"})," cities numbered from ",(0,t.jsx)(n.code,{children:"0"})," to ",(0,t.jsx)(n.code,{children:"n-1"}),". Given the array ",(0,t.jsx)(n.code,{children:"edges"})," where ",(0,t.jsx)(n.code,{children:"edges[i] = [fromi, toi, weighti]"})," represents a bidirectional and weighted edge between cities ",(0,t.jsx)(n.code,{children:"fromi"})," and ",(0,t.jsx)(n.code,{children:"toi"}),", and given the integer ",(0,t.jsx)(n.code,{children:"distanceThreshold"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Return the city with the smallest number of cities that are reachable through some path and whose distance is ",(0,t.jsx)(n.strong,{children:"at most"})," ",(0,t.jsx)(n.code,{children:"distanceThreshold"}),", If there are multiple such cities, return the city with the greatest number."]}),"\n",(0,t.jsxs)(n.p,{children:["Notice that the distance of a path connecting cities ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"i"})})," and ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"j"})})," is equal to the sum of the edges' weights along that path."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/01/16/find_the_city_01.png",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4\nOutput: 3\nExplanation: The figure above describes the graph. \nThe neighboring cities at a distanceThreshold = 4 for each city are:\nCity 0 -> [City 1, City 2] \nCity 1 -> [City 0, City 2, City 3] \nCity 2 -> [City 0, City 1, City 3] \nCity 3 -> [City 1, City 2] \nCities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/01/16/find_the_city_02.png",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2\nOutput: 0\nExplanation: The figure above describes the graph. \nThe neighboring cities at a distanceThreshold = 2 for each city are:\nCity 0 -> [City 1] \nCity 1 -> [City 0, City 4] \nCity 2 -> [City 3, City 4] \nCity 3 -> [City 2, City 4]\nCity 4 -> [City 1, City 2, City 3] \nThe city 0 has 1 neighboring city at a distanceThreshold = 2. \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"2 <= n <= 100"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= edges.length <= n * (n - 1) / 2"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"edges[i].length == 3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0 <= fromi < toi < n"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= weighti, distanceThreshold <= 10^4"})}),"\n",(0,t.jsxs)(n.li,{children:["All pairs ",(0,t.jsx)(n.code,{children:"(fromi, toi)"})," are distinct."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-floyd-warshall-algorithm",children:"Approach 1: Floyd Warshall Algorithm"}),"\n",(0,t.jsxs)(n.p,{children:["Since ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"n"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," is small, we can use Floyd Warshall Algorithm to calculate the distances between each node. Let ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"d"}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"["}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"]"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"["}),(0,t.jsx)(n.mi,{children:"j"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"dist[i][j]"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mopen",children:"["}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,t.jsx)(n.span,{className:"mclose",children:"]"}),(0,t.jsx)(n.span,{className:"mopen",children:"["}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,t.jsx)(n.span,{className:"mclose",children:"]"})]})})]})," be the distance beween node ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"i"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6595em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"i"})]})})]})," and node ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"j"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),". Once we know all the distances, we can iterate each node ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"i"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6595em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"i"})]})})]}),", and check each node ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"j"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," to see if the distance is less than / equal to ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"d"}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"a"}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{children:"c"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"T"}),(0,t.jsx)(n.mi,{children:"h"}),(0,t.jsx)(n.mi,{children:"r"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mi,{children:"h"}),(0,t.jsx)(n.mi,{children:"o"}),(0,t.jsx)(n.mi,{children:"l"}),(0,t.jsx)(n.mi,{children:"d"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"distanceThreshold"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"an"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"ce"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"res"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"d"})]})})]}),". If so, we count it and check the minimal value."]}),"\n",(0,t.jsx)(s,{name:"@wingkwong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {\n        // ----------- Floyd Warshall ---------------/\n        vector<vector<int>> dist(n, vector<int>(n, 1e9));\n        for (int i = 0; i < n; i++) dist[i][i] = 0;\n        for (auto x : edges) {\n            dist[x[0]][x[1]] = x[2];\n            dist[x[1]][x[0]] = x[2];\n        }\n        for (int k = 0; k < n; k++) {\n            for (int i = 0; i < n; i++) {\n                for (int j = 0; j < n; j++) {\n                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);\n                }\n            }\n        }\n        // ----------- Floyd Warshall ---------------/\n        int ans = 0, mi = n;\n        // iterate each node\n        for (int i = 0; i < n; i++) {\n            // check each node to see \n            // if the distance is at most distanceThreshold\n            int cnt = 0;\n            for (int j = 0; j < n; j++) {\n                cnt += dist[i][j] <= distanceThreshold;\n            }\n            // use <= instead of <  \n            // because we need to return the city with the greatest number\n            if (cnt <= mi) {\n                mi = cnt;\n                ans = i;\n            }\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"approach-2-dijkstras-algorithm",children:"Approach 2: Dijkstra's Algorithm"}),"\n",(0,t.jsxs)(n.p,{children:["We can perform Dijkstra's algorithm on each node to calculate the distances between that node and other nodes. Iterate them and check if the distance is at most ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"d"}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"a"}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{children:"c"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"T"}),(0,t.jsx)(n.mi,{children:"h"}),(0,t.jsx)(n.mi,{children:"r"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mi,{children:"h"}),(0,t.jsx)(n.mi,{children:"o"}),(0,t.jsx)(n.mi,{children:"l"}),(0,t.jsx)(n.mi,{children:"d"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"distanceThreshold"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"an"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"ce"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"res"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"d"})]})})]}),". If so, update the minimum counter and the answer."]}),"\n",(0,t.jsx)(s,{name:"@wingkwong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    template<typename T_pair, typename T_vector>\n        void dijkstra(T_pair &g, T_vector &dist, int start) {\n          priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;\n          dist[start] = 0;\n          pq.push({start, 0});\n          while (!pq.empty()) {\n            auto [u_node, u_cost] = pq.top(); pq.pop();\n            if (u_cost > dist[u_node]) continue;\n            for (auto [v_node, v_cost] : g[u_node]) {\n              if (dist[v_node] > dist[u_node] + v_cost) {\n                dist[v_node] = dist[u_node] + v_cost;\n                pq.push({v_node, dist[v_node]});\n              }\n            }\n          }\n        }\n\n    int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {\n        int ans = 0, mi_cnt = 1e9;\n        vector<vector<pair<int, int>>> g(n);\n        for (auto x : edges) {\n            // x[0] -> x[1] with cost x[2]\n            g[x[0]].push_back({x[1], x[2]});\n            // x[1] -> x[0] with cost x[2]\n            g[x[1]].push_back({x[0], x[2]});\n        }\n        // iterate each node\n        for (int i = 0; i < n; i++) {\n            // perform dijkstra\n            vector<int> dist(n, 1e9);\n            dijkstra(g, dist, i);\n            int cnt = 0;\n            // iterate each node\n            for (int j = 0; j < n; j++) {\n                // bypass the same node\n                if (i == j) continue;\n                // if reachable, count if the distance is at most distanceThreshold\n                cnt += dist[j] <= distanceThreshold;\n            }\n            // update mi_cnt and ans\n            if (cnt <= mi_cnt) mi_cnt = cnt, ans = i;\n        }\n        return ans;\n    }\n};\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>h,a:()=>r});var t=s(67294);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);