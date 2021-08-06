import React, { Component } from 'react'

class AddWork extends Component {
  state = { 
    invalidForm: true,
    formData: {
      title: '',
      type: '',
      yearPublished: '',
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
     e.preventDefault();
     this.props.handleAddWork(this.state.formData);
   };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    console.log(e.target.value)
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() { 

    const { title, type, yearPublished } = this.state.formData
    console.log(this.state.formData)
    return ( 
      <>
        <h1> Add Work</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">
              Work's Title (required)
            </label>
            <input
              type="text"
              className="form-control"
              id="titleInput"
              name="title"
              value={title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="typeInput" className="form-label">
              Works Type (required)
            </label>
            <input
              type="text"
              className="form-control"
              id="typeInput"
              name="type"
              value={type}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="yearPublishedInput" className="form-label">Year Work Published</label>
            <input
              type="text"
              className="form-control"
              id="yearPublishedInput"
              name="yearPublished"
              value={yearPublished}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={this.state.invalidForm}
          >
            Add work
          </button>
        </form>
        </>
     );
     
  }
}

export default AddWork;