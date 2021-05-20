import React, { useEffect, useState, useMemo } from "react";
import TableHeader from "../../components/DataTable";

const DataTable = () => {

  const headers = [
    { name: 'No#', field: 'id', sortable: false },
    { name: 'Name', field: 'name', sortable: true },
    { name: 'Email', field: 'email', sortable: true },
    { name: 'Comment', field: 'body', sortable: false }
  ]

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(json => {
          setComments(json);
        });
    };
    getData();

  }, []);

  const commentsData = useMemo(() => {
    let computedComments = comments;
    return computedComments
  }, [comments]);

  return (
    <table className="table table-striped">
      <TableHeader headers={headers} />
      <tbody>
        {commentsData.map(comment => (
          <tr key={comment.id}>
            <th scope="row" key={comment.id}>
              {comment.id}
            </th>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
