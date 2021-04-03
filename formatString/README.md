# Format a string of names

<div class="markdown prose max-w-none" id="description"><p>Given: an array containing hashes of names</p>
<p>Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an <code>&</code>.</p>
<p>Example:</p>

<pre><code class="language-javascript"><span class="cm-variable">list</span>([ {<span class="cm-property">name</span>: <span class="cm-string">'Bart'</span>}, {<span class="cm-property">name</span>: <span class="cm-string">'Lisa'</span>}, {<span class="cm-property">name</span>: <span class="cm-string">'Maggie'</span>} ])
<span class="cm-comment">// returns 'Bart, Lisa &amp; Maggie'</span>

<span class="cm-variable">list</span>([ {<span class="cm-property">name</span>: <span class="cm-string">'Bart'</span>}, {<span class="cm-property">name</span>: <span class="cm-string">'Lisa'</span>} ])
<span class="cm-comment">// returns 'Bart &amp; Lisa'</span>

<span class="cm-variable">list</span>([ {<span class="cm-property">name</span>: <span class="cm-string">'Bart'</span>} ])
<span class="cm-comment">// returns 'Bart'</span>

<span class="cm-variable">list</span>([])
<span class="cm-comment">// returns ''</span>
</code></pre>
<p>Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.</p>
</div>
