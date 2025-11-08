/*implementați un formular care face o cerere 
pentru o resursă un anumit id și
afișează rezultatul.*/

const apiUrl = 'http://localhost:8000/api/';

async function get(url) {
  return (await axios.get(url)).data;
}

async function post(url, body) {
  return (
    await axios.post(url, JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    })
  ).data;
}

async function loadTable() {
  let data = await get(apiUrl + 'getList');
  let tableDiv = document.getElementById('tableData');

  if (!data || !tableDiv) return;

  let myTable = document.getElementById('myTable');
  if (myTable) myTable.remove(); 

  let myHtmlCode = [];
  myHtmlCode.push("<table id='myTable' border='1' cellpadding='6'>");
  myHtmlCode.push('<thead>');
  myHtmlCode.push('<tr> <th hidden>Id</th> <th>Name</th> <th>Age</th> </tr>');
  myHtmlCode.push('</thead>');
  myHtmlCode.push('<tbody>');

  for (let item of data) {
    myHtmlCode.push(
      `<tr>
        <td hidden>${item.id ?? ''}</td>
        <td>${item.name ?? ''}</td>
        <td>${item.age ?? ''}</td>
      </tr>`
    );
  }

  myHtmlCode.push('</tbody>');
  myHtmlCode.push('</table>');

  tableDiv.innerHTML = myHtmlCode.join('');
}

async function sendData() {
  let name = document.getElementById('inputName').value.trim();
  let age = document.getElementById('inputAge').value;

  if (!name || !age) {
    alert('You must enter a name and an age');
    return;
  }

  await post(apiUrl + 'postList', { name: name, age: Number(age) });
  await loadTable();
}

async function getById() {
  const idInput = document.getElementById('inputId');
  const resultDiv = document.getElementById('resultById');
  const raw = idInput.value;

  resultDiv.innerHTML = ''; 

  const id = Number(raw);
  if (!raw || Number.isNaN(id) || id <= 0) {
    resultDiv.innerHTML = `<p style="color:#b00;">Introduceti un ID valid (numar pozitiv).</p>`;
    return;
  }

  try {
    const item = await get(apiUrl + 'getById/' + id);

    if (item && typeof item === 'object') {
      resultDiv.innerHTML = `
        <table border="1" cellpadding="6">
          <thead><tr><th>Id</th><th>Name</th><th>Age</th></tr></thead>
          <tbody><tr><td>${item.id ?? ''}</td><td>${item.name ?? ''}</td><td>${item.age ?? ''}</td></tr></tbody>
        </table>
      `;
    } else {
      
      resultDiv.innerHTML = `<pre>${JSON.stringify(item, null, 2)}</pre>`;
    }
  } catch (err) {
   
    if (err.response && err.response.status === 404) {
      resultDiv.innerHTML = `<p style="color:#b00;">Resursa cu ID ${id} nu a fost gasita.</p>`;
    } else {
      resultDiv.innerHTML = `<p style="color:#b00;">A aparut o eroare. Detalii în consola.</p>`;
    }
    console.error(err);
  }
}

loadTable();
