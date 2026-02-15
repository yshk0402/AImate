type OperatesXFaqProps = {
  items: {
    question: string;
    answer: string;
  }[];
};

export function OperatesXFaq({ items }: OperatesXFaqProps) {
  return (
    <div className="fx-ox-faq-list">
      {items.map((item) => (
        <details key={item.question} className="fx-ox-faq-item">
          <summary className="fx-ox-faq-summary">
            <span className="fx-ox-faq-question">{item.question}</span>
          </summary>
          <p className="fx-ox-faq-answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
