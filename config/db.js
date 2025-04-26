// In-memory database for this example
// In a real app, replace with MongoDB, PostgreSQL, etc.

let users = [
    {
      "id": 1,
      "Name": "Saurabh Pandey",
      "age": 25,
      "email": "saurabh@gmail.com",
      "password": "saurabh"
    }, {
      "id": 2,
      "Name": "Octavia Camsey",
      "email": "ocamsey1@twitter.com",
      "password": "PRRK{@so<2"
    }, {
      "id": 3,
      "Name": "Augustus Ewin",
      "email": "aewin2@posterous.com",
      "password": "W~|RnBNfS6"
    }, {
      "id": 4,
      "Name": "Rhea Frankish",
      "email": "rfrankish3@abc.net.au",
      "password": "XaZYKyC.|+"
    }, {
      "id": 5,
      "Name": "Gisela Burren",
      "email": "gburren4@cnbc.com",
      "password": "D6`3+7ndUi"
    }, {
      "id": 6,
      "Name": "Auroora Mardell",
      "email": "amardell5@europa.eu",
      "password": "I#j_~C?}"
    }, {
      "id": 7,
      "Name": "Anestassia Caldera",
      "email": "acaldera6@yellowpages.com",
      "password": "G32dVHGGl"
    }, {
      "id": 8,
      "Name": "Lorry Cummins",
      "email": "lcummins7@smugmug.com",
      "password": "DRWT'"
    }, {
      "id": 9,
      "Name": "Howard Giffkins",
      "email": "hgiffkins8@purevolume.com",
      "password": "PATL!"
    }, {
      "id": 10,
      "Name": "Maritsa Clifton",
      "email": "mclifton9@epa.gov",
      "password": "Y+rMW"
    }
  ];
  
  const generateId = () => {
    const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
    return maxId + 1;
  };
  
  module.exports = {
    users,
    generateId
  };