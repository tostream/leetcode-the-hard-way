"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[80187],{93610:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(85893),o=t(11151);const s={description:"Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/min-cost-to-connect-all-points/''",tags:["Array","Union Find","Graph","Minimum Spanning Tree"]},a="1584 - Min Cost to Connect All Points (Medium)",r={id:"1500-1599/min-cost-to-connect-all-points-medium",title:"1584 - Min Cost to Connect All Points (Medium)",description:"Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/min-cost-to-connect-all-points/''",source:"@site/solutions/1500-1599/1584-min-cost-to-connect-all-points-medium.md",sourceDirName:"1500-1599",slug:"/1500-1599/min-cost-to-connect-all-points-medium",permalink:"/solutions/1500-1599/min-cost-to-connect-all-points-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1500-1599/1584-min-cost-to-connect-all-points-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Union Find",permalink:"/solutions/tags/union-find"},{label:"Graph",permalink:"/solutions/tags/graph"},{label:"Minimum Spanning Tree",permalink:"/solutions/tags/minimum-spanning-tree"}],version:"current",sidebarPosition:1584,frontMatter:{description:"Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/min-cost-to-connect-all-points/''",tags:["Array","Union Find","Graph","Minimum Spanning Tree"]},sidebar:"tutorialSidebar",previous:{title:"1578 - Minimum Time to Make Rope Colorful (Medium)",permalink:"/solutions/1500-1599/minimum-time-to-make-rope-colorful-medium"},next:{title:"1588 - Sum Of All Odd Length Subarrays (Easy)",permalink:"/solutions/1500-1599/sum-of-all-odd-length-subarrays-easy"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Kruskal&#39;s Algorithm",id:"approach-1-kruskals-algorithm",level:2},{value:"Approach 2: Prim&#39;s Algorithm",id:"approach-2-prims-algorithm",level:2}];function d(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components},{SolutionAuthor:t,TabItem:s,Tabs:a}=e;return t||h("SolutionAuthor",!0),s||h("TabItem",!0),a||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1584---min-cost-to-connect-all-points-medium",children:"1584 - Min Cost to Connect All Points (Medium)"}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/min-cost-to-connect-all-points/",children:"https://leetcode.com/problems/min-cost-to-connect-all-points/"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["You are given an array ",(0,i.jsx)(e.code,{children:"points"})," representing integer coordinates of some points on a 2D-plane, where ",(0,i.jsx)(e.code,{children:"points[i] = [xi, yi]"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["The cost of connecting two points ",(0,i.jsx)(e.code,{children:"[xi, yi]"})," and ",(0,i.jsx)(e.code,{children:"[xj, yj]"})," is the ",(0,i.jsx)(e.strong,{children:"manhattan distance"})," between them: ",(0,i.jsx)(e.code,{children:"|xi - xj| + |yi - yj|"}),", where ",(0,i.jsx)(e.code,{children:"|val|"})," denotes the absolute value of ",(0,i.jsx)(e.code,{children:"val"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Return ",(0,i.jsx)(e.em,{children:"the minimum cost to make all points connected."})," All points are connected if there is ",(0,i.jsx)(e.strong,{children:"exactly one"})," simple path between any two points."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2020/08/26/d.png",alt:""})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]\nOutput: 20\nExplanation: \n\nWe can connect the points as shown above to get the minimum cost of 20.\nNotice that there is a unique path between every pair of points.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: points = [[3,12],[-2,5],[-4,1]]\nOutput: 18\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= points.length <= 1000"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"-10^6 <= xi, yi <= 10^6"})}),"\n",(0,i.jsxs)(e.li,{children:["All pairs ",(0,i.jsx)(e.code,{children:"(xi, yi)"})," are distinct."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-kruskals-algorithm",children:"Approach 1: Kruskal's Algorithm"}),"\n",(0,i.jsx)(e.p,{children:"If we see this problem as a graph problem, it is same as find a minimum spanning tree (MST).  We can use Kruskal's algorithm with disjoint-set data structure (DSU) to solve it. We calculate the weight and build edges for all points. Then sort the array in an increasing order. For each edge, we check if two points are united or not. If not, we unite them and and the cost."}),"\n",(0,i.jsxs)(e.p,{children:["For more, please see ",(0,i.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Kruskal's_algorithm",children:"Kruskal's Algorithm"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["For DSU templates, please see ",(0,i.jsx)(e.a,{href:"../../templates/graph-theory#disjoin-set-union-dsu",children:"DSU Template"}),"."]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsxs)(s,{value:"cpp",label:"C++",children:[(0,i.jsx)(t,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minCostConnectPoints(vector<vector<int>>& points) {\n        int n = points.size(); \n        vector<array<int, 3>> edges;\n        // build all the edges\n        for(int i = 0; i < n; i++) {\n            for(int j = i + 1; j < n; j++) {\n                int w = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1]);\n                // put w first - as we want to sort by weight\n                edges.push_back({w, i, j});\n            }\n        }\n        // init dsu\n        dsu d(n);\n        // sort by weight - as we choose the shortest edge for each round\n        sort(edges.begin(), edges.end());\n        int ans = 0;\n        for (auto x : edges) {\n            // unite both point and add the weight\n            if (d.unite(x[1], x[2])) ans += x[0];\n        }\n        return ans;\n    }\n};\n"})})]}),(0,i.jsxs)(s,{value:"kotlin",label:"Kotlin",children:[(0,i.jsx)(t,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kt",children:"fun minCostConnectPoints(points: Array<IntArray>): Int {\n    val n = points.size\n    var ans = 0\n    val edges = mutableListOf<Triple<Int, Int, Int>>()\n    for (i in 0 until n) {\n        for (j in i + 1 until n) {\n            val weight = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])\n            edges.add(Triple(weight, i, j))\n        }\n    }\n    edges.sortBy { it.first }\n    val dsu = DSU(n)\n    for (edge in edges) {\n        if (dsu.unite(edge.second, edge.third)) {\n            ans += edge.first\n        }\n    }\n    return ans\n}\n"})})]})]}),"\n",(0,i.jsx)(e.h2,{id:"approach-2-prims-algorithm",children:"Approach 2: Prim's Algorithm"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Prim%27s_algorithm",children:"Prim's Algorithm"})," to create a minimum spanning tree. Prim's algorithm works by building a tree vertex by vertex, selecting the minimum weighted edge of the next vertex not in the tree."]}),"\n",(0,i.jsx)(e.p,{children:"There are multiple ways to solve which edge it the min edge to select for the next vertex. We can use an adjaceny matrix, which would matrix that holds the weight of all edges between all vertices."}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsxs)(s,{value:"python",label:"Python",children:[(0,i.jsx)(t,{name:"@ColeB2"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:"class Solution:\n    # Prim's Algorithm\n    # For this version of Prim's algorithm, we will use a hash map to map\n    # our vertex to the distance of the closest point. We will then use\n    # this hash map to track which point is closest to our MST.\n    # Time: O(n^2). Where n is the number of points. For each point\n    # we are going to have to check its distance to all other points.\n    # Space: O(n) our adjancency list will only hold n points inside.\n    def minCostConnectPoints(self, points: List[List[int]]) -> int:\n        # function to calculate manhattan distances.\n        manhattan = lambda x1, x2, y1, y2: abs(x1 - x2) + abs(y1 - y2)\n        # Adjaceny list --\x3e dictionary that maps key:value\n        # key: (x,y) coords. Dictionary gives up O(1) acces to points.\n        # value: Distance to the closest point.\n        # initialize distance of 0 for first point, as that is our\n        # starting point, and then infinity for the remaining points.\n        adj_list = {(x,y): float('inf') if i else 0 for i, (x,y) in enumerate(points)}\n        min_cost = 0\n        # While our adjacency list still has points inside it.\n        while adj_list:\n            # Initialize x,y and min_point variables to help us\n            # track which point we need to select to add to our tree.\n            x, y, min_point = None, None, float('inf')\n            # loop through all our points in the adjacency list.\n            # k = (x,y) coords of that point. \n            # v = manhattan distance of nearest point.\n            for k, v in adj_list.items():\n                # If this point is closer than selected point.\n                if v < min_point:\n                    # Select this point instead.\n                    (x, y), min_point = k, v\n            # Looped all points and selected closest, update min_cost and\n            # remove it from our adjacency list.\n            min_cost += min_point\n            adj_list.pop((x,y))\n            # Loop the remaining points, and update manhattan distances.\n            for xi, yi in adj_list.keys():\n                # Get (xi,yi) manhattan distance value\n                current_val = adj_list[(xi,yi)]\n                # calculate how close (xi,yi) is to (x,y) we found above.\n                updated_val = manhattan(xi,x,yi,y)\n                # update manhattan distance to the smaller of too values.\n                adj_list[(xi,yi)] = min(current_val,  updated_val)\n        return min_cost\n"})})]}),(0,i.jsxs)(s,{value:"cpp",label:"C++",children:[(0,i.jsx)(t,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n   int mi_node(int n, int dist[], bool vis[]) { \n      int mi = INT_MAX; \n      int mi_idx = -1; \n      for (int i = 0; i < n; i++) { \n        if (vis[i] == false && dist[i] < mi) { \n          mi = dist[i], mi_idx = i; \n        } \n      } \n      return mi_idx; \n    } \n\n    int prim(vector<vector<int>> &edges, int n) {\n        int parent[n]; \n        int dist[n]; \n        bool vis[n]; \n        for (int i = 0; i < n; i++) { \n            dist[i] = numeric_limits<int>::max(); \n            vis[i] = false; \n        } \n        parent[0] = -1; \n        dist[0] = 0; \n        for (int i = 0; i < n - 1; i++) { \n            int u = mi_node(n, dist, vis); \n            vis[u] = true; \n            for (int v = 0; v < n; v++) { \n              if (edges[u][v] && vis[v] == false &&  edges[u][v] < dist[v]) { \n                dist[v] = edges[u][v]; \n                parent[v] = u; \n              } \n            } \n          } \n          int cost = 0; \n          for (int i = 1; i < n; i++) {\n              cost += edges[parent[i]][i];\n          }\n        return cost;\n    }\n\n    int minCostConnectPoints(vector<vector<int>>& points) {\n        int n = points.size(); \n        vector<vector<int>> edges(n, vector<int>(n));\n        for(int i = 0; i < n; i++) {\n            for(int j = 0; j < n; j++) {\n                int w = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1]);\n                edges[i][j] = w;\n            }\n        }\n        return prim(edges, n);\n    }\n};\n"})})]})]})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}function h(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>a});var i=t(67294);const o={},s=i.createContext(o);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);