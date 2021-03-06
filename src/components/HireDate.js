import React from "react"

class HireDate extends React.Component {
    state = {
        from: "",
        to: "",
        message: "",
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const message = this.props.hireDevelopersProps(this.state.from, this.state.to)
        this.setState({
            message: message,
        })
    }
    render() {
        return (
            <div className="hire-dates">
                <form onSubmit={this.handleSubmit} className="hire-form">
                    <div>
                        <label className="outside-label">From: </label>
                        <input type="date" name="from" onChange={this.onChange} />
                    </div>
                    <div>
                        <label className="outside-label">To: </label>
                        <input type="date" name="to" onChange={this.onChange} />
                    </div>
                    <button className="btn btn-success">Hire</button>
                </form>
                <span className="outside-label">{this.state.message}</span>
            </div>
        )
    }
}

export default HireDate