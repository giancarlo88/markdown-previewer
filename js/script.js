

var TextBox = React.createClass({
    getInitialState: function(){
        return {
            text:   "This is a __Markdown previewer__. It takes text"+
                    " and formats it using _Github Flavoured Markdown_. " +"It was really ~~difficult~~ easy to program! "+
                    "**_Enjoy!_**"
        };
    },
    markdown: function(){
        return {__html: marked(this.state.text)}
    },
    handleChange: function(event){
        this.setState({ text: event.target.value });
    },
    render: function(){
        return (
        <div className = "container">
        <h1>Markdown Previewer</h1>
        <textarea className = "textField" value = {this.state.text} onChange = {this.handleChange} />
        <div className = "markdownOutput" dangerouslySetInnerHTML = {this.markdown()}>
        </div>
        </div>        
        )
    }
})


ReactDOM.render (
    <TextBox />,
    document.getElementById('container')
)