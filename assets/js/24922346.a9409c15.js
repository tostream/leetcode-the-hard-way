"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[50806],{30413:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=a(85893),t=a(11151);const r={description:"Author: @ColeB2 | https://leetcode.com/problems/plus-one/",tags:["Array","Math"]},i="0066 - Plus One (Easy)",l={id:"0000-0099/plus-one-easy",title:"0066 - Plus One (Easy)",description:"Author: @ColeB2 | https://leetcode.com/problems/plus-one/",source:"@site/solutions/0000-0099/0066-plus-one-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/plus-one-easy",permalink:"/solutions/0000-0099/plus-one-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0066-plus-one-easy.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Math",permalink:"/solutions/tags/math"}],version:"current",sidebarPosition:66,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/plus-one/",tags:["Array","Math"]},sidebar:"tutorialSidebar",previous:{title:"0063 - Unique Paths II (Medium)",permalink:"/solutions/0000-0099/unique-paths-ii-medium"},next:{title:"0067 - Add Binary (easy)",permalink:"/solutions/0000-0099/add-binary-easy"}},c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Math",id:"approach-1-math",level:2}];function m(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:a,TabItem:r,Tabs:i}=s;return a||d("SolutionAuthor",!0),r||d("TabItem",!0),i||d("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"0066---plus-one-easy",children:"0066 - Plus One (Easy)"}),"\n",(0,n.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://leetcode.com/problems/plus-one/",children:"https://leetcode.com/problems/plus-one/"})}),"\n",(0,n.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(s.p,{children:["You are given a ",(0,n.jsx)(s.strong,{children:"large integer"})," represented as an integer array ",(0,n.jsx)(s.code,{children:"digits"}),", where each ",(0,n.jsx)(s.code,{children:"digits[i]"})," is the ",(0,n.jsx)(s.code,{children:"ith"})," digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading ",(0,n.jsx)(s.code,{children:"0"}),"'s."]}),"\n",(0,n.jsxs)(s.p,{children:["Increment the large integer by one and return ",(0,n.jsx)(s.em,{children:"the resulting array of digits"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"Input: digits = [1,2,3]\nOutput: [1,2,4]\nExplanation: The array represents the integer 123.\nIncrementing by one gives 123 + 1 = 124.\nThus, the result should be [1,2,4].\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"Input: digits = [4,3,2,1]\nOutput: [4,3,2,2]\nExplanation: The array represents the integer 4321.\nIncrementing by one gives 4321 + 1 = 4322.\nThus, the result should be [4,3,2,2].\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example 3:"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"Input: digits = [9]\nOutput: [1,0]\nExplanation: The array represents the integer 9.\nIncrementing by one gives 9 + 1 = 10.\nThus, the result should be [1,0].\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"1 <= digits.length <= 100"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"0 <= digits[i] <= 9"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"digits"})," does not contain any leading ",(0,n.jsx)(s.code,{children:"0"}),"'s."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"approach-1-math",children:"Approach 1: Math"}),"\n",(0,n.jsx)(s.p,{children:"We can treat this exactly how we would normally treat a math problem, where we must add one. That is to line our numbers up and from right-to-left add them together, and if any digit goes over nine, we must carry over the value to the next place."}),"\n",(0,n.jsxs)(s.p,{children:["To do this, we can initialize a ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"c"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"r"}),(0,n.jsx)(s.mi,{children:"r"}),(0,n.jsx)(s.mi,{children:"y"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"carry"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"rry"})]})})]})," value as 1, and consider this as our one we are going to add, then loop from right-left over our digits array, adding the current digit and the carry value if it exists (Note: it will always exist on the first iteration as we initialize it like this to be the plus one value we want to add). We must also remember that the digit we create may go over ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mn,{children:"9"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"9"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(s.span,{className:"mord",children:"9"})]})})]}),", so we have to place the one's portion at the current ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"i"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," position and use the tens portion as our carry over for the next iteration, which we can perform both of those operations using the modulo operator, and integer division. If we have no carry over, we can break early, as we know there is no need to continue iterating."]}),"\n",(0,n.jsxs)(s.p,{children:["Finally remember that we can traverse digits, and still have a carry at the end, so we must perform one last ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]})," operation to insert our carry at the start of digits (if carry is not ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mn,{children:"0"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(s.span,{className:"mord",children:"0"})]})})]}),"), and return our answer."]}),"\n",(0,n.jsxs)(s.p,{children:["Time Complexity: ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]}),". Where ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"n"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," is the length of ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"d"}),(0,n.jsx)(s.mi,{children:"i"}),(0,n.jsx)(s.mi,{children:"g"}),(0,n.jsx)(s.mi,{children:"i"}),(0,n.jsx)(s.mi,{children:"t"}),(0,n.jsx)(s.mi,{children:"s"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"digits"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"s"})]})})]}),". In the worst case we are going to iterate over the entire ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"d"}),(0,n.jsx)(s.mi,{children:"i"}),(0,n.jsx)(s.mi,{children:"g"}),(0,n.jsx)(s.mi,{children:"i"}),(0,n.jsx)(s.mi,{children:"t"}),(0,n.jsx)(s.mi,{children:"s"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"digits"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"s"})]})})]})," array, and inserting to the start of the array will take ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]})," time as well."]}),"\n",(0,n.jsxs)(s.p,{children:["Space Complexity: ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mn,{children:"1"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord",children:"1"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", we can do this in place, using variables to track our ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"c"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"r"}),(0,n.jsx)(s.mi,{children:"r"}),(0,n.jsx)(s.mi,{children:"y"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"carry"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"rry"})]})})]})," value."]}),"\n",(0,n.jsx)(i,{children:(0,n.jsxs)(r,{value:"python",label:"Python",children:[(0,n.jsx)(a,{name:"@ColeB2"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def plusOne(self, digits: List[int]) -> List[int]:\n        # initialize a carry of one, which represents our \"plus one\"\n        carry = 1\n        # iterate over the array backwards from ones digit to left most digit.\n        for i in range(len(digits) - 1, -1, -1):\n            # if we have a carry value: we can add it to the current digit.\n            if carry:\n                # get the number after adding the current digit to carry.\n                num = digits[i] + carry\n                # replace our current digit with the ones place of the\n                # the number we created above. The Modulo operator can do this\n                # for us.\n                digits[i] = num % 10\n                # integer division to get the 10's place of num, which will\n                # be 0 if it is less than 10.\n                carry = num // 10\n            # if carry doesn't exist, we can break early.\n            else:\n                break\n        # if carry exists after our iteration above, we need to insert\n        # our carry to the start of our digits array.\n        if carry:\n            digits.insert(0, carry)\n\n        return digits\n"})})]})})]})}function o(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}function d(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,a)=>{a.d(s,{Z:()=>l,a:()=>i});var n=a(67294);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);