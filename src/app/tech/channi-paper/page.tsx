import React from "react";
import { Afacad, Noto_Sans_Mono } from "next/font/google";

const afacad = Afacad({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const noto_sans_mono = Noto_Sans_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "CHANNI: A Multi-Level Vector Search Index with Nested Graph Navigation",
  description:
    "Technical paper detailing CHANNI architecture and implementation",
};

export default function ChanniPaper() {
  return (
    <div className={`bg-white min-h-screen ${noto_sans_mono.className}`}>
      <article className="max-w-[60em] mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-[#374151]">
            CHANNI: A Multi-Level Vector Search Index with Nested Graph
            Navigation
          </h1>
          <p className={`text-gray-500 ${afacad.className} text-lg`}>
            Cosdata Research
          </p>
        </header>

        <div className={`prose prose-lg max-w-none text-[#374151] ${afacad.className}`}>
          <div dangerouslySetInnerHTML={{
            __html: `
                <?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<!-- 2024-11-12 Tue 21:15 -->
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>CHANNI: A Multi-Level Vector Search Index with Nested Graph Navigation</title>
<meta name="author" content="Cosdata Research" />
<meta name="generator" content="Org Mode" />
<style type="text/css">
<!--/*--><![CDATA[/*><!--*/
/* Set the colors in <pre> blocks from the Leuven theme */
pre                                      {background-color:#FFFFFF;}
pre span.org-builtin                     {color:#006FE0;font-weight:bold;}
pre span.org-string                      {color:#008000;}
pre span.org-keyword                     {color:#0000FF;}
pre span.org-variable-name               {color:#BA36A5;}
pre span.org-function-name               {color:#006699;}
pre span.org-type                        {color:#6434A3;}
pre span.org-preprocessor                {color:#808080;font-weight:bold;}
pre span.org-constant                    {color:#D0372D;}
pre span.org-comment-delimiter           {color:#8D8D84;}
pre span.org-comment                     {color:#8D8D84;font-style:italic}
pre span.org-outshine-level-1            {color:#8D8D84;font-style:italic}
pre span.org-outshine-level-2            {color:#8D8D84;font-style:italic}
pre span.org-outshine-level-3            {color:#8D8D84;font-style:italic}
pre span.org-outshine-level-4            {color:#8D8D84;font-style:italic}
pre span.org-outshine-level-5            {color:#8D8D84;font-style:italic}
pre span.org-outshine-level-6            {color:#8D8D84;font-style:italic}
pre span.org-outshine-level-7            {color:#8D8D84;font-style:italic}
pre span.org-outshine-level-8            {color:#8D8D84;font-style:italic}
pre span.org-outshine-level-9            {color:#8D8D84;font-style:italic}
pre span.org-rainbow-delimiters-depth-1  {color:#707183;}
pre span.org-rainbow-delimiters-depth-2  {color:#7388d6;}
pre span.org-rainbow-delimiters-depth-3  {color:#909183;}
pre span.org-rainbow-delimiters-depth-4  {color:#709870;}
pre span.org-rainbow-delimiters-depth-5  {color:#907373;}
pre span.org-rainbow-delimiters-depth-6  {color:#6276ba;}
pre span.org-rainbow-delimiters-depth-7  {color:#858580;}
pre span.org-rainbow-delimiters-depth-8  {color:#80a880;}
pre span.org-rainbow-delimiters-depth-9  {color:#887070;}
pre span.org-sh-quoted-exec              {color:#FF1493;}

  #content { max-width: 60em; margin: auto; }
  .title  { text-align: center;
             margin-bottom: .2em; }
  .subtitle { text-align: center;
              font-size: medium;
              font-weight: bold;
              margin-top:0; }
  .todo   { font-family: monospace; color: red; }
  .done   { font-family: monospace; color: green; }
  .priority { font-family: monospace; color: orange; }
  .tag    { background-color: #eee; font-family: monospace;
            padding: 2px; font-size: 80%; font-weight: normal; }
  .timestamp { color: #bebebe; }
  .timestamp-kwd { color: #5f9ea0; }
  .org-right  { margin-left: auto; margin-right: 0px;  text-align: right; }
  .org-left   { margin-left: 0px;  margin-right: auto; text-align: left; }
  .org-center { margin-left: auto; margin-right: auto; text-align: center; }
  .underline { text-decoration: underline; }
  #postamble p, #preamble p { font-size: 90%; margin: .2em; }
  p.verse { margin-left: 3%; }

  pre {
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    background-color: #f2f2f2;
    padding: 8pt;
    font-family: monospace;
    overflow: auto;
    margin: 1.2em;
  }
  pre.src {
    position: relative;
    overflow: auto;
  }
  pre.src:before {
    display: none;
    position: absolute;
    top: -8px;
    right: 12px;
    padding: 3px;
    color: #555;
    background-color: #f2f2f299;
  }

/*]]>*/-->
</style>
</head>
<body>
<div id="content" class="content">
<div id="table-of-contents" role="doc-toc">
<h2>Table of Contents</h2>
<div id="text-table-of-contents" role="doc-toc">
<ul>
<li><a href="#org69c0500">1. Abstract</a></li>
<li><a href="#org08efd12">2. Introduction</a></li>
<li><a href="#org7ec0f70">3. Core Innovation</a>
<ul>
<li><a href="#org4d40ac5">3.1. Multi-Level Navigation Architecture</a></li>
<li><a href="#org8b7d194">3.2. Primary-Based Cluster Representation</a>
<ul>
<li><a href="#orgab0fe07">3.2.1. Advantages</a></li>
<li><a href="#org690e03b">3.2.2. Hybrid Approach for Splits</a></li>
<li><a href="#org4832a99">3.2.3. Trade-offs</a></li>
<li><a href="#org04adaf6">3.2.4. Implementation Impact</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#org182f16e">4. Clustering Strategy: Vector Space Partitioning through Representative Sampling</a>
<ul>
<li><a href="#org3fb25da">4.1. Initial Cluster Primary Selection</a></li>
<li><a href="#org1e07730">4.2. Theoretical Analysis</a></li>
</ul>
</li>
<li><a href="#org251aa6b">5. Index Construction and Performance</a>
<ul>
<li><a href="#org8687c2a">5.1. Build Process Overview</a>
<ul>
<li><a href="#org3c379b6">5.1.1. Initial Sampling Phase</a></li>
<li><a href="#org432249d">5.1.2. Cluster Formation Phase</a></li>
<li><a href="#orge85b86f">5.1.3. Graph Construction Phase</a></li>
</ul>
</li>
<li><a href="#orga7488ed">5.2. Build-Time Optimizations</a></li>
<li><a href="#orga289175">5.3. Relationship to Search Performance</a></li>
<li><a href="#org93e70ea">5.4. Resource Requirements</a></li>
</ul>
</li>
<li><a href="#org69bd365">6. Technical Architecture</a>
<ul>
<li><a href="#org7d126e1">6.1. Search Process</a></li>
<li><a href="#orgf216384">6.2. Parameter Configuration</a></li>
</ul>
</li>
<li><a href="#org6bd0542">7. Dynamic Index Maintenance</a>
<ul>
<li><a href="#org43f25f9">7.1. Split &amp; Merge Operations</a>
<ul>
<li><a href="#org381779c">7.1.1. Cluster Split Strategy</a></li>
<li><a href="#org42a3edb">7.1.2. Cluster Merge Operations</a></li>
<li><a href="#org109f972">7.1.3. Transaction Management</a></li>
<li><a href="#orgc9238b8">7.1.4. Performance Implications</a></li>
</ul>
</li>
<li><a href="#org9fc3b96">7.2. Parallel Maintenance Operations</a>
<ul>
<li><a href="#org7f92f63">7.2.1. Concurrent Cluster Operations</a></li>
<li><a href="#orgcf608dd">7.2.2. Resource Coordination</a></li>
<li><a href="#org40d91be">7.2.3. Monitoring and Recovery</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#orgf730dde">8. System Implementation</a>
<ul>
<li><a href="#org96a2ed9">8.1. Resource Management</a></li>
</ul>
</li>
<li><a href="#org43b5923">9. Performance Characteristics</a>
<ul>
<li><a href="#org5f96a66">9.1. Search Efficiency</a></li>
<li><a href="#org28466f0">9.2. I/O Patterns</a></li>
</ul>
</li>
<li><a href="#org4d2b8ae">10. Search Parallelization Strategy</a>
<ul>
<li><a href="#orgaf77bfb">10.1. Distributed Search Architecture</a></li>
<li><a href="#org00d9abc">10.2. Resource Management</a></li>
<li><a href="#orgc65884d">10.3. Scaling Behavior</a></li>
</ul>
</li>
<li><a href="#org2515bba">11. Scalability Features</a>
<ul>
<li><a href="#orgc5e7bc5">11.1. Horizontal Scaling</a></li>
<li><a href="#org6eb8987">11.2. Resource Adaptation</a></li>
</ul>
</li>
<li><a href="#orgceb003c">12. Experimental Results</a>
<ul>
<li><a href="#org1b3c320">12.1. Dataset Characteristics</a></li>
<li><a href="#orgf71369f">12.2. Performance Metrics</a>
<ul>
<li><a href="#org7a35fed">12.2.1. Search Quality</a></li>
<li><a href="#org86dfab3">12.2.2. Resource Utilization</a></li>
<li><a href="#orga653279">12.2.3. Scalability Tests</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#orgb48e0c0">13. Future Research Directions</a>
<ul>
<li><a href="#orgb74c9b4">13.1. Theoretical Developments</a></li>
<li><a href="#org8ac8882">13.2. Technical Enhancements</a></li>
<li><a href="#org737a1fb">13.3. Potential Applications</a></li>
</ul>
</li>
<li><a href="#org8e8110e">14. Advantages over Existing Approaches</a></li>
<li><a href="#org0457cff">15. Conclusion</a></li>
<li><a href="#org52b08e3">16. Acknowledgments</a></li>
<li><a href="#org4d24508">17. References</a></li>
<li><a href="#orgee75618">18. <span class="todo TODO">TODO</span> </a></li>
</ul>
</div>
</div>

<div id="outline-container-org69c0500" class="outline-2">
<h2 id="org69c0500"><span class="section-number-2">1.</span> Abstract</h2>
<div class="outline-text-2" id="text-1">
<p>
CHANNI (Clustered Hierarchical Approximate Nested Navigable Index) introduces a novel vector indexing architecture that bridges the gap between memory-efficient clustering and high-performance graph navigation. By combining a hierarchical navigable small world graph at the cluster level with heirarchical navigable graphs within clusters, CHANNI achieves superior performance while maintaining efficient resource utilization for large-scale vector search applications.
</p>
</div>
</div>

<div id="outline-container-org08efd12" class="outline-2">
<h2 id="org08efd12"><span class="section-number-2">2.</span> Introduction</h2>
<div class="outline-text-2" id="text-2">
<p>
Vector similarity search at scale presents significant challenges in balancing memory usage, search speed, and result quality. Traditional approaches either consume excessive memory like pure HNSW implementations, or compromise on accuracy through quantization-based methods. CHANNI addresses these limitations through a novel multi-level architecture that intelligently combines clustering with navigable graphs at different granularities.
</p>
</div>
</div>

<div id="outline-container-org7ec0f70" class="outline-2">
<h2 id="org7ec0f70"><span class="section-number-2">3.</span> Core Innovation</h2>
<div class="outline-text-2" id="text-3">
</div>
<div id="outline-container-org4d40ac5" class="outline-3">
<h3 id="org4d40ac5"><span class="section-number-3">3.1.</span> Multi-Level Navigation Architecture</h3>
<div class="outline-text-3" id="text-3-1">
<p>
The fundamental innovation in CHANNI lies in its dual-level navigation approach. At the top level, a hierarchical navigable small world graph connects cluster primaries, enabling rapid identification of relevant clusters. Within each cluster, a heirarchical navigable graph structure facilitates efficient local search with high precision. This separation allows for independent parameter tuning at each level, optimizing both coarse and fine-grained search operations while maintaining an optimal balance between disk usage and memory consumption.
</p>
</div>
</div>

<div id="outline-container-org8b7d194" class="outline-3">
<h3 id="org8b7d194"><span class="section-number-3">3.2.</span> Primary-Based Cluster Representation</h3>
<div class="outline-text-3" id="text-3-2">
<p>
A key innovation in CHANNI is using actual vectors from the dataset as cluster representatives (primaries), rather than maintaining computed centroids. Unlike traditional clustering approaches like k-means that continuously calculate and update centroids, CHANNI uses these primary vectors for both top-level HNSW navigation and intra-cluster organization.
</p>
</div>

<div id="outline-container-orgab0fe07" class="outline-4">
<h4 id="orgab0fe07"><span class="section-number-4">3.2.1.</span> Advantages</h4>
<div class="outline-text-4" id="text-3-2-1">
<p>
This design choice offers several significant benefits:
</p>
<ul class="org-ul">
<li>Eliminates continuous computational overhead of centroid calculations during normal operations</li>
<li>Avoids centroid drift during routine updates</li>
<li>Ensures cluster representative is always a real vector from the dataset</li>
<li>Reduces memory footprint by not storing additional centroid vectors</li>
<li>Maintains stable cluster identification through primary vectors</li>
</ul>
</div>
</div>

<div id="outline-container-org690e03b" class="outline-4">
<h4 id="org690e03b"><span class="section-number-4">3.2.2.</span> Hybrid Approach for Splits</h4>
<div class="outline-text-4" id="text-3-2-2">
<p>
CHANNI employs a strategic hybrid approach during cluster splits:
</p>
<ul class="org-ul">
<li>Computes temporary centroids only during split operations</li>
<li>Selects new primaries as vectors nearest to computed centroids</li>
<li>One-time computation cost justified by improved cluster quality</li>
<li>Better balance in resulting sub-clusters</li>
<li>More representative space partitioning</li>
</ul>
</div>
</div>

<div id="outline-container-org4832a99" class="outline-4">
<h4 id="org4832a99"><span class="section-number-4">3.2.3.</span> Trade-offs</h4>
<div class="outline-text-4" id="text-3-2-3">
<p>
The system balances computational efficiency with cluster quality:
</p>
<ul class="org-ul">
<li>Normal operations maintain zero centroid computation overhead</li>
<li>Split operations accept one-time computation cost for better clustering</li>
<li>Quality of initial cluster formation depends on primary selection strategy</li>
<li>Split quality improved through selective centroid computation</li>
<li>Memory impact limited to temporary split calculations</li>
</ul>
</div>
</div>

<div id="outline-container-org04adaf6" class="outline-4">
<h4 id="org04adaf6"><span class="section-number-4">3.2.4.</span> Implementation Impact</h4>
<div class="outline-text-4" id="text-3-2-4">
<p>
This representation strategy affects several system components:
</p>
<ul class="org-ul">
<li>Top-level HNSW graph connects actual data vectors (primaries)</li>
<li>Cluster splits use temporary centroid computation for better primary selection</li>
<li>Update operations maintain stable primaries unless splits/merges occur</li>
<li>Split operations can be scheduled during system low-load periods</li>
</ul>
</div>
</div>
</div>
</div>

<div id="outline-container-org182f16e" class="outline-2">
<h2 id="org182f16e"><span class="section-number-2">4.</span> Clustering Strategy: Vector Space Partitioning through Representative Sampling</h2>
<div class="outline-text-2" id="text-4">
</div>
<div id="outline-container-org3fb25da" class="outline-3">
<h3 id="org3fb25da"><span class="section-number-3">4.1.</span> Initial Cluster Primary Selection</h3>
<div class="outline-text-3" id="text-4-1">
<p>
CHANNI implements a distinctive approach to cluster formation that challenges traditional clustering methods. Instead of employing computationally expensive k-means clustering, the system defers index construction until a substantial portion of the vector embeddings are available. It then performs large-scale sampling to select cluster primaries, which serve as initial primaries. This strategy leverages the natural distribution properties of the vector space, achieving well-distributed cluster sizes without the overhead of iterative centroid refinement.
</p>
</div>
</div>

<div id="outline-container-org1e07730" class="outline-3">
<h3 id="org1e07730"><span class="section-number-3">4.2.</span> Theoretical Analysis</h3>
<div class="outline-text-3" id="text-4-2">
<p>
The distribution of cluster sizes in CHANNI warrants careful examination. When selecting initial cluster primaries from a large sample of the vector space, the resulting cluster size distribution is influenced by:
</p>

<ul class="org-ul">
<li>The inherent distribution of the vector embeddings in the space</li>
<li>Local density variations in different regions of the vector space</li>
<li>The dimensionality and characteristics of the embedding space</li>
</ul>

<p>
Since vectors are assigned to their closest cluster primary without a similarity threshold, the cluster sizes naturally emerge from the interplay between:
</p>

<ul class="org-ul">
<li>The initial sampling distribution of primaries</li>
<li>The density distribution of vectors in different regions</li>
<li>The relative distances between cluster primaries</li>
</ul>

<p>
The absence of a similarity threshold means cluster boundaries are purely determined by relative proximity to primaries. This raises interesting questions about:
</p>

<ul class="org-ul">
<li>How the initial sampling density of primaries affects final cluster size distribution</li>
<li>Whether certain regions of the vector space tend to accumulate larger clusters</li>
<li>The relationship between vector space topology and resulting cluster characteristics</li>
<li>Potential strategies for sampling primaries to achieve more balanced cluster sizes</li>
</ul>

<p>
An important research direction is to empirically analyze:
</p>
<ul class="org-ul">
<li>Typical cluster size distributions across different types of vector spaces</li>
<li>The relationship between sampling ratio and cluster size variation</li>
<li>The impact of non-uniform cluster sizes on search performance</li>
<li>Whether adaptive sampling strategies could improve size distribution without sacrificing the computational efficiency of our approach</li>
</ul>
</div>
</div>
</div>

<div id="outline-container-org251aa6b" class="outline-2">
<h2 id="org251aa6b"><span class="section-number-2">5.</span> Index Construction and Performance</h2>
<div class="outline-text-2" id="text-5">
</div>
<div id="outline-container-org8687c2a" class="outline-3">
<h3 id="org8687c2a"><span class="section-number-3">5.1.</span> Build Process Overview</h3>
<div class="outline-text-3" id="text-5-1">
<p>
The construction of CHANNI index follows a distinct phased approach:
</p>
</div>

<div id="outline-container-org3c379b6" class="outline-4">
<h4 id="org3c379b6"><span class="section-number-4">5.1.1.</span> Initial Sampling Phase</h4>
<div class="outline-text-4" id="text-5-1-1">
<ul class="org-ul">
<li>Waiting for substantial vector collection (80% of expected data)</li>
<li>Large-scale sampling to select cluster primaries</li>
<li>Time complexity: O(n) for sampling from n vectors</li>
</ul>
</div>
</div>

<div id="outline-container-org432249d" class="outline-4">
<h4 id="org432249d"><span class="section-number-4">5.1.2.</span> Cluster Formation Phase</h4>
<div class="outline-text-4" id="text-5-1-2">
<ul class="org-ul">
<li>Assignment of vectors to nearest primaries via HNSW routing</li>
<li>Progressive cluster building as vectors are assigned</li>
<li>Parallel processing capabilities during assignment</li>
<li>Time complexity: O(n log k) where k is number of clusters</li>
</ul>
</div>
</div>

<div id="outline-container-orge85b86f" class="outline-4">
<h4 id="orge85b86f"><span class="section-number-4">5.1.3.</span> Graph Construction Phase</h4>
<div class="outline-text-4" id="text-5-1-3">
<ul class="org-ul">
<li>Building top-level HNSW graph connecting cluster primaries</li>
<li>Construction of heirarchical navigable graphs within each cluster</li>
<li>Independent parameter tuning for each level</li>
<li>Time complexity: O(k log k) for cluster primaries' HNSW, O(m log m) for each cluster of size m</li>
</ul>
</div>
</div>
</div>

<div id="outline-container-orga7488ed" class="outline-3">
<h3 id="orga7488ed"><span class="section-number-3">5.2.</span> Build-Time Optimizations</h3>
<div class="outline-text-3" id="text-5-2">
<ul class="org-ul">
<li>Parallel cluster construction</li>
<li>Efficient memory management during building</li>
<li>Batch processing of vector assignments</li>
<li>Progressive disk serialization of completed clusters</li>
</ul>
</div>
</div>

<div id="outline-container-orga289175" class="outline-3">
<h3 id="orga289175"><span class="section-number-3">5.3.</span> Relationship to Search Performance</h3>
<div class="outline-text-3" id="text-5-3">
<p>
The index construction process directly influences search efficiency:
</p>
<ul class="org-ul">
<li>Quality of initial primary selection affects cluster balance</li>
<li>Cluster primaries' HNSW structure determines routing efficiency</li>
<li>Within-cluster graph connectivity impacts local search speed</li>
<li>Build-time parameter choices influence search-time performance trade-offs</li>
</ul>
</div>
</div>

<div id="outline-container-org93e70ea" class="outline-3">
<h3 id="org93e70ea"><span class="section-number-3">5.4.</span> Resource Requirements</h3>
<div class="outline-text-3" id="text-5-4">
<ul class="org-ul">
<li>Memory usage patterns during construction</li>
<li>Disk I/O characteristics for cluster serialization</li>
<li>CPU utilization during different phases</li>
<li>Temporary storage needs</li>
</ul>
</div>
</div>
</div>

<div id="outline-container-org69bd365" class="outline-2">
<h2 id="org69bd365"><span class="section-number-2">6.</span> Technical Architecture</h2>
<div class="outline-text-2" id="text-6">
</div>
<div id="outline-container-org7d126e1" class="outline-3">
<h3 id="org7d126e1"><span class="section-number-3">6.1.</span> Search Process</h3>
<div class="outline-text-3" id="text-6-1">
<p>
The search process in CHANNI occurs in multiple phases, each optimized for its specific role. Initially, the system navigates the HNSW graph to identify relevant clusters. Once target clusters are identified, the system accesses their heirarchical navigable graphs to perform precise local searches. This multi-phase approach ensures both broad coverage and detailed local exploration while maintaining efficient resource utilization.
</p>
</div>
</div>

<div id="outline-container-orgf216384" class="outline-3">
<h3 id="orgf216384"><span class="section-number-3">6.2.</span> Parameter Configuration</h3>
<div class="outline-text-3" id="text-6-2">
<p>
CHANNI's architecture enables fine-grained control over search and construction parameters at each level. The top-level HNSW graph can be optimized for quick cluster identification, while cluster-level graphs can be tuned for precision. This flexibility allows for sophisticated trade-off management between search speed and accuracy.
</p>
</div>
</div>
</div>

<div id="outline-container-org6bd0542" class="outline-2">
<h2 id="org6bd0542"><span class="section-number-2">7.</span> Dynamic Index Maintenance</h2>
<div class="outline-text-2" id="text-7">
</div>
<div id="outline-container-org43f25f9" class="outline-3">
<h3 id="org43f25f9"><span class="section-number-3">7.1.</span> Split &amp; Merge Operations</h3>
<div class="outline-text-3" id="text-7-1">
</div>
<div id="outline-container-org381779c" class="outline-4">
<h4 id="org381779c"><span class="section-number-4">7.1.1.</span> Cluster Split Strategy</h4>
<div class="outline-text-4" id="text-7-1-1">
<p>
When clusters grow beyond predetermined size thresholds, CHANNI employs an adaptive split mechanism with OOD detection:
</p>
</div>

<ol class="org-ol">
<li><a id="orgeba21c7"></a>Initial Centroid Formation<br />
<div class="outline-text-5" id="text-7-1-1-1">
<ul class="org-ul">
<li>Compute initial split count N = max(3, log(cluster<sub>size</sub>))</li>
<li>Use mini-batch k-means to form N temporary centroids</li>
<li>This allows detection of potential subclusters and OOD vectors</li>
</ul>
</div>
</li>

<li><a id="org55ae0c4"></a>OOD Detection &amp; Handling<br />
<div class="outline-text-5" id="text-7-1-1-2">
<ul class="org-ul">
<li>Calculate mean distance μ and standard deviation σ of vectors to their nearest centroid</li>
<li>Flag vectors with distance &gt; μ + 2σ as potential OOD</li>
<li>Create separate OOD clusters if sufficient OOD vectors are detected</li>
<li>Limit OOD cluster size to prevent fragmentation</li>
</ul>
</div>
</li>

<li><a id="org72e9b3d"></a>Final Split Process<br />
<div class="outline-text-5" id="text-7-1-1-3">
<ul class="org-ul">
<li>For non-OOD vectors, merge centroids until reaching target split count (usually 2-3)</li>
<li>Select actual vectors nearest to final centroids as new primaries</li>
<li>Assign remaining vectors to nearest primary</li>
</ul>
</div>
</li>

<li><a id="orgffa42fa"></a>Primary Selection &amp; Integration<br />
<div class="outline-text-5" id="text-7-1-1-4">
<ul class="org-ul">
<li>Choose vectors nearest to computed centroids as new primaries</li>
</ul>
</div>
</li>

<li><a id="org4de29bc"></a>Efficient HNSW routing graph updates<br />
<div class="outline-text-5" id="text-7-1-1-5">
<ul class="org-ul">
<li>CHANNI employs an innovative strategy to optimize cluster splits while maintaining routing efficiency. During a split operation, the system reuses the original cluster's primary-hash based file name for one of the new centroids, specifically selecting the centroid closest to the original primary. This approach requires only updating the cluster's internal root to point to the new centroid vector, while creating a new cluster file only for the additional centroid.</li>

<li>The selection of the nearest centroid for reuse is crucial for maintaining the effectiveness of the HNSW routing graph. By preserving locality in the graph traversal, vectors previously routable via the original primary remain accessible through similar paths. This strategy ensures that distance-based routing decisions remain valid and minimizes disruption to the existing HNSW graph structure while preserving locality-sensitive navigation patterns.</li>

<li>This optimization dramatically reduces maintenance overhead by avoiding expensive HNSW deletion operations and maintaining unidirectional neighbor relationships. The approach requires just a single update operation instead of costly deletion and multiple insertions, while preserving the existing cluster file structure.</li>
</ul>
</div>
</li>
</ol>
</div>

<div id="outline-container-org42a3edb" class="outline-4">
<h4 id="org42a3edb"><span class="section-number-4">7.1.2.</span> Cluster Merge Operations</h4>
<div class="outline-text-4" id="text-7-1-2">
<p>
Conversely, CHANNI identifies and merges undersized clusters, which may result from:
</p>
<ul class="org-ul">
<li>Out-of-distribution vectors forming small clusters</li>
<li>Deletion operations leaving sparse clusters</li>
<li>Natural data distribution shifts</li>
</ul>

<p>
The merge process involves:
</p>
<ul class="org-ul">
<li>Size threshold monitoring during transaction commits</li>
<li>Identification of merge candidates based on size and proximity</li>
<li>Cluster consolidation with primary selection from merged set</li>
</ul>
</div>

<ol class="org-ol">
<li><a id="org44936a8"></a>Merge Operation Strategy<br />
<div class="outline-text-5" id="text-7-1-2-1">
<ul class="org-ul">
<li>For cluster merges, CHANNI implements a dual-primary routing approach that maintains multiple valid paths to merged clusters. Instead of deleting redundant primaries, the system updates primary-hash to cluster mappings for both original primaries to reference a single consolidated cluster file. The cluster's root is updated to reflect the new primary while maintaining both original routing paths in the HNSW graph.</li>

<li>This dual-primary strategy is particularly crucial for handling out-of-distribution (OOD) vectors. Since OOD clusters are typically smaller and more likely to undergo merges, maintaining multiple routing paths ensures reliable vector retrieval. OOD vectors, which may be reachable through different routing paths in the HNSW graph, remain accessible through either primary. This approach prevents potential accessibility issues during cluster consolidation while supporting efficient retrieval of outlier vectors.</li>

<li>The preservation of multiple valid entry points to merged clusters ensures stability in the HNSW routing structure and maintains search quality across diverse vector distributions. This strategy eliminates the need for HNSW graph deletions, simplifies recovery operations, and significantly reduces maintenance overhead while ensuring robust accessibility for all vectors, including outliers and OOD cases.</li>
</ul>
</div>
</li>
</ol>
</div>

<div id="outline-container-org109f972" class="outline-4">
<h4 id="org109f972"><span class="section-number-4">7.1.3.</span> Transaction Management</h4>
<div class="outline-text-4" id="text-7-1-3">
<p>
Both split and merge operations are integrated into the transaction commit process:
</p>
<ul class="org-ul">
<li>Atomic updates ensure index consistency</li>
<li>Batch processing of multiple operations when possible</li>
<li>Efficient handling of concurrent operations</li>
<li>Recovery mechanisms for interrupted operations</li>
</ul>
</div>
</div>

<div id="outline-container-orgc9238b8" class="outline-4">
<h4 id="orgc9238b8"><span class="section-number-4">7.1.4.</span> Performance Implications</h4>
<div class="outline-text-4" id="text-7-1-4">
<p>
The dynamic maintenance strategy impacts several aspects:
</p>
<ul class="org-ul">
<li>Search performance during reorganization</li>
<li>Resource utilization during splits and merges</li>
<li>HNSW graph quality maintenance</li>
<li>Overall index balance and efficiency</li>
</ul>

<p>
This adaptive approach ensures CHANNI maintains optimal performance characteristics even as the underlying data distribution evolves over time.
</p>
</div>
</div>
</div>

<div id="outline-container-org9fc3b96" class="outline-3">
<h3 id="org9fc3b96"><span class="section-number-3">7.2.</span> Parallel Maintenance Operations</h3>
<div class="outline-text-3" id="text-7-2">
</div>
<div id="outline-container-org7f92f63" class="outline-4">
<h4 id="org7f92f63"><span class="section-number-4">7.2.1.</span> Concurrent Cluster Operations</h4>
<div class="outline-text-4" id="text-7-2-1">
<p>
CHANNI's architecture enables parallel execution of both split and merge operations, maximizing throughput during index maintenance. Multiple large clusters can undergo split operations simultaneously, while independent merge operations can process smaller clusters in parallel. This concurrent processing capability significantly reduces maintenance windows and keeps the index optimized even under heavy update loads.
</p>

<p>
The system employs fine-grained locking mechanisms to ensure data consistency during parallel operations. When splitting large clusters, each operation works independently on its target cluster while maintaining HNSW graph consistency. Similarly, merge operations can process multiple sets of small clusters concurrently, with careful coordination to prevent conflicts in primaries management.
</p>

<p>
Key aspects of parallel processing include:
</p>
<ul class="org-ul">
<li>Independent primary sampling and vector reassignment for splits</li>
<li>Simultaneous merge operations for non-overlapping cluster sets</li>
<li>Parallel updates to the HNSW routing structure</li>
<li>Transaction isolation between different maintenance operations</li>
</ul>
</div>
</div>

<div id="outline-container-orgcf608dd" class="outline-4">
<h4 id="orgcf608dd"><span class="section-number-4">7.2.2.</span> Resource Coordination</h4>
<div class="outline-text-4" id="text-7-2-2">
<p>
The parallel maintenance subsystem carefully manages system resources to balance maintenance tasks with ongoing search operations. A sophisticated resource manager allocates processing power, memory, and I/O bandwidth across concurrent operations while ensuring search performance remains within acceptable bounds.
</p>

<p>
The system employs multi-version concurrency control (MVCC) to maintain consistency during parallel operations. This approach allows read operations to proceed unimpeded while maintenance tasks modify cluster structures. Transaction boundaries are carefully managed to ensure atomic updates and provide clear rollback points if needed.
</p>

<p>
Critical resource considerations:
</p>
<ul class="org-ul">
<li>Worker pool allocation between search and maintenance tasks</li>
<li>Memory management for concurrent operations</li>
<li>I/O scheduling and cache coherency</li>
<li>CPU quota distribution across parallel tasks</li>
</ul>
</div>
</div>

<div id="outline-container-org40d91be" class="outline-4">
<h4 id="org40d91be"><span class="section-number-4">7.2.3.</span> Monitoring and Recovery</h4>
<div class="outline-text-4" id="text-7-2-3">
<p>
A comprehensive monitoring system tracks the progress and health of parallel maintenance operations. Real-time monitoring enables the system to detect and respond to resource constraints or failed operations quickly. If a maintenance operation fails, the system can roll back changes while keeping other parallel operations unaffected.
</p>

<p>
The parallel maintenance capability significantly improves CHANNI's ability to handle dynamic workloads, ensuring the index remains optimized without impacting search availability. By carefully balancing resources and maintaining consistency, the system provides robust performance even during intensive maintenance periods.
</p>
</div>
</div>
</div>
</div>

<div id="outline-container-orgf730dde" class="outline-2">
<h2 id="orgf730dde"><span class="section-number-2">8.</span> System Implementation</h2>
<div class="outline-text-2" id="text-8">
</div>
<div id="outline-container-org96a2ed9" class="outline-3">
<h3 id="org96a2ed9"><span class="section-number-3">8.1.</span> Resource Management</h3>
<div class="outline-text-3" id="text-8-1">
<p>
The implementation focuses on efficient resource utilization through careful memory management and disk I/O optimization. Cluster data resides primarily on disk, with active clusters cached in memory as needed. The system maintains two specialized registries: a lightweight node registry for HNSW navigation and a cluster registry for data access, both optimized for their specific access patterns.
</p>
</div>
</div>
</div>


<div id="outline-container-org43b5923" class="outline-2">
<h2 id="org43b5923"><span class="section-number-2">9.</span> Performance Characteristics</h2>
<div class="outline-text-2" id="text-9">
</div>
<div id="outline-container-org5f96a66" class="outline-3">
<h3 id="org5f96a66"><span class="section-number-3">9.1.</span> Search Efficiency</h3>
<div class="outline-text-3" id="text-9-1">
<p>
The multi-level structure of CHANNI enables highly efficient search operations. The top-level HNSW graph of cluster primaries provides rapid cluster identification in logarithmic time complexity relative to the number of clusters. Within each cluster, the heirarchical navigable graph structure enables precise local search, maintaining high recall while minimizing distance computations.
</p>

<p>
Each level can be independently tuned through its efSearch parameter:
</p>
<ul class="org-ul">
<li>Cluster-level navigation: Controls the trade-off between search speed and cluster selection accuracy</li>
<li>Within-cluster search: Manages the precision of local vector retrieval</li>
</ul>
</div>
</div>

<div id="outline-container-org28466f0" class="outline-3">
<h3 id="org28466f0"><span class="section-number-3">9.2.</span> I/O Patterns</h3>
<div class="outline-text-3" id="text-9-2">
<p>
CHANNI's architecture is specifically designed for efficient disk I/O patterns:
</p>
<ul class="org-ul">
<li>Sequential cluster reads minimize disk seek operations</li>
<li>Single-file cluster serialization enables efficient disk access</li>
<li>Smart caching strategies keep frequently accessed clusters in memory</li>
<li>Asynchronous I/O capabilities for parallel cluster loading</li>
</ul>
</div>
</div>
</div>

<div id="outline-container-org4d2b8ae" class="outline-2">
<h2 id="org4d2b8ae"><span class="section-number-2">10.</span> Search Parallelization Strategy</h2>
<div class="outline-text-2" id="text-10">
</div>
<div id="outline-container-orgaf77bfb" class="outline-3">
<h3 id="orgaf77bfb"><span class="section-number-3">10.1.</span> Distributed Search Architecture</h3>
<div class="outline-text-3" id="text-10-1">
<p>
CHANNI's cluster-based design inherently supports efficient parallel search operations through a map-reduce style architecture. The search process begins with a mapping phase where the query is routed through the cluster primaries' HNSW graph to identify relevant clusters. This initial routing process, while sequential, quickly narrows down the search space to a subset of promising clusters.
</p>

<p>
Once target clusters are identified, CHANNI distributes search operations across multiple workers for parallel execution. Each worker independently processes the search within its assigned clusters, leveraging the local heirarchical navigable graphs for precise vector retrieval. This parallel execution phase significantly reduces overall search latency, especially for high-recall scenarios requiring exploration of multiple clusters.
</p>

<p>
The reduce phase aggregates results through a sophisticated merging process. A priority queue-based mechanism combines candidates from different clusters, ensuring the global top-k results are accurately identified. This phase includes distance-based filtering and progressive refinement to maintain search quality while minimizing resource usage.
</p>

<p>
Key performance optimizations include:
</p>
<ul class="org-ul">
<li>Dynamic worker assignment based on cluster sizes and system load</li>
<li>Cluster affinity mechanisms for optimal cache utilization</li>
<li>Adaptive batch processing for query efficiency</li>
</ul>
</div>
</div>

<div id="outline-container-org00d9abc" class="outline-3">
<h3 id="org00d9abc"><span class="section-number-3">10.2.</span> Resource Management</h3>
<div class="outline-text-3" id="text-10-2">
<p>
The parallel search architecture requires careful resource coordination across workers. CHANNI implements a memory-aware scheduling system that optimizes cluster cache utilization across parallel searches. This includes:
</p>

<ul class="org-ul">
<li>Coordinated cache management across search workers</li>
<li>Intelligent prefetching based on query patterns</li>
<li>Efficient result buffer allocation and management</li>
</ul>

<p>
The system dynamically adjusts its parallelization strategy based on:
</p>
<ul class="org-ul">
<li>Available computational resources</li>
<li>Current system load</li>
<li>Query characteristics</li>
<li>Desired recall targets</li>
</ul>
</div>
</div>

<div id="outline-container-orgc65884d" class="outline-3">
<h3 id="orgc65884d"><span class="section-number-3">10.3.</span> Scaling Behavior</h3>
<div class="outline-text-3" id="text-10-3">
<p>
CHANNI's parallel search capability demonstrates near-linear scaling with additional search workers, particularly for large-scale deployments. The cluster-based architecture minimizes cross-worker communication overhead, allowing efficient resource utilization even with high parallelization factors.
</p>

<p>
The effectiveness of parallelization is influenced by several factors:
</p>
<ul class="org-ul">
<li>Cluster size distribution</li>
<li>Network topology and bandwidth</li>
<li>Cache hit rates</li>
<li>Query complexity</li>
</ul>

<p>
Through careful tuning of these parameters, CHANNI maintains high search performance while efficiently utilizing available computational resources across distributed environments.
</p>
</div>
</div>
</div>

<div id="outline-container-org2515bba" class="outline-2">
<h2 id="org2515bba"><span class="section-number-2">11.</span> Scalability Features</h2>
<div class="outline-text-2" id="text-11">
</div>
<div id="outline-container-orgc5e7bc5" class="outline-3">
<h3 id="orgc5e7bc5"><span class="section-number-3">11.1.</span> Horizontal Scaling</h3>
<div class="outline-text-3" id="text-11-1">
<p>
The cluster-based organization naturally supports distributed deployment:
</p>
<ul class="org-ul">
<li>Clusters can be distributed across multiple machines</li>
<li>Top-level HNSW graph serves as an efficient routing mechanism</li>
<li>Independent cluster processing enables true parallelism</li>
<li>Load balancing through intelligent cluster distribution</li>
</ul>
</div>
</div>

<div id="outline-container-org6eb8987" class="outline-3">
<h3 id="org6eb8987"><span class="section-number-3">11.2.</span> Resource Adaptation</h3>
<div class="outline-text-3" id="text-11-2">
<p>
The system adapts to various hardware configurations through:
</p>
<ul class="org-ul">
<li>Configurable cache sizes for different memory profiles</li>
<li>Adjustable cluster sizes based on available resources</li>
<li>Tunable graph parameters for performance optimization</li>
<li>Flexible disk-memory trade-off management</li>
</ul>
</div>
</div>
</div>

<div id="outline-container-orgceb003c" class="outline-2">
<h2 id="orgceb003c"><span class="section-number-2">12.</span> Experimental Results</h2>
<div class="outline-text-2" id="text-12">
</div>
<div id="outline-container-org1b3c320" class="outline-3">
<h3 id="org1b3c320"><span class="section-number-3">12.1.</span> Dataset Characteristics</h3>
<div class="outline-text-3" id="text-12-1">
<p>
[Details about benchmark datasets used for evaluation]
</p>
</div>
</div>

<div id="outline-container-orgf71369f" class="outline-3">
<h3 id="orgf71369f"><span class="section-number-3">12.2.</span> Performance Metrics</h3>
<div class="outline-text-3" id="text-12-2">
</div>
<div id="outline-container-org7a35fed" class="outline-4">
<h4 id="org7a35fed"><span class="section-number-4">12.2.1.</span> Search Quality</h4>
<div class="outline-text-4" id="text-12-2-1">
<ul class="org-ul">
<li>Recall@k measurements across different k values</li>
<li>Precision comparison with pure HNSW and IVF approaches</li>
<li>Quality-speed trade-off analysis</li>
</ul>
</div>
</div>

<div id="outline-container-org86dfab3" class="outline-4">
<h4 id="org86dfab3"><span class="section-number-4">12.2.2.</span> Resource Utilization</h4>
<div class="outline-text-4" id="text-12-2-2">
<ul class="org-ul">
<li>Memory consumption patterns</li>
<li>Disk I/O measurements</li>
<li>CPU utilization analysis</li>
<li>Cache hit rates</li>
</ul>
</div>
</div>

<div id="outline-container-orga653279" class="outline-4">
<h4 id="orga653279"><span class="section-number-4">12.2.3.</span> Scalability Tests</h4>
<div class="outline-text-4" id="text-12-2-3">
<ul class="org-ul">
<li>Performance scaling with dataset size</li>
<li>Distribution efficiency measurements</li>
<li>Parallel processing capabilities</li>
</ul>
</div>
</div>
</div>
</div>

<div id="outline-container-orgb48e0c0" class="outline-2">
<h2 id="orgb48e0c0"><span class="section-number-2">13.</span> Future Research Directions</h2>
<div class="outline-text-2" id="text-13">
</div>
<div id="outline-container-orgb74c9b4" class="outline-3">
<h3 id="orgb74c9b4"><span class="section-number-3">13.1.</span> Theoretical Developments</h3>
<div class="outline-text-3" id="text-13-1">
<ul class="org-ul">
<li>Mathematical modeling of cluster size distributions</li>
<li>Optimization of sampling strategies</li>
<li>Analysis of vector space characteristics impact</li>
<li>Performance bounds theoretical analysis</li>
</ul>
</div>
</div>

<div id="outline-container-org8ac8882" class="outline-3">
<h3 id="org8ac8882"><span class="section-number-3">13.2.</span> Technical Enhancements</h3>
<div class="outline-text-3" id="text-13-2">
<ul class="org-ul">
<li>Dynamic parameter adjustment mechanisms</li>
<li>Advanced caching strategies</li>
<li>Distributed system optimizations</li>
<li>Update handling improvements</li>
</ul>
</div>
</div>

<div id="outline-container-org737a1fb" class="outline-3">
<h3 id="org737a1fb"><span class="section-number-3">13.3.</span> Potential Applications</h3>
<div class="outline-text-3" id="text-13-3">
<ul class="org-ul">
<li>Cross-modal vector search</li>
<li>Dynamic vector collections</li>
<li>Real-time search requirements</li>
<li>Resource-constrained environments</li>
</ul>
</div>
</div>
</div>

<div id="outline-container-org8e8110e" class="outline-2">
<h2 id="org8e8110e"><span class="section-number-2">14.</span> Advantages over Existing Approaches</h2>
<div class="outline-text-2" id="text-14">
<p>
CHANNI demonstrates significant advantages over both pure HNSW and inverted file approaches. Compared to pure HNSW, it achieves dramatically reduced memory requirements while maintaining high search quality. Unlike quantization-based methods, CHANNI preserves vector precision within clusters and eliminates the need for expensive clustering computations through its innovative sampling-based approach.
</p>
</div>
</div>


<div id="outline-container-org0457cff" class="outline-2">
<h2 id="org0457cff"><span class="section-number-2">15.</span> Conclusion</h2>
<div class="outline-text-2" id="text-15">
<p>
CHANNI represents a significant advancement in large-scale vector search technology. Its innovative approach combining efficient sampling-based clustering with multi-level navigation provides a practical solution to the challenges of scale, performance, and resource utilization. The system's flexibility and scalability make it particularly valuable for real-world applications requiring high-performance vector similarity search.
</p>
</div>
</div>

<div id="outline-container-org52b08e3" class="outline-2">
<h2 id="org52b08e3"><span class="section-number-2">16.</span> Acknowledgments</h2>
<div class="outline-text-2" id="text-16">
<p>
[To be added]
</p>
</div>
</div>

<div id="outline-container-org4d24508" class="outline-2">
<h2 id="org4d24508"><span class="section-number-2">17.</span> References</h2>
<div class="outline-text-2" id="text-17">
<p>
[To be added based on relevant literature and technical foundations]
</p>
</div>
</div>

<div id="outline-container-orgee75618" class="outline-2">
<h2 id="orgee75618"><span class="section-number-2">18.</span> <span class="todo TODO">TODO</span> </h2>
<div class="outline-text-2" id="text-18">
<ul class="org-ul">
<li>Out of distribution vectors can be kept in exclusive clusters</li>
<li>Versioning</li>
<li>Metadata filtering</li>
</ul>
</div>
</div>
</div>
<div id="postamble" class="status">
<p class="date">Date: 2024</p>
<p class="author">Author: Cosdata Research</p>
<p class="date">Created: 2024-11-12 Tue 21:15</p>
<p class="validation"><a href="https://validator.w3.org/check?uri=referer">Validate</a></p>
</div>
</body>
</html>

                            <style>
                                /* Additional styles to match roadmap page */
                                .prose h2 {
                                    font-size: 1.875rem;
                                    font-weight: 600;
                                    margin-top: 2rem;
                                    margin-bottom: 1rem;
                                    color: #374151;
                                }
                                .prose h3 {
                                    font-size: 1.5rem;
                                    font-weight: 600;
                                    margin-top: 1.5rem;
                                    margin-bottom: 0.75rem;
                                    color: #374151;
                                }
                                .prose h4 {
                                    font-size: 1.25rem;
                                    font-weight: 600;
                                    margin-top: 1.25rem;
                                    margin-bottom: 0.5rem;
                                    color: #374151;
                                }
                                .prose p {
                                    margin-bottom: 1.25rem;
                                    line-height: 1.75;
                                }
                                .prose ul {
                                    list-style-type: disc;
                                    padding-left: 1.5rem;
                                    margin-bottom: 1.25rem;
                                }
                                .prose li {
                                    margin-bottom: 0.5rem;
                                }
                                .prose a {
                                    color: #2563eb;
                                    text-decoration: none;
                                }
                                .prose a:hover {
                                    text-decoration: underline;
                                }
                                #table-of-contents {
                                    background-color: #f9fafb;
                                    padding: 1.5rem;
                                    border-radius: 0.5rem;
                                    margin-bottom: 2rem;
                                }
                                #table-of-contents h2 {
                                    margin-top: 0;
                                }
                                .outline-2 {
                                    margin-bottom: 2rem;
                                }
                                .section-number-2,
                                .section-number-3,
                                .section-number-4 {
                                    color: #6b7280;
                                    margin-right: 0.5rem;
                                }
                            </style>
                            <!-- Rest of your HTML content -->
                        `,
            }}
          />
        </div>
      </article>
    </div>
  );
}
