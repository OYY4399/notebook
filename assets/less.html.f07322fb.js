import{_ as s,o as n,c as a,a as l}from"./app.8a544ae7.js";const e={},p=l(`<h1 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h1><h2 id="_1-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-\u53D8\u91CF" aria-hidden="true">#</a> 1. \u53D8\u91CF</h2><div class="language-less ext-less line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#9CDCFE;">@width</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">10px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">@height</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">@width</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">10px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">#header</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">width</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">@width</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">height</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">@height</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// \u7F16\u8BD1\u540E</span></span>
<span class="line"><span style="color:#D7BA7D;">#header</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">width</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">10px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">height</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">20px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u6DF7\u5408" tabindex="-1"><a class="header-anchor" href="#_2-\u6DF7\u5408" aria-hidden="true">#</a> 2. \u6DF7\u5408</h2><div class="language-less ext-less line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">.bordered</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">border-top</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">dotted</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1px</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">black</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D7BA7D;">a</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ccc</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#D7BA7D;">.bordered</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// \u7F16\u8BD1\u540E</span></span>
<span class="line"><span style="color:#D7BA7D;">.bordered</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">border-top</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">dotted</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1px</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">black</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D7BA7D;">a</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ccc</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">border-top</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">dotted</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1px</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">black</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#_3-\u5D4C\u5957" aria-hidden="true">#</a> 3. \u5D4C\u5957</h2><div class="language-less ext-less line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">#header</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#D7BA7D;">.logo</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">width</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">300px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// \u7F16\u8BD1\u540E</span></span>
<span class="line"><span style="color:#D7BA7D;">#header</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">.logo</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">width</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">300px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#_4-\u4F5C\u7528\u57DF" aria-hidden="true">#</a> 4. \u4F5C\u7528\u57DF</h2><div class="language-less ext-less line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#9CDCFE;">@var</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D;">#page</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">@var</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">white</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#D7BA7D;">#header</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">@var</span><span style="color:#D4D4D4;">; </span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// \u7F16\u8BD1\u540E, \u5355\u884C\u6CE8\u91CA\u4E0D\u4F1A\u7F16\u8BD1\u5230 css \u4E2D</span></span>
<span class="line"><span style="color:#D7BA7D;">#page</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">#header</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">white</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(D,i){return n(),a("div",null,o)}const t=s(e,[["render",c],["__file","less.html.vue"]]);export{t as default};
