"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[18041],{54483:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var a=n(85893),t=n(11151);const i={description:"Author: @ColeB2 | https://leetcode.com/problems/evaluate-reverse-polish-notation/",tags:["Array","Math","Stack"]},r="0150 - Evaluate Reverse Polish Notation (Medium)",o={id:"0100-0199/evaluate-reverse-olish-notation-medium",title:"0150 - Evaluate Reverse Polish Notation (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/evaluate-reverse-polish-notation/",source:"@site/solutions/0100-0199/0150-evaluate-reverse-olish-notation-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/evaluate-reverse-olish-notation-medium",permalink:"/solutions/0100-0199/evaluate-reverse-olish-notation-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0150-evaluate-reverse-olish-notation-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Math",permalink:"/solutions/tags/math"},{label:"Stack",permalink:"/solutions/tags/stack"}],version:"current",sidebarPosition:150,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/evaluate-reverse-polish-notation/",tags:["Array","Math","Stack"]},sidebar:"tutorialSidebar",previous:{title:"0148 - Sort List (Medium)",permalink:"/solutions/0100-0199/sort-list-medium"},next:{title:"0152 - Maximum Product Subarray (Medium)",permalink:"/solutions/0100-0199/maximum-product-subarray-medium"}},l={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Stack",id:"approach-1-stack",level:2}];function c(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:n,TabItem:i,Tabs:r}=s;return n||d("SolutionAuthor",!0),i||d("TabItem",!0),r||d("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"0150---evaluate-reverse-polish-notation-medium",children:"0150 - Evaluate Reverse Polish Notation (Medium)"}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/evaluate-reverse-polish-notation/",children:"https://leetcode.com/problems/evaluate-reverse-polish-notation/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(s.p,{children:["Evaluate the value of an arithmetic expression in ",(0,a.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Reverse_Polish_notation",children:"Reverse Polish Notation"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Valid operators are ",(0,a.jsx)(s.code,{children:"+"}),", ",(0,a.jsx)(s.code,{children:"-"}),", ",(0,a.jsx)(s.code,{children:"*"}),", and ",(0,a.jsx)(s.code,{children:"/"}),". Each operand may be an integer or another expression."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Note"})," that division between two integers should truncate toward zero."]}),"\n",(0,a.jsx)(s.p,{children:"It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input: tokens = ["2","1","+","3","*"]\nOutput: 9\nExplanation: ((2 + 1) * 3) = 9\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input: tokens = ["4","13","5","/","+"]\nOutput: 6\nExplanation: (4 + (13 / 5)) = 6\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]\nOutput: 22\nExplanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5\n= ((10 * (6 / (12 * -11))) + 17) + 5\n= ((10 * (6 / -132)) + 17) + 5\n= ((10 * 0) + 17) + 5\n= (0 + 17) + 5\n= 17 + 5\n= 22\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= tokens.length <= 10^4"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"tokens[i]"})," is either an operator: ",(0,a.jsx)(s.code,{children:'"+"'}),", ",(0,a.jsx)(s.code,{children:'"-"'}),", ",(0,a.jsx)(s.code,{children:'"*"'}),", or ",(0,a.jsx)(s.code,{children:'"/"'}),", or an integer in the range ",(0,a.jsx)(s.code,{children:"[-200, 200]"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-stack",children:"Approach 1: Stack"}),"\n",(0,a.jsxs)(s.p,{children:["We need to understand that Reverse Polish Notation aka postfix notation, is a notation where the operators follow the operands. Meaning when we iterate through ",(0,a.jsx)(s.code,{children:"tokens"})," we are going to reach at least 2 numbers before we reach an operator. Example: ",(0,a.jsx)(s.code,{children:'["2","1","+"]'})," This also resembles how a stack works, so by placing numbers in a stack, we will have access to the last 2 numbers that entered the stack, so that we can pop them off to perform the operation whenever we reach the operator."]}),"\n",(0,a.jsxs)(s.p,{children:["The main problem to solve is now that we know we need to use a stack, but in which order do we handle our operations? For addition and multiplication, the order won't matter, but for subtraction and division, there is a difference depending on which number subtracts from which, or which is the dividend. By analyzing the examples we can see that the first number that gets popped off the stack appears to be our ",(0,a.jsx)(s.code,{children:"y"})," value, and the second appears to be our ",(0,a.jsx)(s.code,{children:"x"})," value in any expression ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"x"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,a.jsx)(s.mi,{children:"y"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"x / y"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(s.span,{className:"mord",children:"/"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]})," or ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"x"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mi,{children:"y"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"x - y"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Example: if our stack looks like: ",(0,a.jsx)(s.code,{children:"[4,2]"}),", and our token is ",(0,a.jsx)(s.code,{children:"/"}),". The expression should be analyzed as y=2, x=4 as we pop off the y first then the x, which will give us an answer of ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"4"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"4/2=2"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"4/2"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2"})]})]})]})," and not ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,a.jsx)(s.mn,{children:"4"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mn,{children:"0.5"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"2/4=0.5"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2/4"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"0.5"})]})]})]})," which would truncate towards 0 as 0."]}),"\n",(0,a.jsxs)(s.p,{children:["Note: We can also significantly improve readability by utilizing a hash map, and lambda functions to map our operators to the operations they perform, instead of nesting a bunch of if/else clauses. But we could also utilize if/else, or switch cases, then for each case, ",(0,a.jsx)(s.code,{children:"+"}),", ",(0,a.jsx)(s.code,{children:"-"}),", ",(0,a.jsx)(s.code,{children:"*"}),", and ",(0,a.jsx)(s.code,{children:"/"}),", perform the required operation/function utilizing the top 2 numbers from the stack as the parameters."]}),"\n",(0,a.jsxs)(s.p,{children:["Time Complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," where n is the length of the input, tokens."]}),"\n",(0,a.jsxs)(s.p,{children:["Space Complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," for our stack, which will depend on the length of the input, tokens."]}),"\n",(0,a.jsx)(r,{children:(0,a.jsxs)(i,{value:"python",label:"Python",children:[(0,a.jsx)(n,{name:"@ColeB2"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:'class Solution:\n    def evalRPN(self, tokens: List[str]) -> int:\n        # First we initialize our hash map which will map our\n        # operators directly to the operations they perform.\n        # We also utilize lambda functions, which are just anonymous,\n        # nameless function.\n        # "+" maps to function which takes params x,y and adds them.\n        # "-" maps to function which takes params x,y and subtracts them.\n        # "*" maps to function which takes params x,y and multiplies them.\n        # "/" maps to function which takes params x,y and divides them.\n        # Note "/" utilizes regular division, but converts the float to an \n        # int to handle the requirement of needing to truncate towards 0.\n        ops = {\n            "+": lambda x, y : (x + y),\n            "-": lambda x, y : (x - y),\n            "*": lambda x, y : (x * y),\n            "/": lambda x, y : int(x/y)\n        }\n        # initialize an empty stack.\n        stack = []\n        # Loop through each token in tokens, O(n) time, where n is the number of tokens.\n        for token in tokens:\n            # Check if our token is in our ops hash map. O(1) to check.\n            if token in ops:\n                # It is, then we pop, remembering the order of y first, then x.\n                y,x = stack.pop(), stack.pop()\n                # solve our answer, by calling our lambda function by first\n                # accessing the value of our hash map the same way we would any \n                # hash map, then, since we know it will return a function, to supply\n                # the parameters that the function will need, which we know is x,y.\n                answer = ops[token](x,y)\n                # remember to append the answer to the stack.\n                stack.append(answer)\n            # If token is NOT a operator, but a number, add the token to the stack.\n            # Remember that we are reading through an array of strings, so \n            # we will convert to an integer first here, to prevent having to convert\n            # later when we need to pop it off.\n            else:\n                stack.append(int(token))\n        # Our stack should be empty except for the answer, so we can return that\n        # value that is left in the stack.\n        return stack[-1]\n'})})]})})]})}function m(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}function d(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>r});var a=n(67294);const t={},i=a.createContext(t);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);