export default function ShowRSS(props) {
  return XMLDocument(
    <rss version="2.0">
      <channel>
        <title>Test</title>
        <link>test</link>
        <description>test</description>
        <item>
          <title>test</title>
          <link>test</link>
          <guid>test</guid>
          <pubDate>Tues, 23 Aug 2016 10:00:00 CDT</pubDate>
          <description>test</description>
        </item>
      </channel>
    </rss>
  );
}
  // (
  //   <>
  //     {/* // <div >
  //   //   < pre > */}
  //     {
  //       statusCode: 200,
  //     contentType: "text/xml",
  //     body: `<?xml version="1.0" encoding="utf-8"?>
  //     <rss version="2.0">
  //       <channel>
  //         <title>Test</title>
  //         <link>test</link>
  //         <description>test</description>
  //         <item>
  //           <title>test</title>
  //           <link>test</link>
  //           <guid>test</guid>
  //           <pubDate>Tues, 23 Aug 2016 10:00:00 CDT</pubDate>
  //           <description>test</description>
  //         </item>
  //       </channel>
  //     </rss>
  //     `
  //       }
  //   </>
  //   //   </pre>
  //   // </div>
//   );
// }