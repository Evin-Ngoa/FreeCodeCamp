const colors = [
    '#73A857',
    '#e74c3c',
    '#472E32',
    '#2c3e50',
    '#BDBB99',
    '#27ae60',
    '#f39c12',
    '#16a085',
    '#77B1A9'
];

class RandomQuoteMachine extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    randomIndex: 1,
    color: 1,
    quotes: [
        {
          quote: 'Get it down. Take chances. It may be bad, but its the only way you can do anything really good.',
          author: 'William Faulkner'
        },
        {
          quote: 'The first draft is just you telling yourself the story',
          author: 'Terry Pratchett'
        },
        {
          quote: 'You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it',
          author: 'Octavia E. Butler'
        },
        {
          quote: 'Start before you’re ready.',
          author: 'Steven Pressfield'
        },
        {
          quote: 'You can always edit a bad page. You can’t edit a blank page',
          author: 'Jodi Picoult'
        },
        {
          quote: 'You can’t wait for inspiration. You have to go after it with a club.',
          author: 'Jack London'
        }
      ]
  };
  this.newQuote = this.newQuote.bind(this);
}

newQuote(){              
    this.setState({
        randomIndex: Math.floor(Math.random() * 6),
        color: Math.floor(Math.random() * colors.length)
    });
}

render() {
    const random = this.state.randomIndex;
     const quote = this.state.quotes[random].quote;
     const author = this.state.quotes[random].author;
   const tweeterLink =  'https://twitter.com/intent/tweet?hashtags=randomquotes&text=' + encodeURIComponent('"' + quote + '" ' + author);
return (
    <div>
        <div class="container" style={{backgroundColor: colors[this.state.color]}} id="wrapper">
  <div class="col-md-8 offset-md-2" id="quote-box">
      <div class="40px" style={{ color: colors[this.state.color]}}  id="text">
        <i class="fa fa-quote-left"> </i>
        {quote}
      </div>
       <div  id="author" style={{color: colors[this.state.color]}}>
          - {author}
      </div>
    <div class="button">
      <button style={{backgroundColor: colors[this.state.color]}}  id="new-quote" onClick={this.newQuote}>
New Quote
      </button>
      <a style={{backgroundColor: colors[this.state.color]}} href={tweeterLink} target="_blank" id="tweet-quote" >
         Tweet Quote
          
      </a>
      </div>
  </div>
</div>
    </div>
  );
}
}


ReactDOM.render(<RandomQuoteMachine />, document.getElementById('root'));