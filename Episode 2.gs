function myFunction() {
  const username = 'root';
  const password = 'test1234';
  const url = 'jdbc:google:mysql://axial-theater-304520:us-east1:apps-script/weiss_terminal'
  const conn = Jdbc.getCloudSqlConnection(url, username, password);

  const sql1 = `INSERT INTO flights (flight_id, departure_location, arrival_location, departure_time, arrival_time, distance, airline) VALUES ("abc123", "Albuquerque, NM", "Los Angeles, CA", "2021-07-08 07:04:00", "2021-07-08 07:59:00", 677, "Southwest");`;
  const sql2 = `SELECT * FROM flights`;
  const sql3 = `UPDATE flights SET airline='Delta' WHERE flight_id='abc123';`;

  let statement = conn.createStatement();


  // General Statement
  let result = statement.execute(sql1);
  Logger.log(result); // Returns true if statement returned a Results Set, false else


  // Query Statement (must be non-data manipulation statements (SELECT, SHOW, ...))
  let query = statement.executeQuery(sql2);
  Logger.log(query); // Returns Results Set


  // Update Statement (must be data manipulation statements (INSERT, UPDATE, DELETE, ...) or statements that return nothing)
  let update = statement.executeUpdate(sql3);
  Logger.log(update); // Returns number of rows that were updated

  statement.close();
  conn.close();
}
