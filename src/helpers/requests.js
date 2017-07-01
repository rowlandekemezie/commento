const BASE_URL="http://localhost:3100/api/comments"

async function fetchComments() {
  const response = await fetch(BASE_URL);
  return await response.json();
}

async function postComment(comment) {  console.log(comment, 'WHAT TO POAST')
  const response = await fetch(BASE_URL, {
    body: JSON.stringify(comment),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });

  return await response.json();
}

async function updateComments(id, newUpdate) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    body: JSON.stringify(newUpdate),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT'
  });

  return await response.json();
}

async function deleteComments(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return await response.json();

}

export { fetchComments, updateComments, deleteComments, postComment };
