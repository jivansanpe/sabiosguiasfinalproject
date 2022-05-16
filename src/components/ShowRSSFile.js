import { useEffect } from 'react';
import rss from "../news.xml";

const xml = `<rss version="2.0">
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
</rss>`;

export default function ShowRSSFile() {
  useEffect(() => {
    /* later within the component */
    // window.open(rss, '_self');

    let blob = new Blob([xml], { type: 'text/xml' });
    let url = URL.createObjectURL(blob);
    window.open(url);
  })
}
