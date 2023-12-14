import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as o,a as n,b as s,e as c,f as l}from"./app-hxf9Fdwb.js";const r="/blog/assets/105-fyF8JGi9.png",i={},u=n("h1",{id:"_105-construct-binary-tree-from-preorder-and-inorder-traversal",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_105-construct-binary-tree-from-preorder-and-inorder-traversal","aria-hidden":"true"},"#"),s(" 105. Construct Binary Tree from Preorder and Inorder Traversal")],-1),d={id:"題目-連結",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#題目-連結","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",target:"_blank",rel:"noopener noreferrer"},m=l('<blockquote><p>Given two integer arrays preorder and inorder where &gt;preorder is the preorder traversal of a binary tree and &gt;inorder is the inorder traversal of the same tree, &gt;construct and return the binary tree.</p></blockquote><h3 id="翻譯" tabindex="-1"><a class="header-anchor" href="#翻譯" aria-hidden="true">#</a> 翻譯</h3><blockquote><p>給定兩個整數數組 preorder 和 inorder ，其中 preorder 是二元樹的前序遍歷， inorder 是二元樹的中序遍歷樹，構造並返回二元樹。</p></blockquote><h3 id="測試資料" tabindex="-1"><a class="header-anchor" href="#測試資料" aria-hidden="true">#</a> 測試資料</h3><blockquote><p>Example 1: 範例 1：</p></blockquote><img src="'+r+`" width="50%"><blockquote><p>Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]</p></blockquote><blockquote><p>Output: [3,9,20,null,null,15,7]</p></blockquote><blockquote><p>Example 2: 範例 2：</p></blockquote><blockquote><p>Input: preorder = [-1], inorder = [-1]</p></blockquote><blockquote><p>Output: [-1]</p></blockquote><h3 id="解題思路" tabindex="-1"><a class="header-anchor" href="#解題思路" aria-hidden="true">#</a> 解題思路</h3><blockquote><p>前中序關係</p></blockquote><h3 id="程式碼" tabindex="-1"><a class="header-anchor" href="#程式碼" aria-hidden="true">#</a> 程式碼</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">preorder</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">inorder</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>

<span class="token comment">// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]</span>
<span class="token comment">// Output: [3,9,20,null,null,15,7]</span>
<span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> right<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preorder<span class="token punctuation">,</span> inorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">solve</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> inorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">solve</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preorder<span class="token punctuation">,</span> inorder<span class="token punctuation">,</span> preStart<span class="token punctuation">,</span> inStart<span class="token punctuation">,</span> inEnd<span class="token punctuation">,</span> map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>inStart <span class="token operator">&gt;</span> inEnd <span class="token operator">||</span> preStart <span class="token operator">&gt;</span> preorder<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> rootIndex <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>preStart<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>preStart<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">solve</span><span class="token punctuation">(</span>
    preorder<span class="token punctuation">,</span>
    inorder<span class="token punctuation">,</span>
    preStart <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    inStart<span class="token punctuation">,</span>
    rootIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
    map
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">solve</span><span class="token punctuation">(</span>
    preorder<span class="token punctuation">,</span>
    inorder<span class="token punctuation">,</span>
    preStart <span class="token operator">+</span> <span class="token punctuation">(</span>rootIndex <span class="token operator">-</span> inStart<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>

    rootIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    inEnd<span class="token punctuation">,</span>
    map
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> node<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function b(h,f){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,n("h3",d,[k,s(" 題目 "),n("a",v,[s("連結"),c(a)])]),m])}const _=e(i,[["render",b],["__file","105.html.vue"]]);export{_ as default};