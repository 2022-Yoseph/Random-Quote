class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    const quotes = [
      { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
      { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
      { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
      { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" }
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    this.state = {
      quotes,
      currentQuote: quotes[randomIndex]
    };
  }

  setRandomQuote = () => {
    const { quotes } = this.state;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    this.setState({ currentQuote: quotes[randomIndex] });
  }

  render() {
    const { text, author } = this.state.currentQuote;

    return (
      <div id="quote-box">
        <p id="text">"{text}"</p>
        <p id="author">— {author}</p>
        <button
          id="new-quote"
          onClick={this.setRandomQuote}
        >
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${text}" — ${author}`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    );
  }
}

ReactDOM.render(<QuoteMachine />, document.getElementById('root'));
