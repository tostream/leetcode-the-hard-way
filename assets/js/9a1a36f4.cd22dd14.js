"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[94802],{33247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(85893),i=t(11151);const r={title:"Segment Tree",description:"",hide_table_of_contents:!1,keywords:["leetcode","template","segment tree"]},l=void 0,o={id:"segment-tree",title:"Segment Tree",description:"",source:"@site/templates/segment-tree.md",sourceDirName:".",slug:"/segment-tree",permalink:"/templates/segment-tree",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/templates/segment-tree.md",tags:[],version:"current",frontMatter:{title:"Segment Tree",description:"",hide_table_of_contents:!1,keywords:["leetcode","template","segment tree"]},sidebar:"tutorialSidebar",previous:{title:"Prefix Sum",permalink:"/templates/prefix-sum"},next:{title:"Sparse Table",permalink:"/templates/sparse-table"}},a={},c=[{value:"Basic Segment Tree",id:"basic-segment-tree",level:2},{value:"Operations",id:"operations",level:3},{value:"Sample Usage",id:"sample-usage",level:3}];function m(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{TabItem:t,Tabs:r}=n;return t||u("TabItem",!0),r||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"basic-segment-tree",children:"Basic Segment Tree"}),"\n",(0,s.jsx)(n.h3,{id:"operations",children:"Operations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Find sum in particular range [l, r)"}),"\n",(0,s.jsx)(n.li,{children:"Point Update"}),"\n"]}),"\n",(0,s.jsx)(r,{children:(0,s.jsx)(t,{value:"cpp",label:"C++",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"struct segtree {\n    vector<long long> sums;\n    int size;\n    \n    void init(int n) {\n        size = 1;\n        while (size < n) size *= 2;\n        sums.assign(size * 2, 0LL);\n    }\n    \n    void set(int i, int v, int x, int lx, int rx) {\n        if (rx - lx == 1) {\n            sums[x] = v;\n            return;\n        }\n        int m = (lx + rx) / 2;\n        if (i < m) set(i, v, 2 * x + 1, lx, m);\n        else set(i, v, 2 * x + 2, m, rx);\n        sums[x] = sums[2 * x + 1] + sums[2 * x + 2];\n    }\n    \n    void set(int i, int v) {\n        set(i, v, 0, 0, size);\n    }\n    \n    long long sum(int l, int r, int x, int lx, int rx) {\n        if (lx >= r || l >= rx) return 0;\n        if (lx >= l && rx <= r) return sums[x];\n        int m = (lx + rx) / 2;\n        return sum(l, r, 2 * x + 1, lx, m) + sum(l, r, 2 * x + 2, m, rx);\n    }\n    \n    long long sum(int l, int r) {\n        return sum(l, r, 0, 0, size);\n    }\n};\n"})})})}),"\n",(0,s.jsx)(n.h3,{id:"sample-usage",children:"Sample Usage"}),"\n",(0,s.jsx)(r,{children:(0,s.jsx)(t,{value:"cpp",label:"C++",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"int n = nums.size();\n\nst.init(n);\n// ...\nfor (int i = 0; i < n; i++) st.set(i, nums[i]);\n// ...\nst.set(index, val);\n// ...\nst.sum(left, right + 1)\n"})})})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var s=t(67294);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);