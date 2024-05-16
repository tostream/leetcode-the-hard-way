"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[45520],{54603:(a,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=s(85893),m=s(11151);const l={description:"Author: @wingkwong | https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/"},i="1491 - Average Salary Excluding the Minimum and Maximum Salary (Easy)",r={id:"1400-1499/average-salary-excluding-the-minimum-and-maximum-salary-easy",title:"1491 - Average Salary Excluding the Minimum and Maximum Salary (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/",source:"@site/solutions/1400-1499/1491-average-salary-excluding-the-minimum-and-maximum-salary-easy.md",sourceDirName:"1400-1499",slug:"/1400-1499/average-salary-excluding-the-minimum-and-maximum-salary-easy",permalink:"/solutions/1400-1499/average-salary-excluding-the-minimum-and-maximum-salary-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1400-1499/1491-average-salary-excluding-the-minimum-and-maximum-salary-easy.md",tags:[],version:"current",sidebarPosition:1491,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/"},sidebar:"tutorialSidebar",previous:{title:"1480 - Running Sum of 1d Array (Easy)",permalink:"/solutions/1400-1499/running-sum-of-1d-array-easy"},next:{title:"1494 - Parallel Courses II (Hard)",permalink:"/solutions/1400-1499/parallel-courses-ii-hard"}},t={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: One Pass",id:"approach-1-one-pass",level:2}];function h(a){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,m.a)(),...a.components},{SolutionAuthor:s}=e;return s||function(a,e){throw new Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"1491---average-salary-excluding-the-minimum-and-maximum-salary-easy",children:"1491 - Average Salary Excluding the Minimum and Maximum Salary (Easy)"}),"\n",(0,n.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/",children:"https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/"})}),"\n",(0,n.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(e.p,{children:["You are given an array of ",(0,n.jsx)(e.strong,{children:"unique"})," integers ",(0,n.jsx)(e.code,{children:"salary"})," where ",(0,n.jsx)(e.code,{children:"salary[i]"})," is the salary of the ",(0,n.jsx)(e.code,{children:"ith"})," employee."]}),"\n",(0,n.jsxs)(e.p,{children:["Return ",(0,n.jsx)(e.em,{children:"the average salary of employees excluding the minimum and maximum salary"}),". Answers within ",(0,n.jsx)(e.code,{children:"10-5"})," of the actual answer will be accepted."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: salary = [4000,3000,1000,2000]\nOutput: 2500.00000\nExplanation: Minimum salary and maximum salary are 1000 and 4000 respectively.\nAverage salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: salary = [1000,2000,3000]\nOutput: 2000.00000\nExplanation: Minimum salary and maximum salary are 1000 and 3000 respectively.\nAverage salary excluding minimum and maximum salary is (2000) / 1 = 2000\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"3 <= salary.length <= 100"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1000 <= salary[i] <= 10^6"})}),"\n",(0,n.jsxs)(e.li,{children:["All the integers of ",(0,n.jsx)(e.code,{children:"salary"})," are ",(0,n.jsx)(e.strong,{children:"unique"}),"."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"approach-1-one-pass",children:"Approach 1: One Pass"}),"\n",(0,n.jsxs)(e.p,{children:["We iterate ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"y"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"salary"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"ry"})]})})]})," and calculate the total sum ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"m"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"sum"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})})]}),", the minimum value ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"mi"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"mi"})]})})]})," and the maximum value ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"mx"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]}),". The average salary of employees excluding the minimum and maximum salary would be ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"sum - mi - mx"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"mi"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]}),". Since we exclude two items, we just need to divide by ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"len(salary) - 2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"ry"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"})]})]})]}),"."]}),"\n",(0,n.jsx)(s,{name:"@wingkwong"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-go",children:"func average(salary []int) float64 {\n    sum, n := 0, len(salary)\n    mi, mx := 100005, 0\n    for _, x := range salary {\n        // calculate the total sum\n        sum += x\n        // find the minimum value\n        if x < mi { mi = x }\n        // find the maximum value\n        if x > mx { mx = x }\n    }\n    // exclude mi & mx and get the avg \n    return float64(sum - mi - mx) / float64(n - 2)\n}\n"})}),"\n",(0,n.jsx)(s,{name:"@wingkwong"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-rust",children:"use std::cmp;\n\nimpl Solution {\n    pub fn average(salary: Vec<i32>) -> f64 {\n        let mut sum = 0;\n        let mut mx = 0;\n        let mut mi = 100005;\n        let n = salary.len() as f64;\n        for x in salary {\n            sum += x;\n            mx = cmp::max(mx, x);\n            mi = cmp::min(mi, x);\n        }\n        return ((sum - mx - mi) as f64 / (n - 2.0)); \n    }\n}\n"})})]})}function d(a={}){const{wrapper:e}={...(0,m.a)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(h,{...a})}):h(a)}},11151:(a,e,s)=>{s.d(e,{Z:()=>r,a:()=>i});var n=s(67294);const m={},l=n.createContext(m);function i(a){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function r(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(m):a.components||m:i(a.components),n.createElement(l.Provider,{value:e},a.children)}}}]);