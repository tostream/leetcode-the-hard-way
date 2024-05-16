"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[91592],{86287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(85893),o=n(11151);const s={description:"Author: @heder, @jit | https://leetcode.com/problems/sum-root-to-leaf-numbers/",tags:["Tree","Depth-First Search","Binary Tree"]},i="0129 - Sum Root to Leaf Numbers (Medium)",l={id:"0100-0199/sum-root-to-leaf-numbers-medium",title:"0129 - Sum Root to Leaf Numbers (Medium)",description:"Author: @heder, @jit | https://leetcode.com/problems/sum-root-to-leaf-numbers/",source:"@site/solutions/0100-0199/0129-sum-root-to-leaf-numbers-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/sum-root-to-leaf-numbers-medium",permalink:"/solutions/0100-0199/sum-root-to-leaf-numbers-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0129-sum-root-to-leaf-numbers-medium.md",tags:[{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:129,frontMatter:{description:"Author: @heder, @jit | https://leetcode.com/problems/sum-root-to-leaf-numbers/",tags:["Tree","Depth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0127 - Word Ladder (Hard)",permalink:"/solutions/0100-0199/word-ladder-hard"},next:{title:"0130 Surrounded Regions (Medium)",permalink:"/solutions/0100-0199/surrounded-regions-medium"}},a={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:n,TabItem:s,Tabs:i}=t;return n||h("SolutionAuthor",!0),s||h("TabItem",!0),i||h("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"0129---sum-root-to-leaf-numbers-medium",children:"0129 - Sum Root to Leaf Numbers (Medium)"}),"\n",(0,r.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/sum-root-to-leaf-numbers/",children:"https://leetcode.com/problems/sum-root-to-leaf-numbers/"})}),"\n",(0,r.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(t.p,{children:["You are given the ",(0,r.jsx)(t.code,{children:"root"})," of a binary tree containing digits from ",(0,r.jsx)(t.code,{children:"0"})," to ",(0,r.jsx)(t.code,{children:"9"})," only."]}),"\n",(0,r.jsx)(t.p,{children:"Each root-to-leaf path in the tree represents a number."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["For example, the root-to-leaf path ",(0,r.jsx)(t.code,{children:"1 -> 2 -> 3"})," represents the number ",(0,r.jsx)(t.code,{children:"123"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Return ",(0,r.jsx)(t.em,{children:"the total sum of all root-to-leaf numbers"}),". Test cases are generated so that the answer will fit in a ",(0,r.jsx)(t.strong,{children:"32-bit"})," integer."]}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.strong,{children:"leaf"})," node is a node with no children."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Input: root = [1,2,3]\nOutput: 25\nExplanation:\nThe root-to-leaf path 1->2 represents the number 12.\nThe root-to-leaf path 1->3 represents the number 13.\nTherefore, sum = 12 + 13 = 25.\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Input: root = [4,9,0,5,1]\nOutput: 1026\nExplanation:\nThe root-to-leaf path 4->9->5 represents the number 495.\nThe root-to-leaf path 4->9->1 represents the number 491.\nThe root-to-leaf path 4->0 represents the number 40.\nTherefore, sum = 495 + 491 + 40 = 1026.\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The number of nodes in the tree is in the range ",(0,r.jsx)(t.code,{children:"[1, 1000]"}),"."]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"0 <= Node.val <= 9"})}),"\n",(0,r.jsxs)(t.li,{children:["The depth of the tree will not exceed ",(0,r.jsx)(t.code,{children:"10"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"approach-1-dfs",children:"Approach 1: DFS"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsxs)(s,{value:"cpp",label:"C++",children:[(0,r.jsx)(n,{name:"@heder"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"static int fast_io = []() { std::ios::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr); return 0; }();\n\n/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    __attribute__((disable_sanitizer_instrumentation))\n    static int sumNumbers(const TreeNode* root, int s = 0) {\n        if (!root) return 0;\n        s = s * 10 + root->val;\n        if (!root->left && !root->right) return s;\n        return sumNumbers(root->left, s) + sumNumbers(root->right, s);\n    }\n};\n"})})]}),(0,r.jsxs)(s,{value:"elixir",label:"Elixir",children:[(0,r.jsx)(n,{name:"@jit"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-elixir",children:"# Definition for a binary tree node.\n#\n# defmodule TreeNode do\n#   @type t :: %__MODULE__{\n#           val: integer,\n#           left: TreeNode.t() | nil,\n#           right: TreeNode.t() | nil\n#         }\n#   defstruct val: 0, left: nil, right: nil\n# end\n\ndefmodule Solution do\n  @spec sum_numbers(root :: TreeNode.t | nil) :: integer\n  # Simply accumulate the number while traversing.\n  def sum_numbers(root), do: dfs(root, 0)\n\n  defp dfs(nil, _acc), do: 0\n  defp dfs(%TreeNode{val: v, left: l, right: r}, acc) do\n    acc = 10 * acc + v\n    if !l && !r, do: acc, else: dfs(l, acc) + dfs(r, acc)\n  end\nend\n"})})]})]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);