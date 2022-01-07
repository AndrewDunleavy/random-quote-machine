function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("")

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json()
            setQuotes(data)
            let randomIndex = Math.floor(Math.random() * data.length)
            setRandomQuote(data[randomIndex])
        }
        fetchData()
    }, [])
        const newQuote = () => {
            let randomIndex = Math.floor(Math.random() * quotes.length)
            setRandomQuote(quotes[randomIndex])
        }

return <div className = "container pt-5" id ="quote-box">
        <div className = "jumbotron">
            <div className = "card">
                <div className = "card-header" class = "text-center">Random Quote Machine</div>
                <div className = "card-body" id = "text">
                   
                        <h2>{randomQuote.text}</h2>
                    
                </div>
        </div>
       <button id= "new-quote" onClick={newQuote}class = "position : fixed">New Quote</button>
        <div className = "float-right" id ="author">{randomQuote.author}</div>
        <div id = "share">
            <a href = {"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= " +
      encodeURIComponent('"' + randomQuote.text + '" ' + randomQuote.author )}
      target = "_blank" id = "tweet-quote">
      <i className = "btn"></i>
      Tweet this
            </a>
            </div>
        </div>
</div>



}

ReactDOM.render(<App/>, document.getElementById("app"))