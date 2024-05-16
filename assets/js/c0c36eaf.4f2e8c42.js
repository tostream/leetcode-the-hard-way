"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[94573],{19665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(85893),i=t(11151);const s={description:"Author: @la-la-Cute, @ganajayant, @radojicic23 | https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"},a="0028 - Find the Index of the First Occurrence in a String (Easy)",o={id:"0000-0099/find-the-index-of-the-first-occurrence-in-a-string-easy",title:"0028 - Find the Index of the First Occurrence in a String (Easy)",description:"Author: @la-la-Cute, @ganajayant, @radojicic23 | https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",source:"@site/solutions/0000-0099/0028-find-the-index-of-the-first-occurrence-in-a-string-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/find-the-index-of-the-first-occurrence-in-a-string-easy",permalink:"/solutions/0000-0099/find-the-index-of-the-first-occurrence-in-a-string-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0028-find-the-index-of-the-first-occurrence-in-a-string-easy.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{description:"Author: @la-la-Cute, @ganajayant, @radojicic23 | https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"},sidebar:"tutorialSidebar",previous:{title:"0027 - Remove Element (Easy)",permalink:"/solutions/0000-0099/remove-element-easy"},next:{title:"0033 - Search in Rotated Sorted Array (Medium)",permalink:"/solutions/0000-0099/search-in-rotated-sorted-array-medium"}},h={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Rolling Hash",id:"approach-1-rolling-hash",level:2},{value:"Approach 2: Index Of",id:"approach-2-index-of",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t,TabItem:s,Tabs:a}=n;return t||u("SolutionAuthor",!0),s||u("TabItem",!0),a||u("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"0028---find-the-index-of-the-first-occurrence-in-a-string-easy",children:"0028 - Find the Index of the First Occurrence in a String (Easy)"}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",children:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Implement ",(0,r.jsx)(n.a,{href:"http://www.cplusplus.com/reference/cstring/strstr/",children:"strStr()"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Return the index of the first occurrence of needle in haystack, or ",(0,r.jsx)(n.code,{children:"-1"})," if ",(0,r.jsx)(n.code,{children:"needle"})," is not part of ",(0,r.jsx)(n.code,{children:"haystack"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Clarification:"})}),"\n",(0,r.jsxs)(n.p,{children:["What should we return when ",(0,r.jsx)(n.code,{children:"needle"})," is an empty string? This is a great question to ask during an interview."]}),"\n",(0,r.jsxs)(n.p,{children:["For the purpose of this problem, we will return 0 when ",(0,r.jsx)(n.code,{children:"needle"})," is an empty string. This is consistent to C's ",(0,r.jsx)(n.a,{href:"http://www.cplusplus.com/reference/cstring/strstr/",children:"strstr()"})," and Java's ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)",children:"indexOf()"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: haystack = "hello", needle = "ll"\nOutput: 2\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: haystack = "aaaaa", needle = "bba"\nOutput: -1\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: haystack = "", needle = ""\nOutput: 0\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"0 <= haystack.length, needle.length <= 5 * 10^4"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"haystack"})," and ",(0,r.jsx)(n.code,{children:"needle"})," consist of only lower-case English characters."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-rolling-hash",children:"Approach 1: Rolling Hash"}),"\n",(0,r.jsx)(a,{children:(0,r.jsxs)(s,{value:"py",label:"Python",children:[(0,r.jsx)(t,{name:"@la-la-Cute"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Solution:\n    """Searching for substring in a string - using Rolling hash (the Rabin-Karp algorithm)"""\n\n    def strStr(self, s: str, pattern: str) -> int:\n        # Before anything else, check if `pattern` is an empty string, in which case we return 0 as required by the problem.\n        if not pattern:\n            return 0\n        # Choose a prime number for the base and a modulus, denoted by d and q respectively.\n        PRIME, MOD = 100007, 500000\n        # For better readability, here we assign the lengths of `s` and `pattern` to the variables n and m respectively.\n        n, m = len(s), len(pattern)\n        # Precompute d ^ (m - 1) mod q, where d is the base chosen, m is len(pattern) and q is the modulus chosen.\n        #   Note: it is important this value be computed efficiently. One way is to use the built-in pow.\n        h = pow(PRIME, m - 1, MOD)\n        # Compute the hash value of `pattern`. This can be done by simply applying the formula.\n        hash_val = sum(ord(c) * pow(PRIME, m - 1 - i, MOD) for i, c in enumerate(pattern)) % MOD\n        # Initialize a dictionary which maps indices to the hash values of their respective substrings.\n        #   Specifically, t[i] is the hash value of s[i: i + m] (i.e., an m-sized substring of `s` starting at index `i`)\n        t = {}\n\n        # Calculate the hash value of all substrings of `s`, the number of which is n - m.\n        for idx in range(n - m + 1):\n            # If idx == 0, compute the hash value of the first substring. Just like the way we do it for `pattern` above.\n            if idx == 0:\n                t[0] = sum(ord(s[j]) * pow(PRIME, m - 1 - j, MOD) for j in range(m)) % MOD\n            else:\n                # For i > 0, here comes the essence of "rolling hash", \n                #   whereby we manage to compute t[i - 1] with little work.\n                #\n                # EXPLANATION:\n                #   The formula for t[i] is given by:\n                #       (the sum of s_k * d ^ (m + i - 1 - k) for i <= k < i + m) mod q\n                #       where s_k is the numerical value for the s[k] (here we use the ASCII value).\n                #   Then, observe that, for two successive substrings of length m,\n                #       or using Python\'s slicing syntax, s[i: i + m] and s[i + 1: i + m + 1],\n                #       one can say they differ by \n                #           i) the previously leftmost character, which is now dropped, and,\n                #           ii) the currently rightmost character, which is new part of the substring.\n                #   In other words, the other m - 1 characters are basically unaffected \n                #       except that their positions are shifted leftward by one index.\n                #       These charachers, alongside the differing ones, make up of both t[i - 1] and t[i], \n                #       with the only difference of the power that is increased by 1.\n                #   To compute t[i] from t[i - 1],\n                #       firstly, find s_k * d ^ (m + i - 1 - k) for the leftmost character to be dropped,\n                #           that is, to multiply ord(s[i - 1]) by d ^ (m - 1) = h (precomputed),\n                #           and take that amount off t[i - 1];\n                #       secondly, multiply the result by d, adjusting for the power of d having increased by one \n                #           (with respect to each characher).\n                #       thirdly, add the last part of t[i], that of the character on the right end, \n                #           given by ord(s[i + m - 1]), to the sum.\n                #       finally, don\'t forget the modulo operation.\n                t[idx] = (PRIME * (t[idx - 1] - ord(s[idx - 1]) * h) + ord(s[idx + m - 1])) % MOD\n            # If two strings are identical, they must have the same hash value.\n            # However, beware of "spurious hits", where two different strings happen to share the same hash value.\n            # As such, we compare the substring against `pattern` to verify the result.\n            if t[idx] == hash_val and s[idx : idx + m] == pattern:\n                return idx\n        return -1\n'})})]})}),"\n",(0,r.jsx)(n.h2,{id:"approach-2-index-of",children:"Approach 2: Index Of"}),"\n",(0,r.jsx)(n.p,{children:"using method in string indexOf gives the first index of needle if it appeared in haystack"}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsxs)(s,{value:"java",label:"Java",children:[(0,r.jsx)(t,{name:"@ganajayant"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public int strStr(String haystack, String needle) {\n        if (needle.isEmpty()) {\n            return 0;\n        }\n        return haystack.indexOf(needle);\n    }\n}\n"})})]}),(0,r.jsxs)(s,{value:"cpp",label:"C++",children:[(0,r.jsx)(t,{name:"@radojicic23"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int strStr(string haystack, string needle) {\n        if (needle.empty()) {\n            return 0;\n        }\n        return haystack.find(needle);\n    }\n};\n"})})]}),(0,r.jsxs)(s,{value:"py",label:"Python",children:[(0,r.jsx)(t,{name:"@radojicic23"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def strStr(self, haystack: str, needle: str) -> int:\n        if len(needle) == 0:\n            return 0\n        return haystack.find(needle)\n"})})]}),(0,r.jsxs)(s,{value:"js",label:"JavaScript",children:[(0,r.jsx)(t,{name:"@radojicic23"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"/**\n * @param {string} haystack\n * @param {string} needle\n * @return {number}\n */\nvar strStr = function(haystack, needle) {\n    if (needle.length == 0) {\n        return 0;\n    }\n    return haystack.indexOf(needle);\n};\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);