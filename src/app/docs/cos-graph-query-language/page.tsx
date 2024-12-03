export default function GraphDatalogPage() {
    return (
        <>
            <div id="content" className="content ">
                <h1 className="title">Cos Graph Query Language Specification</h1>
                <div id="table-of-contents" role="doc-toc">
                    <h2>Table of Contents</h2>
                    <div id="text-table-of-contents" role="doc-toc">
                        <ul>
                            <li>
                                <a className="text-blue-500 hover:text-blue-700 underline" href="#orga053c1d">1. Schema Definition</a>
                                <ul className="">
                                    <li>
                                        <a className="text-blue-500 hover:text-blue-700 underline" href="#org72c7afb">1.1. Entity Definition</a>
                                    </li>
                                    <li>
                                        <a className="text-blue-500 hover:text-blue-700 underline" href="#org767142a">1.2. Relationship Definition</a>
                                        <ul className="">
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#orgcd469d7">
                                                    1.2.1. Note: Relationship Definitions (Schema Level):
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="text-blue-500 hover:text-blue-700 underline" href="#orgb2cfc01">2. Data Manipulation</a>
                                <ul className="">
                                    <li>
                                        <a className="text-blue-500 hover:text-blue-700 underline" href="#orgd54fa4f">2.1. Entity Instance Insertion</a>
                                    </li>
                                    <li>
                                        <a className="text-blue-500 hover:text-blue-700 underline" href="#org21a3a80">2.2. Relationship Instance Insertion</a>
                                        <ul className="">
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#orgacc51cf">
                                                    2.2.1. Note: Relationship Instances (Data Level):
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="text-blue-500 hover:text-blue-700 underline" href="#orgdf7b805">3. Querying</a>
                                <ul className="">
                                    <li>
                                        <a className="text-blue-500 hover:text-blue-700 underline" href="#org1569124">3.1. Basic Query Structure</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org1fed19b">4. Rules</a>
                                <ul className="">
                                    <li>
                                        <a className="text-blue-500 hover:text-blue-700 underline" href="#org3c21713">4.1. Rule Definition</a>
                                    </li>
                                    <li>
                                        <a className="text-blue-500 hover:text-blue-700 underline" href="#org1869ba8">
                                            4.2. Example: Transitive Closure of Flight Connections
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-blue-500 hover:text-blue-700 underline" href="#org4dd0271">4.3. Using Rules with Attributes</a>
                                        <ul className="">
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org90fafe2">
                                                    4.3.1. Entity and Relationship Usage in Rules
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org11dbf44">5. Inferred Relationships:</a>
                            </li>
                            <li>
                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org454c020">6. Inference Syntax for Schema Evolution:</a>
                            </li>
                            <li>
                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org5086d61">7. Joins</a>
                                <ul className="">
                                    <li>
                                        <a className="text-blue-500 hover:text-blue-700 underline" href="#org4f7ccde">
                                            7.1. Entity and Relationship Definitions
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-blue-500 hover:text-blue-700 underline" href="#orged5bd43">7.2. Complex Query Example</a>
                                        <ul className="">
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org522635e">7.2.1. Query Description</a>
                                            </li>
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org3f6fa2c">7.2.2. Query Syntax</a>
                                            </li>
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org14bd059">
                                                    7.2.3. Rule Definition Using the Complex Query
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org74c4a9c">8. Query vs Rule</a>
                                <ul className="">
                                    <li>
                                        <a className="text-blue-500 hover:text-blue-700 underline" href="#org9b2031d">8.1. Match/Get (Direct Querying)</a>
                                        <ul className="">
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org47f8f3f">8.1.1. Syntax</a>
                                            </li>
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org9b0e0a4">8.1.2. Purpose</a>
                                            </li>
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org211609c">8.1.3. Characteristics</a>
                                            </li>
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org1513d1a">8.1.4. When to Use</a>
                                            </li>
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#orgae0bd18">8.1.5. Example</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="text-blue-500 hover:text-blue-700 underline" href="#org41fc0e6">
                                            8.2. Rule/Match/Infer (Rule-Based Inference)
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org415144d">8.2.1. Syntax</a>
                                            </li>
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org498ccae">8.2.2. Purpose</a>
                                            </li>
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org217438f">8.2.3. Characteristics</a>
                                            </li>
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org0795f49">8.2.4. When to Use</a>
                                            </li>
                                            <li>
                                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org40541b7">8.2.5. Example</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org417738e">9. Key Differences</a>
                            </li>
                            <li>
                                <a className="text-blue-500 hover:text-blue-700 underline" href="#orgc67ad05">
                                    10. Custom or System Procedure (cos<sub>proc</sub>)
                                </a>
                            </li>
                            <li>
                                <a className="text-blue-500 hover:text-blue-700 underline" href="#orgbfc3fde">11. Data Types</a>
                            </li>
                            <li>
                                <a className="text-blue-500 hover:text-blue-700 underline" href="#org30c022f">12. Comments</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="outline-container-orga053c1d" className="outline-2">
                    <h2 id="orga053c1d">
                        <span className="section-number-2">1.</span> Schema Definition
                    </h2>
                    <div className="outline-text-2" id="text-1"></div>
                    <div id="outline-container-org72c7afb" className="outline-3">
                        <h3 id="org72c7afb">
                            <span className="section-number-3">1.1.</span> Entity Definition
                        </h3>
                        <div className="outline-text-3" id="text-1-1">
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    define entity &lt;entity_name&gt; as{"\n"}
                                    {"    "}&lt;attribute_name&gt;: &lt;data_type&gt;{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">[</span>,
                                    &lt;attribute_name&gt;: &lt;data_type&gt;
                                    <span className="org-rainbow-delimiters-depth-1">]</span>*;{"\n"}
                                </pre>
                            </div>
                            <p>Example:</p>
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    define entity person <span className="org-type">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-variable-name">name</span>: string{"\n"}
                                    {"    "}, <span className="org-variable-name">age</span>:{" "}
                                    <span className="org-type">int</span>
                                    {"\n"}
                                    {"    "}, <span className="org-variable-name">email</span>:
                                    string;{"\n"}
                                    {"\n"}define entity company <span className="org-type">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-variable-name">name</span>: string{"\n"}
                                    {"    "}, <span className="org-variable-name">founded_year</span>:{" "}
                                    <span className="org-type">int</span>;{"\n"}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div id="outline-container-org767142a" className="outline-3">
                        <h3 id="org767142a">
                            <span className="section-number-3">1.2.</span> Relationship Definition
                        </h3>
                        <div className="outline-text-3" id="text-1-2">
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    define relationship &lt;relationship_name&gt; as{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    &lt;role1&gt;: &lt;entity_type1&gt;, &lt;role2&gt;:
                                    &lt;entity_type2&gt;
                                    <span className="org-rainbow-delimiters-depth-2">[</span>,
                                    &lt;role3&gt;: &lt;entity_type3&gt;
                                    <span className="org-rainbow-delimiters-depth-2">]</span>*
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">[</span>
                                    attribute1: &lt;data_type1&gt;,{"\n"}
                                    {"     "}attribute2: &lt;data_type2&gt;,{"\n"}
                                    {"     "}...
                                    <span className="org-rainbow-delimiters-depth-1">]</span>;{"\n"}
                                </pre>
                            </div>
                            <ul className="org-ul">
                                <li>
                                    Roles and their associated entity types are enclosed in
                                    parentheses.
                                </li>
                                <li>Multiple roles are separated by commas.</li>
                                <li>
                                    Optional attributes can be defined after the roles, each on a new
                                    line.
                                </li>
                                <li>The definition ends with a semicolon.</li>
                            </ul>
                            <p>Example (binary relationship):</p>
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    define relationship <span className="org-type">works_in</span>{" "}
                                    <span className="org-function-name">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>employee:
                                    person, department: department
                                    <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                    {"\n"}define relationship{" "}
                                    <span className="org-type">manages</span>{" "}
                                    <span className="org-function-name">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>manager:
                                    person, department: department
                                    <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                    {"\n"}define relationship{" "}
                                    <span className="org-type">assigned_to</span>{" "}
                                    <span className="org-function-name">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>employee:
                                    person, project: project
                                    <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                    {"\n"}
                                    <span className="org-comment-delimiter">&#47;&#47;  </span>
                                    <span className="org-comment">Example with attributes</span>
                                    {"\n"}define relationship{" "}
                                    <span className="org-type">employment</span>{" "}
                                    <span className="org-function-name">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>employee:
                                    person, employer: company
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"    "}
                                    <span className="org-variable-name">start_date</span>: date,{"\n"}
                                    {"    "}
                                    <span className="org-variable-name">salary</span>:{" "}
                                    <span className="org-type">double</span>;{"\n"}
                                </pre>
                            </div>
                            <p>Example (primitive ternary relationship)</p>
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    <span className="org-comment-delimiter">&#47;&#47; </span>
                                    <span className="org-comment">
                                        can&#47;t be decomposed into binaries
                                    </span>
                                    {"\n"}define relationship{" "}
                                    <span className="org-type">contributes_research</span>{" "}
                                    <span className="org-function-name">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>author:
                                    person,{"\n"}
                                    {"     "}research_entity: research_entity,{" "}
                                    <span className="org-comment-delimiter">&#47;&#47; </span>
                                    <span className="org-comment">survey, workshop, talk</span>
                                    {"\n"}
                                    {"     "}domain: domain
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"    "}
                                    <span className="org-variable-name">date</span>: date;{" "}
                                    <span className="org-comment-delimiter">&#47;&#47;</span>
                                    <span className="org-comment">in-exhaustive attrs</span>
                                    {"\n"}
                                </pre>
                            </div>
                        </div>
                        <div id="outline-container-orgcd469d7" className="outline-4">
                            <h4 id="orgcd469d7">
                                <span className="section-number-4">1.2.1.</span> Note: Relationship
                                Definitions (Schema Level):
                            </h4>
                            <div className="outline-text-4" id="text-1-2-1">
                                <ul className="org-ul">
                                    <li>These are like blueprints or templates for relationships.</li>
                                    <li>
                                        They define the structure: what types of entities can
                                        participate and what attributes the relationship can have.
                                    </li>
                                    <li>
                                        They&#39;re part of the schema, similar to how we define entity
                                        types.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="outline-container-orgb2cfc01" className="outline-2">
                    <h2 id="orgb2cfc01">
                        <span className="section-number-2">2.</span> Data Manipulation
                    </h2>
                    <div className="outline-text-2" id="text-2"></div>
                    <div id="outline-container-orgd54fa4f" className="outline-3">
                        <h3 id="orgd54fa4f">
                            <span className="section-number-3">2.1.</span> Entity Instance
                            Insertion
                        </h3>
                        <div className="outline-text-3" id="text-2-1">
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    insert $&lt;variable_name&gt; isa &lt;entity_type&gt;{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"    "}&lt;attribute_name&gt;: &lt;value&gt;{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-2">[</span>,
                                    &lt;attribute_name&gt;: &lt;value&gt;
                                    <span className="org-rainbow-delimiters-depth-2">]</span>*{"\n"}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                </pre>
                            </div>
                            <p>Example:</p>
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    insert $john isa person{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"    "}name: <span className="org-string">&#34;John Doe&#34;</span>
                                    {"\n"}
                                    {"    "}, age: 30{"\n"}
                                    {"    "}, email:{" "}
                                    <span className="org-string">&#34;john@example.com&#34;</span>
                                    {"\n"}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                    {"\n"}insert $techcorp isa company{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"    "}name: <span className="org-string">&#34;TechCorp&#34;</span>
                                    {"\n"}
                                    {"    "}, founded_year: 2000{"\n"}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div id="outline-container-org21a3a80" className="outline-3">
                        <h3 id="org21a3a80">
                            <span className="section-number-3">2.2.</span> Relationship Instance
                            Insertion
                        </h3>
                        <div className="outline-text-3" id="text-2-2">
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    insert $&lt;variable_name&gt;{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"    "}&lt;role_name&gt;: $&lt;entity_variable&gt; {"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-2">[</span>,
                                    &lt;role_name&gt;: $&lt;entity_variable&gt;
                                    <span className="org-rainbow-delimiters-depth-2">]</span>*{"\n"}
                                    <span className="org-rainbow-delimiters-depth-1">)</span> forms
                                    &lt;relationship_type&gt;{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"    "}&lt;attribute_name&gt;: &lt;value&gt;{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-2">[</span>,
                                    &lt;attribute_name&gt;: &lt;value&gt;
                                    <span className="org-rainbow-delimiters-depth-2">]</span>*{"\n"}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                </pre>
                            </div>
                            <p>Example (binary relationship):</p>
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    insert $job1{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"    "}employee: $john,{"\n"}
                                    {"    "}employer: $techcorp{"\n"}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-function-name">employment</span>{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"    "}salary: 100000.00{"\n"}
                                    {"    "}, start_date: 2022-03-01{"\n"}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                </pre>
                            </div>
                            <p>Example (ternary relationship):</p>
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    insert $assignment1{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"    "}employee: $john,{"\n"}
                                    {"    "}project: $ai_project,{"\n"}
                                    {"    "}department: $tech_dept{"\n"}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-function-name">project_assignment</span>{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"    "}role: <span className="org-string">&#34;Lead Developer&#34;</span>
                                    {"\n"}
                                    {"    "}, start_date: 2023-01-20{"\n"}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                </pre>
                            </div>
                        </div>
                        <div id="outline-container-orgacc51cf" className="outline-4">
                            <h4 id="orgacc51cf">
                                <span className="section-number-4">2.2.1.</span> Note: Relationship
                                Instances (Data Level):
                            </h4>
                            <div className="outline-text-4" id="text-2-2-1">
                                <ul className="org-ul">
                                    <li>
                                        These are actual connections between specific entities in your
                                        data.
                                    </li>
                                    <li>
                                            They can be created directly (like when inserting data) or
                                            inferred by rules.
                                        <div className="org-src-container">
                                            <pre className="src src-c">
                                                <span className="org-comment-delimiter">&#47;&#47; </span>
                                                <span className="org-comment">
                                                    Relationship Definition (Schema Level)
                                                </span>
                                                {"\n"}define relationship{" "}
                                                <span className="org-type">employment</span>{" "}
                                                <span className="org-function-name">as</span>
                                                {"\n"}
                                                {"    "}
                                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                                employee: person, employer: company
                                                <span className="org-rainbow-delimiters-depth-1">)</span>,
                                                {"\n"}
                                                {"    "}
                                                <span className="org-variable-name">start_date</span>: date,
                                                {"\n"}
                                                {"    "}
                                                <span className="org-variable-name">salary</span>:{" "}
                                                <span className="org-type">double</span>;{"\n"}
                                                {"\n"}
                                                <span className="org-comment-delimiter">&#47;&#47; </span>
                                                <span className="org-comment">
                                                    Direct Insertion of a Relationship Instance (Data Level)
                                                </span>
                                                {"\n"}insert{"\n"}
                                                {"    "}
                                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                                $john, $techcorp
                                                <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                                <span className="org-type">forms</span>{" "}
                                                <span className="org-function-name">employment</span>{" "}
                                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                                {"\n"}
                                                {"        "}start_date: 2023-01-15,{"\n"}
                                                {"        "}salary: 75000.00{"\n"}
                                                {"    "}
                                                <span className="org-rainbow-delimiters-depth-1">)</span>;
                                                {"\n"}
                                                {"\n"}
                                                <span className="org-comment-delimiter">&#47;&#47; </span>
                                                <span className="org-comment">
                                                    Rule that Infers a Relationship Instance (Data Level)
                                                </span>
                                                {"\n"}define rule infer_management as{"\n"}
                                                {"    "}match{"\n"}
                                                {"        "}$dept isa department{" "}
                                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                                {"\n"}
                                                {"            "}name: $dept_name,{"\n"}
                                                {"            "}head: $manager_name{"\n"}
                                                {"        "}
                                                <span className="org-rainbow-delimiters-depth-1">)</span>,
                                                {"\n"}
                                                {"        "}$employee isa person{" "}
                                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                                {"\n"}
                                                {"            "}name: $manager_name{"\n"}
                                                {"        "}
                                                <span className="org-rainbow-delimiters-depth-1">)</span>,
                                                {"\n"}
                                                {"        "}
                                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                                $employee, $dept
                                                <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                                forms works_in{"\n"}
                                                {"    "}
                                                <span className="org-type">infer</span>{" "}
                                                <span className="org-function-name">derive</span>
                                                {"\n"}
                                                {"        "}
                                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                                $employee, $dept
                                                <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                                <span className="org-type">forms</span>{" "}
                                                <span className="org-variable-name">manages</span>;{"\n"}
                                            </pre>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="outline-container-orgdf7b805" className="outline-2">
                    <h2 id="orgdf7b805">
                        <span className="section-number-2">3.</span> Querying
                    </h2>
                    <div className="outline-text-2" id="text-3"></div>
                    <div id="outline-container-org1569124" className="outline-3">
                        <h3 id="org1569124">
                            <span className="section-number-3">3.1.</span> Basic Query Structure
                        </h3>
                        <div className="outline-text-3" id="text-3-1">
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    match{"\n"}
                                    {"    "}$&lt;variable&gt; isa &lt;entity_type&gt;{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"        "}&lt;attribute_name&gt;: &lt;value_or_variable&gt;
                                    {"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-2">[</span>,
                                    &lt;attribute_name&gt;: &lt;value_or_variable&gt;
                                    <span className="org-rainbow-delimiters-depth-2">]</span>*{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">[</span>,
                                    $&lt;relationship_variable&gt;{" "}
                                    <span className="org-rainbow-delimiters-depth-2">(</span>
                                    {"\n"}
                                    {"        "}&lt;role_name&gt;: $&lt;entity_variable&gt; {"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-3">[</span>,
                                    &lt;role_name&gt;: $&lt;entity_variable&gt;
                                    <span className="org-rainbow-delimiters-depth-3">]</span>*{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-2">)</span> forms
                                    &lt;relationship_type&gt;{" "}
                                    <span className="org-rainbow-delimiters-depth-2">(</span>
                                    {"\n"}
                                    {"        "}&lt;attribute_name&gt;: &lt;value_or_variable&gt;
                                    {"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-3">[</span>,
                                    &lt;attribute_name&gt;: &lt;value_or_variable&gt;
                                    <span className="org-rainbow-delimiters-depth-3">]</span>*{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-2">)</span>
                                    <span className="org-rainbow-delimiters-depth-1">]</span>*{"\n"}
                                    get $&lt;variable&gt;{" "}
                                    <span className="org-rainbow-delimiters-depth-1">[</span>,
                                    $&lt;variable&gt;
                                    <span className="org-rainbow-delimiters-depth-1">]</span>*;{"\n"}
                                </pre>
                            </div>
                            <p>Example (querying a ternary relationship):</p>
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    match{"\n"}
                                    {"    "}$employee isa person{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"        "}name: $name{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"    "}$project isa project{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"        "}name:{" "}
                                    <span className="org-string">&#34;AI Initiative&#34;</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"    "}$assignment{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"        "}employee: $employee,{"\n"}
                                    {"        "}project: $project,{"\n"}
                                    {"        "}department: $dept{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-function-name">project_assignment</span>{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"        "}start_date: $start_date{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"    "}$dept isa department{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"        "}name:{" "}
                                    <span className="org-string">&#34;Tech Department&#34;</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>
                                    {"\n"}get $name, $start_date;{"\n"}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="outline-container-org1fed19b" className="outline-2">
                    <h2 id="org1fed19b">
                        <span className="section-number-2">4.</span> Rules
                    </h2>
                    <div className="outline-text-2" id="text-4">
                        <p>
                            Rules allow us to define new relationships or entities based on
                            existing ones. They are similar to views in relational databases or
                            derived predicates in Datalog.
                        </p>
                    </div>
                    <div id="outline-container-org3c21713" className="outline-3">
                        <h3 id="org3c21713">
                            <span className="section-number-3">4.1.</span> Rule Definition
                        </h3>
                        <div className="outline-text-3" id="text-4-1">
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    define rule &lt;rule_name&gt; as{"\n"}
                                    {"    "}match{"\n"}
                                    {"        "}&lt;pattern1&gt;,{"\n"}
                                    {"        "}&lt;pattern2&gt;,{"\n"}
                                    {"        "}...{"\n"}
                                    {"    "}infer{"\n"}
                                    {"        "}&lt;conclusion&gt;;{"\n"}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div id="outline-container-org1869ba8" className="outline-3">
                        <h3 id="org1869ba8">
                            <span className="section-number-3">4.2.</span> Example: Transitive
                            Closure of Flight Connections
                        </h3>
                        <div className="outline-text-3" id="text-4-2">
                            <p>
                                Let&#39;s consider a scenario where we have direct flights between
                                cities, and we want to find all reachable destinations, including
                                those requiring multiple flights.
                            </p>
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    <span className="org-comment-delimiter">&#47;&#47; </span>
                                    <span className="org-comment">
                                        Base case: A city is reachable if there&#39;s a direct flight
                                    </span>
                                    {"\n"}define rule reachable_direct{" "}
                                    <span className="org-type">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-function-name">match</span>
                                    {"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>from:
                                    $city1, to: $city2
                                    <span className="org-rainbow-delimiters-depth-1">)</span> forms
                                    direct_flight{"\n"}
                                    {"    "}
                                    <span className="org-type">infer</span>
                                    {"\n"}
                                    {"        "}
                                    <span className="org-function-name">materialize</span>{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>from:
                                    $city1, to: $city2
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-variable-name">reachable</span>;{"\n"}
                                    {"\n"}
                                    <span className="org-comment-delimiter">&#47;&#47; </span>
                                    <span className="org-comment">
                                        Recursive case: A city is reachable if we can reach an
                                        intermediate city
                                    </span>
                                    {"\n"}define rule reachable_indirect{" "}
                                    <span className="org-type">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-function-name">match</span>
                                    {"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>from:
                                    $city1, to: $intermediate
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-variable-name">reachable</span>,{"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    <span className="org-variable-name">from</span>: $intermediate,
                                    to: $city2
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-variable-name">reachable</span>,{"\n"}
                                    {"        "}$city1 != $city2{"  "}
                                    <span className="org-comment-delimiter">&#47;&#47; </span>
                                    <span className="org-comment">Prevent trivial cycles</span>
                                    {"\n"}
                                    {"    "}infer{"\n"}
                                    {"        "}materialize{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>from:
                                    $city1, to: $city2
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-variable-name">reachable</span>;{"\n"}
                                </pre>
                            </div>
                            <p>These rules define a new `reachable` relationship:</p>
                            <ol className="org-ol">
                                <li>
                                    The first rule establishes that any direct flight makes the
                                    destination reachable.
                                </li>
                                <li>
                                    The second rule recursively defines that if we can reach an
                                    intermediate city, and from there reach a final destination, then
                                    that final destination is reachable from the starting city.
                                </li>
                            </ol>
                            <p>We can then use this in queries:</p>
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    match{"\n"}
                                    {"    "}$start isa city{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"        "}name: <span className="org-string">&#34;New York&#34;</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"    "}$end isa city{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"        "}name: $destination{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>from:
                                    $start, to: $end
                                    <span className="org-rainbow-delimiters-depth-1">)</span> forms
                                    reachable{"\n"}get $destination;{"\n"}
                                </pre>
                            </div>
                            <p>
                                This query would return all cities reachable from New York, whether
                                by direct flights or any number of connections.
                            </p>
                        </div>
                    </div>
                    <div id="outline-container-org4dd0271" className="outline-3">
                        <h3 id="org4dd0271">
                            <span className="section-number-3">4.3.</span> Using Rules with
                            Attributes
                        </h3>
                        <div className="outline-text-3" id="text-4-3">
                            <p>We can extend this example to include distance:</p>
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    define <span className="org-type">relationship</span>{" "}
                                    <span className="org-function-name">direct_flight</span>{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"    "}from: city,{"\n"}
                                    {"    "}to: city
                                    <span className="org-rainbow-delimiters-depth-1">)</span>
                                    {"\n"}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"    "}distance: <span className="org-type">int</span>
                                    {"\n"}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                    {"\n"}
                                    <span className="org-comment-delimiter">&#47;&#47; </span>
                                    <span className="org-comment">Base case with distance</span>
                                    {"\n"}define rule reachable_direct{" "}
                                    <span className="org-type">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-function-name">match</span>
                                    {"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>from:
                                    $city1, to: $city2
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-function-name">direct_flight</span>{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"            "}distance: $dist{"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-type">infer</span>
                                    {"\n"}
                                    {"        "}
                                    <span className="org-function-name">materialize</span>{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>from:
                                    $city1, to: $city2
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-function-name">reachable</span>{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"            "}distance: $dist{"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                    {"\n"}
                                    <span className="org-comment-delimiter">&#47;&#47; </span>
                                    <span className="org-comment">Recursive case with distance</span>
                                    {"\n"}define rule reachable_indirect{" "}
                                    <span className="org-type">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-function-name">match</span>
                                    {"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>from:
                                    $city1, to: $intermediate
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-function-name">reachable</span>{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"            "}distance: $dist1{"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    <span className="org-variable-name">from</span>: $intermediate,
                                    to: $city2
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-function-name">reachable</span>{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"            "}distance: $dist2{"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"        "}$city1 != $city2{"\n"}
                                    {"    "}infer{"\n"}
                                    {"        "}materialize{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>from:
                                    $city1, to: $city2
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-function-name">reachable</span>{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"            "}distance:{" "}
                                    <span className="org-rainbow-delimiters-depth-2">(</span>$dist1 +
                                    $dist2<span className="org-rainbow-delimiters-depth-2">)</span>
                                    {"\n"}
                                    {"        "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                </pre>
                            </div>
                            <p>
                                Now we can query for reachable cities within a certain distance:
                            </p>
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    match{"\n"}
                                    {"    "}$start isa city{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"        "}name: <span className="org-string">&#34;New York&#34;</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"    "}$end isa city{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"        "}name: $destination{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>from:
                                    $start, to: $end
                                    <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                    <span className="org-type">forms</span>{" "}
                                    <span className="org-function-name">reachable</span>{" "}
                                    <span className="org-rainbow-delimiters-depth-1">(</span>
                                    {"\n"}
                                    {"        "}distance: $dist{"\n"}
                                    {"    "}
                                    <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                    {"    "}$dist &lt; 5000{"\n"}get $destination, $dist;{"\n"}
                                </pre>
                            </div>
                            <p>
                                This query would return all cities reachable from New York within a
                                distance of 5000 units, along with the total distance.
                            </p>
                        </div>
                        <div id="outline-container-org90fafe2" className="outline-4">
                            <h4 id="org90fafe2">
                                <span className="section-number-4">4.3.1.</span> Entity and
                                Relationship Usage in Rules
                            </h4>
                            <div className="outline-text-4" id="text-4-3-1">
                                <p>In the match and infer clauses:</p>
                                <ul className="org-ul">
                                    <li>
                                        {/* <p> */}
                                            For entities, use <code>isa</code>:
                                        {/* </p> */}
                                        <div className="org-src-container">
                                            <pre className="src src-c">
                                                $variable isa entity_type{" "}
                                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                                {"\n"}
                                                {"    "}attribute: $value,{"\n"}
                                                {"    "}
                                                <span className="org-rainbow-delimiters-depth-2">[</span>
                                                attribute: $value
                                                <span className="org-rainbow-delimiters-depth-2">]</span>*
                                                {"\n"}
                                                <span className="org-rainbow-delimiters-depth-1">)</span>
                                                {"\n"}
                                            </pre>
                                        </div>
                                    </li>
                                    <li>
                                        {/* <p> */}
                                            For relationships, use <code>forms</code>:
                                        {/* </p> */}
                                        <div className="org-src-container">
                                            <pre className="src src-c">
                                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                                $variable1, $variable2
                                                <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                                forms relationship_type{"\n"}
                                            </pre>
                                        </div>
                                    </li>
                                </ul>
                                <p>
                                    This distinction clarifies when we&#39;re dealing with entities (isa)
                                    versus relationships (forms) in our rules.
                                </p>
                                <div className="org-src-container">
                                    <pre className="src src-c">
                                        define rule infer_close_collaboration as{"\n"}
                                        {"    "}match{"\n"}
                                        {"        "}$employee1 isa person{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"            "}name: $name1{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                        {"        "}$employee2 isa person{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"            "}name: $name2{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                        {"        "}$project isa project{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"            "}name: $project_name{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        $employee1, $project
                                        <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                        <span className="org-type">forms</span>{" "}
                                        <span className="org-variable-name">assigned_to</span>,{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        $employee2, $project
                                        <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                        <span className="org-type">forms</span>{" "}
                                        <span className="org-variable-name">assigned_to</span>,{"\n"}
                                        {"        "}$employee1 != $employee2{"\n"}
                                        {"    "}infer derive{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        $employee1, $employee2
                                        <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                        <span className="org-type">forms</span>{" "}
                                        <span className="org-function-name">close_collaborator</span>{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"            "}project: $project_name{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="outline-container-org11dbf44" className="outline-2">
                    <h2 id="org11dbf44">
                        <span className="section-number-2">5.</span> Inferred Relationships:
                    </h2>
                    <div className="outline-text-2" id="text-5">
                        <p>
                            By default, the system will determine whether to materialize inferred
                            relationships or compute them on-demand based on internal heuristics.
                            Users can override this behavior by specifying &#39;materialize&#39; or
                            &#39;derive&#39; in the &#39;infer&#39; clause of a rule. Materialized inferences will
                            be explicitly stored and updated when relevant base data changes.
                            Derived inferences will be computed when queried.
                        </p>
                        <div className="org-src-container">
                            <pre className="src src-c">
                                define rule colleagues as{"\n"}
                                {"    "}match{"\n"}
                                {"        "}$emp1{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>employee:
                                $person1, employer: $company
                                <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                <span className="org-type">isa</span>{" "}
                                <span className="org-variable-name">employment</span>,{"\n"}
                                {"        "}$emp2{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>employee:
                                $person2, employer: $company
                                <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                <span className="org-type">isa</span>{" "}
                                <span className="org-variable-name">employment</span>,{"\n"}
                                {"        "}$person1 != $person2{"\n"}
                                {"    "}infer{" "}
                                <span className="org-rainbow-delimiters-depth-1">[</span>materialize
                                | derive<span className="org-rainbow-delimiters-depth-1">]</span>
                                {"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>$person1,
                                $person2<span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                <span className="org-type">isa</span>{" "}
                                <span className="org-variable-name">colleague</span>;{"\n"}
                            </pre>
                        </div>
                    </div>
                </div>
                <div id="outline-container-org454c020" className="outline-2">
                    <h2 id="org454c020">
                        <span className="section-number-2">6.</span> Inference Syntax for Schema
                        Evolution:
                    </h2>
                    <div className="outline-text-2" id="text-6">
                        <p>
                            To add new attributes to existing entities in a rule&#39;s inference, use
                            the &#39;extend&#39; clause followed by the entity variable:
                        </p>
                        <div className="org-src-container">
                            <pre className="src src-c">
                                <span className="org-type">infer</span>{" "}
                                <span className="org-rainbow-delimiters-depth-1">[</span>derive |
                                materialize<span className="org-rainbow-delimiters-depth-1">]</span>
                                {"\n"}
                                {"    "}extend $entity_var{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"        "}attribute_name: attribute_value{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-2">[</span>,
                                attribute_name: attribute_value
                                <span className="org-rainbow-delimiters-depth-2">]</span>*{"\n"}
                                {"    "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                            </pre>
                        </div>
                        <ul className="org-ul">
                            <li>
                                <code>derive</code> in our language means:
                            </li>
                        </ul>
                        <p>
                            The dynamic, on-demand computation of data. This computed data is not
                            stored persistently but generated when needed. It can involve:
                        </p>
                        <ul className="org-ul">
                            <li>Adding new attributes to existing entities</li>
                            <li>
                                Creating entirely new entities or relationships based on existing
                                data
                            </li>
                            <li>Transforming existing data into new forms</li>
                        </ul>
                        <div className="org-src-container">
                            <pre className="src src-c">
                                define rule fahrenheit_to_celsius as{"\n"}
                                {"    "}match{"\n"}
                                {"        "}$temp_f isa temperature{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}value: $fahrenheit,{"\n"}
                                {"            "}unit:{" "}
                                <span className="org-string">&#34;Fahrenheit&#34;</span>
                                {"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>
                                {"\n"}
                                {"    "}compute{"\n"}
                                {"        "}$celsius ={" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>$fahrenheit
                                - 32<span className="org-rainbow-delimiters-depth-1">)</span> * 5 /
                                9{"\n"}
                                {"    "}infer derive{"\n"}
                                {"        "}$temp_f{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}celsius_value: $celsius{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                {"\n"}
                            </pre>
                        </div>
                        <div className="org-src-container">
                            <pre className="src src-c">
                                <span className="org-comment-delimiter">&#47;&#47; </span>
                                <span className="org-comment">
                                    Adding multiple attributes to an existing entity
                                </span>
                                {"\n"}define rule enrich_person_data as{"\n"}
                                {"    "}match{"\n"}
                                {"        "}$person isa person{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}name: $name,{"\n"}
                                {"            "}birth_year: $year{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>
                                {"\n"}
                                {"    "}compute{"\n"}
                                {"        "}$age = current_year
                                <span className="org-rainbow-delimiters-depth-1">()</span> - $year,
                                {"\n"}
                                {"        "}$generation = categorize_generation
                                <span className="org-rainbow-delimiters-depth-1">(</span>$year
                                <span className="org-rainbow-delimiters-depth-1">)</span>
                                {"\n"}
                                {"    "}infer derive{"\n"}
                                {"        "}$person{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}age: $age,{"\n"}
                                {"            "}generation: $generation{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                {"\n"}
                                <span className="org-comment-delimiter">&#47;&#47; </span>
                                <span className="org-comment">Creating a new entity</span>
                                {"\n"}define rule create_celsius_reading as{"\n"}
                                {"    "}match{"\n"}
                                {"        "}$temp_f isa temperature{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}value: $fahrenheit,{"\n"}
                                {"            "}unit:{" "}
                                <span className="org-string">&#34;Fahrenheit&#34;</span>,{"\n"}
                                {"            "}timestamp: $time{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>
                                {"\n"}
                                {"    "}compute{"\n"}
                                {"        "}$celsius ={" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>$fahrenheit
                                - 32<span className="org-rainbow-delimiters-depth-1">)</span> * 5 /
                                9{"\n"}
                                {"    "}infer materialize{"\n"}
                                {"        "}$temp_c isa temperature{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}value: $celsius,{"\n"}
                                {"            "}unit: <span className="org-string">&#34;Celsius&#34;</span>,
                                {"\n"}
                                {"            "}timestamp: $time,{"\n"}
                                {"            "}original_reading: $temp_f{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                            </pre>
                        </div>
                        <p>Inference Syntax for Entity and Relationship Creation/Derivation:</p>
                        <p>To create/derive a new entity in a rule&#39;s inference:</p>
                        <div className="org-src-container">
                            <pre className="src src-c">
                                <span className="org-type">infer</span>{" "}
                                <span className="org-rainbow-delimiters-depth-1">[</span>derive |
                                materialize<span className="org-rainbow-delimiters-depth-1">]</span>
                                {"\n"}
                                {"    "}$new_entity isa entity_type{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"        "}attribute_name: attribute_value{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-2">[</span>,
                                attribute_name: attribute_value
                                <span className="org-rainbow-delimiters-depth-2">]</span>*{"\n"}
                                {"    "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                            </pre>
                        </div>
                        <p>To create/derive a new relationship in a rule&#39;s inference:</p>
                        <div className="org-src-container">
                            <pre className="src src-c">
                                <span className="org-type">infer</span>{" "}
                                <span className="org-rainbow-delimiters-depth-1">[</span>derive |
                                materialize<span className="org-rainbow-delimiters-depth-1">]</span>
                                {"\n"}
                                {"    "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>$role1:
                                $entity1, $role2: $entity2{" "}
                                <span className="org-rainbow-delimiters-depth-2">[</span>, $role3:
                                $entity3<span className="org-rainbow-delimiters-depth-2">]</span>*
                                <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                <span className="org-type">forms</span>{" "}
                                <span className="org-function-name">relationship_type</span>{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"        "}attribute_name: attribute_value{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-2">[</span>,
                                attribute_name: attribute_value
                                <span className="org-rainbow-delimiters-depth-2">]</span>*{"\n"}
                                {"    "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                            </pre>
                        </div>
                        <p>
                            &#39;derive&#39; indicates that the inferred entity or relationship is
                            computed on-demand. &#39;materialize&#39; indicates that the inferred entity
                            or relationship is stored persistently.
                        </p>
                        <div className="org-src-container">
                            <pre className="src src-c">
                                define rule celsius_conversion as{"\n"}
                                {"    "}match{"\n"}
                                {"        "}$temp_f isa temperature{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}value: $fahrenheit,{"\n"}
                                {"            "}unit:{" "}
                                <span className="org-string">&#34;Fahrenheit&#34;</span>
                                {"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>
                                {"\n"}
                                {"    "}compute{"\n"}
                                {"        "}$celsius ={" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>$fahrenheit
                                - 32<span className="org-rainbow-delimiters-depth-1">)</span> * 5 /
                                9{"\n"}
                                {"    "}infer derive{"\n"}
                                {"        "}$temp_f{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}celsius_value: $celsius{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                {"\n"}define rule create_friendship as{"\n"}
                                {"    "}match{"\n"}
                                {"        "}$person1 isa person{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}name: $name1{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                {"        "}$person2 isa person{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}name: $name2{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>actor:
                                $person1, target: $person2
                                <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                <span className="org-type">forms</span>{" "}
                                <span className="org-function-name">social_interaction</span>{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}count: $count{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>
                                {"\n"}
                                {"    "}compute{"\n"}
                                {"        "}$friendship_strength = calculate_strength
                                <span className="org-rainbow-delimiters-depth-1">(</span>$count
                                <span className="org-rainbow-delimiters-depth-1">)</span>
                                {"\n"}
                                {"    "}
                                <span className="org-type">infer</span>{" "}
                                <span className="org-function-name">materialize</span>
                                {"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>$friend1:
                                $person1, $friend2: $person2
                                <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                <span className="org-type">forms</span>{" "}
                                <span className="org-function-name">friendship</span>{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}strength: $friendship_strength,{"\n"}
                                {"            "}formed_at: current_timestamp
                                <span className="org-rainbow-delimiters-depth-2">()</span>
                                {"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                            </pre>
                        </div>
                    </div>
                </div>
                <div id="outline-container-org5086d61" className="outline-2">
                    <h2 id="org5086d61">
                        <span className="section-number-2">7.</span> Joins
                    </h2>
                    <div className="outline-text-2" id="text-7"></div>
                    <div id="outline-container-org4f7ccde" className="outline-3">
                        <h3 id="org4f7ccde">
                            <span className="section-number-3">7.1.</span> Entity and Relationship
                            Definitions
                        </h3>
                        <div className="outline-text-3" id="text-7-1">
                            <p>Let&#39;s start by defining our entities and relationships:</p>
                            <div className="org-src-container">
                                <pre className="src src-c">
                                    define entity person <span className="org-type">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-variable-name">name</span>: string,{"\n"}
                                    {"    "}
                                    <span className="org-variable-name">email</span>: string;{"\n"}
                                    {"\n"}define entity department{" "}
                                    <span className="org-type">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-variable-name">name</span>: string,{"\n"}
                                    {"    "}
                                    <span className="org-variable-name">budget</span>:{" "}
                                    <span className="org-type">double</span>;{"\n"}
                                    {"\n"}define entity project <span className="org-type">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-variable-name">name</span>: string,{"\n"}
                                    {"    "}
                                    <span className="org-variable-name">start_date</span>: date,{"\n"}
                                    {"    "}
                                    <span className="org-variable-name">end_date</span>: date;{"\n"}
                                    {"\n"}define relationship works_in{" "}
                                    <span className="org-type">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-variable-name">employee</span>: person,{"\n"}
                                    {"    "}
                                    <span className="org-variable-name">department</span>: department;
                                    {"\n"}
                                    {"\n"}define relationship manages{" "}
                                    <span className="org-type">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-variable-name">manager</span>: person,{"\n"}
                                    {"    "}
                                    <span className="org-variable-name">department</span>: department;
                                    {"\n"}
                                    {"\n"}define relationship assigned_to{" "}
                                    <span className="org-type">as</span>
                                    {"\n"}
                                    {"    "}
                                    <span className="org-variable-name">employee</span>: person,{"\n"}
                                    {"    "}
                                    <span className="org-variable-name">project</span>: project;{"\n"}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div id="outline-container-orged5bd43" className="outline-3">
                        <h3 id="orged5bd43">
                            <span className="section-number-3">7.2.</span> Complex Query Example
                        </h3>
                        <div className="outline-text-3" id="text-7-2">
                            <p>
                                Here&#39;s a query that demonstrates joining across multiple entities:
                            </p>
                        </div>
                        <div id="outline-container-org522635e" className="outline-4">
                            <h4 id="org522635e">
                                <span className="section-number-4">7.2.1.</span> Query Description
                            </h4>
                            <div className="outline-text-4" id="text-7-2-1">
                                <p>
                                    Find all managers who work in departments with a budget over 1
                                    million and are also assigned to projects ending in 2023, along
                                    with their department names and project names.
                                </p>
                            </div>
                        </div>
                        <div id="outline-container-org3f6fa2c" className="outline-4">
                            <h4 id="org3f6fa2c">
                                <span className="section-number-4">7.2.2.</span> Query Syntax
                            </h4>
                            <div className="outline-text-4" id="text-7-2-2">
                                <div className="org-src-container">
                                    <pre className="src src-c">
                                        match{"\n"}
                                        {"    "}$manager isa person{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"        "}name: $manager_name,{"\n"}
                                        {"        "}email: $manager_email{"\n"}
                                        {"    "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                        {"    "}$department isa department{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"        "}name: $dept_name,{"\n"}
                                        {"        "}budget: $budget{"\n"}
                                        {"    "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                        {"    "}$project isa project{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"        "}name: $project_name,{"\n"}
                                        {"        "}end_date: $end_date{"\n"}
                                        {"    "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                        {"    "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        manager: $manager, department: $department
                                        <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                        <span className="org-type">forms</span>{" "}
                                        <span className="org-variable-name">manages</span>,{"\n"}
                                        {"    "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        <span className="org-variable-name">employee</span>: $manager,
                                        department: $department
                                        <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                        <span className="org-type">forms</span>{" "}
                                        <span className="org-variable-name">works_in</span>,{"\n"}
                                        {"    "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        <span className="org-variable-name">employee</span>: $manager,
                                        project: $project
                                        <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                        <span className="org-type">forms</span>{" "}
                                        <span className="org-variable-name">assigned_to</span>,{"\n"}
                                        {"    "}$budget &gt; 1000000,{"\n"}
                                        {"    "}$end_date &gt;= date
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        <span className="org-string">&#34;2023-01-01&#34;</span>
                                        <span className="org-rainbow-delimiters-depth-1">)</span> and
                                        $end_date &lt;= date
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        <span className="org-string">&#34;2023-12-31&#34;</span>
                                        <span className="org-rainbow-delimiters-depth-1">)</span>
                                        {"\n"}get $manager_name, $manager_email, $dept_name,
                                        $project_name;{"\n"}
                                    </pre>
                                </div>
                            </div>
                        </div>
                        <div id="outline-container-org14bd059" className="outline-4">
                            <h4 id="org14bd059">
                                <span className="section-number-4">7.2.3.</span> Rule Definition
                                Using the Complex Query
                            </h4>
                            <div className="outline-text-4" id="text-7-2-3">
                                <p>Here&#39;s how you might use this query in a rule:</p>
                                <div className="org-src-container">
                                    <pre className="src src-c">
                                        define rule find_high_budget_managers_on_2023_projects as{"\n"}
                                        {"    "}match{"\n"}
                                        {"        "}$manager isa person{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"            "}name: $manager_name,{"\n"}
                                        {"            "}email: $manager_email{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                        {"        "}$department isa department{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"            "}name: $dept_name,{"\n"}
                                        {"            "}budget: $budget{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                        {"        "}$project isa project{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"            "}name: $project_name,{"\n"}
                                        {"            "}end_date: $end_date{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        manager: $manager, department: $department
                                        <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                        <span className="org-type">forms</span>{" "}
                                        <span className="org-variable-name">manages</span>,{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        <span className="org-variable-name">employee</span>: $manager,
                                        department: $department
                                        <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                        <span className="org-type">forms</span>{" "}
                                        <span className="org-variable-name">works_in</span>,{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        <span className="org-variable-name">employee</span>: $manager,
                                        project: $project
                                        <span className="org-rainbow-delimiters-depth-1">)</span>{" "}
                                        <span className="org-type">forms</span>{" "}
                                        <span className="org-variable-name">assigned_to</span>,{"\n"}
                                        {"        "}$budget &gt; 1000000,{"\n"}
                                        {"        "}$end_date &gt;= date
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        <span className="org-string">&#34;2023-01-01&#34;</span>
                                        <span className="org-rainbow-delimiters-depth-1">)</span> and
                                        $end_date &lt;= date
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        <span className="org-string">&#34;2023-12-31&#34;</span>
                                        <span className="org-rainbow-delimiters-depth-1">)</span>
                                        {"\n"}
                                        {"    "}infer derive{"\n"}
                                        {"        "}$result isa manager_project_summary{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"            "}manager_name: $manager_name,{"\n"}
                                        {"            "}manager_email: $manager_email,{"\n"}
                                        {"            "}department_name: $dept_name,{"\n"}
                                        {"            "}project_name: $project_name{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                    </pre>
                                </div>
                                <p>
                                    This rule creates derived <code>manager_project_summary</code>{" "}
                                    entities based on the complex join across person, department, and
                                    project entities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="outline-container-org74c4a9c" className="outline-2">
                    <h2 id="org74c4a9c">
                        <span className="section-number-2">8.</span> Query vs Rule
                    </h2>
                    <div className="outline-text-2" id="text-8">
                        <p>
                            In our knowledge graph query language, there are two primary
                            approaches to working with data:
                        </p>
                        <ol className="org-ol">
                            <li>Direct Querying (Match/Get)</li>
                            <li>Rule-Based Inference (Rule/Match/Infer)</li>
                        </ol>
                        <p>
                            This document explains the differences, use cases, and examples of
                            each approach.
                        </p>
                    </div>
                    <div id="outline-container-org9b2031d" className="outline-3">
                        <h3 id="org9b2031d">
                            <span className="section-number-3">8.1.</span> Match/Get (Direct
                            Querying)
                        </h3>
                        <div className="outline-text-3" id="text-8-1"></div>
                        <div id="outline-container-org47f8f3f" className="outline-4">
                            <h4 id="org47f8f3f">
                                <span className="section-number-4">8.1.1.</span> Syntax
                            </h4>
                            <div className="outline-text-4" id="text-8-1-1">
                                <pre className="example">
                                    match{"\n"}
                                    {"    "}&#47;&#47; pattern matching{"\n"}get{"\n"}
                                    {"    "}&#47;&#47; variables to retrieve{"\n"}
                                </pre>
                            </div>
                        </div>
                        <div id="outline-container-org9b0e0a4" className="outline-4">
                            <h4 id="org9b0e0a4">
                                <span className="section-number-4">8.1.2.</span> Purpose
                            </h4>
                            <div className="outline-text-4" id="text-8-1-2">
                                <ul className="org-ul">
                                    <li>
                                        Used for direct, one-time queries to retrieve existing data.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="outline-container-org211609c" className="outline-4">
                            <h4 id="org211609c">
                                <span className="section-number-4">8.1.3.</span> Characteristics
                            </h4>
                            <div className="outline-text-4" id="text-8-1-3">
                                <ul className="org-ul">
                                    <li>Executed immediately when you run the query.</li>
                                    <li>
                                        Results are returned to the user but not stored in the database.
                                    </li>
                                    <li>Typically used for simpler, direct data retrieval.</li>
                                    <li>Each query is standalone.</li>
                                </ul>
                            </div>
                        </div>
                        <div id="outline-container-org1513d1a" className="outline-4">
                            <h4 id="org1513d1a">
                                <span className="section-number-4">8.1.4.</span> When to Use
                            </h4>
                            <div className="outline-text-4" id="text-8-1-4">
                                <ol className="org-ol">
                                    <li>For ad-hoc queries where you need immediate results.</li>
                                    <li>When exploring data or testing hypotheses.</li>
                                    <li>
                                        For simple data retrieval that doesn&#39;t require complex
                                        inference.
                                    </li>
                                    <li>
                                        When you don&#39;t need to persist the results or reuse the query
                                        logic.
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div id="outline-container-orgae0bd18" className="outline-4">
                            <h4 id="orgae0bd18">
                                <span className="section-number-4">8.1.5.</span> Example
                            </h4>
                            <div className="outline-text-4" id="text-8-1-5">
                                <div className="org-src-container">
                                    <pre className="src src-c">
                                        match{"\n"}
                                        {"    "}$person isa person{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"        "}name: $name,{"\n"}
                                        {"        "}age: $age{"\n"}
                                        {"    "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                        {"    "}$age &gt; 30{"\n"}get $name, $age;{"\n"}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="outline-container-org41fc0e6" className="outline-3">
                        <h3 id="org41fc0e6">
                            <span className="section-number-3">8.2.</span> Rule/Match/Infer
                            (Rule-Based Inference)
                        </h3>
                        <div className="outline-text-3" id="text-8-2"></div>
                        <div id="outline-container-org415144d" className="outline-4">
                            <h4 id="org415144d">
                                <span className="section-number-4">8.2.1.</span> Syntax
                            </h4>
                            <div className="outline-text-4" id="text-8-2-1">
                                <div className="org-src-container">
                                    <pre className="src src-c">
                                        define rule rule_name as{"\n"}
                                        {"    "}
                                        <span className="org-type">match</span>
                                        {"\n"}
                                        {"        "}
                                        <span className="org-comment-delimiter">&#47;&#47; </span>
                                        <span className="org-comment">pattern matching</span>
                                        {"\n"}
                                        {"    "}
                                        <span className="org-variable-name">infer</span>{" "}
                                        <span className="org-rainbow-delimiters-depth-1">[</span>derive
                                        | materialize
                                        <span className="org-rainbow-delimiters-depth-1">]</span>
                                        {"\n"}
                                        {"        "}
                                        <span className="org-comment-delimiter">&#47;&#47; </span>
                                        <span className="org-comment">new data to infer</span>
                                        {"\n"}
                                    </pre>
                                </div>
                            </div>
                        </div>
                        <div id="outline-container-org498ccae" className="outline-4">
                            <h4 id="org498ccae">
                                <span className="section-number-4">8.2.2.</span> Purpose
                            </h4>
                            <div className="outline-text-4" id="text-8-2-2">
                                <ul className="org-ul">
                                    <li>
                                        Used to define reusable patterns for inferring new data or
                                        relationships.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="outline-container-org217438f" className="outline-4">
                            <h4 id="org217438f">
                                <span className="section-number-4">8.2.3.</span> Characteristics
                            </h4>
                            <div className="outline-text-4" id="text-8-2-3">
                                <ul className="org-ul">
                                    <li>
                                        Defined once, then automatically applied whenever relevant data
                                        changes or when explicitly invoked.
                                    </li>
                                    <li>
                                        Results can be derived on-demand (with &#39;derive&#39;) or stored
                                        persistently (with &#39;materialize&#39;).
                                    </li>
                                    <li>
                                        Can encapsulate more complex logic and multi-step inferences.
                                    </li>
                                    <li>
                                        Rules can be reused across different contexts and combined with
                                        other rules.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="outline-container-org0795f49" className="outline-4">
                            <h4 id="org0795f49">
                                <span className="section-number-4">8.2.4.</span> When to Use
                            </h4>
                            <div className="outline-text-4" id="text-8-2-4">
                                <ol className="org-ol">
                                    <li>
                                        For complex inferences that you want to automate and reuse.
                                    </li>
                                    <li>When you need to derive new data based on existing data.</li>
                                    <li>
                                        For maintaining derived properties that should be updated
                                        whenever base data changes.
                                    </li>
                                    <li>
                                        When implementing business logic that should be consistently
                                        applied across your database.
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div id="outline-container-org40541b7" className="outline-4">
                            <h4 id="org40541b7">
                                <span className="section-number-4">8.2.5.</span> Example
                            </h4>
                            <div className="outline-text-4" id="text-8-2-5">
                                <div className="org-src-container">
                                    <pre className="src src-c">
                                        define rule categorize_senior_employees as{"\n"}
                                        {"    "}match{"\n"}
                                        {"        "}$employee isa person{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"            "}name: $name,{"\n"}
                                        {"            "}hire_date: $hire_date{"\n"}
                                        {"        "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                        {"        "}$years_employed = years_between
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        $hire_date, current_date
                                        <span className="org-rainbow-delimiters-depth-2">()</span>
                                        <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                        {"        "}$years_employed &gt;= 10{"\n"}
                                        {"    "}infer derive{"\n"}
                                        {"        "}$employee{" "}
                                        <span className="org-rainbow-delimiters-depth-1">(</span>
                                        {"\n"}
                                        {"            "}employee_category:{" "}
                                        <span className="org-string">&#34;Senior&#34;</span>
                                        {"\n"}
                                        {"       "}
                                        <span className="org-rainbow-delimiters-depth-1">)</span>;{"\n"}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="outline-container-org417738e" className="outline-2">
                    <h2 id="org417738e">
                        <span className="section-number-2">9.</span> Key Differences
                    </h2>
                    <div className="outline-text-2" id="text-9">
                        <table
                            border={2}
                            cellSpacing={0}
                            cellPadding={6}
                            rules="groups"
                        // frame="hsides"
                        >
                            <colgroup>
                                <col className="org-left" />
                                <col className="org-left" />
                                <col className="org-left" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col" className="org-left">
                                        Aspect
                                    </th>
                                    <th scope="col" className="org-left">
                                        Match/Get (Direct Querying)
                                    </th>
                                    <th scope="col" className="org-left">
                                        Rule/Match/Infer (Rule-Based Inference)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="org-left">Execution</td>
                                    <td className="org-left">Immediate</td>
                                    <td className="org-left">
                                        Defined once, applied automatically or manually
                                    </td>
                                </tr>
                                <tr>
                                    <td className="org-left">Result Persistence</td>
                                    <td className="org-left">Not stored</td>
                                    <td className="org-left">Can be derived or materialized</td>
                                </tr>
                                <tr>
                                    <td className="org-left">Complexity</td>
                                    <td className="org-left">Typically simpler</td>
                                    <td className="org-left">Can handle more complex logic</td>
                                </tr>
                                <tr>
                                    <td className="org-left">Reusability</td>
                                    <td className="org-left">Standalone queries</td>
                                    <td className="org-left">Reusable across contexts</td>
                                </tr>
                                <tr>
                                    <td className="org-left">Use Case</td>
                                    <td className="org-left">Ad-hoc data retrieval and analysis</td>
                                    <td className="org-left">
                                        Implementing persistent business logic
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="outline-container-orgc67ad05" className="outline-2">
                    <h2 id="orgc67ad05">
                        <span className="section-number-2">10.</span> Custom or System Procedure
                        (cos<sub>proc</sub>)
                    </h2>
                    <div className="outline-text-2" id="text-10">
                        <p>
                            The cos<sub>proc</sub> keyword is used to invoke built-in or
                            user-defined functions within rules. These functions can perform
                            complex operations, including inferring relationships and modifying
                            the knowledge graph.
                        </p>
                        <p>Syntax: Either all unnamed:</p>
                        <pre className="example">
                            cos_proc function_name(arg1, arg2, arg3, ...){"\n"}
                        </pre>
                        <p>Or all named:</p>
                        <pre className="example">
                            cos_proc function_name(param1: value1, param2: value2, param3: value3,
                            ...){"\n"}
                        </pre>
                        <ul className="org-ul">
                            <li>
                                function<sub>name</sub>: Name of the built-in or user-defined
                                function
                            </li>
                            <li>In the unnamed style, the order of arguments is significant</li>
                            <li>In the named style, the order of arguments is not significant</li>
                        </ul>
                        <p>
                            Mixing named and unnamed parameters in the same function call is not
                            allowed.
                        </p>
                        <div className="org-src-container">
                            <pre className="src src-c">
                                define rule infer_collaboration as{"\n"}
                                {"    "}match{"\n"}
                                {"        "}$emp1 isa employee,{"\n"}
                                {"        "}$emp2 isa employee,{"\n"}
                                {"        "}$emp1 != $emp2{"\n"}
                                {"    "}cos_proc calculate_collaboration
                                <span className="org-rainbow-delimiters-depth-1">(</span>$emp1,
                                $emp2, global.projects,{" "}
                                <span className="org-string">&#34;last_6_months&#34;</span>, 0.7
                                <span className="org-rainbow-delimiters-depth-1">)</span>
                                {"\n"}
                            </pre>
                        </div>
                        <div className="org-src-container">
                            <pre className="src src-c">
                                define rule infer_proximity as{"\n"}
                                {"    "}match{"\n"}
                                {"        "}$person1 isa person{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}location: $loc1{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                {"        "}$person2 isa person{" "}
                                <span className="org-rainbow-delimiters-depth-1">(</span>
                                {"\n"}
                                {"            "}location: $loc2{"\n"}
                                {"        "}
                                <span className="org-rainbow-delimiters-depth-1">)</span>,{"\n"}
                                {"        "}$person1 != $person2{"\n"}
                                {"    "}cos_proc proximity_check
                                <span className="org-rainbow-delimiters-depth-1">(</span>person1:
                                $person1, person2: $person2, loc1: $loc1, {"\n"}
                                {"                             "}loc2: $loc2, max_distance: 5.0
                                <span className="org-rainbow-delimiters-depth-1">)</span>
                                {"\n"}
                            </pre>
                        </div>
                    </div>
                </div>
                <div id="outline-container-orgbfc3fde" className="outline-2">
                    <h2 id="orgbfc3fde">
                        <span className="section-number-2">11.</span> Data Types
                    </h2>
                    <div className="outline-text-2" id="text-11">
                        <ul className="org-ul">
                            <li>
                                <code>string</code>: Text data
                            </li>
                            <li>
                                <code>int</code>: Integer numbers
                            </li>
                            <li>
                                <code>double</code>: Floating-point numbers
                            </li>
                            <li>
                                <code>date</code>: Date in the format YYYY-MM-DD
                            </li>
                            <li>
                                <code>boolean</code>: True or false values
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="outline-container-org30c022f" className="outline-2">
                    <h2 id="org30c022f">
                        <span className="section-number-2">12.</span> Comments
                    </h2>
                    <div className="outline-text-2" id="text-12">
                        <p>
                            Single-line comments start with <code>&#47;&#47;</code>:
                        </p>
                        <pre className="example">&#47;&#47; This is a single-line comment{'\n'}</pre>
                        <p>
                            Multi-line comments are enclosed in <code>&#47;*</code> and{" "}
                            <code>*/</code>:
                        </p>
                        <pre className="example">
                            &#47;*{"\n"}This is a{"\n"}multi-line comment{"\n"}*/{"\n"}
                        </pre>
                    </div>
                </div>
            </div>

        </>
    );
}