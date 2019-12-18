import React, { Component } from "react";
import FormHeader from "./FormHeader/FormHeader.js";
import { Form } from "react-final-form";
import styles from "./DocumentForm.scss";
import arrayMutators from "final-form-arrays";
import PropTypes from "prop-types";

export default class DocumentForm extends Component {
  state = {
    page: 0,
    values: this.props.initialValues || {},
    reasonsList: this.props.reasonsList || {},
    disabilityListItem: this.props.reasonsList.disabilityListItem
  };

  static Step = ({ children }) => children;

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];

    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = values => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  render() {
    const children = this.props.children;
    const { disabilityList, page, reasonsList, values, disabilityListItem } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    return (
      <Form
        mutators={{
          ...arrayMutators
        }}
        initialValues={values}
        reasonsList={reasonsList}
        disabilityListItem={disabilityListItem}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, submitting, values }) => (
          <form className={styles.Form} onSubmit={handleSubmit}>
            <FormHeader page={this.state.page} />
            {activePage}
            <div className="buttons">
              {page > 0 && (
                <button type="button" onClick={this.previous}>
                  Wróć
                </button>
              )}
              {isLastPage ? (
                <button type="submit" disabled={submitting}>
                  Utwórz dokument
                </button>
              ) : (
                <button type="submit">Dalej</button>
              )}
            </div>

            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      </Form>
    );
  }
}

DocumentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  children: PropTypes.node,
  reasonsList: PropTypes.array,
  disabilityList: PropTypes.array
};
