
export default function DocsPage() {
    return (
        <div className=" md:w-full overflow-x-scroll">
            <div id="content" className="content">
                <h1 className="title">Vector Database REST API Specification</h1>
                <div className="flex flex-row-reverse w-full">
                    <div id="table-of-contents" role="doc-toc" className="hidden lg:block w-[350px] min-w-[350px] ml-4 ">
                        <h2>Table of Contents</h2>
                        <div id="text-table-of-contents" role="doc-toc">
                            <ul>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orgd783af4">1. Overview</a>
                                </li>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org09358a3">2. Base URL and Authentication</a>
                                    <ul className="pl-[20px]">
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org50a34b4">2.1. Base Configuration</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org5b2c62a">2.2. Authentication</a>
                                            <ul className="pl-[20px]">
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org8534f64">2.2.1. Login Endpoint</a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org7208848">2.2.2. Using Authentication</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org47e0401">3. Collections API</a>
                                    <ul className="pl-[20px]">
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org846db96">3.1. Collection Management</a>
                                            <ul className="pl-[20px]">
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orgee70a11">3.1.1. Create Collection</a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org91c51ff">
                                                        3.1.2. Collection Configuration Fields
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orga77ce41">3.1.3. Get Collection</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org13f2380">4. Transaction API</a>
                                    <ul className="pl-[20px]">
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org365c951">4.1. Transaction Overview</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org317a4f7">4.2. Transaction Lifecycle</a>
                                            <ul className="pl-[20px]">
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orga90d6b5">4.2.1. Transaction Creation</a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org33c1554">4.2.2. Transaction Operations</a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org8bed3d5">4.2.3. Transaction Completion</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#orge8a071c">4.3. Transaction Field References</a>
                                            <ul className="pl-[20px]">
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orgd148d49">
                                                        4.3.1. Transaction Operation Fields
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orgee61788">
                                                        4.3.2. Vector Fields within Transactions
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org1b1364c">
                                                4.4. Transaction Guarantees and Constraints
                                            </a>
                                            <ul className="pl-[20px]">
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org5633cf9">4.4.1. ACID Properties</a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org3583bd3">4.4.2. Operational Constraints</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orgcf75aa6">5. Vector Search API</a>
                                    <ul className="pl-[20px]">
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#orga99cd3e">5.1. Search Operations</a>
                                            <ul className="pl-[20px]">
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org12c55e5">5.1.1. Basic Vector Search</a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org6746dc5">5.1.2. Search Parameters</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org637dc40">6. Index Management</a>
                                    <ul className="pl-[20px]">
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#orgfeee2d2">6.1. Index Operations</a>
                                            <ul className="pl-[20px]">
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orgb5049c6">6.1.1. Create Index</a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org408c950">6.1.2. Index Configuration Fields</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orgdee8de1">7. Error Handling</a>
                                    <ul className="pl-[20px]">
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org30abdd4">7.1. Error Response Format</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org8774ce3">7.2. Common Error Codes</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orgee95a5e">8. Best Practices</a>
                                    <ul className="pl-[20px]">
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org0a91892">8.1. Transaction Management</a>
                                            <ul className="pl-[20px]">
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org7cf6681">8.1.1. Transaction Lifecycle</a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orga7125df">8.1.2. Error Handling</a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orge2fa4da">8.1.3. Performance Optimization</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org4ad7614">8.2. Vector Operations</a>
                                            <ul className="pl-[20px]">
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org9c10853">8.2.1. Vector Normalization</a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orga51fcb2">8.2.2. Search Optimization</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org35e0884">9. Implementation Notes</a>
                                    <ul className="pl-[20px]">
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org9e5d15c">9.1. Transaction Implementation</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#orgf1e75e1">9.2. Vector Storage</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org1fed574">9.3. Performance Considerations</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#orgdf3155e">10. Sample Workflows</a>
                                    <ul className="pl-[20px]">
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#orgc73902b">10.1. Batch Vector Insertion</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org5110e09">10.2. Search Workflow</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org4abf743">11. API Version and Compatibility</a>
                                </li>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org71517c6">12. Security Considerations</a>
                                    <ul className="pl-[20px]">
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#orgbfd4467">12.1. Authentication</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org7262ac1">12.2. Data Protection</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org73a32e3">12.3. Access Control</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="text-blue-500 hover:text-blue-700 underline" href="#org1edcd49">13. Monitoring and Diagnostics</a>
                                    <ul className="pl-[20px]">
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#org149429f">13.1. Available Metrics</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-500 hover:text-blue-700 underline" href="#orgb42f364">13.2. Health Checks</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="overflow-auto w-full ">
                        <div id="outline-container-orgd783af4" className="outline-2">
                            <h2 id="orgd783af4">
                                <span className="section-number-2">1.</span> Overview
                            </h2>
                            <div className="outline-text-2" id="text-1">
                                <p>
                                    This document describes the complete REST API specification for the
                                    vector database service, supporting high-dimensional vector storage,
                                    retrieval, and similarity search with transactional guarantees.
                                </p>
                            </div>
                        </div>
                        <div id="outline-container-org09358a3" className="outline-2">
                            <h2 id="org09358a3">
                                <span className="section-number-2">2.</span> Base URL and Authentication
                            </h2>
                            <div className="outline-text-2" id="text-2"></div>
                            <div id="outline-container-org50a34b4" className="outline-3">
                                <h3 id="org50a34b4">
                                    <span className="section-number-3">2.1.</span> Base Configuration
                                </h3>
                                <div className="outline-text-3" id="text-2-1">
                                    <p>
                                        The base URL for all API endpoints is:{" "}
                                        <code>https://host:port/vectordb</code>
                                    </p>
                                </div>
                            </div>
                            <div id="outline-container-org5b2c62a" className="outline-3">
                                <h3 id="org5b2c62a">
                                    <span className="section-number-3">2.2.</span> Authentication
                                </h3>
                                <div className="outline-text-3" id="text-2-2">
                                    <p>
                                        All requests require Bearer token authentication obtained through
                                        the login endpoint.
                                    </p>
                                </div>
                                <div id="outline-container-org8534f64" className="outline-4">
                                    <h4 id="org8534f64">
                                        <span className="section-number-4">2.2.1.</span> Login Endpoint
                                    </h4>
                                    <div className="outline-text-4" id="text-2-2-1">
                                        <p>Obtain authentication token for subsequent requests.</p>
                                        <ul className="org-ul">
                                            <li>Method: POST</li>
                                            <li>
                                                Path: <code>/auth/login</code>
                                            </li>
                                            <li>Request Body:</li>
                                        </ul>
                                        <div className="org-src-container">
                                            <pre className="src src-json">
                                                {"{"}
                                                {"\n"}
                                                {"    "}&quot;username&quot;: &quot;admin&quot;,{"\n"}
                                                {"    "}&quot;password&quot;: &quot;admin&quot;,{"\n"}
                                                {"    "}&quot;pretty_print&quot;: false{"\n"}
                                                {"}"}
                                                {"\n"}
                                            </pre>
                                        </div>
                                        <ul className="org-ul">
                                            <li>Response: JWT token as plain text</li>
                                        </ul>
                                        <div className="org-src-container">
                                            <pre className="src src-text">eyJhbGciOiJIUzI1...{"\n"}</pre>
                                        </div>
                                    </div>
                                </div>
                                <div id="outline-container-org7208848" className="outline-4">
                                    <h4 id="org7208848">
                                        <span className="section-number-4">2.2.2.</span> Using
                                        Authentication
                                    </h4>
                                    <div className="outline-text-4" id="text-2-2-2">
                                        <p>
                                            For all subsequent requests, include the Bearer token in the
                                            Authorization header:
                                        </p>
                                        <div className="org-src-container">
                                            <pre className="src src-text">
                                                Authorization: Bearer eyJhbGciOiJIUzI1...{"\n"}Content-Type:
                                                application/json{"\n"}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="outline-container-org47e0401" className="outline-2">
                            <h2 id="org47e0401">
                                <span className="section-number-2">3.</span> Collections API
                            </h2>
                            <div className="outline-text-2" id="text-3"></div>
                            <div id="outline-container-org846db96" className="outline-3">
                                <h3 id="org846db96">
                                    <span className="section-number-3">3.1.</span> Collection Management
                                </h3>
                                <div className="outline-text-3" id="text-3-1">
                                    <p>
                                        Collections are the primary containers for vectors and their
                                        metadata.
                                    </p>
                                </div>
                                <div id="outline-container-orgee70a11" className="outline-4">
                                    <h4 id="orgee70a11">
                                        <span className="section-number-4">3.1.1.</span> Create Collection
                                    </h4>
                                    <div className="outline-text-4" id="text-3-1-1">
                                        <p>Create a new vector collection with specified configuration.</p>
                                        <ul className="org-ul">
                                            <li>Method: POST</li>
                                            <li>
                                                Path: <code>/collections</code>
                                            </li>
                                            <li>Request Body:</li>
                                        </ul>
                                        <div className="org-src-container">
                                            <pre className="src src-json">
                                                {"{"}
                                                {"\n"}
                                                {"    "}&quot;name&quot;: &quot;testdb&quot;,{"\n"}
                                                {"    "}&quot;description&quot;: &quot;Test collection for vector database&quot;,
                                                {"\n"}
                                                {"    "}&quot;dense_vector&quot;: {"{"}
                                                {"\n"}
                                                {"        "}&quot;enabled&quot;: true,{"\n"}
                                                {"        "}&quot;auto_create_index&quot;: false,{"\n"}
                                                {"        "}&quot;dimension&quot;: 1024{"\n"}
                                                {"    "}
                                                {"}"},{"\n"}
                                                {"    "}&quot;sparse_vector&quot;: {"{"}
                                                {"\n"}
                                                {"        "}&quot;enabled&quot;: false,{"\n"}
                                                {"        "}&quot;auto_create_index&quot;: false{"\n"}
                                                {"    "}
                                                {"}"},{"\n"}
                                                {"    "}&quot;metadata_schema&quot;: null,{"\n"}
                                                {"    "}&quot;config&quot;: {"{"}
                                                {"\n"}
                                                {"        "}&quot;max_vectors&quot;: null,{"\n"}
                                                {"        "}&quot;replication_factor&quot;: null{"\n"}
                                                {"    "}
                                                {"}"}
                                                {"\n"}
                                                {"}"}
                                                {"\n"}
                                            </pre>
                                        </div>
                                        <ul className="org-ul">
                                            <li>Response:</li>
                                        </ul>
                                        <div className="org-src-container">
                                            <pre className="src src-json">
                                                {"{"}
                                                {"\n"}
                                                {"    "}&quot;id&quot;: &quot;col_123&quot;,{"\n"}
                                                {"    "}&quot;name&quot;: &quot;testdb&quot;,{"\n"}
                                                {"    "}&quot;description&quot;: &quot;Test collection for vector database&quot;,
                                                {"\n"}
                                                {"    "}&quot;created_at&quot;: &quot;2024-11-23T12:00:00Z&quot;{"\n"}
                                                {"}"}
                                                {"\n"}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div id="outline-container-org91c51ff" className="outline-4">
                                    <h4 id="org91c51ff">
                                        <span className="section-number-4">3.1.2.</span> Collection
                                        Configuration Fields
                                    </h4>
                                    <div className="outline-text-4 overflow-auto" id="text-3-1-2">
                                        <table
                                            id="orgac3a132"
                                            border={2}
                                            cellSpacing={0}
                                            cellPadding={6}
                                            rules="groups"

                                        >
                                            <caption className="t-above">
                                                <span className="table-number">Table 1:</span> Collection
                                                Creation Parameters
                                            </caption>
                                            <colgroup>
                                                <col className="org-left" />
                                                <col className="org-left" />
                                                <col className="org-left" />
                                                <col className="org-left" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="org-left">
                                                        Field
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Type
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Required
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Description
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>name</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">
                                                        Unique identifier for the collection
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>description</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">Human-readable description</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>dense_vector.enabled</code>
                                                    </td>
                                                    <td className="org-left">boolean</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">
                                                        Enables dense vector storage and operations
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>dense_vector.auto_create_index</code>
                                                    </td>
                                                    <td className="org-left">boolean</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">
                                                        Creates search index automatically on vector insertion
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>dense_vector.dimension</code>
                                                    </td>
                                                    <td className="org-left">integer</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">
                                                        Dimension size for all vectors in collection
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>sparse_vector.enabled</code>
                                                    </td>
                                                    <td className="org-left">boolean</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">
                                                        Enables sparse vector storage and operations
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>sparse_vector.auto_create_index</code>
                                                    </td>
                                                    <td className="org-left">boolean</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">
                                                        Creates sparse vector index automatically
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>metadata_schema</code>
                                                    </td>
                                                    <td className="org-left">object</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">
                                                        JSON schema for vector metadata validation
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>config.max_vectors</code>
                                                    </td>
                                                    <td className="org-left">integer</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">
                                                        Maximum number of vectors allowed
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>config.replication_factor</code>
                                                    </td>
                                                    <td className="org-left">integer</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">
                                                        Number of replicas for high availability
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="outline-container-orga77ce41" className="outline-4">
                                    <h4 id="orga77ce41">
                                        <span className="section-number-4">3.1.3.</span> Get Collection
                                    </h4>
                                    <div className="outline-text-4" id="text-3-1-3">
                                        <p>Retrieve collection details and configuration.</p>
                                        <ul className="org-ul">
                                            <li>Method: GET</li>
                                            <li>
                                                Path:{" "}
                                                <code>
                                                    /collections/{"{"}collection_id{"}"}
                                                </code>
                                            </li>
                                            <li>Response: Same format as Create Collection response</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="outline-container-org13f2380" className="outline-2">
                            <h2 id="org13f2380">
                                <span className="section-number-2">4.</span> Transaction API
                            </h2>
                            <div className="outline-text-2" id="text-4"></div>
                            <div id="outline-container-org365c951" className="outline-3">
                                <h3 id="org365c951">
                                    <span className="section-number-3">4.1.</span> Transaction Overview
                                </h3>
                                <div className="outline-text-3" id="text-4-1">
                                    <p>
                                        The API implements transactions as resources, providing ACID
                                        guarantees for vector operations. This approach allows complex
                                        vector operations to be performed atomically across multiple
                                        requests while maintaining consistency.
                                    </p>
                                </div>
                            </div>
                            <div id="outline-container-org317a4f7" className="outline-3">
                                <h3 id="org317a4f7">
                                    <span className="section-number-3">4.2.</span> Transaction Lifecycle
                                </h3>
                                <div className="outline-text-3" id="text-4-2"></div>
                                <div id="outline-container-orga90d6b5" className="outline-4">
                                    <h4 id="orga90d6b5">
                                        <span className="section-number-4">4.2.1.</span> 1. Transaction
                                        Creation
                                    </h4>
                                    <div className="outline-text-4" id="text-4-2-1">
                                        <p>Initiates a new transaction context.</p>
                                        <ul className="org-ul">
                                            <li>Method: POST</li>
                                            <li>
                                                Path:{" "}
                                                <code>
                                                    /collections/{"{"}collection_name{"}"}/transactions
                                                </code>
                                            </li>
                                            <li>Response:</li>
                                        </ul>
                                        <div className="org-src-container">
                                            <pre className="src src-json">
                                                {"{"}
                                                {"\n"}
                                                {"    "}&quot;transaction_id&quot;: &quot;txn_abc123&quot;,{"\n"}
                                                {"    "}&quot;created_at&quot;: &quot;2024-11-23T12:00:00Z&quot;,{"\n"}
                                                {"    "}&quot;status&quot;: &quot;active&quot;,{"\n"}
                                                {"    "}&quot;timeout_at&quot;: &quot;2024-11-23T12:10:00Z&quot;{"\n"}
                                                {"}"}
                                                {"\n"}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div id="outline-container-org33c1554" className="outline-4">
                                    <h4 id="org33c1554">
                                        <span className="section-number-4">4.2.2.</span> 2. Transaction
                                        Operations
                                    </h4>
                                    <div className="outline-text-4" id="text-4-2-2">
                                        <p>
                                            Multiple vector operations can be performed within the transaction
                                            context.
                                        </p>
                                    </div>
                                    <ol className="org-ol">
                                        <li>
                                            <a id="org2961ac4" />
                                            Vector Insertion
                                            <br />
                                            <div className="outline-text-5" id="text-4-2-2-1">
                                                <ul className="org-ul">
                                                    <li>Method: POST</li>
                                                    <li>
                                                        Path:
                                                        <code>
                                                            /collections/{"{"}collection_name{"}"}/transactions/{"{"}
                                                            transaction_id{"}"}/vectors
                                                        </code>
                                                    </li>
                                                    <li>Request Body:</li>
                                                </ul>
                                                <div className="org-src-container">
                                                    <pre className="src src-json">
                                                        {"{"}
                                                        {"\n"}
                                                        {"    "}&quot;id&quot;: &quot;vec1&quot;,{"\n"}
                                                        {"    "}&quot;values&quot;: [0.1, 0.2, ...],{"\n"}
                                                        {"    "}&quot;metadata&quot;: {"{"}
                                                        {"\n"}
                                                        {"        "}&quot;label&quot;: &quot;example&quot;,{"\n"}
                                                        {"        "}&quot;timestamp&quot;: &quot;2024-11-23T12:00:00Z&quot;{"\n"}
                                                        {"    "}
                                                        {"}"}
                                                        {"\n"}
                                                        {"}"}
                                                        {"\n"}
                                                    </pre>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a id="org1a2f505" />
                                            Batch Upsert
                                            <br />
                                            <div className="outline-text-5" id="text-4-2-2-2">
                                                <ul className="org-ul">
                                                    <li>Method: POST</li>
                                                    <li>
                                                        Path:
                                                        <code>
                                                            /collections/{"{"}collection_name{"}"}/transactions/{"{"}
                                                            transaction_id{"}"}/upsert
                                                        </code>
                                                    </li>
                                                    <li>Request Body:</li>
                                                </ul>
                                                <div className="org-src-container">
                                                    <pre className="src src-json">
                                                        {"{"}
                                                        {"\n"}
                                                        {"    "}&quot;vectors&quot;: [{"\n"}
                                                        {"        "}
                                                        {"{"}
                                                        {"\n"}
                                                        {"            "}&quot;id&quot;: &quot;vec1&quot;,{"\n"}
                                                        {"            "}&quot;values&quot;: [0.1, 0.2, ...],{"\n"}
                                                        {"            "}&quot;metadata&quot;: {"{"}
                                                        {"}"}
                                                        {"\n"}
                                                        {"        "}
                                                        {"}"},{"\n"}
                                                        {"        "}
                                                        {"{"}
                                                        {"\n"}
                                                        {"            "}&quot;id&quot;: &quot;vec2&quot;,{"\n"}
                                                        {"            "}&quot;values&quot;: [0.3, 0.4, ...],{"\n"}
                                                        {"            "}&quot;metadata&quot;: {"{"}
                                                        {"}"}
                                                        {"\n"}
                                                        {"        "}
                                                        {"}"}
                                                        {"\n"}
                                                        {"    "}]{"\n"}
                                                        {"}"}
                                                        {"\n"}
                                                    </pre>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                                <div id="outline-container-org8bed3d5" className="outline-4">
                                    <h4 id="org8bed3d5">
                                        <span className="section-number-4">4.2.3.</span> 3. Transaction
                                        Completion
                                    </h4>
                                    <div className="outline-text-4" id="text-4-2-3">
                                        <p>
                                            Transactions must be explicitly completed through commit or abort.
                                        </p>
                                    </div>
                                    <ol className="org-ol">
                                        <li>
                                            <a id="org5a2874d" />
                                            Commit Transaction
                                            <br />
                                            <div className="outline-text-5" id="text-4-2-3-1">
                                                <ul className="org-ul">
                                                    <li>Method: POST</li>
                                                    <li>
                                                        Path:
                                                        <code>
                                                            /collections/{"{"}collection_name{"}"}/transactions/{"{"}
                                                            transaction_id{"}"}/commit
                                                        </code>
                                                    </li>
                                                    <li>Response: 204 No Content</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a id="org7f00236" />
                                            Abort Transaction
                                            <br />
                                            <div className="outline-text-5" id="text-4-2-3-2">
                                                <ul className="org-ul">
                                                    <li>Method: POST</li>
                                                    <li>
                                                        Path:
                                                        <code>
                                                            /collections/{"{"}collection_name{"}"}/transactions/{"{"}
                                                            transaction_id{"}"}/abort
                                                        </code>
                                                    </li>
                                                    <li>Response: 204 No Content</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div id="outline-container-orge8a071c" className="outline-3">
                                <h3 id="orge8a071c">
                                    <span className="section-number-3">4.3.</span> Transaction Field
                                    References
                                </h3>
                                <div className="outline-text-3" id="text-4-3"></div>
                                <div id="outline-container-orgd148d49" className="outline-4">
                                    <h4 id="orgd148d49">
                                        <span className="section-number-4">4.3.1.</span> Transaction
                                        Operation Fields
                                    </h4>
                                    <div className="outline-text-4 overflow-auto" id="text-4-3-1">
                                        <table
                                            id="orgd1432a2"
                                            border={2}
                                            cellSpacing={0}
                                            cellPadding={6}
                                            rules="groups"

                                        >
                                            <caption className="t-above">
                                                <span className="table-number">Table 2:</span> Transaction
                                                Operation Parameters
                                            </caption>
                                            <colgroup>
                                                <col className="org-left" />
                                                <col className="org-left" />
                                                <col className="org-left" />
                                                <col className="org-left" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="org-left">
                                                        Field
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Type
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Required
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Description
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>transaction_id</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">Unique transaction identifier</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>vectors</code>
                                                    </td>
                                                    <td className="org-left">array</td>
                                                    <td className="org-left">Yes*</td>
                                                    <td className="org-left">
                                                        Array of vectors for batch operations
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>vector_db_name</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">Target collection name</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>timeout</code>
                                                    </td>
                                                    <td className="org-left">integer</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">Custom timeout in seconds</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="outline-container-orgee61788" className="outline-4">
                                    <h4 id="orgee61788">
                                        <span className="section-number-4">4.3.2.</span> Vector Fields
                                        within Transactions
                                    </h4>
                                    <div className="outline-text-4 overflow-auto" id="text-4-3-2">
                                        <table
                                            id="org51b1e48"
                                            border={2}
                                            cellSpacing={0}
                                            cellPadding={6}
                                            rules="groups"

                                        >
                                            <caption className="t-above">
                                                <span className="table-number">Table 3:</span> Vector Fields in
                                                Transactions
                                            </caption>
                                            <colgroup>
                                                <col className="org-left" />
                                                <col className="org-left" />
                                                <col className="org-left" />
                                                <col className="org-left" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="org-left">
                                                        Field
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Type
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Required
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Description
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>id</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">Unique vector identifier</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>values</code>
                                                    </td>
                                                    <td className="org-left">float[]</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">
                                                        Vector components (normalized -1.0 to 1.0)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>metadata</code>
                                                    </td>
                                                    <td className="org-left">object</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">Additional vector metadata</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>namespace</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">
                                                        Vector namespace for organization
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div id="outline-container-org1b1364c" className="outline-3">
                                <h3 id="org1b1364c">
                                    <span className="section-number-3">4.4.</span> Transaction Guarantees
                                    and Constraints
                                </h3>
                                <div className="outline-text-3" id="text-4-4"></div>
                                <div id="outline-container-org5633cf9" className="outline-4">
                                    <h4 id="org5633cf9">
                                        <span className="section-number-4">4.4.1.</span> ACID Properties
                                    </h4>
                                    <div className="outline-text-4" id="text-4-4-1">
                                        <ul className="org-ul">
                                            <li>
                                                <b>Atomicity</b>: All operations in a transaction either succeed
                                                or fail together
                                            </li>
                                            <li>
                                                <b>Consistency</b>: Vector relationships and indices remain
                                                consistent
                                            </li>
                                            <li>
                                                <b>Isolation</b>: Transactions are isolated from each other
                                                until commit
                                            </li>
                                            <li>
                                                <b>Durability</b>: Committed changes are permanent
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="outline-container-org3583bd3" className="outline-4">
                                    <h4 id="org3583bd3">
                                        <span className="section-number-4">4.4.2.</span> Operational
                                        Constraints
                                    </h4>
                                    <div className="outline-text-4 overflow-auto" id="text-4-4-2">
                                        <table
                                            id="org9209327"
                                            border={2}
                                            cellSpacing={0}
                                            cellPadding={6}
                                            rules="groups"

                                        >
                                            <caption className="t-above">
                                                <span className="table-number">Table 4:</span> Transaction
                                                Constraints
                                            </caption>
                                            <colgroup>
                                                <col className="org-left" />
                                                <col className="org-left" />
                                                <col className="org-left" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="org-left">
                                                        Constraint
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Value
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Description
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="org-left">Max Batch Size</td>
                                                    <td className="org-left">1000</td>
                                                    <td className="org-left">
                                                        Maximum vectors per batch operation
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">Transaction Timeout</td>
                                                    <td className="org-left">600s</td>
                                                    <td className="org-left">Default transaction timeout</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">Max Active Transactions</td>
                                                    <td className="org-left">100</td>
                                                    <td className="org-left">Per collection limit</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">Vector Dimension</td>
                                                    <td className="org-left">Fixed</td>
                                                    <td className="org-left">
                                                        Must match collection configuration
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="outline-container-orgcf75aa6" className="outline-2">
                            <h2 id="orgcf75aa6">
                                <span className="section-number-2">5.</span> Vector Search API
                            </h2>
                            <div className="outline-text-2" id="text-5"></div>
                            <div id="outline-container-orga99cd3e" className="outline-3">
                                <h3 id="orga99cd3e">
                                    <span className="section-number-3">5.1.</span> Search Operations
                                </h3>
                                <div className="outline-text-3" id="text-5-1">
                                    <p>
                                        The search API provides efficient similarity search capabilities for
                                        vectors.
                                    </p>
                                </div>
                                <div id="outline-container-org12c55e5" className="outline-4">
                                    <h4 id="org12c55e5">
                                        <span className="section-number-4">5.1.1.</span> Basic Vector Search
                                    </h4>
                                    <div className="outline-text-4" id="text-5-1-1">
                                        <ul className="org-ul">
                                            <li>Method: POST</li>
                                            <li>
                                                Path: <code>/search</code>
                                            </li>
                                            <li>Request Body:</li>
                                        </ul>
                                        <div className="org-src-container">
                                            <pre className="src src-json">
                                                {"{"}
                                                {"\n"}
                                                {"    "}&quot;vector_db_name&quot;: &quot;testdb&quot;,{"\n"}
                                                {"    "}&quot;vector&quot;: [0.1, 0.2, ...],{"\n"}
                                                {"    "}&quot;k&quot;: 5,{"\n"}
                                                {"    "}&quot;include_metadata&quot;: true{"\n"}
                                                {"}"}
                                                {"\n"}
                                            </pre>
                                        </div>
                                        <ul className="org-ul">
                                            <li>Response:</li>
                                        </ul>
                                        <div className="org-src-container">
                                            <pre className="src src-json">
                                                {"{"}
                                                {"\n"}
                                                {"    "}&quot;RespVectorKNN&quot;: {"{"}
                                                {"\n"}
                                                {"        "}&quot;knn&quot;: [{"\n"}
                                                {"            "}[{"\n"}
                                                {"                "}&quot;vec1&quot;,{"\n"}
                                                {"                "}
                                                {"{"}
                                                {"\n"}
                                                {"                    "}&quot;CosineSimilarity&quot;: 0.95,{"\n"}
                                                {"                    "}&quot;metadata&quot;: {"{"}
                                                {"\n"}
                                                {"                        "}&quot;label&quot;: &quot;example&quot;{"\n"}
                                                {"                    "}
                                                {"}"}
                                                {"\n"}
                                                {"                "}
                                                {"}"}
                                                {"\n"}
                                                {"            "}],{"\n"}
                                                {"            "}[{"\n"}
                                                {"                "}&quot;vec2&quot;,{"\n"}
                                                {"                "}
                                                {"{"}
                                                {"\n"}
                                                {"                    "}&quot;CosineSimilarity&quot;: 0.85,{"\n"}
                                                {"                    "}&quot;metadata&quot;: {"{"}
                                                {"\n"}
                                                {"                        "}&quot;label&quot;: &quot;example2&quot;{"\n"}
                                                {"                    "}
                                                {"}"}
                                                {"\n"}
                                                {"                "}
                                                {"}"}
                                                {"\n"}
                                                {"            "}]{"\n"}
                                                {"        "}]{"\n"}
                                                {"    "}
                                                {"}"}
                                                {"\n"}
                                                {"}"}
                                                {"\n"}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div id="outline-container-org6746dc5" className="outline-4">
                                    <h4 id="org6746dc5">
                                        <span className="section-number-4">5.1.2.</span> Search Parameters
                                    </h4>
                                    <div className="outline-text-4 overflow-auto" id="text-5-1-2">
                                        <table
                                            id="orga00355c"
                                            border={2}
                                            cellSpacing={0}
                                            cellPadding={6}
                                            rules="groups"

                                        >
                                            <caption className="t-above">
                                                <span className="table-number">Table 5:</span> Vector Search
                                                Parameters
                                            </caption>
                                            <colgroup>
                                                <col className="org-left" />
                                                <col className="org-left" />
                                                <col className="org-left" />
                                                <col className="org-left" />
                                                <col className="org-left" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="org-left">
                                                        Parameter
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Type
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Required
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Default
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Description
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>vector_db_name</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">-</td>
                                                    <td className="org-left">Collection to search in</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>vector</code>
                                                    </td>
                                                    <td className="org-left">float[]</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">-</td>
                                                    <td className="org-left">Query vector</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>k</code>
                                                    </td>
                                                    <td className="org-left">integer</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">10</td>
                                                    <td className="org-left">Number of nearest neighbors</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>include_metadata</code>
                                                    </td>
                                                    <td className="org-left">boolean</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">false</td>
                                                    <td className="org-left">Include vector metadata</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>namespace</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">default</td>
                                                    <td className="org-left">Vector namespace</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>similarity_metric</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">cosine</td>
                                                    <td className="org-left">Similarity metric to use</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="outline-container-org637dc40" className="outline-2">
                            <h2 id="org637dc40">
                                <span className="section-number-2">6.</span> Index Management
                            </h2>
                            <div className="outline-text-2" id="text-6"></div>
                            <div id="outline-container-orgfeee2d2" className="outline-3">
                                <h3 id="orgfeee2d2">
                                    <span className="section-number-3">6.1.</span> Index Operations
                                </h3>
                                <div className="outline-text-3" id="text-6-1">
                                    <p>Manage search indices for vector collections.</p>
                                </div>
                                <div id="outline-container-orgb5049c6" className="outline-4">
                                    <h4 id="orgb5049c6">
                                        <span className="section-number-4">6.1.1.</span> Create Index
                                    </h4>
                                    <div className="outline-text-4" id="text-6-1-1">
                                        <ul className="org-ul">
                                            <li>Method: POST</li>
                                            <li>
                                                Path: <code>/indexes</code>
                                            </li>
                                            <li>Request Body:</li>
                                        </ul>
                                        <div className="org-src-container">
                                            <pre className="src src-json">
                                                {"{"}
                                                {"\n"}
                                                {"    "}&quot;collection_name&quot;: &quot;testdb&quot;,{"\n"}
                                                {"    "}&quot;name&quot;: &quot;testdb_index&quot;,{"\n"}
                                                {"    "}&quot;distance_metric_type&quot;: &quot;cosine&quot;,{"\n"}
                                                {"    "}&quot;quantization&quot;: &quot;scalar&quot;,{"\n"}
                                                {"    "}&quot;data_type&quot;: &quot;u8&quot;,{"\n"}
                                                {"    "}&quot;index_type&quot;: &quot;hnsw&quot;,{"\n"}
                                                {"    "}&quot;params&quot;: {"{"}
                                                {"\n"}
                                                {"        "}&quot;num_layers&quot;: 5,{"\n"}
                                                {"        "}&quot;max_cache_size&quot;: 1000{"\n"}
                                                {"    "}
                                                {"}"}
                                                {"\n"}
                                                {"}"}
                                                {"\n"}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div id="outline-container-org408c950" className="outline-4">
                                    <h4 id="org408c950">
                                        <span className="section-number-4">6.1.2.</span> Index Configuration
                                        Fields
                                    </h4>
                                    <div className="outline-text-4 overflow-auto" id="text-6-1-2">
                                        <table
                                            id="org2f60216"
                                            border={2}
                                            cellSpacing={0}
                                            cellPadding={6}
                                            rules="groups"

                                        >
                                            <caption className="t-above">
                                                <span className="table-number">Table 6:</span> Index
                                                Configuration Parameters
                                            </caption>
                                            <colgroup>
                                                <col className="org-left" />
                                                <col className="org-left" />
                                                <col className="org-left" />
                                                <col className="org-left" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="org-left">
                                                        Field
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Type
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Required
                                                    </th>
                                                    <th scope="col" className="org-left">
                                                        Description
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>collection_name</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">Target collection</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>name</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">Index identifier</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>distance_metric_type</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">
                                                        Distance metric (cosine, euclidean, dot)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>quantization</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">Vector quantization method</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>data_type</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">Vector data type</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>index_type</code>
                                                    </td>
                                                    <td className="org-left">string</td>
                                                    <td className="org-left">Yes</td>
                                                    <td className="org-left">Index algorithm type</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>params.num_layers</code>
                                                    </td>
                                                    <td className="org-left">integer</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">HNSW number of layers</td>
                                                </tr>
                                                <tr>
                                                    <td className="org-left">
                                                        <code>params.max_cache_size</code>
                                                    </td>
                                                    <td className="org-left">integer</td>
                                                    <td className="org-left">No</td>
                                                    <td className="org-left">Maximum cache size</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="outline-container-orgdee8de1" className="outline-2">
                            <h2 id="orgdee8de1">
                                <span className="section-number-2">7.</span> Error Handling
                            </h2>
                            <div className="outline-text-2" id="text-7"></div>
                            <div id="outline-container-org30abdd4" className="outline-3">
                                <h3 id="org30abdd4">
                                    <span className="section-number-3">7.1.</span> Error Response Format
                                </h3>
                                <div className="outline-text-3" id="text-7-1">
                                    <p>All API errors follow a consistent format:</p>
                                    <div className="org-src-container">
                                        <pre className="src src-json">
                                            {"{"}
                                            {"\n"}
                                            {"    "}&quot;error&quot;: {"{"}
                                            {"\n"}
                                            {"        "}&quot;code&quot;: &quot;ERROR_CODE&quot;,{"\n"}
                                            {"        "}&quot;message&quot;: &quot;Human readable error message&quot;,{"\n"}
                                            {"        "}&quot;details&quot;: {"{"}
                                            {"\n"}
                                            {"            "}&quot;field&quot;: &quot;Additional error context&quot;{"\n"}
                                            {"        "}
                                            {"}"}
                                            {"\n"}
                                            {"    "}
                                            {"}"}
                                            {"\n"}
                                            {"}"}
                                            {"\n"}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div id="outline-container-org8774ce3" className="outline-3">
                                <h3 id="org8774ce3">
                                    <span className="section-number-3">7.2.</span> Common Error Codes
                                </h3>
                                <div className="outline-text-3 overflow-auto" id="text-7-2">
                                    <table
                                        id="org104e8ec"
                                        border={2}
                                        cellSpacing={0}
                                        cellPadding={6}
                                        rules="groups"

                                    >
                                        <caption className="t-above">
                                            <span className="table-number">Table 7:</span> Common API Error
                                            Codes
                                        </caption>
                                        <colgroup>
                                            <col className="org-left" />
                                            <col className="org-right" />
                                            <col className="org-left" />
                                            <col className="org-left" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col" className="org-left">
                                                    Code
                                                </th>
                                                <th scope="col" className="org-right">
                                                    HTTP Status
                                                </th>
                                                <th scope="col" className="org-left">
                                                    Description
                                                </th>
                                                <th scope="col" className="org-left">
                                                    Resolution
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="org-left">
                                                    <code>INVALID_REQUEST</code>
                                                </td>
                                                <td className="org-right">400</td>
                                                <td className="org-left">Malformed request</td>
                                                <td className="org-left">Check request format</td>
                                            </tr>
                                            <tr>
                                                <td className="org-left">
                                                    <code>UNAUTHORIZED</code>
                                                </td>
                                                <td className="org-right">401</td>
                                                <td className="org-left">Invalid authentication</td>
                                                <td className="org-left">Refresh token</td>
                                            </tr>
                                            <tr>
                                                <td className="org-left">
                                                    <code>COLLECTION_NOT_FOUND</code>
                                                </td>
                                                <td className="org-right">404</td>
                                                <td className="org-left">Collection doesn&#39;t exist</td>
                                                <td className="org-left">Verify collection name</td>
                                            </tr>
                                            <tr>
                                                <td className="org-left">
                                                    <code>TRANSACTION_TIMEOUT</code>
                                                </td>
                                                <td className="org-right">408</td>
                                                <td className="org-left">Transaction expired</td>
                                                <td className="org-left">Retry with new transaction</td>
                                            </tr>
                                            <tr>
                                                <td className="org-left">
                                                    <code>DIMENSION_MISMATCH</code>
                                                </td>
                                                <td className="org-right">400</td>
                                                <td className="org-left">Vector dimension incorrect</td>
                                                <td className="org-left">Check vector dimensions</td>
                                            </tr>
                                            <tr>
                                                <td className="org-left">
                                                    <code>TRANSACTION_CONFLICT</code>
                                                </td>
                                                <td className="org-right">409</td>
                                                <td className="org-left">Concurrent modification</td>
                                                <td className="org-left">Retry transaction</td>
                                            </tr>
                                            <tr>
                                                <td className="org-left">
                                                    <code>INTERNAL_ERROR</code>
                                                </td>
                                                <td className="org-right">500</td>
                                                <td className="org-left">Server error</td>
                                                <td className="org-left">Contact support</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="outline-container-orgee95a5e" className="outline-2">
                            <h2 id="orgee95a5e">
                                <span className="section-number-2">8.</span> Best Practices
                            </h2>
                            <div className="outline-text-2" id="text-8"></div>
                            <div id="outline-container-org0a91892" className="outline-3">
                                <h3 id="org0a91892">
                                    <span className="section-number-3">8.1.</span> Transaction Management
                                </h3>
                                <div className="outline-text-3" id="text-8-1"></div>
                                <div id="outline-container-org7cf6681" className="outline-4">
                                    <h4 id="org7cf6681">
                                        <span className="section-number-4">8.1.1.</span> Transaction
                                        Lifecycle
                                    </h4>
                                    <div className="outline-text-4" id="text-8-1-1">
                                        <ol className="org-ol">
                                            <li>Create transaction before batch operations</li>
                                            <li>Group related operations in single transaction</li>
                                            <li>Keep transaction duration short</li>
                                            <li>Always commit or abort to release resources</li>
                                        </ol>
                                    </div>
                                </div>
                                <div id="outline-container-orga7125df" className="outline-4">
                                    <h4 id="orga7125df">
                                        <span className="section-number-4">8.1.2.</span> Error Handling
                                    </h4>
                                    <div className="outline-text-4" id="text-8-1-2">
                                        <ol className="org-ol">
                                            <li>Implement proper error handling</li>
                                            <li>Abort transactions on errors</li>
                                            <li>Use retry logic for transient failures</li>
                                            <li>Monitor transaction timeouts</li>
                                        </ol>
                                    </div>
                                </div>
                                <div id="outline-container-orge2fa4da" className="outline-4">
                                    <h4 id="orge2fa4da">
                                        <span className="section-number-4">8.1.3.</span> Performance
                                        Optimization
                                    </h4>
                                    <div className="outline-text-4" id="text-8-1-3">
                                        <ol className="org-ol">
                                            <li>Batch vector operations (100-1000 vectors)</li>
                                            <li>Use parallel requests for large datasets</li>
                                            <li>Monitor response times</li>
                                            <li>Index important vector fields</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div id="outline-container-org4ad7614" className="outline-3">
                                <h3 id="org4ad7614">
                                    <span className="section-number-3">8.2.</span> Vector Operations
                                </h3>
                                <div className="outline-text-3" id="text-8-2"></div>
                                <div id="outline-container-org9c10853" className="outline-4">
                                    <h4 id="org9c10853">
                                        <span className="section-number-4">8.2.1.</span> Vector
                                        Normalization
                                    </h4>
                                    <div className="outline-text-4" id="text-8-2-1">
                                        <ol className="org-ol">
                                            <li>Normalize vectors to unit length</li>
                                            <li>Keep values between -1.0 and 1.0</li>
                                            <li>Consistent dimension across collection</li>
                                            <li>Handle sparse vectors efficiently</li>
                                        </ol>
                                    </div>
                                </div>
                                <div id="outline-container-orga51fcb2" className="outline-4">
                                    <h4 id="orga51fcb2">
                                        <span className="section-number-4">8.2.2.</span> Search Optimization
                                    </h4>
                                    <div className="outline-text-4" id="text-8-2-2">
                                        <ol className="org-ol">
                                            <li>Use appropriate k values</li>
                                            <li>Include relevant metadata</li>
                                            <li>Choose proper similarity metrics</li>
                                            <li>Consider index parameters</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="outline-container-org35e0884" className="outline-2">
                            <h2 id="org35e0884">
                                <span className="section-number-2">9.</span> Implementation Notes
                            </h2>
                            <div className="outline-text-2" id="text-9"></div>
                            <div id="outline-container-org9e5d15c" className="outline-3">
                                <h3 id="org9e5d15c">
                                    <span className="section-number-3">9.1.</span> Transaction
                                    Implementation
                                </h3>
                                <div className="outline-text-3" id="text-9-1">
                                    <ul className="org-ul">
                                        <li>Uses MVCC (Multi-Version Concurrency Control)</li>
                                        <li>Each transaction has isolated snapshot view</li>
                                        <li>Two-phase commit protocol</li>
                                        <li>Automatic rollback on failures</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="outline-container-orgf1e75e1" className="outline-3">
                                <h3 id="orgf1e75e1">
                                    <span className="section-number-3">9.2.</span> Vector Storage
                                </h3>
                                <div className="outline-text-3" id="text-9-2">
                                    <ul className="org-ul">
                                        <li>Optimized for high-dimensional data</li>
                                        <li>Efficient similarity search</li>
                                        <li>Configurable indexing strategies</li>
                                        <li>Metadata indexing support</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="outline-container-org1fed574" className="outline-3">
                                <h3 id="org1fed574">
                                    <span className="section-number-3">9.3.</span> Performance
                                    Considerations
                                </h3>
                                <div className="outline-text-3" id="text-9-3">
                                    <ul className="org-ul">
                                        <li>Index build time vs query performance</li>
                                        <li>Memory usage vs search speed</li>
                                        <li>Transaction overhead</li>
                                        <li>Batch operation efficiency</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="outline-container-orgdf3155e" className="outline-2">
                            <h2 id="orgdf3155e">
                                <span className="section-number-2">10.</span> Sample Workflows
                            </h2>
                            <div className="outline-text-2" id="text-10"></div>
                            <div id="outline-container-orgc73902b" className="outline-3">
                                <h3 id="orgc73902b">
                                    <span className="section-number-3">10.1.</span> Batch Vector Insertion
                                </h3>
                                <div className="outline-text-3" id="text-10-1">
                                    <div className="org-src-container">
                                        <pre className="src src-python">
                                            <span className="org-comment-delimiter"># </span>
                                            <span className="org-comment">1. Login and get token</span>
                                            {"\n"}
                                            <span className="org-variable-name">login_response</span>{" "}
                                            <span className="org-operator">=</span> login
                                            <span className="org-rainbow-delimiters-depth-1">()</span>
                                            {"\n"}
                                            <span className="org-variable-name">token</span>{" "}
                                            <span className="org-operator">=</span> login_response.text{"\n"}
                                            {"\n"}
                                            <span className="org-comment-delimiter"># </span>
                                            <span className="org-comment">2. Create collection</span>
                                            {"\n"}
                                            <span className="org-variable-name">
                                                create_collection_response
                                            </span>{" "}
                                            <span className="org-operator">=</span> create_db
                                            <span className="org-rainbow-delimiters-depth-1">(</span>
                                            {"\n"}
                                            {"    "}name<span className="org-operator">=</span>
                                            <span className="org-string">&quot;testdb&quot;</span>,{"\n"}
                                            {"    "}dimension<span className="org-operator">=</span>1024{"\n"}
                                            <span className="org-rainbow-delimiters-depth-1">)</span>
                                            {"\n"}
                                            {"\n"}
                                            <span className="org-comment-delimiter"># </span>
                                            <span className="org-comment">3. Start transaction</span>
                                            {"\n"}
                                            <span className="org-variable-name">
                                                transaction_response
                                            </span>{" "}
                                            <span className="org-operator">=</span> create_transaction
                                            <span className="org-rainbow-delimiters-depth-1">(</span>
                                            <span className="org-string">&quot;testdb&quot;</span>
                                            <span className="org-rainbow-delimiters-depth-1">)</span>
                                            {"\n"}
                                            <span className="org-variable-name">transaction_id</span>{" "}
                                            <span className="org-operator">=</span> transaction_response
                                            <span className="org-rainbow-delimiters-depth-1">[</span>
                                            <span className="org-string">&quot;transaction_id&quot;</span>
                                            <span className="org-rainbow-delimiters-depth-1">]</span>
                                            {"\n"}
                                            {"\n"}
                                            <span className="org-comment-delimiter"># </span>
                                            <span className="org-comment">4. Batch insert vectors</span>
                                            {"\n"}
                                            <span className="org-variable-name">vectors</span>{" "}
                                            <span className="org-operator">=</span>{" "}
                                            <span className="org-rainbow-delimiters-depth-1">[</span>
                                            {"\n"}
                                            {"    "}
                                            <span className="org-rainbow-delimiters-depth-2">{"{"}</span>
                                            {"\n"}
                                            {"        "}
                                            <span className="org-string">&quot;id&quot;</span>: f
                                            <span className="org-string">&quot;vec_</span>
                                            {"{"}i{"}"}
                                            <span className="org-string">&quot;</span>,{"\n"}
                                            {"        "}
                                            <span className="org-string">&quot;values&quot;</span>:{" "}
                                            <span className="org-rainbow-delimiters-depth-3">[</span>...
                                            <span className="org-rainbow-delimiters-depth-3">]</span>,{"\n"}
                                            {"        "}
                                            <span className="org-string">&quot;metadata&quot;</span>:{" "}
                                            <span className="org-rainbow-delimiters-depth-3">{"{"}</span>
                                            <span className="org-string">&quot;label&quot;</span>: f
                                            <span className="org-string">&quot;example_</span>
                                            {"{"}i{"}"}
                                            <span className="org-string">&quot;</span>
                                            <span className="org-rainbow-delimiters-depth-3">{"}"}</span>
                                            {"\n"}
                                            {"    "}
                                            <span className="org-rainbow-delimiters-depth-2">{"}"}</span>
                                            {"\n"}
                                            {"    "}
                                            <span className="org-keyword">for</span> i{" "}
                                            <span className="org-keyword">in</span>{" "}
                                            <span className="org-builtin">range</span>
                                            <span className="org-rainbow-delimiters-depth-2">(</span>100
                                            <span className="org-rainbow-delimiters-depth-2">)</span>
                                            {"\n"}
                                            <span className="org-rainbow-delimiters-depth-1">]</span>
                                            {"\n"}
                                            {"\n"}
                                            <span className="org-keyword">try</span>:{"\n"}
                                            {"    "}upsert_in_transaction
                                            <span className="org-rainbow-delimiters-depth-1">(</span>
                                            <span className="org-string">&quot;testdb&quot;</span>, transaction_id,
                                            vectors<span className="org-rainbow-delimiters-depth-1">)</span>
                                            {"\n"}
                                            {"    "}commit_transaction
                                            <span className="org-rainbow-delimiters-depth-1">(</span>
                                            <span className="org-string">&quot;testdb&quot;</span>, transaction_id
                                            <span className="org-rainbow-delimiters-depth-1">)</span>
                                            {"\n"}
                                            <span className="org-keyword">except</span>{" "}
                                            <span className="org-type">Exception</span>{" "}
                                            <span className="org-keyword">as</span> e:{"\n"}
                                            {"    "}abort_transaction
                                            <span className="org-rainbow-delimiters-depth-1">(</span>
                                            <span className="org-string">&quot;testdb&quot;</span>, transaction_id
                                            <span className="org-rainbow-delimiters-depth-1">)</span>
                                            {"\n"}
                                            {"    "}
                                            <span className="org-keyword">raise</span> e{"\n"}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div id="outline-container-org5110e09" className="outline-3">
                                <h3 id="org5110e09">
                                    <span className="section-number-3">10.2.</span> Search Workflow
                                </h3>
                                <div className="outline-text-3" id="text-10-2">
                                    <div className="org-src-container">
                                        <pre className="src src-python">
                                            <span className="org-comment-delimiter"># </span>
                                            <span className="org-comment">1. Prepare search vector</span>
                                            {"\n"}
                                            <span className="org-variable-name">search_vector</span>{" "}
                                            <span className="org-operator">=</span>{" "}
                                            <span className="org-rainbow-delimiters-depth-1">[</span>0.1, 0.2,
                                            ...<span className="org-rainbow-delimiters-depth-1">]</span>
                                            {"\n"}
                                            {"\n"}
                                            <span className="org-comment-delimiter"># </span>
                                            <span className="org-comment">2. Perform search</span>
                                            {"\n"}
                                            <span className="org-variable-name">search_response</span>{" "}
                                            <span className="org-operator">=</span> ann_vector
                                            <span className="org-rainbow-delimiters-depth-1">(</span>
                                            {"\n"}
                                            {"    "}1,{"\n"}
                                            {"    "}
                                            <span className="org-string">&quot;testdb&quot;</span>,{"\n"}
                                            {"    "}search_vector{"\n"}
                                            <span className="org-rainbow-delimiters-depth-1">)</span>
                                            {"\n"}
                                            {"\n"}
                                            <span className="org-comment-delimiter"># </span>
                                            <span className="org-comment">3. Process results</span>
                                            {"\n"}
                                            <span className="org-variable-name">results</span>{" "}
                                            <span className="org-operator">=</span> search_response
                                            <span className="org-rainbow-delimiters-depth-1">[</span>1
                                            <span className="org-rainbow-delimiters-depth-1">][</span>
                                            <span className="org-string">&quot;RespVectorKNN&quot;</span>
                                            <span className="org-rainbow-delimiters-depth-1">][</span>
                                            <span className="org-string">&quot;knn&quot;</span>
                                            <span className="org-rainbow-delimiters-depth-1">]</span>
                                            {"\n"}
                                            <span className="org-keyword">for</span> vector_id, similarity{" "}
                                            <span className="org-keyword">in</span> results:{"\n"}
                                            {"    "}
                                            <span className="org-builtin">print</span>
                                            <span className="org-rainbow-delimiters-depth-1">(</span>f
                                            <span className="org-string">&quot;Vector </span>
                                            {"{"}vector_id{"}"}
                                            <span className="org-string">: </span>
                                            {"{"}similarity{"}"}
                                            <span className="org-string">&quot;</span>
                                            <span className="org-rainbow-delimiters-depth-1">)</span>
                                            {"\n"}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="outline-container-org4abf743" className="outline-2">
                            <h2 id="org4abf743">
                                <span className="section-number-2">11.</span> API Version and
                                Compatibility
                            </h2>
                            <div className="outline-text-2" id="text-11">
                                <ul className="org-ul">
                                    <li>Current API Version: 1.0</li>
                                    <li>Base Path: /vectordb</li>
                                    <li>Backwards Compatibility: Guaranteed for minor versions</li>
                                    <li>Deprecation Policy: Minimum 6 months notice</li>
                                </ul>
                            </div>
                        </div>
                        <div id="outline-container-org71517c6" className="outline-2">
                            <h2 id="org71517c6">
                                <span className="section-number-2">12.</span> Security Considerations
                            </h2>
                            <div className="outline-text-2" id="text-12"></div>
                            <div id="outline-container-orgbfd4467" className="outline-3">
                                <h3 id="orgbfd4467">
                                    <span className="section-number-3">12.1.</span> Authentication
                                </h3>
                                <div className="outline-text-3" id="text-12-1">
                                    <ul className="org-ul">
                                        <li>JWT-based authentication</li>
                                        <li>Token expiration and renewal</li>
                                        <li>Role-based access control</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="outline-container-org7262ac1" className="outline-3">
                                <h3 id="org7262ac1">
                                    <span className="section-number-3">12.2.</span> Data Protection
                                </h3>
                                <div className="outline-text-3" id="text-12-2">
                                    <ul className="org-ul">
                                        <li>TLS encryption required</li>
                                        <li>Vector data encryption at rest</li>
                                        <li>Secure credential handling</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="outline-container-org73a32e3" className="outline-3">
                                <h3 id="org73a32e3">
                                    <span className="section-number-3">12.3.</span> Access Control
                                </h3>
                                <div className="outline-text-3" id="text-12-3">
                                    <ul className="org-ul">
                                        <li>Collection-level permissions</li>
                                        <li>Operation-level authorization</li>
                                        <li>Transaction isolation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="outline-container-org1edcd49" className="outline-2">
                            <h2 id="org1edcd49">
                                <span className="section-number-2">13.</span> Monitoring and Diagnostics
                            </h2>
                            <div className="outline-text-2" id="text-13"></div>
                            <div id="outline-container-org149429f" className="outline-3">
                                <h3 id="org149429f">
                                    <span className="section-number-3">13.1.</span> Available Metrics
                                </h3>
                                <div className="outline-text-3" id="text-13-1">
                                    <ul className="org-ul">
                                        <li>Transaction success/failure rates</li>
                                        <li>Query latency</li>
                                        <li>Index performance</li>
                                        <li>Resource utilization</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="outline-container-orgb42f364" className="outline-3">
                                <h3 id="orgb42f364">
                                    <span className="section-number-3">13.2.</span> Health Checks
                                </h3>
                                <div className="outline-text-3" id="text-13-2">
                                    <ol className="org-ul list-decimal">
                                        <li>API endpoint health</li>
                                        <li>Database connectivity</li>
                                        <li>Index status</li>
                                        <li>Transaction manager status</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};