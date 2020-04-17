import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";

class SQLInterviewQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluids">
          <div className="row">
            <div className="col">
              <div className="card bg-danger">
                <div className="card-body">
                  <h1 className="card-title text-light display-5 ">
                    SQL Interview Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-md-1"></div>
            <div className="col-md-7 ">
              <Link to="/home" className="badge badge-primary mr-1">
                Home >
              </Link>
              <Link
                to="/index_interview_questioins"
                className="badge badge-warning mr-1"
              >
                Interview Questions >
              </Link>
              <QuestionCard
                question={`1. What is SQL?`}
                answer={`SQL stands for Structured Query Language , and it is used to communicate with the Database. This is a standard language used to perform tasks such as retrieval, updation, insertion and deletion of data from a database.

        Standard SQL Commands are Select.`}
              />
              <QuestionCard
                question={`2. What is a Database?`}
                answer={`Database is nothing but an organized form of data for easy access, storing, retrieval and managing of data. This is also known as structured form of data which can be accessed in many ways.

        Example: School Management Database, Bank Management Database.`}
              />
              <QuestionCard
                question={`3. What are tables and Fields?`}
                answer={`A table is a set of data that are organized in a model with Columns and Rows. Columns can be categorized as vertical, and Rows are horizontal. A table has specified number of column called fields but can have any number of rows which is called record.

        Example:.
        
        Table: Employee.
        Field: Emp ID, Emp Name, Date of Birth.
        
        Data: 201456, David, 11/15/1960.`}
              />

              <QuestionCard
                question={`4. What is a primary key?`}
                answer={`A primary key is a combination of fields which uniquely specify a row. This is a special kind of unique key, and it has implicit NOT NULL constraint. It means, Primary key values cannot be NULL.`}
              />
              <QuestionCard
                question={`5. What is a unique key?`}
                answer={`A Unique key constraint uniquely identified each record in the database. This provides uniqueness for the column or set of columns.

        A Primary key constraint has automatic unique constraint defined on it. But not, in the case of Unique Key.
        
        There can be many unique constraint defined per table, but only one Primary key constraint defined per table.`}
              />
              <QuestionCard
                question={`6. What is a foreign key?`}
                answer={`A foreign key is one table which can be related to the primary key of another table. Relationship needs to be created between two tables by referencing foreign key with the primary key of another table.`}
              />
              <QuestionCard
                question={`7. What is a join?`}
                answer={`This is a keyword used to query data from more tables based on the relationship between the fields of the tables. Keys play a major role when JOINs are used.`}
              />
              <QuestionCard
                question={`8. What is normalization?`}
                answer={`Normalization is the process of minimizing redundancy and dependency by organizing fields and table of a database. The main aim of Normalization is to add, delete or modify field that can be made in a single table.`}
              />

              <QuestionCard
                question={`9. What is Denormalization.`}
                answer={`DeNormalization is a technique used to access the data from higher to lower normal forms of database. It is also process of introducing redundancy into a table by incorporating data from the related tables.`}
              />
              <QuestionCard
                question={`10. What is a View?`}
                answer={`A view is a virtual table which consists of a subset of data contained in a table. Views are not virtually present, and it takes less space to store. View can have data of one or more tables combined, and it is depending on the relationship.`}
              />
            </div>
            <div className="col-md-4 mt-5">
              <h5 className="mb-4">Other Learning Resources</h5>
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />

              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SQLInterviewQuestions;