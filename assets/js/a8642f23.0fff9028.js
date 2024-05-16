"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[45001],{36930:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=n(85893),t=n(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/"},l="2250 - Count Number of Rectangles Containing Each Point (Medium)",c={id:"2200-2299/count-number-of-rectangles-containing-each-point-medium",title:"2250 - Count Number of Rectangles Containing Each Point (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/",source:"@site/solutions/2200-2299/2250-count-number-of-rectangles-containing-each-point-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/count-number-of-rectangles-containing-each-point-medium",permalink:"/solutions/2200-2299/count-number-of-rectangles-containing-each-point-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2250-count-number-of-rectangles-containing-each-point-medium.md",tags:[],version:"current",sidebarPosition:2250,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/"},sidebar:"tutorialSidebar",previous:{title:"2249 - Count Lattice Points Inside a Circle (Medium)",permalink:"/solutions/2200-2299/count-lattice-points-inside-a-circle-medium"},next:{title:"2251 - Number of Flowers in Full Bloom (Hard)",permalink:"/solutions/2200-2299/number-of-flowers-in-full-bloom-hard"}},r={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Lower Bound",id:"approach-1-lower-bound",level:2}];function o(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mrow:"mrow",msub:"msub",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"2250---count-number-of-rectangles-containing-each-point-medium",children:"2250 - Count Number of Rectangles Containing Each Point (Medium)"}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/",children:"https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(s.p,{children:["You are given a 2D integer array ",(0,a.jsx)(s.code,{children:"rectangles"})," where ",(0,a.jsx)(s.code,{children:"rectangles[i] = [li, hi]"})," indicates that ",(0,a.jsx)(s.code,{children:"ith"})," rectangle has a length of ",(0,a.jsx)(s.code,{children:"li"})," and a height of ",(0,a.jsx)(s.code,{children:"hi"}),". You are also given a 2D integer array ",(0,a.jsx)(s.code,{children:"points"})," where ",(0,a.jsx)(s.code,{children:"points[j] = [xj, yj]"})," is a point with coordinates ",(0,a.jsx)(s.code,{children:"(xj, yj)"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"ith"})," rectangle has its ",(0,a.jsx)(s.strong,{children:"bottom-left corner"})," point at the coordinates ",(0,a.jsx)(s.code,{children:"(0, 0)"})," and its ",(0,a.jsx)(s.strong,{children:"top-right corner"})," point at ",(0,a.jsx)(s.code,{children:"(li, hi)"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Return ",(0,a.jsx)(s.em,{children:"an integer array"})," ",(0,a.jsx)(s.code,{children:"count"})," ",(0,a.jsx)(s.em,{children:"of length"})," ",(0,a.jsx)(s.code,{children:"points.length"})," ",(0,a.jsx)(s.em,{children:"where"})," ",(0,a.jsx)(s.code,{children:"count[j]"})," ",(0,a.jsxs)(s.em,{children:["is the number of rectangles that ",(0,a.jsx)(s.strong,{children:"contain"})," the"]})," ",(0,a.jsx)(s.code,{children:"jth"})," ",(0,a.jsx)(s.em,{children:"point."})]}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"ith"})," rectangle ",(0,a.jsx)(s.strong,{children:"contains"})," the ",(0,a.jsx)(s.code,{children:"jth"})," point if ",(0,a.jsx)(s.code,{children:"0 <= xj <= li"})," and ",(0,a.jsx)(s.code,{children:"0 <= yj <= hi"}),". Note that points that lie on the ",(0,a.jsx)(s.strong,{children:"edges"})," of a rectangle are also considered to be contained by that rectangle."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2022/03/02/example1.png",alt:""})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: rectangles = [[1,2],[2,3],[2,5]], points = [[2,1],[1,4]]\nOutput: [2,1]\nExplanation: \nThe first rectangle contains no points.\nThe second rectangle contains only the point (2, 1).\nThe third rectangle contains the points (2, 1) and (1, 4).\nThe number of rectangles that contain the point (2, 1) is 2.\nThe number of rectangles that contain the point (1, 4) is 1.\nTherefore, we return [2, 1].\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2022/03/02/example2.png",alt:""})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: rectangles = [[1,1],[2,2],[3,3]], points = [[1,3],[1,1]]\nOutput: [1,3]\nExplanation:\nThe first rectangle contains only the point (1, 1).\nThe second rectangle contains only the point (1, 1).\nThe third rectangle contains the points (1, 3) and (1, 1).\nThe number of rectangles that contain the point (1, 3) is 1.\nThe number of rectangles that contain the point (1, 1) is 3.\nTherefore, we return [1, 3].\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= rectangles.length, points.length <= 5 * 10^4"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"rectangles[i].length == points[j].length == 2"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= li, xj <= 10^9"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= hi, yj <= 100"})}),"\n",(0,a.jsxs)(s.li,{children:["All the ",(0,a.jsx)(s.code,{children:"rectangles"})," are ",(0,a.jsx)(s.strong,{children:"unique"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["All the ",(0,a.jsx)(s.code,{children:"points"})," are ",(0,a.jsx)(s.strong,{children:"unique"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-lower-bound",children:"Approach 1: Lower Bound"}),"\n",(0,a.jsxs)(s.p,{children:["Observation: The max ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"y"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]})," is only ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"100"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"100"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"100"})]})})]}),", while the max ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"x"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]}),"is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsxs)(s.msup,{children:[(0,a.jsx)(s.mn,{children:"0"}),(0,a.jsx)(s.mn,{children:"9"})]})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"10^9"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord",children:"0"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:"9"})})]})})})})})]})]})})]}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["For each ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"y"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]}),", we push the corresponding ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"x"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]})," and then we sort all the ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"x"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]}),"s for each ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"y"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Then iterate each point, and iterate from ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"y"})]})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"p_y"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7167em",verticalAlign:"-0.2861em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.2861em"},children:(0,a.jsx)(s.span,{})})})]})})]})]})})]})," to ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"x"}),(0,a.jsx)(s.mi,{children:"y"})]})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"max_y"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7167em",verticalAlign:"-0.2861em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ma"}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.2861em"},children:(0,a.jsx)(s.span,{})})})]})})]})]})})]}),"to check how many points are greater than ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"x"})]})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"p_x"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"x"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(s.span,{})})})]})})]})]})})]}),"."]}),"\n",(0,a.jsx)(n,{name:"@wingkwong"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> countRectangles(vector<vector<int>>& rectangles, vector<vector<int>>& points) {\n        int mxY = 101;\n        vector<int> ans;\n        vector<vector<int>> m(mxY);\n        // use y as a key\n        for (auto& r : rectangles) m[r[1]].push_back(r[0]);\n        // sort m[i]\n        for (int i = 0; i < mxY; i++) sort(m[i].begin(), m[i].end());\n        // iterate each point\n        for (auto& p : points) {\n            int cnt = 0;\n            // iterate from p[1] to mxY \n            // as these points are covering p[1]\n            for (int y = p[1]; y < mxY; y++) {\n                // find the first position that p[0] can fit into\n                // elements behind this position can form rectangles \n                // covering (p[0], p[1])\n                cnt += m[y].end() - lower_bound(m[y].begin(), m[y].end(), p[0]);\n            }\n            // push the result to ans\n            ans.push_back(cnt);\n        }\n        return ans;\n    }\n};\n"})})]})}function m(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>l});var a=n(67294);const t={},i=a.createContext(t);function l(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);