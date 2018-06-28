

{{if isAdmin}}
<ul id="rank">
    {{each score value i}}
        <li class="score_list">
        <span class="score_num">
            No.{{i+1}}
        </span>
        <span class="score_name">
            {{value[0]}}
        </span>
        <span class="score_data">
            {{value[1]}}
        </span>
        </li>
    {{/each}} 
</ul>
{{/if}}