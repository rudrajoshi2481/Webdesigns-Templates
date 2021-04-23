import React from "react";

function Square({size}) {

  const [svgSize,setSvgSize] = React.useState(size ? size : 68)

  return (
    <svg width={svgSize} height={svgSize} viewBox="0 0 68 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.57811 6.33776L8.62233 1.99999" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M4.50351 13.2549L15.2203 2.53805" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M4.96938 20.2442L23.1415 2.07207" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M4.50346 28.1654L30.5968 2.07211" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M4.50343 34.6887L37.12 2.07209" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M4.50347 41.2121L44.5753 2.0721" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M3.57157 48.6672L51.0986 2.07207" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M4.50342 55.1906L58.5539 2.07214" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M8.23105 57.9863L64.1453 3.0039" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M15.6863 57.9863L64.1453 9.52732" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M22.2097 57.9863L64.1453 15.1187" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M29.1989 57.9863L64.6114 21.642" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M36.1882 57.9863L64.1453 29.0973" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M41.7796 57.9863L64.1453 34.6887" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M47.3712 57.9863L65.0772 39.8142" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M52.0305 57.9863L65.0772 44.0078" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
<path d="M57.1561 57.5203L64.1453 50.5311" stroke="#848484" stroke-opacity="0.5" stroke-width="3"/>
</svg>

  );
}

export default Square;