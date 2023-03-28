export default function References() {
  const references = [
    "https://aws.amazon.com/big-data/what-is-big-data/",
    "https://mixpanel.com/blog/how-self-serve-product-analytics-empowers-teams-to-be-data-informed-insights-from-ziprecruiter-godaddy-ringcentral-and-more/",
    "https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/six-problem-solving-mindsets-for-very-uncertain-times",
    "https://www.oreilly.com/library/view/creating-a-data-driven/9781491916902/ch01.html",
    "https://www.harvardbusiness.org/data-and-intuition-good-decisions-need-both/",
  ];

  return (
    <div className="pt-8">
      <h6 className="pb-4 text-sm text-gray-900">Referensi</h6>
      <ul className="space-y-2 text-justify text-xs text-gray-500">
        {references.map((r) => (
          <li className="hover:text-blue-500">
            <a href={r} target="_blank" rel="noopener noreferrer">
              {r}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
